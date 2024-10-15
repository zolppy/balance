interface IInput {
  type: "text" | "date" | "number";
  id: string;
  placeholder?: string;
  min?: number;
  step?: number;
  value: string;
  field: string;
  required: boolean;
  handleChange: (field: string, value: string) => void;
}

const Input = ({
  type,
  id,
  placeholder,
  min,
  step,
  value,
  field,
  required,
  handleChange,
}: IInput) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      min={min}
      step={step}
      value={value}
      required={required}
      onChange={(event) => handleChange(field, event.target.value)}
      className="bg-inherit border p-2 rounded-lg w-full"
    />
  );
};

export default Input;
