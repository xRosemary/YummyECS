import * as UE from 'ue';

import './ObjExtension';
import { PoolSystem } from './Pool';
import { Singleton } from '../Common';
export class World extends Singleton {
    private _gameInstance!: UE.GameInstance;
    private _pool!: PoolSystem;

    public getWorld(): UE.World {
        return this._gameInstance.GetWorld();
    }

    public get gameInstance(): UE.GameInstance {
        return this._gameInstance;
    }

    public init(instance: UE.GameInstance) {
        console.log('The world is being initialized');
        this._pool = new PoolSystem();
        this._gameInstance = instance;
        if (!this._pool || !this._gameInstance) {
            console.error('World initialization failed');
        }
        console.log('World initialization successful');
    }
}
