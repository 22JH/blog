import type { MultiValue } from "/Users/a123/myblog/node_modules/react-select/dist/declarations/src/types.d.ts";

export interface SelectOption {
  _id?: string;
  label: string;
  value: string;
  count?: number;
}

export type MultiOption = MultiValue<SelectOption>;
