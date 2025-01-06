import * as UE from 'ue';
export declare class DelegateHandler {
    private handle;
    /**
     * 绑定一个虚幻的MulticastDelegate
     * @param delegate 待绑定的delegate
     * @param func 函数指针
     * @param obj 函数的this指针
     */
    static bind<T extends (...args: any) => any>(delegate: UE.$MulticastDelegate<(...args: any) => any>, func: T, obj?: Object): DelegateHandler | undefined;
    /**
     * MulticastDelegate解绑
     * @param delegate 待解绑的delegate
     */
    unbind(delegate: UE.$MulticastDelegate<(...args: any) => any>): void;
}
