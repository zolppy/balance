import { useContext } from "react";
import { CurrentMovimentationCtx } from "./Ctx";
import { ICurrentMovimentationCtx } from "./Interface";

export const useCurrentMovimentation = (): ICurrentMovimentationCtx => {
  const context = useContext(CurrentMovimentationCtx);
  if (!context) {
    throw new Error(
      "useCurrentMovimentation must be used within a CurrentMovimentationProvider"
    );
  }
  return context;
};
