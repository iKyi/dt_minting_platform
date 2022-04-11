import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type AboutUsPagePropsType = {
  children?: any;
};

const AboutUsPage: React.VFC<AboutUsPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return <PageWithNavWrapper>about us page</PageWithNavWrapper>;
};

export default AboutUsPage;
