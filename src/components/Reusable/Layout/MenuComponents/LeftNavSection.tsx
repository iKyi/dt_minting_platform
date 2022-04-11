import { List, Typography, Box } from "@mui/material";
import { INavMenuItem } from "utils/menuItems";
import LeftNavItem from "./LeftNavItem";

const LeftNavSection: React.FC<{ category: string; items: INavMenuItem[] }> = ({
  category,
  items,
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontSize: [14, 14, 16],
          opacity: 0.7,
          textTransform: "uppercase",
          pl: 2,
        }}
      >
        {category}
      </Typography>
      <List>
        {items.map((item) => {
          return <LeftNavItem data={item} key={item.title} />;
        })}
      </List>
    </Box>
  );
};

export default LeftNavSection;
