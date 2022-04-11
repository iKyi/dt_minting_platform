import { Route, Routes } from "react-router-dom";
import "./App.css";
import FourOhFour from "components/FourOhFour/404";
import GlobalModalsWrapper from "components/GlobalModalsWrapper";
import Home from "pages/Home";
import SnackbarProvider from "providers/SnackbarProvider";
import AppLoader from "components/Reusable/AppLoader";
import BlockingSnabarsProvider from "components/BlockingSnabarsProvider";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<FourOhFour />} path="*" />
      </Routes>
      <GlobalModalsWrapper />
      <SnackbarProvider />
      <AppLoader />
      <BlockingSnabarsProvider />
    </>
  );
}

export default App;
