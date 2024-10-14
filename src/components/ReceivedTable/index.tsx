import { useRef } from "react";
import { useMovimentation } from "../../context/Movimentation/Hook";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../utils/functions/formatter";
import Td from "../Td";
import Th from "../Th";
// import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";
import TableButtonWrapper from "../TableButtonWrapper";
import { useOpenCloseRemoveDialog } from "../../context/OpenCloseRemoveDialog/Hook";
import { useCurrentRemoveTarget } from "../../context/CurrentRemoveTarget/Hook";

const ReceivedTable: React.FC = (): React.JSX.Element => {
  const trRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const { receivedValues } = useMovimentation();
  const { openRemoveDialog } = useOpenCloseRemoveDialog();
  const { setRemoveTargetID } = useCurrentRemoveTarget();

  const remove = (index: number) => {
    setRemoveTargetID(trRefs.current[index]?.id as string);
    openRemoveDialog();
  };

  return (
    <table className="w-full">
      <thead className="bg-green-700">
        <tr>
          <Th>Data</Th>
          <Th>Valor</Th>
          <Th>Razão</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody className="bg-green-600 text-white">
        {receivedValues.map((receivedValue: IMovimentation, index: number) => (
          <tr
            key={receivedValue.id}
            id={receivedValue.id}
            className="hover:bg-green-500 transition-colors"
            ref={(el) => (trRefs.current[index] = el)}
          >
            <Td>{receivedValue.date.toString()}</Td>
            <Td>{moneyFormatter(Number(receivedValue.value))}</Td>
            <td className="border border-white border-opacity-20 p-2">
              {receivedValue.reason}
            </td>
            <Td>
              <TableButtonWrapper>
                {/* <EditButton /> */}
                <RemoveButton index={index} handleClick={remove} />
              </TableButtonWrapper>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReceivedTable;
