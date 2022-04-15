import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import SquareBoxTitle from "components/Reusable/Layout/SquareBoxTitle";
import { useEffect, useState } from "react";
import futureMints from "mockData/futureMints";
import FeaturedMintEntry, {
  IMintDataType,
} from "../../Launchpad/FeaturedMintEntry";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";

export const mapCollectionsUtil = (collections: any) => {
  return collections?.map((item: any) => item.attributes);
};

export type FeaturedMintsWrapperPropsType = {};

const FeaturedMintsWrapper: React.VFC<FeaturedMintsWrapperPropsType> = () => {
  const [mintItems, setMintItems] = useState<IMintDataType[]>([]);

  useEffect(() => {
    axiosStrapiGetter("mint-collections?populate=*").then((procResponse) => {
      const { data } = procResponse;
      setMintItems(mapCollectionsUtil(data));
    });
    setMintItems(futureMints);
  }, []);

  // *************** RENDER *************** //
  return (
    <SquareBorderBox darkborder sx={{ mt: [1.5, 1.5, 2.5], p: 1.5 }}>
      <SquareBoxTitle>{"Featured upcoming events"}</SquareBoxTitle>
      {mintItems.map((item) => {
        return <FeaturedMintEntry data={item} key={item.name} />;
      })}
      {!mintItems || mintItems.length === 0 ? "No future events" : null}
    </SquareBorderBox>
  );
};

export default FeaturedMintsWrapper;
