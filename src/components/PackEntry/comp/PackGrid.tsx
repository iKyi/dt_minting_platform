import { Grid, Typography } from "@mui/material";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import { IPackCardData } from "../PackEntryIndex";
import PackGridItem from "./PackGridItem";

export type PackGridPropsType = {
  items: IPackCardData[];
  title: string;
};

const PackGrid: React.FC<PackGridPropsType> = ({ items, title }) => {
  // *************** RENDER *************** //
  return (
    <SquareBorderBox
      sx={{
        mt: [1.5, 1.5, 2.5],
        p: [0.7, 0.7, 1],
      }}
    >
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ fontSize: [18, 18, 22] }}>
            {title}
          </Typography>
        </Grid>
        {items.map((item) => {
          return (
            <Grid key={item.name} item xs={6} md={4} lg={3}>
              <PackGridItem data={item} />
            </Grid>
          );
        })}
      </Grid>
    </SquareBorderBox>
  );
};

export default PackGrid;
