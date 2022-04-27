import { Box, Typography } from "@mui/material";
import { ICollectionEntryDataType } from "./CollectionEntry";
import CollectionEntryBottomPacksPart from "./subcomponents/CollectionEntryBottomPacksPart";
import CollectionEntryTopPart from "./subcomponents/CollectionEntryTopPart";

export type CollectionEntryInnerPropsType = {
  data: ICollectionEntryDataType;
};

const CollectionEntryInner: React.FC<CollectionEntryInnerPropsType> = ({
  data,
}) => {
  const { name } = data;
  // *************** RENDER *************** //
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontSize: [18, 18, 24],
          mb: [1.5, 1.5, 2.5],
        }}
      >
        {name}
      </Typography>
      <CollectionEntryTopPart data={data} />
      <CollectionEntryBottomPacksPart data={data} />
    </Box>
  );
};

export default CollectionEntryInner;
