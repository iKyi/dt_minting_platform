import { Box, styled } from "@mui/material";
import LogoSmallIcon from "components/Icons/LogoSmall";
import { GENERAL_SETTINGS } from "constants/generalSettings";
import { centerFlex } from "lib/sxUtils";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontSize: "44px",
  ...(centerFlex as CSSProperties),
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.error.main,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },
}));

export type PublicHeaderPropsType = {
  children?: any;
};

const PublicHeader: React.VFC<PublicHeaderPropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <Box component="header" sx={{ width: "100%", bgcolor: `rgba(0,0,0,0.3)` }}>
      <Box
        sx={{
          maxWidth: GENERAL_SETTINGS.CONTENT_LIMITED_WIDTH,
          m: "0 auto",
          py: 1.5,
          px: 1.3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledNavLink to="/">
          <LogoSmallIcon color="inherit" fontSize="inherit" />
        </StyledNavLink>
        header inner
      </Box>
    </Box>
  );
};

export default PublicHeader;
