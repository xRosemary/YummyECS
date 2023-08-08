import { UUID } from '..';

export class Component {
    owner: any;
    _uuid: string;

    constructor() {
        this.owner = undefined;
        this._uuid = UUID.randomUUID();
    }

    public getOwner<T>(): T {
        return this.owner as T;
    }

    public get uuid(): string {
        return this._uuid;
    }
}
