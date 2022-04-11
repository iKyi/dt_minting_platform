import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type DevelopersPagePropsType = {
  children?: any;
};

const DevelopersPage: React.VFC<DevelopersPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return <PageWithNavWrapper>deveopers page</PageWithNavWrapper>;
};

export default DevelopersPage;
