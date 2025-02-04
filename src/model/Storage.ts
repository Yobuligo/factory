import { IProductMeta } from "./IProductionMeta";
import { IStorage } from "./IStorage";

export class Storage implements IStorage {
  readonly amounts: Map<IProductMeta, number> = new Map();

  add(productMeta: IProductMeta, amount: number): void {
    const currentAmount = this.amounts.get(productMeta);
    if (currentAmount) {
      this.amounts.set(productMeta, currentAmount + amount);
    } else {
      this.amounts.set(productMeta, amount);
    }
  }

  findAmount(productMeta: IProductMeta): number {
    return this.amounts.get(productMeta) ?? 0;
  }
}
