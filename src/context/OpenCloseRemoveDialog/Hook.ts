import { useContext } from "react";
import { OpenCloseRemoveDialogCtx } from "./Ctx";
import { IOpenCloseRemoveDialog } from "./Interface";

export const useOpenCloseRemoveDialog = (): IOpenCloseRemoveDialog => {
  const context = useContext(OpenCloseRemoveDialogCtx);
  if (!context) {
    throw new Error("");
  }
  return context;
};
