export declare class Action {
    constructor(...args: any[]);
    static do<T = void>(...args: any[]): T;
    doImp<T>(): T;
}
