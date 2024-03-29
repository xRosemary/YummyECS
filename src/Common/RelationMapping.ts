import { Singleton } from './Singleton';

export interface Listener {
    ctor: Function;
    functionName: string;
}

/**
 * 事件映射
 */
export class ActionMapping extends Singleton {
    /**
     * action注册表
     * @key 事件的构造器
     * @value 观察者列表 - [观察者的构造器, 响应函数的名称][]
     */
    actionMap = new Map<Function, Listener[]>();

    /**
     * 注册监听Action的发生
     * @param ctor 观察者的构造器
     * @param functionName 响应函数的名称
     * @param ae action的构造器
     */
    public registerListener(ctor: Function, functionName: string, ae: Function) {
        let listenerList = this.actionMap.get(ae);
        if (listenerList === undefined) {
            listenerList = [{ ctor: ctor, functionName: functionName }];
            this.actionMap.set(ae, listenerList);
            return;
        }

        listenerList.push({ ctor: ctor, functionName: functionName });
    }

    public unregisterListener(ctor: Function, ae: Function) {
        let listenerList = this.actionMap.get(ae);
        if (listenerList === undefined) {
            return;
        }

        const index: number = listenerList.findIndex((v) => v.ctor === ctor);
        ~index && listenerList.splice(index, 1);
    }

    public getListenerList(ctor: Function): Listener[] {
        return this.actionMap.get(ctor) ?? [];
    }
}

/**
 * 用于记录System与Component的控制关系
 */
export class RelationMapping extends Singleton {
    componentMap = new Map<Function, Function[]>();

    public registerComponent(systemCtor: Function, componentCtor: Function) {
        let compList = this.componentMap.get(systemCtor);
        if (compList === undefined) {
            this.componentMap.set(systemCtor, [componentCtor]);
        } else {
            compList.push(componentCtor);
        }
    }

    /**
     * 检测某个system是否可以控制某类component
     */
    public auth(systemCtor: Function, componentCtor: Function): boolean {
        let compList = this.componentMap.get(systemCtor);
        if (compList === undefined) {
            return false;
        }

        return compList.includes(componentCtor);
    }
}
