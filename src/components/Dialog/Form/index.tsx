interface IForm {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent) => void;
}

const Form: React.FC<IForm> = ({
  children,
  handleSubmit,
}): React.JSX.Element => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {children}
    </form>
  );
};

export default Form;
