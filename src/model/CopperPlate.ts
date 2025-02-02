import { CopperOre } from "./CopperOre";
import { createBlueprint } from "./core/createBlueprint";
import { IProduct } from "./core/IProduct";

export class CopperPlate implements IProduct {
  readonly name: string = "CopperPlate";
  readonly blueprint = createBlueprint({
    name: "CopperPlate",
    input: { copperOre: { amount: 1, ingredient: CopperOre } },
    output: { copperPlate: { amount: 1, ingredient: CopperPlate } },
  });
}
