import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActiveSectionProvider>
      <Layout />
    </ActiveSectionProvider>
  </StrictMode>
);
