import { Singleton } from '../../Common';
export interface Sheet {
    path: string;
    types?: Function[];
    data?: any[];
}
export declare class SheetStore extends Singleton {
    sheets: Map<string, Sheet>;
}
