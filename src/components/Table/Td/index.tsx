import { ReactNode } from "react";

const Td = ({ children }: { children: ReactNode }) => {
  return (
    <td className="border border-white border-opacity-20 p-2 text-center">
      {children}
    </td>
  );
};

export default Td;