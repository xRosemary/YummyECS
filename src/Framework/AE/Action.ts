import { Dispatcher } from './Dispatcher';

export class Action {
    public static do<Ctor extends Action>(this: new (...args: any[]) => Ctor, ...args: any[]) {
        const instance = new this(...args);
        instance.doImp();
    }

    public doImp() {
        console.log(`Action: ${this.constructor.name} doImp`);
        Dispatcher.getInstance().dispatch(this);
    }
}
