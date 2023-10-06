import * as UE from 'ue';
import { Action } from '../AE';

export class OpenUMG extends Action {
    constructor(public name: string, public zOrder: number = 0) {
        super();
    }
}

export class CloseUMG extends Action {
    constructor(public widget: UE.UserWidget) {
        super();
    }
}
