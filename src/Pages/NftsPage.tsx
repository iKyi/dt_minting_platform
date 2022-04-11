import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";

export type NftsPagePropsType = {
  children?: any;
};

const NftsPage: React.VFC<NftsPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return <PageWithNavWrapper>nfts page</PageWithNavWrapper>;
};

export default NftsPage;
