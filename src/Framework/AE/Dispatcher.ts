import { ActionMapping, Listener, Singleton } from '../../Common/';
import { SystemPoolStore } from '../Pool/SystemPoolStore';

import { Action } from './Action';
import { Event } from './Event';

export class Dispatcher extends Singleton {
    public dispatch(ae: Action | Event) {
        const listenerList = ActionMapping.getInstance().getListenerList(ae.constructor);
        if (listenerList === undefined || listenerList.length <= 0) {
            console.warn(`Can not find listener by ${ae.constructor.name}`);
            return;
        }

        if (ae instanceof Action) {
            // Action 为一对一通信，因此只取第一个监听者
            return this.dispatchAction(ae, listenerList[0]);
        } else {
            // Event 为一对多通信
            return this.dispatchEvent(ae, listenerList);
        }
    }

    private dispatchEvent(event: Event, listenerList: Listener[]) {
        listenerList.forEach((v) => {
            const system = SystemPoolStore.getInstance().systems.find((s) => s.constructor === v.ctor);
            if (system !== undefined) {
                return this.execMethod(system, v.functionName, event);
            }
        });
    }

    /**
     * 发布Action
     * @param action
     */
    private dispatchAction(action: Action, listener: Listener) {
        const system = SystemPoolStore.getInstance().systems.find((s) => s.constructor === listener.ctor);
        if (system !== undefined) {
            return this.execMethod(system, listener.functionName, action);
        }
    }

    private execMethod(system: any, functionName: string, ae: Action | Event) {
        console.log(`Dispatch [${ae.constructor.name}] to ${system.constructor.name}: ${functionName}()`);
        return system[functionName].call(system, ae);
    }
}
