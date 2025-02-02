import { IPart } from "./IPart";

export type IPartList = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: IPart<any>;
};
