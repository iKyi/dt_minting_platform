import { Route, Routes } from "react-router-dom";
import "./App.css";
import FourOhFour from "components/FourOhFour/404";
import GlobalModalsWrapper from "components/GlobalModalsWrapper";
import Home from "pages/Home";
import SnackbarProvider from "providers/SnackbarProvider";
import AppLoader from "components/Reusable/AppLoader";
import BlockingSnabarsProvider from "components/BlockingSnabarsProvider";
import AboutUsPage from "pages/AboutUsPage";
import NftsPage from "pages/NftsPage";
import LaunchpadPage from "pages/LaunchpadPage";
import DevelopersPage from "pages/DevelopersPage";
import ProjectsPage from "pages/ProjectsPage";
import LaunchpadPageEntry from "components/Pages/LaunchpadEntry/LaunchpadPageEntry";
import CollectionsPage from "pages/CollectionsPage";
import CollectionEntry from "components/CollectionEntry/CollectionEntry";
import PackEntryIndex from "components/PackEntry/PackEntryIndex";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CollectionsPage />} path="/collections" />
        <Route element={<CollectionEntry />} path="/collections/:id" />
        <Route element={<PackEntryIndex />} path="/collections/:id/packs/:id" />
        <Route element={<AboutUsPage />} path="/about-us" />
        <Route element={<NftsPage />} path="/nfts" />
        <Route element={<LaunchpadPage />} path="/launchpad" />
        <Route element={<LaunchpadPageEntry />} path="/launchpad/:id" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<DevelopersPage />} path="/developers" />
        <Route element={<FourOhFour />} path="*" />
      </Routes>
      <GlobalModalsWrapper />
      <SnackbarProvider />
      <AppLoader />
      <BlockingSnabarsProvider />
    </>
  );
};

export default App;
