import * as F from '../Framework';
import * as D from '../Decorator';
class MySystem extends F.System {
    @D.listen(F.EntityAction)
    public call(action: F.Action) {
        console.log(`function called, receive from action: ${action.constructor.name}`);
    }
}

let system = new MySystem();
F.EntityAction.do();
