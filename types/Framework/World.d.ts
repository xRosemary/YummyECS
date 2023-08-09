import * as UE from 'ue';
import './ObjExtension';
import { Singleton } from '../Common';
export declare class World extends Singleton {
    private _gameInstance;
    private _pool;
    getWorld(): UE.World;
    get gameInstance(): UE.GameInstance;
    init(instance: UE.GameInstance): void;
}
