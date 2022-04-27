import { mockCollectionDataItems } from "assets/mockData/collections/mockCollectionItems";
import BoxLoader from "components/Reusable/BoxLoader";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import axiosGetter from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CollectionEntryInner from "./CollectionEntryInner";
export type CollectionEntryPropsType = {};

export type ICollectionEntryDataType = {
  tags: string[];
  roadmap?: string;
  teamMembers?: { name: string; title: string; description: string }[];
  whitepaperUrl?: string;
  name: string;
  id: string;
  image: string;
  discord?: string;
  siteUrl?: string;
  twitter?: string;
};

const CollectionEntry: React.FC<CollectionEntryPropsType> = () => {
  const [pageData, setPageData] = useState<ICollectionEntryDataType | null>(
    null
  );

  const { id: paramId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosGetter(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(() => {
        const pageData = mockCollectionDataItems.find(
          (item) => item.id === paramId
        );

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
      {!pageData ? <BoxLoader /> : <CollectionEntryInner data={pageData} />}
    </PageWithNavWrapper>
  );
};

export default CollectionEntry;
