import { ReactNode } from "react";
import { MovimentationType } from "../../../../utils/enums/movimentationType";

interface ISelect {
  id: string;
  children: ReactNode;
  field: string;
  handleChange: (field: string, value: string) => void;
}

const Select = ({ id, children, field, handleChange }: ISelect) => {
  return (
    <select
      id={id}
      required
      onChange={(event) => handleChange(field, event.target.value)}
      defaultValue={MovimentationType.Outcome}
      className="bg-inherit border p-2 rounded-lg bg-neutral-900"
    >
      {children}
    </select>
  );
};

export default Select;
