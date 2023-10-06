import { Singleton } from '../../Common/';
import { IAction, IEvent } from './Define';
export declare class Dispatcher extends Singleton {
    dispatch(ae: IAction | IEvent): any;
    private dispatchEvent;
    /**
     * 发布Action
     * @param action
     */
    private dispatchAction;
    private execMethod;
}
