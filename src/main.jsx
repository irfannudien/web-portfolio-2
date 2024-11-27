import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Elements/Button";
import { FaHome } from "react-icons/fa";
import SideNav from "./components/Fragments/SideNav";
import Layout from "./pages/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideNav />
    <Layout />
  </StrictMode>
);
