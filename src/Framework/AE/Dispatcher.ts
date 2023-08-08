import { Singleton } from '../Common';
import { Listener, RelationMapping } from '../Common/RelationMapping';
import { World } from '../World';
import { Action } from './Action';
import { Event } from './Event';

export class Dispatcher extends Singleton {
    public dispatch(ae: Action | Event) {
        const listenerList = RelationMapping.getInstance().getListenerList(ae.constructor);
        if (listenerList === undefined || listenerList.length <= 0) {
            console.warn(`Can not find listener by ${ae.constructor.name}`);
            return;
        }

        if (ae instanceof Action) {
            // Action 为一对一通信，因此只取第一个监听者
            this.dispatchAction(ae, listenerList[0]);
        } else {
            this.dispatchEvent(ae, listenerList);
        }
    }

    private dispatchEvent(event: Event, listenerList: Listener[]) {
        listenerList.forEach((v) => {
            const system = World.getInstance().pool.systems.find((s) => s.constructor === v.ctor);
            if (system !== undefined) {
                this.execMethod(system, v.functionName, event);
            }
        });
    }

    /**
     * 发布Action
     * @param action
     */
    private dispatchAction(action: Action, listener: Listener) {
        const system = World.getInstance().pool.systems.find((s) => s.constructor === listener.ctor);
        if (system !== undefined) {
            this.execMethod(system, listener.functionName, action);
        }
    }

    private execMethod(system: any, functionName: string, ae: Action | Event) {
        console.log(`Dispatch [${ae.constructor.name}] to ${system.constructor.name}: ${functionName}()`);
        system[functionName].call(system, ae);
    }
}
