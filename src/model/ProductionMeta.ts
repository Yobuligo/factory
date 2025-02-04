import { IProductMeta } from "./IProductionMeta";

export abstract class ProductMeta implements IProductMeta {
  abstract productionTime: number;
  abstract space: number;
  abstract name: string;
}
