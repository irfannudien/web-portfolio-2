import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import Navbar from "./components/Fragments/Navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Layout />
  </StrictMode>
);
