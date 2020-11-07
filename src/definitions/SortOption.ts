export const Order = {
  ASC: 'ASCENDING',
  DESC: 'DESCENDING'
} as const;
export type Order = typeof Order[keyof typeof Order];

export interface SortOption {
  order: Order;
  [key: string]: any;
}