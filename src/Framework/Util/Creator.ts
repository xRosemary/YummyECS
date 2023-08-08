import { Entity, System, World } from '..';

export function createEntityByCtor<T extends Entity>(ctor: new (...args: any[]) => T) {
    return World.getInstance().pool.createEntityByCtor(ctor);
}

export function createSystemByCtor<T extends System>(ctor: new (...args: any[]) => T) {
    return World.getInstance().pool.createSystemByCtor(ctor);
}
