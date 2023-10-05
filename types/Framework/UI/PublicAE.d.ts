import * as UE from 'ue';
import { Action } from '../AE';
export declare class OpenUMG extends Action {
    ctor: Function;
    zOrder: number;
    constructor(ctor: Function, zOrder?: number);
}
export declare class CloseUMG extends Action {
    widget: UE.UserWidget;
    constructor(widget: UE.UserWidget);
}
