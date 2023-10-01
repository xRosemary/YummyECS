import { Action } from '../AE';

export class LoadSheetAction extends Action {
    constructor(public ctor: Function) {
        super();
    }
}

export class ReLoadSheetAction extends Action {
    constructor(public ctor: Function) {
        super();
    }
}
