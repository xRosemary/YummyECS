import { table } from '../../Decorator/TableDecorator';

@table('Tab/ui_def.tab')
export class UITable {
    constructor(public id: number, public name: string, public path: string) {}
}
