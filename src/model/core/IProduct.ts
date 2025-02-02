import { IBlueprint } from "./IBlueprint";
import { IIngredient } from "./IIngredient";
import { IInput } from "./IInput";
import { IOutput } from "./IOutput";

export interface IProduct<TInput extends IInput, TOutput extends IOutput>
  extends IIngredient {
  readonly blueprint: IBlueprint<TInput, TOutput>;
}
