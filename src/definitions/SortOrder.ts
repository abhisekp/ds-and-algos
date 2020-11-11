export const SortOrder = {
  ASC: "ASCENDING",
  DESC: "DESCENDING"
} as const;
export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
