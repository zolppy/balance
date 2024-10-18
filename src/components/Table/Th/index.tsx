import { ReactNode } from "react";

const Th = ({ children }: { children: ReactNode }) => {
  return (
    <th className="border border-white border-opacity-50 p-2">{children}</th>
  );
};

export default Th;
