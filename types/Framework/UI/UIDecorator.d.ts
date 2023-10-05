/**
 * 监听UI事件
 * @param path 表格路径
 */
export declare function ui<C extends Function, W extends keyof C & string, T extends keyof W & string>(ctor: C, widget: W, action: T): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
