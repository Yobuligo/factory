import { IHaveName } from "../types/IHaveName";

export interface IProductMeta extends IHaveName {
  productionTime: number;
  space: number;
}
