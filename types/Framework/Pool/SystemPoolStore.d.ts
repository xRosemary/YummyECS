import { Singleton } from '../../Common';
import { System } from '../ECS';
export declare class SystemPoolStore extends Singleton {
    systems: System[];
}
