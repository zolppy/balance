import MovimentationType from "../../../utils/enums/movimentationType";

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
      className="bg-inherit border p-2 rounded-lg"
      onChange={(event) => handleChange(field, event.target.value)}
    >
      {children}
    </select>
  );
};

export default Select;
