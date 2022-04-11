import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type LaunchpadPagePropsType = {
  children?: any;
};

const LaunchpadPage: React.VFC<LaunchpadPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return <PageWithNavWrapper>Luanchpad</PageWithNavWrapper>;
};

export default LaunchpadPage;
