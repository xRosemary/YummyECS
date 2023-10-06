import { Action } from '../Framework/AE';

export class BindUMG extends Action {
    constructor(
        public name: string,
        public widget: string,
        public action: string,
        public targetCtor: Function,
        public propertyKey: string
    ) {
        super();
    }
}

/**
 * 监听UI事件
 * @param path 表格路径
 */
export function ui(ctor: string, widget: string, action: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        BindUMG.do(ctor, widget, action, target.constructor, propertyKey);
    };
}
