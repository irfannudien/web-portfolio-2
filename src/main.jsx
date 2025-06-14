import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollProvider>
      <ActiveSectionProvider>
        <Layout />
      </ActiveSectionProvider>
    </SmoothScrollProvider>
  </StrictMode>
);
