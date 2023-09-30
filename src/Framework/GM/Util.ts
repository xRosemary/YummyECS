import { GmStore } from './GmStore';

export function registerGMCommand(func: Function, paramTypes: Function[]) {
    GmStore.getInstance().GmMap.set(func.name, {
        func: func,
        paramTypes: paramTypes,
    });
}
