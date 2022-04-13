import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import SquareBoxTitle from "components/Reusable/Layout/SquareBoxTitle";
import { useEffect, useState } from "react";
import futureMints from "mockData/futureMints";
import FeaturedMintEntry, {
  IMintDataType,
} from "../../Launchpad/FeaturedMintEntry";

export type FeaturedMintsWrapperPropsType = {
  children?: any;
};

const FeaturedMintsWrapper: React.VFC<FeaturedMintsWrapperPropsType> = ({
  children,
}) => {
  const [mintItems, setMintItems] = useState<IMintDataType[]>([]);

  useEffect(() => {
    setMintItems(futureMints);
  }, []);

  // *************** RENDER *************** //
  return (
    <SquareBorderBox darkborder sx={{ mt: [1.5, 1.5, 2.5], p: 1.5 }}>
      <SquareBoxTitle>{"Featured upcoming events"}</SquareBoxTitle>
      {mintItems.map((item) => {
        return <FeaturedMintEntry data={item} key={item.name} />;
      })}
      {children}
    </SquareBorderBox>
  );
};

export default FeaturedMintsWrapper;
