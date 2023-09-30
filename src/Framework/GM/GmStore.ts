import { Singleton } from '../../Common';

interface ICallBack {
    func: Function;
    paramTypes: Function[];
}

export class GmStore extends Singleton {
    public GmMap = new Map<string, ICallBack>();
}
