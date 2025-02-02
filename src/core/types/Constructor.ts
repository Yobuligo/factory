import { IIngredient } from "../../model/core/IIngredient";

export type Constructor<T extends IIngredient> = new () => T;
