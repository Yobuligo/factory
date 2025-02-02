import { IIngredient } from "./IIngredient";
import { IPartList } from "./IPartList";

export const createPartList = <TPartList extends IPartList>(partList: TPartList): TPartList => {
  return partList;
};

class Flour implements IIngredient {
  name: string = "Flour";
  color =  213
}

class Person {
  firstname = "Stacey";
}

createPartList({
  test: { amount: 2, ingredient: Flour },
  test2: { amount: 2, ingredient: Person },
});
