import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrentMovimentationProvider } from "../context/CurrentMovimentationCtx.tsx";
import { CurrentRemoveTargetProvider } from "../context/CurrentRemoveTargetCtx.tsx";
import { MovimentationProvider } from "../context/MovimentationCtx.tsx";
import { OpenCloseAddModalProvider } from "../context/OpenCloseAddModalCtx.tsx";
import { OpenCloseRemoveModalProvider } from "../context/OpenCloseRemoveModalCtx.tsx";
import { OpenCloseEditModalProvider } from "../context/OpenCloseEditModalCtx.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovimentationProvider>
      <OpenCloseAddModalProvider>
      	<OpenCloseEditModalProvider>
		      <OpenCloseRemoveModalProvider>
		        <CurrentMovimentationProvider>
		          <CurrentRemoveTargetProvider>
		            <App />
		          </CurrentRemoveTargetProvider>
		        </CurrentMovimentationProvider>
		      </OpenCloseRemoveModalProvider>
      	</OpenCloseEditModalProvider>
      </OpenCloseAddModalProvider>
    </MovimentationProvider>
  </StrictMode>
);
