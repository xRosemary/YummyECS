import { IEvent } from './Define';
export declare class Event extends IEvent {
    constructor();
    static dispatch<Ctor extends Event>(this: new (...args: any[]) => Ctor, ...args: any[]): void;
    doImp(): any;
}
