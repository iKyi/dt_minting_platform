import { Box, Stack } from "@mui/material";
import SocialList from "components/Reusable/SocialList";
import ValueBox from "components/Reusable/ValueBox";
import { IMintDataType } from "../../Launchpad/FeaturedMintEntry";

export type FeaturedBoxPropsType = Pick<
  IMintDataType,
  "supply" | "discord" | "twitter" | "mintPrice" | "siteUrl"
>;

const FeaturedSupplySocialBox: React.VFC<FeaturedBoxPropsType> = ({
  mintPrice,
  supply,
  discord,
  siteUrl,
  twitter,
}) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        mt: [1.5, 1.5, 2.5],
        justifyContent: ["center", "center", "center", undefined],
        flexDirection: ["column", "column", "column", "row"],
      }}
    >
      <Stack direction={["column", "column", "column", "row"]}>
        <ValueBox title="Supply" value={`${supply}`} />
        <ValueBox
          title="Mint price"
          value={`${mintPrice} SOL`}
          sx={{
            ml: [0, 0, 0, 5],
            mt: [2, 2, 2, 0],
          }}
        />
      </Stack>
      <SocialList
        discord={discord}
        website={siteUrl}
        twitter={twitter}
        sx={{ ml: [undefined, undefined, undefined, "auto"], mt: [2, 2, 2, 0] }}
      />
    </Box>
  );
};

export default FeaturedSupplySocialBox;
