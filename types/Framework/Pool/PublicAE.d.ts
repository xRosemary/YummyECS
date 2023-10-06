import * as UE from 'ue';
import { Action } from '../AE';
export declare class CreateActorAction extends Action {
    ctor: Function;
    transform: UE.Transform;
    constructor(ctor: Function, transform?: UE.Transform);
}
export declare class DestroyActorAction extends Action {
    actor: UE.Actor;
    constructor(actor: UE.Actor);
}
export declare class DestroyAllActorAction extends Action {
    constructor();
}
export declare class CreateSystemAction extends Action {
    ctor: {
        new (...args: any[]): {};
    };
    constructor(ctor: {
        new (...args: any[]): {};
    });
}
export declare class DestroySystemAction extends Action {
    ctor: Function;
    constructor(ctor: Function);
}
