import { SheetStore } from '../Framework/Asset/SheetStore';

/**
 * 注册类为表格
 * @param path 表格路径
 */
export function table(path: string) {
    return function (ctor: Function) {
        let store = SheetStore.getInstance();
        const name = ctor.name;
        let sheet = store.sheets.get(name);

        if (sheet !== undefined) {
            // 已经注册过了

            console.warn(`Duplicate registration data table: ${name}`);
            return;
        }

        store.sheets.set(name, { path: path });
    };
}
