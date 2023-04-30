import { D, F } from '..';

class MySystem extends F.System {
    @D.listen(F.EntityAction)
    public call(action: F.Action) {
        console.log(`${this.constructor.name} function called, receive from action: ${action.constructor.name}`);
    }
}

console.log(MySystem.getInstance() === F.System.getInstance);
console.log(MySystem.getInstance() === MySystem.getInstance());
F.EntityAction.do();
