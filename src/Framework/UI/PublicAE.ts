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

export class BindUMG extends Action {
    constructor(
        public name: string,
        public widget: string,
        public action: string,
        public targetCtor: Function,
        public propertyKey: string
    ) {
        super();
    }
}
