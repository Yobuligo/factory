import { IBlueprint } from "./IBlueprint";
import { IPartList } from "./IPartList";

export const createBlueprint = <
  TBlueprint extends IBlueprint<IPartList, IPartList>
>(
  blueprint: TBlueprint
): TBlueprint => {
  return blueprint;
};
