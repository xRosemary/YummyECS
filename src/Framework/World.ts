import * as UE from 'ue';

import './ObjExtension';
import { Singleton } from '../Common';
import { System } from './ECS';

export class World extends Singleton {
    private _gameInstance!: UE.GameInstance;
    private _pool!: System;

    public getWorld(): UE.World {
        return this._gameInstance.GetWorld();
    }

    public getSystemPool(): System {
        return this._pool;
    }

    public get gameInstance(): UE.GameInstance {
        return this._gameInstance;
    }

    public init(instance: UE.GameInstance, poolSystem: System) {
        console.log('The world is being initialized');
        this._pool = poolSystem;
        this._gameInstance = instance;
        if (!this._pool || !this._gameInstance) {
            console.error('World initialization failed');
        }
        console.log('World initialization successful');
    }
}
