import { Box, CardActionArea, Typography } from "@mui/material";
import { IPackDetailDataType } from "./PackEntryIndex";
import { Link as NavLink } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";
import { centerFlex } from "lib/sxUtils";
import PackGrid from "./comp/PackGrid";

export type PackEntryInnerPropsType = {
  data: IPackDetailDataType;
};

const PackEntryInner: React.FC<PackEntryInnerPropsType> = ({ data }) => {
  const { collectionId, collectionName } = data;
  // *************** RENDER *************** //
  return (
    <Box>
      <CardActionArea component={NavLink} to={`/collections/${collectionId}`}>
        <Typography
          variant="h1"
          sx={{
            color: "primary.main",
            fontSize: [18, 18, 24],
            mb: [1.5, 1.5, 2.5],
            ...centerFlex,
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
            }}
          >
            <ChevronLeft fontSize="inherit" />
          </Box>
          {collectionName}
        </Typography>
      </CardActionArea>
      <PackGrid items={data.cards} title={"PACK OPENING"} />
    </Box>
  );
};

export default PackEntryInner;
