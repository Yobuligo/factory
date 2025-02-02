import { IIngredient } from "./IIngredient";
import { IPart } from "./IPart";

export type IPartList = {
  [prop: string]: IPart<IIngredient>;
};
