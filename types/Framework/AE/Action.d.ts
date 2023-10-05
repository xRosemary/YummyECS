import { IAction } from './Define';
export declare class Action extends IAction {
    constructor(...args: any[]);
    static do<T = void>(...args: any[]): T;
    doImp<T>(): T;
}
