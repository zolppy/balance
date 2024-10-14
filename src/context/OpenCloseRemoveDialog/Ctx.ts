import { createContext } from "react";
import { IOpenCloseRemoveDialog } from "./Interface";

export const OpenCloseRemoveDialogCtx = createContext<
  IOpenCloseRemoveDialog | undefined
>(undefined);
