import { Singleton } from '../../Common/';
import { Action } from './Action';
import { Event } from './Event';
export declare class Dispatcher extends Singleton {
    dispatch(ae: Action | Event): any;
    private dispatchEvent;
    /**
     * 发布Action
     * @param action
     */
    private dispatchAction;
    private execMethod;
}
