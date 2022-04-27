import { mockCardDataEntriesOne } from "assets/mockData/collections/mockCollectionItems";
import BoxLoader from "components/Reusable/BoxLoader";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import axiosGetter from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PackEntryInner from "./PackEntryInner";

export type IPackCardStatus = "claimed" | "unclaimed";

export type IPackCardData = {
  status: IPackCardStatus;
  image: string;
  name: string;
  mintId: string;
};

export type IPackDetailDataType = {
  cards: IPackCardData[];
  id: string;
  collectionId: string;
  collectionName: string;
};

export type PackEntryIndexPropsType = {};

const PackEntryIndex: React.FC<PackEntryIndexPropsType> = () => {
  const [pageData, setPageData] = useState<IPackDetailDataType | null>(null);

  // const { id: paramId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosGetter(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(() => {
        const pageData = mockCardDataEntriesOne;

        if (!pageData) {
          navigate("/404");
        } else {
          setPageData(pageData);
        }
      })
      .catch(() => {
        navigate("/404");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      {!pageData ? <BoxLoader /> : <PackEntryInner data={pageData} />}
    </PageWithNavWrapper>
  );
};

export default PackEntryIndex;
