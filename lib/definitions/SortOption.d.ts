export declare const Order: {
    readonly ASC: "ASCENDING";
    readonly DESC: "DESCENDING";
};
export declare type Order = typeof Order[keyof typeof Order];
export interface SortOption {
    order: Order;
    [key: string]: any;
}
//# sourceMappingURL=SortOption.d.ts.map