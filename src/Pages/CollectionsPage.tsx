import { useAppDispatch } from "app/hooks";
import { mockCollectionItems } from "assets/mockData/collections/mockCollectionItems";
import CollectionsGrid from "components/Collections/CollectionsGrid";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { addLoader, removeLoader } from "features/global/globalSlice";
import axiosGetter from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";

export type ICollectionGridEntry = {
  image: string;
  name: string;
  id: string;
};

export type CollectionsPagePropsType = {};

const CollectionsPage: React.FC<CollectionsPagePropsType> = () => {
  const dispatch = useAppDispatch();
  const [gridItems, setGridItems] = useState<ICollectionGridEntry[]>([]);

  useEffect(() => {
    dispatch(addLoader("loadingColl"));
    axiosGetter("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setGridItems(mockCollectionItems);
      dispatch(removeLoader("loadingColl"));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      <CollectionsGrid title="Collections" items={gridItems} />
    </PageWithNavWrapper>
  );
};

export default CollectionsPage;
