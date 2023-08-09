import * as UE from 'ue';

import { Action } from '../AE';

export class CreateActorAction extends Action {
    constructor(public ctor: Function, public transform = new UE.Transform()) {
        super();
    }
}

export class DestroyActorAction extends Action {
    constructor(public actor: UE.Actor) {
        super();
    }
}

export class DestroyAllActorAction extends Action {
    constructor() {
        super();
    }
}

export class CreateSystemAction extends Action {
    constructor(public ctor: { new (...args: any[]): {} }) {
        super();
    }
}

export class DestroySystemAction extends Action {
    constructor(public ctor: Function) {
        super();
    }
}
