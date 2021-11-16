import { Header, Footer } from "./Layout/Layout";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import SideMenu from "./Menu/SideMenu";
import { MenuProvider } from "../context/menuContext";

function App() {
  // const { data, isLoading } = useFirestoreCollection("projects");
  // console.log(data);

  return (
    <MenuProvider>
      <main>
        <CssBaseline />
        <Header />
        <SideMenu />
        <Outlet />
        <Footer />
      </main>
    </MenuProvider>
  );
}

export default App;
