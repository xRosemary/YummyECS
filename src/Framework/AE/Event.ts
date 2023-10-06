import { IEvent } from './Define';
import { Dispatcher } from './Dispatcher';

export class Event extends IEvent {
    public constructor() {
        super();
    }

    public static dispatch<Ctor extends Event>(this: new (...args: any[]) => Ctor, ...args: any[]) {
        const instance = new this(...args);
        instance.doImp();
    }

    public doImp() {
        console.log(`Event: ${this.constructor.name} doImp`);
        return Dispatcher.getInstance().dispatch(this);
    }
}
