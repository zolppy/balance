import { createContext } from "react";
import { IOpenCloseAddDialog } from "./Interface";

export const OpenCloseAddDialogCtx = createContext<
  IOpenCloseAddDialog | undefined
>(undefined);
