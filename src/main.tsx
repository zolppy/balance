import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CurrentMovimentationProvider from "./context/CurrentMovimentation/Provider.tsx";
import CurrentRemoveTargetProvider from "./context/CurrentRemoveTarget/Provider.tsx";
import MovimentationProvider from "./context/Movimentation/Provider.tsx";
import OpenCloseAddDialogProvider from "./context/OpenCloseAddDialog/Provider.tsx";
import OpenCloseRemoveDialogProvider from "./context/OpenCloseRemoveDialog/Provider.tsx";

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
