import { useRef } from "react";
import { useMovimentationCtx } from "../../context/MovimentationCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../utils/functions/formatter";
import Td from "../Td";
import Th from "../Th";
import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";
import TableButtonWrapper from "../TableButtonWrapper";
import { useOpenCloseRemoveDialogCtx } from "../../context/OpenCloseRemoveDialogCtx";
import { useCurrentRemoveTargetCtx } from "../../context/CurrentRemoveTargetCtx";

const ReceivedTable: React.FC = ({}): React.JSX.Element => {
  const trRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const { receivedValues }: any = useMovimentationCtx();
  const { openRemoveDialog }: any = useOpenCloseRemoveDialogCtx();
  const { setRemoveTargetID }: any = useCurrentRemoveTargetCtx();

  const remove = (index: number) => {
    setRemoveTargetID(trRefs.current[index]?.id);
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
                <EditButton />
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
