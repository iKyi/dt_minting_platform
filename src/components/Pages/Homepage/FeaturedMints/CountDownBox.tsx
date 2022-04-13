import { Box, SxProps, Typography } from "@mui/material";
import useCountdown from "hooks/useCountdown";
import { FONTS } from "lib/theme/index";

export type CountDownBoxPropsType = {
  children?: string | null | false;
  sx?: SxProps;
  smaller?: boolean;
  onlyValue?: boolean;
};

const CountDownBox: React.VFC<CountDownBoxPropsType> = ({
  children,
  smaller,
  sx: propsSx,
  onlyValue,
}) => {
  const countdownValue = useCountdown(children);

  // *************** RENDER *************** //
  if (onlyValue)
    return (
      <Typography
        component="span"
        sx={{ fontSize: "inherit", color: "inherit", fontWeight: "inherit" }}
      >
        {countdownValue}
      </Typography>
    );
  return (
    <Box
      sx={{
        minWidth: ["100%", "100%", 240],
        ...propsSx,
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: `rgba(0,0,0,0.18)`,
        ml: "auto",
        p: 0.5,
      }}
    >
      {!smaller && (
        <Box sx={{ fontFamily: FONTS.FURORE, fontSize: "0.8rem" }}>
          COUNTDOWN
        </Box>
      )}

      <Box
        sx={{
          color: "error.main",
          fontSize: !smaller ? "1.15rem" : "0.85rem",
          fontWeight: !smaller ? 600 : 700,
        }}
      >
        {countdownValue ?? "TBA"}
      </Box>
    </Box>
  );
};

export default CountDownBox;
