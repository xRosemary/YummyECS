import { System } from '../ECS';
import { LoadSheetAction, ReLoadSheetAction } from './PublicAE';
export declare class SheetLoadSystem extends System {
    protected onLoadSheetAction(action: LoadSheetAction): any[];
    protected onReLoadSheetAction(action: ReLoadSheetAction): void;
    /**
     * 将文本内容转为预定义类的实例列表
     */
    private parseFile;
    /**
     * 读取文件内容并按行分割，返回一个文本数组
     * @param filePath 路径
     */
    private readContent;
    /**
     * 解析数据类型
     */
    private analyzeDataTypes;
}
