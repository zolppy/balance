import { createContext, ReactNode, useContext, useState } from "react";

interface IOpenCloseRemoveModal {
  removeModalIsOpen: boolean;
  openRemoveModal: () => void;
  closeRemoveModal: () => void;
}

const OpenCloseRemoveModal = createContext<IOpenCloseRemoveModal | undefined>(
  undefined
);

const useOpenCloseRemoveModal = (): IOpenCloseRemoveModal => {
  const context = useContext(OpenCloseRemoveModal);

  if (!context) {
    throw new Error("");
  }

  return context;
};

const OpenCloseRemoveModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [removeModalIsOpen, setRemoveModalIsOpen] = useState<boolean>(false);

  const openRemoveModal = () => setRemoveModalIsOpen(true);

  const closeRemoveModal = () => setRemoveModalIsOpen(false);

  return (
    <OpenCloseRemoveModal.Provider
      value={{
        removeModalIsOpen,
        openRemoveModal,
        closeRemoveModal,
      }}
    >
      {children}
    </OpenCloseRemoveModal.Provider>
  );
};

export { OpenCloseRemoveModalProvider, useOpenCloseRemoveModal };
