import * as UE from 'ue';

import { listen } from '../../Decorator/Decorator';
import { System } from '../ECS';
import { World } from '../World';
import { CloseUMG, OpenUMG } from './PublicAE';
import { UIStore } from './UIStore';
import { SystemPoolStore } from '../Pool/SystemPoolStore';
import { LoadSheetAction } from '../Asset';
import { UITable } from './Define';
import { BindUMG } from '../../Decorator/UIDecorator';

export class UISystem extends System {
    @listen(OpenUMG)
    protected onOpenUMG(action: OpenUMG) {
        let store = UIStore.getInstance();
        const name = action.name;
        let info = store.widgetInfo.get(name);
        if (info === undefined) {
            console.warn(`${name}'s system has not been registered`);
            return;
        }

        const widgetClass = UE.Class.Load(info.path);
        let widget: any = World.getInstance().getWorld().CreateWidget(widgetClass);

        info.callback.forEach((compInfo, component) => {
            this.bindCallback(compInfo, component, widget, info!.systemCtor);
        });

        widget.AddToViewport(action.zOrder);
    }

    @listen(CloseUMG)
    protected onCloseUMG(action: CloseUMG) {
        action.widget.RemoveFromParent();
        // TODO 卸载callback
    }

    @listen(BindUMG)
    protected onBindUMG(action: BindUMG) {
        // 通过构造器找到ui目录
        let store = UIStore.getInstance();

        let widgetInfo = store.widgetInfo.get(action.name);
        let actionTable: Map<string, string> | undefined;

        if (widgetInfo !== undefined) {
            // 之前注册过
            actionTable = widgetInfo.callback.get(action.widget);
        } else {
            // 未注册过
            const uiTable = LoadSheetAction.do<UITable[]>(UITable);
            const path = uiTable.find((v) => v.name === action.name)?.path;
            if (path === undefined) {
                console.error(`${name} was not found in the configuration table`);
                return;
            }

            widgetInfo = {
                path: path,
                systemCtor: action.targetCtor,
                callback: new Map<string, Map<string, string>>(),
            };
        }

        if (actionTable === undefined) {
            actionTable = new Map<string, string>();
        }

        actionTable.set(action.action, action.propertyKey);
        widgetInfo.callback.set(action.widget, actionTable);
        store.widgetInfo.set(action.name, widgetInfo);
    }

    private bindCallback(compInfo: Map<string, string>, component: string, widget: any, systemCtor: Function) {
        const system: any = SystemPoolStore.getInstance().systems.find((s) => s.constructor === systemCtor);
        if (system === undefined) {
            console.warn(`${systemCtor.name} has not been created`);
            return;
        }

        compInfo.forEach((callback, action) => {
            widget[component][action].Add(() => {
                system[callback](widget);
            });
        });
    }
}
