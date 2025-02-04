import { IProductMeta } from "./IProductionMeta";
import { IStorage } from "./IStorage";

export class Storage implements IStorage {
  readonly amounts: Map<IProductMeta, number> = new Map();

  amount: number = 0;

  add(amount: number): void {
    this.amount += amount;
  }

  findAmount(productMeta: IProductMeta): number {
    return this.amounts.get(productMeta) ?? 0;
  }
}
