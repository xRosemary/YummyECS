import { Singleton } from '../Common';
import { World } from '../World';
import { Action } from './Action';

interface Listener {
    ctor: Function;
    functionName: string;
}

export class Dispatcher extends Singleton {
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
     * @param actionCtor action的构造器
     */
    public registerActionListener(ctor: Function, functionName: string, actionCtor: Function) {
        let listenerList = this.actionMap.get(actionCtor);
        if (listenerList === undefined) {
            listenerList = [{ ctor: ctor, functionName: functionName }];
            this.actionMap.set(actionCtor, listenerList);
            return;
        }

        listenerList.push({ ctor: ctor, functionName: functionName });
    }

    /**
     * 发布Action
     * @param action
     */
    public dispatchAction(action: Action) {
        let dispatcher = Dispatcher.getInstance();
        let listenerList = dispatcher.actionMap.get(action.constructor);
        if (listenerList === undefined) {
            console.warn(`Can not find listenerList by ${action.constructor.name}`);
            console.warn(dispatcher.actionMap);
            return;
        }

        let listener = listenerList.shift();
        if (listener === undefined) {
            console.warn(`ListenerList is empty, action: ${action.constructor.name}`);
            return;
        }

        const systems = World.getInstance().getAllSystems();
        for (const system of systems) {
            if (system.constructor === listener.ctor) {
                console.log(`Dispatch action: ${action.constructor.name} to ${system.constructor.name}: ${listener.functionName}()`);
                (system as any)[listener.functionName].call(system, action);
                return;
            }
        }
    }
}
