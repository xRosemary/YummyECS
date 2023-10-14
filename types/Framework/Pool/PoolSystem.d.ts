import * as UE from 'ue';
import { CreateActorAction, CreateSystemAction, DestroyActorAction, DestroyAllActorAction, DestroySystemAction } from './PublicAE';
import { System } from '../ECS';
export declare class PoolSystem extends System {
    protected onCreateActorAction(action: CreateActorAction): UE.Actor;
    protected onDestroyActorAction(action: DestroyActorAction): void;
    protected onDestroyAllActorAction(_: DestroyAllActorAction): void;
    protected onCreateSystemAction(action: CreateSystemAction): System;
    protected onDestroySystemAction(action: DestroySystemAction): void;
    /**
     * 将actor从激活的列表中删除
     */
    private deleteActorFromActiveList;
    /**
     * 回收一个实体
     * @param {actor} actor
     */
    private recycleActorImpl;
    /**
     * 销毁一个实体
     * @param {actor} actor
     */
    private destroyActorImpl;
    /**
     * 检查实体池是否有这个实体
     *
     * @param {actor} actor
     * @returns {boolean}
     */
    private hasActor;
    private pushToMapValueList;
}
