import { RelationMapping, assert } from '../../Common';

export class System {
    protected modify<T extends object>(component: T, func: (v: T) => void) {
        assert(
            RelationMapping.getInstance().auth(this.constructor, component.constructor),
            `${this.constructor.name} does not have permission to modify ${component.constructor.name}`
        );

        func(component);
    }

    protected log(...args: any[]) {
        console.log(`[${this.constructor.name}]:`, args);
    }

    protected warn(...args: any[]) {
        console.warn(`[${this.constructor.name}]:`, args);
    }

    protected error(...args: any[]) {
        console.error(`[${this.constructor.name}]:`, args);
    }

    protected debug(...args: any[]) {
        console.error(`[${this.constructor.name}]:`, args);
    }
}
