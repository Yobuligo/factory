import { IHaveName } from "../../types/IHaveName";
import { IInput } from "./IInput";
import { IOutput } from "./IOutput";

export interface IBlueprint<TInput extends IInput, TOutput extends IOutput>
  extends IHaveName {
  input: TInput;
  output: TOutput;
}
