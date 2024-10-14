import { FC, FormEvent, JSX } from "react";

import AddButton from "./AddButton";
import CloseButton from "../Dialog/CloseButton";
import Form from "../Dialog/Form";
import Header from "../Dialog/Header";
import H1 from "../Dialog/H1";
import Input from "../Dialog/Input";
import InputWrapper from "../Dialog/InputWrapper";
import Select from "../Dialog/Select";

import { useCurrentMovimentation } from "../../context/CurrentMovimentationCtx";
import { AnimatePresence, motion } from "framer-motion";
import MovimentationType from "../../utils/enums/movimentationType";
import { useOpenCloseAddDialog } from "../../context/OpenCloseAddDialogCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";

const AddDialog: FC = (): JSX.Element => {
  const { addDialogIsOpen, closeAddDialog } = useOpenCloseAddDialog();
  const { currentMovimentation, setCurrentMovimentation } =
    useCurrentMovimentation();

  const handleSubmit = (event: FormEvent) => event.preventDefault();

  const handleChange = (field: string, value: string) =>
    setCurrentMovimentation((prev: IMovimentation) => ({
      ...prev,
      [field]: value,
    }));

  return (
    <AnimatePresence>
      {addDialogIsOpen && (
        <motion.div
          initial={{ top: "150%", translateY: "-50%" }}
          animate={{ top: "50%", translateY: "-50%" }}
          exit={{ top: "150%", translateY: "-50%" }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-black text-white border border-white min-w-[320px] w-[90%] max-w-[620px] mx-auto fixed rounded-lg p-3 flex flex-col gap-y-6"
        >
          <Header>
            <H1>Adição de Movimentação</H1>
            <CloseButton handleCloseDialog={closeAddDialog} />
          </Header>
          <main>
            <Form handleSubmit={handleSubmit}>
              <InputWrapper>
                <label htmlFor="date">Data da movimentação</label>
                <Input
                  type="date"
                  id="date"
                  value={currentMovimentation.date as string}
                  field="date"
                  handleChange={handleChange}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="value">Valor da movimentação</label>
                <Input
                  type="number"
                  id="value"
                  placeholder="2,00"
                  step={0.1}
                  value={currentMovimentation.value as string}
                  min={0}
                  field="value"
                  handleChange={handleChange}
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
                  handleChange={handleChange}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="type">Tipo da movimentação</label>
                <Select id="type" field="type" handleChange={handleChange}>
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

export default AddDialog;
