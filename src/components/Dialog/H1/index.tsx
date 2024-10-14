import { FC, JSX, ReactNode } from "react";

const H1: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  return <h1 className="font-bold text-xl">{children}</h1>;
};

export default H1;
