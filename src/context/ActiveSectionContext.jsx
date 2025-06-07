import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext();

const ActiveSectionProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("home");
  return (
    <ActiveSectionContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

const useActivePage = () => useContext(ActiveSectionContext);

export { ActiveSectionProvider, useActivePage };
