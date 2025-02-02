import { IBlueprint } from "./IBlueprint";
import { IInput } from "./IInput";
import { IOutput } from "./IOutput";

export abstract class Blueprint<TInput extends IInput, TOutput extends IOutput>
  implements IBlueprint<TInput, TOutput>
{
  abstract readonly input: TInput;
  abstract readonly output: TOutput;
  abstract readonly name: string;
}
