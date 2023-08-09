export declare class Action {
    static do<Ctor extends Action>(this: new (...args: any[]) => Ctor, ...args: any[]): any;
    doImp(): any;
}
