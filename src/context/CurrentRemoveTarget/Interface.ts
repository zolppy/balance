import { Dispatch, SetStateAction } from "react";

export interface ICurrentRemoveTarget {
  removeTargetID: string;
  setRemoveTargetID: Dispatch<SetStateAction<string>>;
}
