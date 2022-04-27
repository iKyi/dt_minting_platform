import { Box, CardActionArea, Typography } from "@mui/material";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import CountDownBox from "../Homepage/FeaturedMints/CountDownBox";
import FeaturedSupplySocialBox from "../Homepage/FeaturedMints/FeaturedSupplySocialBox";
import { Link as RouterLink } from "react-router-dom";
import { getStrapiMedia } from "lib/theme/media";
import { ITeamMember } from "lib/interfaces/ITeamMember";
import useDisplayMintState from "hooks/useDisplayMintState";
import { centerFlex } from "lib/sxUtils";

export type IMintDataType = {
  name: string;
  id: string;
  mintId: string;
  description: string;
  supply: number;
  image: string;
  mintPrice: number;
  releaseDate: string | false | null;
  discord?: string;
  twitter?: string;
  siteUrl?: string;
  tags?: any;
  roadmap?: string;
  whitepaperUrl?: string;
  candyMachineId: string;
  whitelistOne: boolean;
  whitelistOneText: string;
  whitelistTwo: boolean;
  whitelistTwoText: string;
  whitelistThree: boolean;
  whitelistThreeText: string;
  publicMint: boolean;
  teamMembers?: {
    data: { attributes: ITeamMember }[];
  };
  mintState: "soldOut" | "ended" | "live" | "showTimer" | "showTba";
  whitelistedWallets: Record<any, any>;
};

export type FeaturedMintEntryPropsType = {
  data: IMintDataType;
};

export const DisplayStateBox: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Box
      sx={{
        textTransform: "capitalize",
        color: "error.main",
        fontSize: "1.1rem",
        textAlign: "center",
        fontWeight: 600,
        bgcolor: `rgba(0,0,0,0.16)`,
        py: [0.7],
        px: [1, 1, 1.5],
        ...centerFlex,
      }}
    >
      {content}
    </Box>
  );
};

const FeaturedMintEntry: React.VFC<FeaturedMintEntryPropsType> = ({ data }) => {
  const {
    releaseDate,
    description,
    image,
    mintPrice,
    name,
    supply,
    discord,
    siteUrl,
    twitter,
    mintId,
  } = data;
  const { displayBoxContent } = useDisplayMintState(data);
  const isShowDate = data.mintState === "showTimer";
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
      <CardActionArea
        sx={{
          mb: [0.5, 0.5, 0],
          alignSelf: "stretch",
          display: "flex",
          minHeight: 160,
          background: `url('${getStrapiMedia(image)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "160px",
          mx: ["auto", "auto", undefined],
        }}
        component={RouterLink}
        to={`/launchpad/${mintId}`}
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
              textDecoration: "none",
            }}
            color="error"
            component={RouterLink}
            to={`/launchpad/${mintId}`}
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
        {!isShowDate ? (
          <DisplayStateBox content={displayBoxContent} />
        ) : (
          <CountDownBox>{releaseDate}</CountDownBox>
        )}
      </Box>
    </Box>
  );
};

export default FeaturedMintEntry;
