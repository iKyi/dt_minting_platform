import { Box, Drawer } from "@mui/material";
import LogoSmallIcon from "components/Icons/LogoSmall";
import AppLeftMenu from "../AppLeftMenu";
import { StyledLinkForHeaderLogo } from "./PublicHeader";

export type MobileMenuPropsType = {
  open: boolean;
  closeMobileMenu: any;
};

const MobileMenu: React.VFC<MobileMenuPropsType> = ({
  open,
  closeMobileMenu,
}) => {
  // *************** RENDER *************** //
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={closeMobileMenu}
      PaperProps={{
        sx: {
          bgcolor: "common.black",
          py: 3,
          px: 1.5,
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <StyledLinkForHeaderLogo to="/">
          <LogoSmallIcon color="inherit" fontSize="inherit" />
        </StyledLinkForHeaderLogo>
      </Box>

      <AppLeftMenu />
    </Drawer>
  );
};

export default MobileMenu;
