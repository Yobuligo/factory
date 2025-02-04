import { IHaveName } from "../types/IHaveName";
import { IProductMeta } from "./IProductionMeta";
import { IStorage } from "./IStorage";

export interface IFactory<TProductMeta extends IProductMeta> extends IHaveName {
  readonly isRunning: boolean;
  readonly productMeta: TProductMeta;
  readonly storage: IStorage;
  start(): void;
  stop(): void;
}
