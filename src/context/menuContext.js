import React from "react";
import { useState, useEffect, useContext } from "react";

const MenuContext = React.createContext();
const { Provider } = MenuContext;

const MenuProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(null);
  const [menuLoad, setMenuLoad] = useState(true);

  useEffect(() => {
    setMenuToggle(false);
    setMenuLoad(false);
  }, []);

  const toggleMenuDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuToggle({ ...menuToggle, [anchor]: open });
  };

  return (
    <Provider value={{ menuToggle, toggleMenuDrawer, menuLoad }}>
      {children}
    </Provider>
  );
};

const useMenu = () => {
  const menuContext = useContext(MenuContext);
  if (menuContext == null) {
    console.log("useMenu doit etre utilisee a l'interieur de MenuProvider");
  }
  return menuContext;
};

export { useMenu, MenuProvider };
