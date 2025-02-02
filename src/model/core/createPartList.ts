import { IPartList } from "./IPartList";

export const createPartList = <TPartList extends IPartList>(
  partList: TPartList
): TPartList => {
  return partList;
};
