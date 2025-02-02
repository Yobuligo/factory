import { Constructor } from "../../core/types/Constructor";
import { IIngredient } from "./IIngredient";

export interface IPart<T extends IIngredient> {
  readonly ingredient: Constructor<T>;
  readonly amount: number;
}
