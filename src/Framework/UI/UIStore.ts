import { Singleton } from '../../Common';

interface IWidgetInfo {
    path: string;
    systemCtor: Function;

    /**
     * UI的回调函数
     * @param key UI控件上的组件名
     * @param val 组件的回调函数表
     */
    callback: Map<string, Map<string, string>>;
}

export class UIStore extends Singleton {
    /**
     * @param key UI名
     */
    public widgetInfo = new Map<string, IWidgetInfo>();
}

// tag -> 实例化UI到UE -> 赋值给store带Bind的变量
