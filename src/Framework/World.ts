import * as UE from 'ue';

import { Pool, Singleton } from './Common';
import './ObjExtension';

export class World extends Singleton {
    constructor() {
        super();
    }

    public getWorld(): UE.World {
        return this._gameInstance.GetWorld();
    }

    private _gameInstance!: UE.GameInstance;
    private _pool!: Pool;

    public get gameInstance(): UE.GameInstance {
        return this._gameInstance;
    }

    public get pool(): Pool {
        return this._pool;
    }

    public init(instance: UE.GameInstance) {
        console.log('The world is being initialized');
        this._pool = new Pool(World.getInstance());
        this._gameInstance = instance;
        if (!this._pool || !this._gameInstance) {
            console.error('World initialization failed');
        }
        console.log('World initialization successful');
    }
}
