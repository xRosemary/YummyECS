import { Dispatcher } from '../Framework';

type ctor = { new (...args: any[]): {} };
export function register<T>(tag: string) {
    return function <T extends ctor>(constructor: T) {
        return class extends constructor {
            // TODO: 完善注册机制
        };
    };
}

/**
 * 监听事件
 * @param ctor 需要监听的事件的构造器
 */
export function listen<T extends ctor>(ctor: T) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Dispatcher.getInstance().registerActionListener(target.constructor, propertyKey, ctor);
    };
}
