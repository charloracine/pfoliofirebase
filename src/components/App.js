import { useFirestoreCollection } from "../hooks/useFirestoreCollection";
import { Header, Footer } from "./Layout/Layout";
import { Outlet } from "react-router-dom";

function App() {
  // const { data, isLoading } = useFirestoreCollection("projects");
  // console.log(data);

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
