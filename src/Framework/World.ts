import { Singleton } from './Common';
import { System } from './ECS';

export class World extends Singleton {
    private systems: System[];

    constructor() {
        super();
        this.systems = [];
    }

    public getAllSystems(): System[] {
        return this.systems;
    }

    public registerSystem<T extends System>(system: T) {
        this.systems.push(system);
        return system;
    }
}
