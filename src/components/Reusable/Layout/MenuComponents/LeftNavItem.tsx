import { INavMenuItem } from "utils/menuItems";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export type LeftNavItemPropsType = {
  data: INavMenuItem;
};

const MenuItemNavLink: React.FC<{ data: INavMenuItem }> = ({ data }) => {
  const { title, icon: ElementIcon, url, disabled, comingSoon } = data;

  return (
    <NavLink to={url!} style={{ textDecoration: "none", color: "inherit" }}>
      {({ isActive }) => {
        return (
          <ListItem
            button
            sx={{
              textTransform: "none",
              color: isActive ? "primary.main" : "common.lightGray",
              py: [0.4, 0.4, 1],
            }}
          >
            {ElementIcon && (
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ElementIcon
                  color={isActive ? "primary" : "common.lightGray"}
                />
              </ListItemIcon>
            )}
            <ListItemText
              sx={{ color: "inherit", fontWeight: isActive ? 700 : 500 }}
            >
              <Typography
                component="span"
                sx={{ fontWeight: isActive ? 700 : 500 }}
              >
                {title}
              </Typography>
            </ListItemText>
          </ListItem>
        );
      }}
    </NavLink>
  );
};

const LeftNavItem: React.VFC<LeftNavItemPropsType> = ({ data }) => {
  // *************** RENDER *************** //
  if (data.url && !data.disabled) {
    return <MenuItemNavLink data={data} />;
  }
  return null;
};

export default LeftNavItem;
