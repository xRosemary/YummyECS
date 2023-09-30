import { System } from '../ECS';
import { listen } from '../../Decorator/Decorator';
import { GmAction } from './PublicAE';
import { GmStore } from './GmStore';

export class GmSystem extends System {
    @listen(GmAction)
    protected onGmAction(action: GmAction): boolean {
        let callback = GmStore.getInstance().GmMap.get(action.funcName);

        if (callback === undefined) return false;
        if (action.val.length !== callback.paramTypes.length) {
            return false;
        }

        // 将参数转换成指定类型
        let params = action.val.map((v, i) => callback!.paramTypes[i](v));

        if (callback) {
            callback.func(...params);
        }
        return true;
    }
}
