import { Singleton } from '../../Common';

export interface Sheet {
    path: string;
    types?: Function[];
    data?: any[];
}

export class SheetStore extends Singleton {
    public sheets = new Map<string /** 文件名 */, Sheet>();
}
