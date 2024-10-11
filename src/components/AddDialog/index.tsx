import { FC, FormEvent, JSX, useEffect, useRef } from "react";
import ApplyButton from "./ApplyButton";
import Container from "../Dialog/Container";
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

const AddDialog: FC = (): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { closeAddDialog, setAddDialogRef }: any = useOpenCloseAddDialogCtx();
  const { setCurrentMovimentation }: any = useCurrentMovimentationCtx();

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
    setAddDialogRef(dialogRef.current);
  }, []);

  return (
    <dialog ref={dialogRef}>
      <Container>
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
                field="reason"
                handleChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="type">Tipo da movimentação</label>
              <Select id="type" field="type" handleChange={handleChange}>
                <option value={MovimentationType.Income}>Valor recebido</option>
                <option value={MovimentationType.Outcome}>Valor gasto</option>
              </Select>
            </InputWrapper>
            <ApplyButton />
          </Form>
        </main>
      </Container>
    </dialog>
  );
};

export default AddDialog;
