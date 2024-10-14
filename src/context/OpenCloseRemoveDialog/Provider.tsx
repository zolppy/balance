import { FC, ReactNode, useState } from "react";
import { OpenCloseRemoveDialogCtx } from "./Ctx";

const OpenCloseRemoveDialogProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [removeDialogIsOpen, setRemoveDialogIsOpen] = useState<boolean>(false);

  const openRemoveDialog = (): void => setRemoveDialogIsOpen(true);

  const closeRemoveDialog = (): void => setRemoveDialogIsOpen(false);

  return (
    <OpenCloseRemoveDialogCtx.Provider
      value={{
        removeDialogIsOpen,
        openRemoveDialog,
        closeRemoveDialog,
      }}
    >
      {children}
    </OpenCloseRemoveDialogCtx.Provider>
  );
};

export default OpenCloseRemoveDialogProvider;
