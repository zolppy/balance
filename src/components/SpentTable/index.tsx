import { useMovimentationCtx } from "../../context/MovimentationCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../utils/functions/formatter";
import Td from "../Td";
import Th from "../Th";
import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";
import TableButtonWrapper from "../TableButtonWrapper";

const SpentTable: React.FC = (): React.JSX.Element => {
  const { spentValues }: any = useMovimentationCtx();

  return (
    <table className="w-full">
      <caption className="uppercase font-bold mb-2">Gastos</caption>
      <thead className="bg-red-700 text-white">
        <tr>
          <Th>Data</Th>
          <Th>Valor</Th>
          <Th>Razão</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody className="bg-red-600 text-white">
        {spentValues.map((spentValue: IMovimentation) => (
          <tr
            key={spentValue.id}
            className="hover:bg-red-500 transition-colors"
          >
            <Td>{spentValue.date.toString()}</Td>
            <Td>{moneyFormatter(Number(spentValue.value))}</Td>
            <Td>{spentValue.reason}</Td>
            <Td>
              <TableButtonWrapper>
                <EditButton />
                <RemoveButton />
              </TableButtonWrapper>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpentTable;
