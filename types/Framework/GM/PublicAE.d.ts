import { Action } from '../AE';
export declare class GmAction extends Action {
    funcName: string;
    val: string[];
    constructor(funcName: string, val: string[]);
}
