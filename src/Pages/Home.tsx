import { Box } from "@mui/material";
import FeaturedMintsWrapper from "components/Pages/Homepage/FeaturedMints/FeaturedMintsWrapper";
import IntroBoxes from "components/Pages/Homepage/IntroBoxes";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type HomePropsType = {
  children?: any;
};

const Home: React.VFC<HomePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      <IntroBoxes />
      <FeaturedMintsWrapper />
    </PageWithNavWrapper>
  );
};

export default Home;
