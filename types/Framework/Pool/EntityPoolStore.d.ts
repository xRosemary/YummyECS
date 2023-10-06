import * as UE from 'ue';
import { Singleton } from '../../Common';
export declare class EntityPoolStore extends Singleton {
    /** 已被回收的实体, key为构造器, value为id */
    reusableEntities: Map<Function, string[]>;
    /** 处于激活状态的实体, key为构造器, value为id */
    activeEntities: Map<Function, string[]>;
    /** 记录所有实体的map, key为string, value为实体 */
    entitiesMap: Map<string, UE.Actor>;
    readonly capability: number;
}
