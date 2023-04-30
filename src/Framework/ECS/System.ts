import { Singleton } from '../Common';
import { World } from '../World';
/**
 * @todo 完善System的结构
 */
export class System extends Singleton {
    constructor() {
        super();
        World.getInstance().registerSystem(this);
    }
}
