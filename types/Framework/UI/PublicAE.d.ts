import * as UE from 'ue';
import { Action } from '../AE';
export declare class OpenUMG extends Action {
    name: string;
    zOrder: number;
    constructor(name: string, zOrder?: number);
}
export declare class CloseUMG extends Action {
    widget: UE.UserWidget;
    constructor(widget: UE.UserWidget);
}
