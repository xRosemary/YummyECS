import { System } from '../ECS';
import { CloseUMG, OpenUMG } from './PublicAE';
export declare class UISystem extends System {
    protected onOpenUMG(action: OpenUMG): void;
    protected onCloseUMG(action: CloseUMG): void;
    private bindCallback;
}
