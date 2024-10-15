import { FormEvent, ReactNode } from "react";

const Form = ({ children }: { children: ReactNode }) => {
  const handleSubmit = (event: FormEvent) => event.preventDefault();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {children}
    </form>
  );
};

export default Form;
