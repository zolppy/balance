import { AnimatePresence, motion } from "framer-motion";
import AddButton from "./AddButton";
import CloseButton from "../Modal/CloseButton";
import Form from "../Modal/Form";
import Header from "../Modal/Header";
import H1 from "../Modal/H1";
import Input from "../Modal/Input";
import InputWrapper from "../Modal/InputWrapper";
import Select from "../Modal/Select";
import { IMovimentation } from "../../../utils/interfaces/movimentation";
import { MovimentationType } from "../../../utils/enums/movimentationType";
import { transition, variants } from "../../../utils/animations/modal";
import { useCurrentMovimentation } from "../../../context/CurrentMovimentationCtx";
import { useOpenCloseAddModal } from "../../../context/OpenCloseAddModalCtx";

const AddModal = () => {
  const { addModalIsOpen, closeAddModal } = useOpenCloseAddModal();
  const { currentMovimentation, setCurrentMovimentation } =
    useCurrentMovimentation();

  const handleUpdateMovimentation = (field: string, value: string) =>
    setCurrentMovimentation((prev: IMovimentation) => ({
      ...prev,
      [field]: value,
    }));

  return (
    <AnimatePresence>
      {addModalIsOpen && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={transition}
          className="bg-neutral-900 text-white border border-white border-opacity-50 min-w-[320px] w-[90%] max-w-[620px] mx-auto fixed rounded-lg p-3 flex flex-col gap-y-6"
        >
          <Header>
            <H1>Adição de Movimentação</H1>
            <CloseButton handleCloseModal={closeAddModal} />
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
              <InputWrapper>
                <label htmlFor="type">Tipo da movimentação</label>
                <Select
                  id="type"
                  field="type"
                  handleChange={handleUpdateMovimentation}
                >
                  <option value={MovimentationType.Income}>
                    Valor recebido
                  </option>
                  <option value={MovimentationType.Outcome}>Valor gasto</option>
                </Select>
              </InputWrapper>
              <AddButton />
            </Form>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddModal;
