export class Event {
    public constructor() {}

    public static dispatch<Ctor extends Event>(this: new (...args: any[]) => Ctor, ...args: any[]) {
        const instance = new this(...args);
        instance.doImp();
    }

    public doImp() {
        console.log(this.constructor.name);
    }
}
