import * as UE from 'ue';
declare module 'ue' {
    interface Actor {
        CreateDefaultSubobjectGeneric<T extends UE.Object>(SubobjectFName: string, ReturnType: UE.Class): T;
    }
}
