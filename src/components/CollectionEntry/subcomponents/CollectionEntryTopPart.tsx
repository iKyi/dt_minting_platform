import { OpenInNew } from "@mui/icons-material";
import { Box, Grid, Link as MUILink, Button } from "@mui/material";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import { centerFlex, flexColumn } from "lib/sxUtils";
import { ICollectionEntryDataType } from "../CollectionEntry";
import CollectionEntryHeaderTabsAndSocial from "./CollectionEntryHeaderTabsAndSocial";

const TagsWhitepaperBox: React.FC<
  Pick<ICollectionEntryDataType, "tags" | "whitepaperUrl">
> = ({ tags, whitepaperUrl }) => {
  const tagEntries = tags?.map((item: any) => item) ?? null;

  return (
    <Box sx={{ mt: "auto", pt: [2, 2, 3] }}>
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        {tagEntries && tagEntries.length > 0
          ? tagEntries.map((tagEntry: string) => (
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

export type CollectionEntryTopPartPropsType = {
  data: ICollectionEntryDataType;
};

const CollectionEntryTopPart: React.FC<CollectionEntryTopPartPropsType> = ({
  data,
}) => {
  const { tags, whitepaperUrl, image, name } = data;
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
            <CollectionEntryHeaderTabsAndSocial data={data} />

            {/* TAGS BOXES */}
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

export default CollectionEntryTopPart;
