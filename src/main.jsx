import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import Navbar from "./components/Fragments/Navbar";

document.body.classList.add("hide-scrollbar");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Layout />
  </StrictMode>
);
