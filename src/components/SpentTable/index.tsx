import { useRef } from "react";
import { useMovimentationCtx } from "../../context/MovimentationCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../utils/functions/formatter";
import Td from "../Td";
import Th from "../Th";
// import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";
import TableButtonWrapper from "../TableButtonWrapper";
import { useOpenCloseRemoveDialogCtx } from "../../context/OpenCloseRemoveDialogCtx";
import { useCurrentRemoveTargetCtx } from "../../context/CurrentRemoveTargetCtx";

const SpentTable: React.FC = (): React.JSX.Element => {
  const { spentValues }: any = useMovimentationCtx();
  const { openRemoveDialog }: any = useOpenCloseRemoveDialogCtx();
  const { setRemoveTargetID }: any = useCurrentRemoveTargetCtx();
  const trRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  const remove = (index: number) => {
    setRemoveTargetID(trRefs.current[index]?.id);
    openRemoveDialog();
  };

  return (
    <table className="w-full">
      <thead className="bg-red-700 text-white">
        <tr>
          <Th>Data</Th>
          <Th>Valor</Th>
          <Th>Razão</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody className="bg-red-600 text-white">
        {spentValues.map((spentValue: IMovimentation, index: number) => (
          <tr
            key={spentValue.id}
            id={spentValue.id}
            className="hover:bg-red-500 transition-colors"
            ref={(el) => (trRefs.current[index] = el)}
          >
            <Td>{spentValue.date.toString()}</Td>
            <Td>{moneyFormatter(Number(spentValue.value))}</Td>
            <td className="border border-white border-opacity-20 p-2">
              {spentValue.reason}
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

export default SpentTable;
