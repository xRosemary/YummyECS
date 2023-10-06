import { Action } from '../Framework/AE';
export declare class BindUMG extends Action {
    name: string;
    widget: string;
    action: string;
    targetCtor: Function;
    propertyKey: string;
    constructor(name: string, widget: string, action: string, targetCtor: Function, propertyKey: string);
}
/**
 * 监听UI事件
 * @param path 表格路径
 */
export declare function ui(ctor: string, widget: string, action: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
