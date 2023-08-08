import { Singleton } from '.';

export interface Listener {
    ctor: Function;
    functionName: string;
}

/**
 * 用于记录System与Component的控制关系
 */
export class RelationMapping extends Singleton {
    componentMap = new Map<Function, Function[]>();

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

    public getListenerList(ctor: Function): Listener[] {
        return this.actionMap.get(ctor) ?? [];
    }

    public registerComponent(systemCtor: Function, componentCtor: Function) {
        let compList = this.componentMap.get(systemCtor);
        if (compList === undefined) {
            this.componentMap.set(systemCtor, [componentCtor]);
        } else {
            compList.push(componentCtor);
        }
    }

    public checkComponent(systemCtor: Function, componentCtor: Function): boolean {
        let compList = this.componentMap.get(systemCtor);
        if (compList === undefined) {
            return false;
        }

        return compList.includes(componentCtor);
    }
}
