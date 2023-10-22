import * as UE from 'ue';

export let GAME_INSTANCE: UE.GameInstance | undefined = undefined;

export function InitGameInstance(game_instance: UE.GameInstance): void {
    GAME_INSTANCE = game_instance;
}
