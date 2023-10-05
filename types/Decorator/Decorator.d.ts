declare type ctor = {
    new (...args: any[]): {};
};
/**
 * 注册组件给对应的系统
 */
export declare function register<T>(componentCtor: ctor | ctor[]): <T_1 extends ctor>(constructor: T_1) => void;
/**
 * 监听事件
 * @param ctor 需要监听的事件的构造器
 */
export declare function listen<T extends ctor>(ctor: T): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export {};
