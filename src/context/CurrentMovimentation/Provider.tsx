import { FC, ReactNode, useState } from "react";
import MovimentationType from "../../utils/enums/movimentationType";
import { IMovimentation } from "../../utils/interfaces/movimentation";
import { CurrentMovimentationCtx } from "./Ctx";

const CurrentMovimentationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentMovimentation, setCurrentMovimentation] =
    useState<IMovimentation>({
      id: "",
      date: "",
      value: "",
      reason: "",
      type: MovimentationType.Outcome,
    });

  const resetCurrentMovimentationFields = () => {
    setCurrentMovimentation({
      id: "",
      date: "",
      value: "",
      reason: "",
      type: MovimentationType.Outcome,
    });
  };

  return (
    <CurrentMovimentationCtx.Provider
      value={{
        currentMovimentation,
        setCurrentMovimentation,
        resetCurrentMovimentationFields,
      }}
    >
      {children}
    </CurrentMovimentationCtx.Provider>
  );
};

export default CurrentMovimentationProvider;
