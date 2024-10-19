import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../Modal/CloseButton";
import Header from "../Modal/Header";
import H1 from "../Modal/H1";
import RemoveButton from "./RemoveButton";
import { transition, variants } from "../../../utils/animations/modal";
import { useOpenCloseRemoveModal } from "../../../context/OpenCloseRemoveModalCtx";

const RemoveModal = () => {
  const { removeModalIsOpen, closeRemoveModal } = useOpenCloseRemoveModal();

  return (
    <AnimatePresence>
      {removeModalIsOpen && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={transition}
          className="bg-neutral-900 text-white border border-white border-opacity-50 min-w-[320px] w-[90%] max-w-[620px] mx-auto fixed rounded-lg p-3 flex flex-col gap-y-6"
        >
          <Header>
            <H1>Remoção de Movimentação</H1>
            <CloseButton handleCloseModal={closeRemoveModal} />
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

export default RemoveModal;
