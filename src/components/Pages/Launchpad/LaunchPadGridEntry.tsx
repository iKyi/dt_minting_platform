import { Box, CardActionArea, Typography } from "@mui/material";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import ValueBox from "components/Reusable/ValueBox";
import { FONTS } from "lib/theme";
import CountDownBox from "../Homepage/FeaturedMints/CountDownBox";
import { IMintDataType } from "./FeaturedMintEntry";
import { Link as RouterLink } from "react-router-dom";

export type LaunchPadGridEntryPropsType = {
  data: IMintDataType;
};

const LaunchPadGridEntry: React.VFC<LaunchPadGridEntryPropsType> = ({
  data: { image, name, supply, mintPrice, releaseDate, id },
}) => {
  // *************** RENDER *************** //
  return (
    <SquareBorderBox>
      <CardActionArea component={RouterLink} to={`/launchpad/${id}`}>
        <Box
          sx={{
            background: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minHeight: [160, 160, 240],
            width: "100%",
            mb: 1.5,
          }}
        />
        <Typography sx={{ fontFamily: FONTS.FURORE, textAlign: "center" }}>
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: 1.5,
          }}
        >
          <ValueBox
            smaller
            title="Supply"
            value={`${supply}`}
            sx={{ mb: 1, width: ["100%", "100%", "auto"] }}
          />
          <ValueBox
            smaller
            title="Mint price"
            value={`${mintPrice} SOL`}
            sx={{ mb: 1, width: ["100%", "100%", "auto"] }}
          />
        </Box>
        <CountDownBox sx={{ width: "100%", minWidth: 0 }} smaller>
          {releaseDate}
        </CountDownBox>
      </CardActionArea>
    </SquareBorderBox>
  );
};

export default LaunchPadGridEntry;
