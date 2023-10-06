import { IEvent } from './Define';
export class Event extends IEvent {
    public constructor() {
        super();
    }

    public static dispatch<Ctor extends Event>(this: new (...args: any[]) => Ctor, ...args: any[]) {
        const instance = new this(...args);
        instance.doImp();
    }

    public doImp() {
        console.log(this.constructor.name);
    }
}
