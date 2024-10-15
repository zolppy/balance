import { ReactNode } from "react";
import { movimentationType } from "../../../../utils/types/movimentation";
import { MovimentationType } from "../../../../utils/enums/movimentationType";

interface IBodyRow {
  id: string;
  index: number;
  rowType: movimentationType;
  setRef: (el: HTMLTableRowElement | null, index: number) => void;
  children: ReactNode;
}

const BodyRow = ({ id, index, rowType, setRef, children }: IBodyRow) => {
  return (
    <tr
      id={id}
      className={`hover:${
        rowType === MovimentationType.Income ? "bg-green-500" : "bg-red-500"
      } transition-colors`}
      ref={(el) => setRef(el, index)}
    >
      {children}
    </tr>
  );
};

export default BodyRow;
