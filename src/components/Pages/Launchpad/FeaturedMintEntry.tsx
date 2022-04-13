import { Box, Typography } from "@mui/material";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import CountDownBox from "../Homepage/FeaturedMints/CountDownBox";
import FeaturedSupplySocialBox from "../Homepage/FeaturedMints/FeaturedSupplySocialBox";
import { Link as RouterLink } from "react-router-dom";
import { ITeamMember } from "lib/interfaces/ITeamMember";

export type IMintDataType = {
  name: string;
  id: string;
  description: string;
  supply: number;
  image: string;
  mintPrice: number;
  releaseDate: string | false | null;
  released?: boolean;
  discord?: string;
  twitter?: string;
  siteUrl?: string;
  soldOut?: boolean;
  tags?: string[];
  roadmap?: string;
  whitepaperUrl?: string;
  teamMembers?: ITeamMember[];
};

export type FeaturedMintEntryPropsType = {
  data: IMintDataType;
};

const FeaturedMintEntry: React.VFC<FeaturedMintEntryPropsType> = ({
  data: {
    releaseDate,
    description,
    image,
    mintPrice,
    name,
    supply,
    discord,
    released,
    siteUrl,
    twitter,
    id,
  },
}) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: ["flex-start", "stretch"],
        flexWrap: "wrap",
        bgcolor: `rgba(0,0,0,0.16)`,
        "&:not(:last-of-type)": {
          mb: [1, 1, 2.5],
        },
      }}
    >
      <Box
        sx={{
          mb: [0.5, 0.5, 0],
          alignSelf: "stretch",
          display: "flex",
          minHeight: 160,
          background: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "160px",
          mx: ["auto", "auto", undefined],
        }}
      />
      {/* RIGHT SIDE CONTENT HERE */}
      <Box
        sx={{
          p: [1, 1, 2.5],
          display: "flex",
          flexWrap: "wrap",
          flex: [undefined, undefined, 1],
          width: ["100%", "100%", undefined],
        }}
      >
        <Box
          sx={{
            flex: 1,
            pr: [0, 0, 2.5],
            mb: [1.5, 1.5, 0],
            textAlign: ["center", "center", "left"],
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: 17,
              fontFamily: FONTS.FURORE,
              mb: [1, 1.5],
              display: "block",
            }}
            color="error"
            component={RouterLink}
            to={`/launchpad/${id}`}
          >
            {name}
          </Typography>
          <Typography variant="body1" component="div">
            <MarkdownParser>{description}</MarkdownParser>
          </Typography>
          <FeaturedSupplySocialBox
            mintPrice={mintPrice}
            supply={supply}
            discord={discord}
            siteUrl={siteUrl}
            twitter={twitter}
          />
        </Box>
        <CountDownBox>{releaseDate}</CountDownBox>
      </Box>
    </Box>
  );
};

export default FeaturedMintEntry;
