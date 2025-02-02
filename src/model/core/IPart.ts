import { Constructor } from "../../core/types/Constructor";
import { IIngredient } from "./IIngredient";

export interface IPart<T extends IIngredient> {
  readonly ingredient: Constructor<T>;
  readonly amount: number;
}

class Flour implements IIngredient {
    name: string = "Flour";
    color =  213
  }
  
  class Person {
    firstname = "Stacey";
  }


const test: IPart<Person> = { amount: 2, ingredient: Person}
test.amount.toExponential()