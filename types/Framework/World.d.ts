import * as UE from 'ue';
import './ObjExtension';
import { Singleton } from '../Common';
import { System } from './ECS';
export declare class World extends Singleton {
    private _gameInstance;
    private _pool;
    getWorld(): UE.World;
    getSystemPool(): System;
    get gameInstance(): UE.GameInstance;
    init(instance: UE.GameInstance, poolSystem: System): void;
}
