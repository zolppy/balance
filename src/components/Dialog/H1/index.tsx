import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return <h1 className="font-bold text-xl">{children}</h1>;
}
