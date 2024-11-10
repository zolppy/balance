import { createContext, ReactNode, useContext, useState } from "react";

interface IOpenCloseEditModal {
  editModalIsOpen: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
}

const OpenCloseEditModal = createContext<IOpenCloseEditModal | undefined>(
  undefined
);

const useOpenCloseEditModal = (): IOpenCloseEditModal => {
  const context = useContext(OpenCloseEditModal);

  if (!context) {
    throw new Error("");
  }

  return context;
};

const OpenCloseEditModalProvider = ({ children }: { children: ReactNode }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);

  const openEditModal = () => setEditModalIsOpen(true);

  const closeEditModal = () => setEditModalIsOpen(false);

  return (
    <OpenCloseEditModal.Provider
      value={{
        editModalIsOpen,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </OpenCloseEditModal.Provider>
  );
};

export { OpenCloseEditModalProvider, useOpenCloseEditModal };
