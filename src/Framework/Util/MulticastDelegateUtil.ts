// puerts 绑定原生的虚幻多播委托比较麻烦
// 这里抽出来一个 Handler 解决绑定和解绑的麻烦

import * as UE from 'ue';

export class DelegateHandler {
    private handle: ((...args: any) => any) | undefined = undefined;

    /**
     * 绑定一个虚幻的MulticastDelegate
     * @param delegate 待绑定的delegate
     * @param func 函数指针
     * @param obj 函数的this指针
     */
    public static bind<T extends (...args: any) => any>(
        delegate: UE.$MulticastDelegate<(...args: any) => any>,
        func: T,
        obj?: Object
    ): DelegateHandler | undefined {
        if (func === null || delegate === null) {
            return undefined;
        }

        let inst = new DelegateHandler();
        if (obj !== undefined && obj !== null) {
            inst.handle = func.bind(obj);
        } else {
            inst.handle = func;
        }

        delegate.Add(inst.handle);
        return inst;
    }

    /**
     * MulticastDelegate解绑
     * @param delegate 待解绑的delegate
     */
    public unbind(delegate: UE.$MulticastDelegate<(...args: any) => any>) {
        if (delegate === null) {
            return;
        }

        if (this.handle === undefined) {
            return;
        }

        delegate.Remove(this.handle);
    }
}
