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
export declare class BindUMG extends Action {
    name: string;
    widget: string;
    action: string;
    targetCtor: Function;
    propertyKey: string;
    constructor(name: string, widget: string, action: string, targetCtor: Function, propertyKey: string);
}
