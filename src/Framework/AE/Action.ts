import { Dispatcher } from './Dispatcher';

export class Action {
    constructor(...args: any[]) {}

    public static do<T = void>(...args: any[]): T {
        const instance = new this(...args);
        return instance.doImp<T>();
    }

    public doImp<T>(): T {
        console.log(`Action: ${this.constructor.name} doImp`);
        return Dispatcher.getInstance().dispatch(this);
    }
}
