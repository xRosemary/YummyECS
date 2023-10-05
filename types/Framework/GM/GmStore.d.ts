import { Singleton } from '../../Common';
interface ICallBack {
    func: Function;
    paramTypes: Function[];
}
export declare class GmStore extends Singleton {
    GmMap: Map<string, ICallBack>;
}
export {};
