export declare class Event {
    constructor();
    static dispatch<Ctor extends Event>(this: new (...args: any[]) => Ctor, ...args: any[]): void;
    doImp(): void;
}
