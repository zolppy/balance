import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MovimentationProvider } from "./context/MovimentationCtx.tsx";
import { OpenCloseAddDialogProvider } from "./context/OpenCloseAddDialogCtx.tsx";
import { CurrentMovimentationProvider } from "./context/CurrentMovimentationCtx.tsx";
import { OpenCloseRemoveDialogProvider } from "./context/OpenCloseRemoveDialogCtx.tsx";
import { CurrentRemoveTargetProvider } from "./context/CurrentRemoveTargetCtx.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovimentationProvider>
      <OpenCloseAddDialogProvider>
        <OpenCloseRemoveDialogProvider>
          <CurrentMovimentationProvider>
            <CurrentRemoveTargetProvider>
              <App />
            </CurrentRemoveTargetProvider>
          </CurrentMovimentationProvider>
        </OpenCloseRemoveDialogProvider>
      </OpenCloseAddDialogProvider>
    </MovimentationProvider>
  </StrictMode>
);
