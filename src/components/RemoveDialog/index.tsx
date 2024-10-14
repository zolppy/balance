import { FC, JSX } from "react";
import RemoveButton from "./RemoveButton";
import Header from "../Dialog/Header";
import H1 from "../Dialog/H1";
import CloseButton from "../Dialog/CloseButton";
import { useOpenCloseRemoveDialog } from "../../context/OpenCloseRemoveDialogCtx";
import { AnimatePresence, motion } from "framer-motion";

const RemoveDialog: FC = (): JSX.Element => {
  const { removeDialogIsOpen, closeRemoveDialog } = useOpenCloseRemoveDialog();

  return (
    <AnimatePresence>
      {removeDialogIsOpen && (
        <motion.div
          initial={{ top: "150%", translateY: "-50%" }}
          animate={{ top: "50%", translateY: "-50%" }}
          exit={{ top: "150%", translateY: "-50%" }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-black text-white border border-white min-w-[320px] w-[90%] max-w-[620px] mx-auto fixed rounded-lg p-3 flex flex-col gap-y-6"
        >
          <Header>
            <H1>Remoção de Movimentação</H1>
            <CloseButton handleCloseDialog={closeRemoveDialog} />
          </Header>
          <main>
            <p>Tem certeza que deseja remover a movimentação</p>
          </main>
          <RemoveButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RemoveDialog;
