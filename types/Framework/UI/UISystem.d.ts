import { System } from '../ECS';
import { CloseUMG, OpenUMG } from './PublicAE';
import { BindUMG } from '../../Decorator/UIDecorator';
export declare class UISystem extends System {
    protected onOpenUMG(action: OpenUMG): void;
    protected onCloseUMG(action: CloseUMG): void;
    protected onBindUMG(action: BindUMG): void;
    private bindCallback;
}
