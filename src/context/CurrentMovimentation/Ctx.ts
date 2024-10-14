import { createContext } from "react";
import { ICurrentMovimentationCtx } from "./Interface";

export const CurrentMovimentationCtx = createContext<
  ICurrentMovimentationCtx | undefined
>(undefined);
