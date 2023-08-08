import * as UE from 'ue';

import { Entity } from '../ECS';
import { assert, UUID } from '..';
import { System } from '../ECS/System';
import { World } from '../World';

export class Pool {
    /** 已被回收的实体, key为构造器, value为id */
    private _reusableEntities = new Map<Function, string[]>();
    /** 处于激活状态的实体, key为构造器, value为id */
    private _activeEntities = new Map<Function, string[]>();
    /** 记录所有实体的map, key为string, value为实体 */
    private _entitiesMap = new Map<string, Entity>();
    /** 记录所有的系统，每种系统在列表中唯一 */
    private _systems = new Array<System>();
    /** 所处于的World */
    private _world!: World;

    constructor(world: World) {
        this._world = world;
        this._reusableEntities = new Map<Function, string[]>();
        this._activeEntities = new Map<Function, string[]>();
        this._entitiesMap = new Map<string, Entity>();
        this._systems = new Array<System>();
    }

    public get world(): World {
        return this._world;
    }

    public get systems(): System[] {
        return this._systems;
    }

    public createEntityByCtor<T extends Entity>(ctor: new (...args: any[]) => T): T {
        let reusableList = this._reusableEntities.get(ctor);

        if (reusableList === undefined || reusableList.length === 0) {
            // 没有可复用的Entity则新创建一个
            let world = World.getInstance().getWorld();
            let entity = world.SpawnActor(
                (ctor as any).StaticClass(),
                new UE.Transform(),
                UE.ESpawnActorCollisionHandlingMethod.Undefined,
                null,
                null
            ) as unknown as T;
            entity.uuid = UUID.randomUUID();
            this._entitiesMap.set(entity.uuid, entity);
            let activeList = this._activeEntities.get(ctor);
            if (activeList === undefined) {
                this._activeEntities.set(ctor, [entity.uuid]);
            } else {
                activeList.push(entity.uuid);
            }
            return entity;
        } else {
            // 有可复用的Entity则取出一个
            let uuid = reusableList.shift();
            let entity = this._entitiesMap.get(uuid!);
            assert(entity !== undefined, 'An error occurred in mapping the entity to the ID');

            let activeList = this._activeEntities.get(ctor);
            if (activeList === undefined) {
                this._activeEntities.set(ctor, [entity.uuid]);
            } else {
                activeList.push(entity.uuid);
            }
            return entity as T;
        }

        // TODO Dispatch EntityCreated Action
    }

    /**
     * 回收一个实体
     * @param {Entity} entity
     */
    public recycleEntity(entity: Entity) {
        if (!this.hasEntity(entity)) {
            console.warn('Fail to recycle Entity');
            return;
        }

        // TODO 设置Hidden和Active

        let reusableList = this._reusableEntities.get(entity.constructor);
        let activeList = this._activeEntities.get(entity.constructor);

        // 更新激活的实体列表
        if (activeList) {
            const filteredArray = activeList.filter((item) => item !== entity.uuid);
            this._activeEntities.set(entity.constructor, filteredArray);
        }

        // 更新已被回收的实体列表
        if (reusableList) {
            reusableList.push(entity.uuid);
        } else {
            this._reusableEntities.set(entity.constructor, [entity.uuid]);
        }
    }

    /**
     * Destroy an entity
     * @param {Entity} entity
     */
    public destroyEntity(entity: Entity) {
        let reusableList = this._reusableEntities.get(entity.constructor);
        let activeList = this._activeEntities.get(entity.constructor);

        // 更新已被回收的实体列表
        if (reusableList) {
            const filteredArray = reusableList.filter((item) => item !== entity.uuid);
            this._reusableEntities.set(entity.constructor, filteredArray);
        }

        // 更新激活的实体列表
        if (activeList) {
            const filteredArray = activeList.filter((item) => item !== entity.uuid);
            this._activeEntities.set(entity.constructor, filteredArray);
        }

        this._entitiesMap.delete(entity.uuid);

        // TODO Dispatch Entity Destroyed Action
    }

    /**
     * 销毁所有实体
     */
    public destroyAllEntities() {
        this._entitiesMap.forEach((v, k) => {
            this.destroyEntity(v);
        });
    }

    /**
     * Check if pool has this entity
     *
     * @param {Entity} entity
     * @returns {boolean}
     */
    public hasEntity(entity: Entity): boolean {
        return this._entitiesMap.has(entity.uuid);
    }

    public getEntityByUUID(uuid: string): Entity | undefined {
        return this._entitiesMap.get(uuid);
    }

    public getEntitiesByCtor(ctor: Function): Entity[] {
        let uuids = this._activeEntities.get(ctor);
        if (uuids === undefined) return [];

        return uuids.map((id) => this.getEntityByUUID(id)).filter((entity) => entity !== undefined) as Entity[];
    }

    /**
     * Create System
     */
    public createSystemByCtor<T extends System>(ctor: new (...args: any[]) => T): T {
        for (let v of this._systems) {
            if (v.constructor === ctor) {
                console.warn(`${ctor.name} has been created, you should not create it again`);
                return v as T;
            }
        }

        let system = new ctor();
        this._systems.push(system);
        return system;
    }

    public destroySystem(system: System) {
        this._systems = this._systems.filter((s) => s !== system);
        (system as any).entities = [];
    }
}
