import { ActionMapping, RelationMapping, assert } from '../Common';
import { System } from '../Framework/ECS';

type ctor = { new (...args: any[]): {} };
/**
 * 注册组件给对应的系统
 */
export function register<T>(componentCtor: ctor | ctor[]) {
    return function <T extends ctor>(constructor: T) {
        if (Array.isArray(componentCtor)) {
            componentCtor.forEach((v) => {
                RelationMapping.getInstance().registerComponent(constructor, v);
            });
        } else {
            RelationMapping.getInstance().registerComponent(constructor, componentCtor);
        }
    };
}

/**
 * 监听事件
 * @param ctor 需要监听的事件的构造器
 */
export function listen<T extends ctor>(ctor: T) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        assert(
            target.constructor.prototype instanceof System,
            `${target} fail to listen to Action or Event. Make sure the function exists in the System`
        );

        ActionMapping.getInstance().registerListener(target.constructor, propertyKey, ctor);
    };
}
