import { useContext } from "react";
import { OpenCloseAddDialogCtx } from "./Ctx";
import { IOpenCloseAddDialog } from "./Interface";

export const useOpenCloseAddDialog = (): IOpenCloseAddDialog => {
  const context = useContext(OpenCloseAddDialogCtx);
  if (!context) {
    throw new Error(
      "useOpenCloseAddDialog must be used within a OpenCloseAddDialogProvider"
    );
  }
  return context;
};
