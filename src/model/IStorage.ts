import { IProductMeta } from "./IProductionMeta";

export interface IStorage {
  readonly amounts: Map<IProductMeta, number>;
  add(productMeta: IProductMeta, amount: number): void;
  findAmount(productMeta: IProductMeta): number;
}
