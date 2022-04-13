import LaunchpadIndex from "components/Pages/Launchpad/LaunchpadIndex";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type LaunchpadPagePropsType = {
  children?: any;
};

const LaunchpadPage: React.VFC<LaunchpadPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      <LaunchpadIndex />
    </PageWithNavWrapper>
  );
};

export default LaunchpadPage;
