import BoxLoader from "components/Reusable/BoxLoader";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";
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
    axiosStrapiGetter(
      `mint-collections?populate=*&filters[mintId][$eq]=${paramId}`
    )
      .then((resp) => {
        const pageData = resp.data[0].attributes;
        if (!pageData) {
          navigate("/404");
        } else {
          setPageData(pageData);
        }
      })
      .catch((err) => {
        navigate("/404");
      });
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
