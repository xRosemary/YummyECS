export declare class System {
    protected modify<T extends object>(component: T, func: (v: T) => void): void;
    protected log(...args: any[]): void;
    protected warn(...args: any[]): void;
    protected debug(...args: any[]): void;
}
