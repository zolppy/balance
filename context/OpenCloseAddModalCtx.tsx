import { createContext, ReactNode, useContext, useState } from "react";

interface IOpenCloseAddModal {
  addModalIsOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
}

const OpenCloseAddModal = createContext<IOpenCloseAddModal | undefined>(
  undefined
);

const useOpenCloseAddModal = (): IOpenCloseAddModal => {
  const context = useContext(OpenCloseAddModal);

  if (!context) {
    throw new Error("");
  }

  return context;
};

const OpenCloseAddModalProvider = ({ children }: { children: ReactNode }) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState<boolean>(false);

  const openAddModal = () => setAddModalIsOpen(true);

  const closeAddModal = () => setAddModalIsOpen(false);

  return (
    <OpenCloseAddModal.Provider
      value={{
        addModalIsOpen,
        openAddModal,
        closeAddModal,
      }}
    >
      {children}
    </OpenCloseAddModal.Provider>
  );
};

export { OpenCloseAddModalProvider, useOpenCloseAddModal };
