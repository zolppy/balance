import { AnimatePresence, motion } from "framer-motion";
import EditButton from "./EditButton";
import CloseButton from "../Modal/CloseButton";
import Form from "../Modal/Form";
import Header from "../Modal/Header";
import H1 from "../Modal/H1";
import Input from "../Modal/Input";
import InputWrapper from "../Modal/InputWrapper";
import { IMovimentation } from "../../../utils/interfaces/movimentation";
import { transition, variants } from "../../../utils/animations/modal";
import { useCurrentMovimentation } from "../../../context/CurrentMovimentationCtx";
import { useOpenCloseEditModal } from "../../../context/OpenCloseEditModalCtx";
import { useMovimentation } from "../../../context/MovimentationCtx";

const EditModal = () => {
  const { editModalIsOpen, closeEditModal } = useOpenCloseEditModal();
  const {
    currentMovimentation,
    setCurrentMovimentation,
    resetCurrentMovimentation,
  } = useCurrentMovimentation();

  const { editMovimentation } = useMovimentation();

  const handleUpdateMovimentation = (field: string, value: string) =>
    setCurrentMovimentation((prev: IMovimentation) => ({
      ...prev,
      [field]: value,
    }));

  const handleEditMovimentation = () => {
    editMovimentation(currentMovimentation.id, currentMovimentation);
    closeEditModal();
    resetCurrentMovimentation();
  };

  return (
    <AnimatePresence>
      {editModalIsOpen && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={transition}
          className="bg-neutral-900 text-white border border-white border-opacity-50 min-w-[320px] w-[90%] max-w-[620px] mx-auto fixed rounded-lg p-3 flex flex-col gap-y-6"
        >
          <Header>
            <H1>Edição de Movimentação</H1>
            <CloseButton handleCloseModal={closeEditModal} />
          </Header>
          <main>
            <Form>
              <InputWrapper>
                <label htmlFor="date">Data da movimentação</label>
                <Input
                  type="date"
                  id="date"
                  value={currentMovimentation.date as string}
                  field="date"
                  required={true}
                  handleChange={handleUpdateMovimentation}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="value">Valor da movimentação</label>
                <Input
                  type="number"
                  id="value"
                  placeholder="Valor da movimentação"
                  step={0.1}
                  value={currentMovimentation.value as string}
                  min={0}
                  field="value"
                  required={true}
                  handleChange={handleUpdateMovimentation}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="reason">Motivo da movimentação</label>
                <Input
                  type="text"
                  id="reason"
                  placeholder="Breve descrição da movimentação"
                  value={currentMovimentation.reason}
                  field="reason"
                  required={true}
                  handleChange={handleUpdateMovimentation}
                />
              </InputWrapper>
              <EditButton handleEditMovimentation={handleEditMovimentation} />
            </Form>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditModal;
