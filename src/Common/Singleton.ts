export class Singleton {
    public static getInstance<T extends Singleton>(this: new () => T): T {
        let ctor = this as any;
        if (!ctor.instance) {
            ctor.instance = new this();
        }
        return ctor.instance;
    }
}
