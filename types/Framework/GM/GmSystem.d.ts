import { System } from '../ECS';
import { GmAction } from './PublicAE';
export declare class GmSystem extends System {
    protected onGmAction(action: GmAction): boolean;
}
