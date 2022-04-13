import { Box, Typography } from "@mui/material";
import { IMintDataType } from "../Launchpad/FeaturedMintEntry";
import LaunchpadpageBottomTabsPart from "./components/LaunchpadpageBottomTabsPart";
import LuanchpadpageTopPart from "./components/LuanchpadpageTopPart";

export type LuanchpadPageInnerPropsType = {
  data: IMintDataType;
};

const LuanchpadPageInner: React.VFC<LuanchpadPageInnerPropsType> = ({
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
      <LuanchpadpageTopPart data={data} />
      <LaunchpadpageBottomTabsPart data={data} />
    </Box>
  );
};

export default LuanchpadPageInner;
