import OurNftsBox from "components/Home/OurNftsBox";
import FeaturedMintsWrapper from "components/Pages/Homepage/FeaturedMints/FeaturedMintsWrapper";
import IntroBoxes from "components/Pages/Homepage/IntroBoxes";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type HomePropsType = {};

const Home: React.VFC<HomePropsType> = () => {
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      <IntroBoxes />
      <FeaturedMintsWrapper />
      <OurNftsBox />
    </PageWithNavWrapper>
  );
};

export default Home;
