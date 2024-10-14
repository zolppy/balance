import { useEffect, useState } from "react";
import { moneyFormatter } from "../../utils/functions/formatter";
import { useMovimentation } from "../../context/MovimentationCtx";
import { IMovimentation } from "../../utils/interfaces/movimentation";

const Informations: React.FC = (): React.JSX.Element => {
  const { receivedValues, spentValues } = useMovimentation();
  const [totalReceived, setTotalReceived] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const sum = (arr: IMovimentation[]): number =>
      Array.from(arr)
        .map((item) => item.value)
        .reduce((acm, curr) => Number(acm) + Number(curr), 0) as number;

    setTotalReceived(sum(receivedValues));
    setTotalSpent(sum(spentValues));
  }, [receivedValues, spentValues]);

  useEffect(() => {
    setBalance(totalReceived - totalSpent);
  }, [totalReceived, totalSpent]);

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
