import { useEffect, useState } from "react";
import { moneyFormatter } from "../../../utils/functions/formatter";
import { sumMovimentations } from "../../../utils/functions/operations";
import { useMovimentation } from "../../../context/MovimentationCtx";

const Informations = () => {
  const [balance, setBalance] = useState<number>(0);
  const [totalReceived, setTotalReceived] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const { receivedValues, spentValues } = useMovimentation();

  useEffect(() => {
    setBalance(totalReceived - totalSpent);
  }, [totalReceived, totalSpent]);

  useEffect(() => {
    setTotalReceived(sumMovimentations(receivedValues));
    setTotalSpent(sumMovimentations(spentValues));
  }, [receivedValues, spentValues]);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border border-white border-opacity-50 bg-green-700 p-2">
            Recebido
          </th>
          <th className="border border-white border-opacity-50 bg-red-700 p-2">
            Gasto
          </th>
          <th className="border border-white border-opacity-50 bg-blue-700 p-2">
            Saldo
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="border border-white border-opacity-50 bg-green-600 p-2">
            {moneyFormatter(totalReceived)}
          </td>
          <td className="border border-white border-opacity-50 bg-red-600 p-2">
            {moneyFormatter(totalSpent)}
          </td>
          <td className="border border-white border-opacity-50 bg-blue-600 p-2">
            {moneyFormatter(balance)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Informations;
