import { CircularProgress, Box } from "@mui/material";
import { centerFlex } from "lib/sxUtils";

export type BoxLoaderPropsType = {};

const BoxLoader: React.VFC<BoxLoaderPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        width: 200,
        m: "0 auto",
        height: 200,
        ...centerFlex,
      }}
    >
      <CircularProgress color="primary" size={50} />
    </Box>
  );
};

export default BoxLoader;
