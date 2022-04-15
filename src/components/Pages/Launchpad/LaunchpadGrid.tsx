import { Grid, Typography } from "@mui/material";
import { IMintDataType } from "./FeaturedMintEntry";
import LaunchPadGridEntry from "./LaunchPadGridEntry";

export type LaunchpadGridPropsType = {
  items?: IMintDataType[];
  title: string;
};

const LaunchpadGrid: React.VFC<LaunchpadGridPropsType> = ({ items, title }) => {
  // *************** RENDER *************** //
  if (!items || items.length === 0) return null;
  return (
    <Grid container spacing={[1.5, 1.5, 2.5]}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: [18, 18, 22] }}>
          {title}
        </Typography>
      </Grid>
      {items.map((item) => {
        return (
          <Grid key={item.name} item xs={6} md={4} lg={3}>
            <LaunchPadGridEntry data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LaunchpadGrid;
