import * as fs from 'fs';
import * as UE from 'ue';
import { argv } from 'puerts';

import { listen } from '../../Decorator';
import { System } from '../ECS';
import { LoadSheetAction, ReLoadSheetAction } from './PublicAE';
import { Sheet, SheetStore } from './SheetStore';

//#region 常量
function toNumberArr(str: string): number[] {
    return str.split(',').map((v) => Number(v));
}
function toStringArr(str: string): string[] {
    return str.split(',');
}
function toBooleanArr(str: string): boolean[] {
    return str.split(',').map((v) => Boolean(v));
}

const MIN_ROW = 1;
const MIN_COLUMN = 2;
const gameInstance = argv.getByName('GameInstance') as UE.GameInstance;
//#endregion

export class SheetLoadSystem extends System {
    @listen(LoadSheetAction)
    protected onLoadSheetAction(action: LoadSheetAction) {
        let store = SheetStore.getInstance();
        let name = action.ctor.name;
        let sheetInfo = store.sheets.get(name);
        if (sheetInfo === undefined) {
            this.error(`Unregistered resource file type: ${name}`);
            return [];
        }

        if (sheetInfo.data !== undefined) {
            return sheetInfo.data;
        }

        sheetInfo.data = this.parseFile(sheetInfo, action.ctor);
        return sheetInfo.data;
    }

    @listen(ReLoadSheetAction)
    protected onReLoadSheetAction(action: ReLoadSheetAction) {
        let store = SheetStore.getInstance();
        let name = action.ctor.name;
        let sheetInfo = store.sheets.get(name);
        if (sheetInfo === undefined) {
            this.error(`Unregistered resource file type: ${name}`);
            return;
        }

        sheetInfo.data = this.parseFile(sheetInfo, action.ctor);
    }

    /**
     * 将文本内容转为预定义类的实例列表
     */
    private parseFile(sheetInfo: Sheet, ctor: Function) {
        let content = this.readContent(gameInstance.GetContentDir() + sheetInfo.path);
        if (content.length <= MIN_ROW || content[0].length <= MIN_COLUMN) return [];
        content.forEach((v) => v.shift()); // 去掉表示注释的第一列
        this.analyzeDataTypes(sheetInfo, content[0]);
        content.shift(); // 去掉表示数据类型的第一行

        return content
            .map((list) => list.map((v, i) => sheetInfo.types![i](v))) // 转成所需的数据序列
            .map((v) => new ctor.prototype.constructor(...v)); // 构造成目标对象
    }

    /**
     * 读取文件内容并按行分割，返回一个文本数组
     * @param filePath 路径
     */
    private readContent(filePath: string): string[][] {
        return fs
            .readFileSync(filePath, 'utf-8')
            .split(/[\r\n]+/) // 按行分割
            .filter((v) => v[0] !== '#') // 跳过注释
            .map((v) => v.split('\t')); // 按列分割
    }

    /**
     * 解析数据类型
     */
    private analyzeDataTypes(sheetInfo: Sheet, types: string[]) {
        sheetInfo.types = types.map((v) => {
            if (v === 'string') {
                return String;
            } else if (v === 'string[]') {
                return toStringArr;
            } else if (v === 'number') {
                return Number;
            } else if (v === 'number[]') {
                return toNumberArr;
            } else if (v === 'boolean') {
                return Boolean;
            } else if (v === 'boolean[]') {
                return toBooleanArr;
            } else {
                return String;
            }
        });
    }
}
