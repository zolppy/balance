import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MovimentationProvider } from "./context/MovimentationCtx.tsx";
import { OpenCloseAddDialogProvider } from "./context/OpenCloseAddDialogCtx.tsx";
import { CurrentMovimentationProvider } from "./context/CurrentMovimentationCtx.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovimentationProvider>
      <OpenCloseAddDialogProvider>
        <CurrentMovimentationProvider>
          <App />
        </CurrentMovimentationProvider>
      </OpenCloseAddDialogProvider>
    </MovimentationProvider>
  </StrictMode>
);
