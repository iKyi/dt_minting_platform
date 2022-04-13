import BoxLoader from "components/Reusable/BoxLoader";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import futureMints from "mockData/futureMints";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMintDataType } from "../Launchpad/FeaturedMintEntry";
import LuanchpadPageInner from "./LuanchpadPageInner";

export type LaunchpadPageEntryPropsType = {};

const LaunchpadPageEntry: React.VFC<LaunchpadPageEntryPropsType> = () => {
  const [pageData, setPageData] = useState<IMintDataType | null>(null);

  const { id: paramId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const pageData = futureMints.find((item) => item.id === paramId);
    if (!pageData) {
      navigate("/404");
    } else {
      setPageData(pageData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      {!pageData ? <BoxLoader /> : <LuanchpadPageInner data={pageData} />}
    </PageWithNavWrapper>
  );
};

export default LaunchpadPageEntry;
