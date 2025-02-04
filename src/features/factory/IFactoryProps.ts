import { IFactory } from "../../model/IFactory";
import { IProductMeta } from "../../model/IProductionMeta";

export interface IFactoryProps<TProductMeta extends IProductMeta> {
  factory: IFactory<TProductMeta>;
}
