import { INavMenuItem } from "utils/menuItems";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Link as MuiLink,
} from "@mui/material";

export type LeftNavItemPropsType = {
  data: INavMenuItem;
};

const MenuItemExternalLink: React.FC<{ data: INavMenuItem }> = ({ data }) => {
  const { title, icon: ElementIcon, url } = data;

  return (
    <MuiLink
      href={url!}
      style={{ textDecoration: "none", color: "inherit" }}
      target="_blank"
      rel="noopener"
    >
      <ListItem
        button
        sx={{
          textTransform: "none",
          color: "common.lightGray",
          py: [0.4, 0.4, 1],
        }}
      >
        {ElementIcon && (
          <ListItemIcon sx={{ minWidth: 36 }}>
            <ElementIcon color={"common.lightGray"} />
          </ListItemIcon>
        )}
        <ListItemText sx={{ color: "inherit", fontWeight: 500 }}>
          <Typography component="span" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </ListItemText>
      </ListItem>
    </MuiLink>
  );
};

const MenuItemNavLink: React.FC<{ data: INavMenuItem }> = ({ data }) => {
  const { title, icon: ElementIcon, url } = data;

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

const MenuItemDisabled: React.FC<{ data: INavMenuItem }> = ({ data }) => {
  const { title, icon: ElementIcon } = data;
  return (
    <Tooltip title="Coming Soon" placement="bottom">
      <div>
        <ListItem
          button
          disabled
          sx={{
            textTransform: "none",
            color: "common.lightGray",
            py: [0.4, 0.4, 1],
          }}
        >
          {ElementIcon && (
            <ListItemIcon sx={{ minWidth: 36 }}>
              <ElementIcon color={"common.lightGray"} />
            </ListItemIcon>
          )}
          <ListItemText sx={{ color: "inherit", fontWeight: 500 }}>
            <Typography component="span" sx={{ fontWeight: 500 }}>
              {title}
            </Typography>
          </ListItemText>
        </ListItem>
      </div>
    </Tooltip>
  );
};

const LeftNavItem: React.VFC<LeftNavItemPropsType> = ({ data }) => {
  // *************** RENDER *************** //
  if (data.url && data.url.includes("http") && !data.disabled) {
    return <MenuItemExternalLink data={data} />;
  }
  if (data.url && !data.disabled) {
    return <MenuItemNavLink data={data} />;
  }
  if (data.disabled) {
    return <MenuItemDisabled data={data} />;
  }
  return null;
};

export default LeftNavItem;
