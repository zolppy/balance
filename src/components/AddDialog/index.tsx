import { FC, FormEvent, JSX, useEffect } from "react";
import AddButton from "./AddButton";
import Header from "../Dialog/Header";
import H1 from "../Dialog/H1";
import CloseButton from "../Dialog/CloseButton";
import Form from "../Dialog/Form";
import InputWrapper from "../Dialog/InputWrapper";
import Input from "../Dialog/Input";
import Select from "../Dialog/Select";
import { useOpenCloseAddDialogCtx } from "../../context/OpenCloseAddDialogCtx";
import { useCurrentMovimentationCtx } from "../../context/CurrentMovimentationCtx";
import MovimentationType from "../../utils/enums/movimentationType";
import { AnimatePresence, motion } from "framer-motion";
import { useMovimentationCtx } from "../../context/MovimentationCtx";

const AddDialog: FC = (): JSX.Element => {
  const { addDialogIsOpen, closeAddDialog }: any = useOpenCloseAddDialogCtx();
  const { currentMovimentation, setCurrentMovimentation }: any =
    useCurrentMovimentationCtx();
  const { receivedValues, spentValues }: any = useMovimentationCtx();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (field: string, value: string) => {
    setCurrentMovimentation((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    setCurrentMovimentation({
      id: "",
      date: "",
      value: 0,
      reason: "",
      type: MovimentationType.Outcome,
    });
  }, [receivedValues, spentValues]);

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
                  value={currentMovimentation.date}
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
                  value={currentMovimentation.value}
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
