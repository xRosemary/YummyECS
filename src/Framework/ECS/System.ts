import { World } from '../World';
/**
 * @todo 完善System的结构
 */
export class System {
    constructor() {
        World.getInstance().registerSystem(this);
    }
}
