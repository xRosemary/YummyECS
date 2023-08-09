export declare class Singleton {
    static getInstance<T extends Singleton>(this: new () => T): T;
}
