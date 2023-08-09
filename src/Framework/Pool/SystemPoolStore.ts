import { Singleton } from '../../Common';
import { System } from '../ECS';

export class SystemPoolStore extends Singleton {
    public systems = new Array<System>();
}
