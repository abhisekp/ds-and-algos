import { SortOrder } from './SortOrder';

export interface SortOption {
  order?: SortOrder;
  optimize?: boolean;
  [key: string]: any;
}
