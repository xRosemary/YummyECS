import * as UE from 'ue';
import { Singleton } from '../../Common';

const DEFAULT_CAPABILITY = 20;

export class EntityPoolStore extends Singleton {
    /** 已被回收的实体, key为构造器, value为id */
    public reusableEntities = new Map<Function, string[]>();
    /** 处于激活状态的实体, key为构造器, value为id */
    public activeEntities = new Map<Function, string[]>();
    /** 记录所有实体的map, key为string, value为实体 */
    public entitiesMap = new Map<string, UE.Actor>();

    public readonly capability: number = DEFAULT_CAPABILITY;
}
