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
    <article className="uppercase leading-6">
      <p>
        Total recebido:{" "}
        <span className="text-green-600 font-bold">
          {moneyFormatter(totalReceived)}
        </span>
      </p>
      <p>
        Total gasto:{" "}
        <span className="text-red-600 font-bold">
          {moneyFormatter(totalSpent)}
        </span>
      </p>
      <p>
        Saldo:{" "}
        <span className="text-blue-600 font-bold">
          {moneyFormatter(balance)}
        </span>
      </p>
    </article>
  );
};

export default Informations;
