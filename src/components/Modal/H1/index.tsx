import { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => {
  return <h1 className="font-bold text-xl">{children}</h1>;
};

export default H1;
