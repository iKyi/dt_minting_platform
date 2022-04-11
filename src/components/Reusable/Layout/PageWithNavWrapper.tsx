import { Box, styled } from "@mui/material";
import { GENERAL_SETTINGS } from "constants/generalSettings";
import AppLeftMenu from "components/Reusable/Layout/AppLeftMenu";
import PublicHeader from "./PublicHeader";

export const LeftNavDesktopWidth = 240;

const DesktopLeftMenuWrapper = styled(Box)(({ theme }) => ({
  width: LeftNavDesktopWidth,
  position: "sticky",
  top: 0,
  left: 0,
  maxHeight: "100vh",
  overflowY: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MainWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  margin: "0 auto",
  minHeight: "100%",
  display: "flex",
  paddingTop: theme.spacing(3),
  maxWidth: GENERAL_SETTINGS.CONTENT_LIMITED_WIDTH,
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: `calc(100% - ${LeftNavDesktopWidth}px)`,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  marginLeft: "auto",
}));

export type PageWithNavWrapperPropsType = {
  children?: any;
};

const PageWithNavWrapper: React.VFC<PageWithNavWrapperPropsType> = ({
  children,
}) => {
  // *************** RENDER *************** //
  return (
    <>
      <PublicHeader />
      <MainWrapper>
        <DesktopLeftMenuWrapper>
          <AppLeftMenu />
        </DesktopLeftMenuWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default PageWithNavWrapper;
