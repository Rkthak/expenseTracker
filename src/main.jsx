import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TransactionProvider from "./Store/TransactionContext.jsx";
import ThemeProvider from "./Store/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TransactionProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </TransactionProvider>
  </ThemeProvider>,
);
