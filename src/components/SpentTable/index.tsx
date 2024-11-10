import { useRef } from "react";
import BodyRow from "../Table/BodyRow";
import RemoveButton from "../RemoveButton";
import EditButton from "../EditButton";
import TableButtonWrapper from "../Table/TableButtonWrapper";
import Td from "../Table/Td";
import Th from "../Table/Th";
import { IMovimentation } from "../../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../../utils/functions/formatter";
import { MovimentationType } from "../../../utils/enums/movimentationType";
import { useCurrentRemoveTarget } from "../../../context/CurrentRemoveTargetCtx";
import { useMovimentation } from "../../../context/MovimentationCtx";
import { useOpenCloseRemoveModal } from "../../../context/OpenCloseRemoveModalCtx";
import { useOpenCloseEditModal } from "../../../context/OpenCloseEditModalCtx";
import { useCurrentMovimentation } from "../../../context/CurrentMovimentationCtx";

const SpentTable = () => {
  const { openRemoveModal } = useOpenCloseRemoveModal();
  const { openEditModal } = useOpenCloseEditModal();
  const { setRemoveTargetID } = useCurrentRemoveTarget();
  const { setCurrentMovimentation } = useCurrentMovimentation();
  const { spentValues } = useMovimentation();
  const trRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  const removeMovimentation = (index: number) => {
    setRemoveTargetID(trRefs.current[index]?.id as string);
    openRemoveModal();
  };

  const editMovimentation = (index: number) => {
    openEditModal();

    const treatedDate = String(spentValues[index].date).split("/");
    const newDate = `${treatedDate[2]}-${treatedDate[1]}-${treatedDate[0]}`;

    setCurrentMovimentation({
      id: spentValues[index].id,
      date: newDate,
      value: spentValues[index].value,
      reason: spentValues[index].reason,
      type: spentValues[index].type,
    });
  };

  const setRef = (el: HTMLTableRowElement | null, index: number) =>
    (trRefs.current[index] = el);

  return (
    <>
      {spentValues.length ? (
        <table className="w-full">
          <thead className="bg-red-700">
            <tr>
              <Th>Data</Th>
              <Th>Valor</Th>
              <Th>Razão</Th>
              <Th>Ação</Th>
            </tr>
          </thead>
          <tbody className="bg-red-600">
            {spentValues.map((spentValue: IMovimentation, index: number) => (
              <BodyRow
                key={spentValue.id}
                id={spentValue.id}
                index={index}
                rowType={MovimentationType.Outcome}
                setRef={setRef}
              >
                <Td>{spentValue.date.toString()}</Td>
                <Td>{moneyFormatter(Number(spentValue.value))}</Td>
                <td className="border border-white border-opacity-50 p-2">
                  {spentValue.reason}
                </td>
                <Td>
                  <TableButtonWrapper>
                    <RemoveButton
                      index={index}
                      handleClick={removeMovimentation}
                    />
                    <EditButton index={index} handleClick={editMovimentation} />
                  </TableButtonWrapper>
                </Td>
              </BodyRow>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-red-600 font-bold text-xl">
          Sem dados para exibir
        </h2>
      )}
    </>
  );
};

export default SpentTable;
