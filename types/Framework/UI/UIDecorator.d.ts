/**
 * 监听UI事件
 * @param path 表格路径
 * @todo 想办法移到Decorator文件夹中
 */
export declare function ui(ctor: string, widget: string, action: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
