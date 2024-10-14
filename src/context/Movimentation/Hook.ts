import { useContext } from "react";
import { MovimentationCtx } from "./Ctx";
import { IMovimentationCtx } from "./Interface";

export const useMovimentation = (): IMovimentationCtx => {
  const context = useContext(MovimentationCtx);
  if (!context) {
    throw new Error(
      "useMovimentation must be used within a MovimentationProvider"
    );
  }
  return context;
};
