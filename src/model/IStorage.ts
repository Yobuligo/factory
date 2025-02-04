import { IProductMeta } from "./IProductionMeta";

export interface IStorage {
  amount: number;
  readonly amounts: Map<IProductMeta, number>;
  add(amount: number): void;
  findAmount(productMeta: IProductMeta): number;
}
