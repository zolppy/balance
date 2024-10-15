import MovimentationType from "../../../../utils/enums/movimentationType";

interface ISelect {
  id: string;
  children: React.ReactNode;
  field: string;
  handleChange: (field: string, value: string) => void;
}

const Select: React.FC<ISelect> = ({
  id,
  children,
  field,
  handleChange,
}): React.JSX.Element => {
  return (
    <select
      defaultValue={MovimentationType.Outcome}
      id={id}
      required
      onChange={(event) => handleChange(field, event.target.value)}
      className="bg-inherit border p-2 rounded-lg"
    >
      {children}
    </select>
  );
};

export default Select;
