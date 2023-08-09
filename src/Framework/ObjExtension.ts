import * as UE from 'ue';

console.log(`Unreal obj extension loaded`);

declare module 'ue' {
    interface Actor {
        CreateDefaultSubobjectGeneric<T extends UE.Object>(SubobjectFName: string, ReturnType: UE.Class): T;
    }
}

UE.Actor.prototype.CreateDefaultSubobjectGeneric = function CreateDefaultSubobjectGeneric<T extends UE.Object>(
    SubobjectFName: string,
    ReturnType: UE.Class
): T {
    return this.CreateDefaultSubobject(
        SubobjectFName,
        ReturnType,
        ReturnType,
        /*bIsRequired =*/ true,
        /*bTransient =*/ false
    ) as T;
};
