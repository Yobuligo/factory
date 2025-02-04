import { Factory } from "./Factory";
import { IFactory } from "./IFactory";
import { IProductMeta } from "./IProductionMeta";

export const createFactory = <TProductMeta extends IProductMeta>(
  productMeta: TProductMeta
): IFactory<TProductMeta> => new Factory(productMeta);
