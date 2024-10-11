import { useMovimentationCtx } from "../../context/MovimentationCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { moneyFormatter } from "../../utils/functions/formatter";
import Td from "../Td";
import Th from "../Th";
import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";
import TableButtonWrapper from "../TableButtonWrapper";

const ReceivedTable: React.FC = ({}): React.JSX.Element => {
  const { receivedValues }: any = useMovimentationCtx();

  return (
    <table className="w-full">
      <caption className="uppercase font-bold mb-2">Recebidos</caption>
      <thead className="bg-green-700">
        <tr>
          <Th>Data</Th>
          <Th>Valor</Th>
          <Th>Razão</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody className="bg-green-600">
        {receivedValues.map((receivedValue: IMovimentation) => (
          <tr key={receivedValue.id}>
            <Td>{receivedValue.date.toString()}</Td>
            <Td>{moneyFormatter(Number(receivedValue.value))}</Td>
            <td className="border border-white border-opacity-20 p-2">
              {receivedValue.reason}
            </td>
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

export default ReceivedTable;
