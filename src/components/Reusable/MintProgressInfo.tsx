import { Typography } from "@mui/material";
import CountDownBox from "components/Pages/Homepage/FeaturedMints/CountDownBox";
import { IMintDataType } from "components/Pages/Launchpad/FeaturedMintEntry";
import useIsMintInProgress from "hooks/useIsMintInProgress";

export type MintProgressInfoPropsType = Pick<
  IMintDataType,
  "releaseDate" | "soldOut"
>;

const MintProgressInfo: React.VFC<MintProgressInfoPropsType> = ({
  releaseDate,
  soldOut,
}) => {
  const inProgress = useIsMintInProgress({ releaseDate, soldOut });

  const itemText = inProgress ? (
    "In Progress"
  ) : releaseDate ? (
    <CountDownBox onlyValue>{releaseDate}</CountDownBox>
  ) : (
    "TBA"
  );
  // *************** RENDER *************** //
  return (
    <Typography
      component="span"
      sx={{
        fontSize: "inherit",
        color: inProgress ? "primary.main" : "error.main",
        fontWeight: "bold",
      }}
    >
      {itemText}
    </Typography>
  );
};

export default MintProgressInfo;
