import { MenuOpenOutlined } from "@mui/icons-material";
import { Box, IconButton, styled } from "@mui/material";
import LogoSmallIcon from "components/Icons/LogoSmall";
import SocialList from "components/Reusable/SocialList";
import WalletLoginButtonTheme from "components/Reusable/WalletLoginButtonTheme";
import { GENERAL_SETTINGS } from "constants/generalSettings";
import dtSocialLinks from "constants/socialLinks";
import { centerFlex } from "lib/sxUtils";
import { CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export const StyledLinkForHeaderLogo = styled(NavLink)(({ theme }) => ({
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

export const PublicHeaderHeight = 68;

const PublicHeader: React.VFC<PublicHeaderPropsType> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileOpen(true);
  };
  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // *************** RENDER *************** //
  return (
    <>
      <Box
        component="header"
        sx={{
          width: "100%",
          bgcolor: `rgba(0,0,0,0.3)`,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          backdropFilter: "blur(2px)",
        }}
      >
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
          <StyledLinkForHeaderLogo to="/">
            <LogoSmallIcon color="inherit" fontSize="inherit" />
          </StyledLinkForHeaderLogo>
          <Box
            sx={{
              ml: "auto",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {children}
            <WalletLoginButtonTheme propStyles={{ marginRight: "10px" }} />
            <SocialList
              discord={dtSocialLinks.discord}
              twitter={dtSocialLinks.twitter}
            />
            <IconButton
              sx={{
                borderRadius: 0,
                ml: 2,
                display: ["inline-flex", "inline-flex", "none"],
              }}
              onClick={openMobileMenu}
            >
              <MenuOpenOutlined />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <MobileMenu open={mobileOpen} closeMobileMenu={closeMobileMenu} />
    </>
  );
};

export default PublicHeader;
