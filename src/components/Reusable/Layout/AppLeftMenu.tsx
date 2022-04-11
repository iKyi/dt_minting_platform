import { Box } from "@mui/material";
import { MenuItemsCategories } from "utils/menuItems";
import LeftNavSection from "./MenuComponents/LeftNavSection";

export type AppLeftMenuPropsType = {};

const AppLeftMenu: React.VFC<AppLeftMenuPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box>
      {Object.keys(MenuItemsCategories).map((key) => {
        return (
          <LeftNavSection
            key={key}
            category={key}
            items={MenuItemsCategories[key]}
          />
        );
      })}
    </Box>
  );
};

export default AppLeftMenu;
