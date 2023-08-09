import { Singleton } from './Singleton';
export interface Listener {
    ctor: Function;
    functionName: string;
}
/**
 * 用于记录System与Component的控制关系
 */
export declare class RelationMapping extends Singleton {
    componentMap: Map<Function, Function[]>;
    /**
     * action注册表
     * @key 事件的构造器
     * @value 观察者列表 - [观察者的构造器, 响应函数的名称][]
     */
    actionMap: Map<Function, Listener[]>;
    /**
     * 注册监听Action的发生
     * @param ctor 观察者的构造器
     * @param functionName 响应函数的名称
     * @param ae action的构造器
     */
    registerListener(ctor: Function, functionName: string, ae: Function): void;
    getListenerList(ctor: Function): Listener[];
    registerComponent(systemCtor: Function, componentCtor: Function): void;
    /**
     * 检测某个system是否可以控制某类component
     */
    auth(systemCtor: Function, componentCtor: Function): boolean;
}
