import { ICollectionGridEntry } from "pages/CollectionsPage";
import { Box, CardActionArea, Typography } from "@mui/material";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import { FONTS } from "lib/theme";
import { Link as RouterLink } from "react-router-dom";

export type CollectionsGridEntryPropsType = {
  data: ICollectionGridEntry;
};

const CollectionsGridEntry: React.FC<CollectionsGridEntryPropsType> = ({
  data,
}) => {
  const { image, name, id } = data;
  // *************** RENDER *************** //
  return (
    <SquareBorderBox>
      <CardActionArea component={RouterLink} to={`/collections/${id}`}>
        <Box
          sx={{
            // background: `url('${getStrapiMedia(image)}')`,
            background: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minHeight: [160, 160, 240],
            width: "100%",
            mb: 1.5,
          }}
        />
        <Typography
          sx={{ fontFamily: FONTS.FURORE, textAlign: "center", pb: 2 }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            color: "error.main",
            py: 1.5,
            bgcolor: `rgba(0,0,0,0.18)`,
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          View Details
        </Box>
      </CardActionArea>
    </SquareBorderBox>
  );
};

export default CollectionsGridEntry;
