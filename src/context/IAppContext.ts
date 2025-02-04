import { IFactory } from "../model/IFactory";
import { IProductMeta } from "../model/IProductionMeta";
import { IronPlateMeta } from "../model/IronPlateMeta";

export interface IAppContext {
  factories: IFactory<IProductMeta>[];
  factory: IFactory<IronPlateMeta>;
}
