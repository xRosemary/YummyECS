import { Action } from '../AE';

export class GmAction extends Action {
    constructor(public funcName: string, public val: string[]) {
        super();
    }
}
