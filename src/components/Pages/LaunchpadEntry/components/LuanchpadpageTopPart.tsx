import { OpenInNew } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Link as MUILink,
  Button,
} from "@mui/material";
import { IMintDataType } from "components/Pages/Launchpad/FeaturedMintEntry";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import MintProgressInfo from "components/Reusable/MintProgressInfo";
import SocialList from "components/Reusable/SocialList";
import ValueBox from "components/Reusable/ValueBox";
import { centerFlex, flexColumn } from "lib/sxUtils";

const TagsWhitepaperBox: React.FC<
  Pick<IMintDataType, "tags" | "whitepaperUrl">
> = ({ tags, whitepaperUrl }) => {
  return (
    <Box sx={{ mt: "auto", pt: [2, 2, 3] }}>
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        {tags && tags.length > 0
          ? tags.map((tagEntry) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={tagEntry}>
                <Box
                  sx={{
                    py: [0.7, 0.7, 0.9],
                    px: 1.5,
                    textAlign: "center",
                    textTransform: "uppercase",
                    border: "1px solid",
                    borderColor: `rgba(255,255,255,0.55)`,
                    color: "primary.main",
                    fontSize: "0.85rem",
                    lineHeight: 1,
                    ...centerFlex,
                  }}
                >
                  {tagEntry}
                </Box>
              </Grid>
            ))
          : null}
        {whitepaperUrl && (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ ml: ["undefined", "undefined", "auto"] }}
          >
            <Box
              sx={{
                textAlign: "right",
              }}
            >
              <MUILink
                underline="hover"
                component={Button}
                href={whitepaperUrl}
                target="_blank"
                rel="noopener"
                startIcon={<OpenInNew />}
                sx={{
                  color: "common.white",
                }}
              >
                WHITEPAPER
              </MUILink>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

const HeaderPart: React.FC<{ data: IMintDataType }> = ({
  data: { supply, mintPrice, soldOut, releaseDate, discord, siteUrl, twitter },
}) => {
  return (
    <Box>
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        <Grid item xs={12} sm={6} lg={3}>
          <ValueBox title="Supply" value={supply} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ValueBox title="Mint price" value={`${mintPrice} SOL`} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              bgcolor: `rgba(0,0,0,0.18)`,
              py: [0.7, 0.7, 0.9],
              px: 1.5,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            <MintProgressInfo releaseDate={releaseDate} soldOut={soldOut} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <SocialList
              discord={discord}
              twitter={twitter}
              website={siteUrl}
              sx={{ display: "inline-flex" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export type LuanchpadpageTopPartPropsType = {
  data: IMintDataType;
};

const LuanchpadpageTopPart: React.VFC<LuanchpadpageTopPartPropsType> = ({
  data,
}) => {
  const { image, name, description, tags, whitepaperUrl } = data;
  // *************** RENDER *************** //
  return (
    <SquareBorderBox
      sx={{
        p: [0.7, 0.7, 1],
      }}
    >
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={9}
          sx={{
            order: [3, 3, 2],
          }}
        >
          <Box sx={{ ...flexColumn, height: "100%" }}>
            <HeaderPart data={data} />
            <Divider sx={{ my: [1.5, 1.5, 2] }} />
            {description && <Typography>{description}</Typography>}
            <TagsWhitepaperBox tags={tags} whitepaperUrl={whitepaperUrl} />
          </Box>
          {/* CONTENT ENDS HERE */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          sx={{
            order: [2, 2, 3],
          }}
        >
          <img
            src={image}
            alt={`Mint pic for ${name}`}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </SquareBorderBox>
  );
};

export default LuanchpadpageTopPart;
