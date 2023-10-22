import * as UE from 'ue';

import {
    CreateActorAction,
    CreateSystemAction,
    DestroyActorAction,
    DestroyAllActorAction,
    DestroySystemAction,
} from './PublicAE';
import { EntityPoolStore } from './EntityPoolStore';
import { SystemPoolStore } from './SystemPoolStore';
import { System } from '../ECS';
import { listen } from '../../Decorator';
import { GAME_INSTANCE, assert } from '../../Common';

export class PoolSystem extends System {
    @listen(CreateActorAction)
    protected onCreateActorAction(action: CreateActorAction): UE.Actor {
        assert(GAME_INSTANCE !== undefined, 'GAME_INSTANCE is undefined');

        let store = EntityPoolStore.getInstance();
        let reusableList = store.reusableEntities.get(action.ctor);
        if (reusableList === undefined || reusableList.length === 0) {
            // 没有可复用的actor则新创建一个
            let world = GAME_INSTANCE.GetWorld();
            let actor = world.SpawnActor(
                (action.ctor as any).StaticClass(),
                action.transform,
                UE.ESpawnActorCollisionHandlingMethod.Undefined,
                null,
                null
            );

            this.log(`A new Actor has been created: ${actor.GetName()}`);

            let guid = actor.ActorGuid.ToString();

            store.entitiesMap.set(guid, actor);
            this.pushToMapValueList(store.activeEntities, action.ctor, guid); // 加入已激活的实体列表
            return actor;
        }

        // 有可复用的actor则取出一个
        let guid = reusableList.shift();
        let actor = store.entitiesMap.get(guid!);
        assert(guid !== undefined && actor !== undefined, 'An error occurred in mapping the actor to the ID');
        actor.SetActorHiddenInGame(false);
        this.pushToMapValueList(store.activeEntities, action.ctor, guid); // 加入已激活的实体列表

        return actor;
    }

    @listen(DestroyActorAction)
    protected onDestroyActorAction(action: DestroyActorAction) {
        if (!this.hasActor(action.actor)) {
            this.warn(`Fail to destroy actor, ${action.actor.GetName()} does not exist in the entity pool`);
            return;
        }
        this.deleteActorFromActiveList(action.actor);
        this.recycleActorImpl(action.actor);
    }

    @listen(DestroyAllActorAction)
    protected onDestroyAllActorAction(_: DestroyAllActorAction) {
        let store = EntityPoolStore.getInstance();
        store.entitiesMap.forEach((v, k) => {
            this.destroyActorImpl(v);
        });
    }

    @listen(CreateSystemAction)
    protected onCreateSystemAction(action: CreateSystemAction): System {
        let systems = SystemPoolStore.getInstance().systems;
        for (let v of systems) {
            if (v.constructor === action.ctor) {
                this.warn(`${action.ctor.name} has been created, you should not create it again`);
                return v;
            }
        }

        let system = new action.ctor() as System;
        systems.push(system);
        return system;
    }

    @listen(DestroySystemAction)
    protected onDestroySystemAction(action: DestroySystemAction) {
        let store = SystemPoolStore.getInstance();
        store.systems = store.systems.filter((s) => s.constructor !== action.ctor);
    }

    /**
     * 将actor从激活的列表中删除
     */
    private deleteActorFromActiveList(actor: UE.Actor) {
        let guid = actor.ActorGuid.ToString();
        let store = EntityPoolStore.getInstance();
        let activeList = store.activeEntities.get(actor.constructor);
        if (activeList === undefined) {
            this.warn(`There is a mapping problem with the entity pool. id = ${guid}`);
            return;
        }

        // 更新激活的实体列表
        const filteredArray = activeList.filter((item) => item !== guid);
        if (filteredArray.length <= 0) {
            store.activeEntities.delete(actor.constructor);
        } else {
            store.activeEntities.set(actor.constructor, filteredArray);
        }
    }

    /**
     * 回收一个实体
     * @param {actor} actor
     */
    private recycleActorImpl(actor: UE.Actor) {
        actor.SetActorHiddenInGame(true); // 设置隐藏
        let store = EntityPoolStore.getInstance();
        let guid = actor.ActorGuid.ToString();

        // 更新已被回收的实体列表
        let reusedList = store.reusableEntities.get(actor.constructor);
        if (reusedList === undefined) {
            store.reusableEntities.set(actor.constructor, [guid]);
        } else {
            reusedList.unshift(guid);
        }

        this.log(`Recycle Actor Impl execute, ${actor.GetName()} has been recycled`);

        if (reusedList && reusedList.length > store.capability) {
            // 在虚幻中删除该Actor
            let ableToDelete = reusedList.pop();
            this.destroyActorImpl(store.entitiesMap.get(ableToDelete!)!);
        }
    }

    /**
     * 销毁一个实体
     * @param {actor} actor
     */
    private destroyActorImpl(actor: UE.Actor) {
        let store = EntityPoolStore.getInstance();
        let reusableList = store.reusableEntities.get(actor.constructor);
        let activeList = store.activeEntities.get(actor.constructor);
        let guid = actor.ActorGuid.ToString();
        // 更新已被回收的实体列表
        if (reusableList) {
            const filteredArray = reusableList.filter((item) => item !== guid);
            store.reusableEntities.set(actor.constructor, filteredArray);
        }

        // 更新激活的实体列表
        if (activeList) {
            const filteredArray = activeList.filter((item) => item !== guid);
            store.activeEntities.set(actor.constructor, filteredArray);
        }

        store.entitiesMap.delete(guid);

        // 销毁在UE中销毁
        actor.Destroy();
        this.log(`Destroy Actor Impl execute, ${actor.GetName()} has been destroyed`);
    }

    /**
     * 检查实体池是否有这个实体
     *
     * @param {actor} actor
     * @returns {boolean}
     */
    private hasActor(actor: UE.Actor): boolean {
        return EntityPoolStore.getInstance().entitiesMap.has(actor.ActorGuid.ToString());
    }

    private pushToMapValueList(map: Map<Function, string[]>, key: Function, val: string) {
        let valueList = map.get(key);
        if (valueList === undefined) {
            map.set(key, [val]);
        } else {
            valueList.push(val);
        }
    }
}
