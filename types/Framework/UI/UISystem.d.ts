import { System } from '../ECS';
import { BindUMG, CloseUMG, OpenUMG } from './PublicAE';
export declare class UISystem extends System {
    protected onOpenUMG(action: OpenUMG): void;
    protected onCloseUMG(action: CloseUMG): void;
    protected onBindUMG(action: BindUMG): void;
    private bindCallback;
}
