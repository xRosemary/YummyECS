import { BindUMG } from './PublicAE';

/**
 * 监听UI事件
 * @param path 表格路径
 * @todo 想办法移到Decorator文件夹中
 */
export function ui(ctor: string, widget: string, action: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        BindUMG.do(ctor, widget, action, target.constructor, propertyKey);
    };
}
