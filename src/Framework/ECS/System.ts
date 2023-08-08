import { assert } from '../Util';
import { Component } from './Component';
import { RelationMapping } from '../Common/RelationMapping';

export class System {
    protected modify<T extends Component>(component: T, func: (v: T) => void) {
        assert(
            RelationMapping.getInstance().checkComponent(this.constructor, component.constructor),
            `${this.constructor.name} does not have permission to modify ${component.constructor.name}`
        );

        func(component);
    }
}
