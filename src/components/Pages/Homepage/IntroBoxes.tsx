import { Button, Grid } from "@mui/material";
import IntroBoxEntryWrapper, {
  IntroBoxValueListing,
} from "./IntroBoxEntryWrapper";
import HomeGamesCarousel from "./HomeGamesCarousel";

export type IntroBoxesPropsType = {
  children?: any;
};

const IntroBoxes: React.VFC<IntroBoxesPropsType> = ({ children }) => {
  const columnWidthProperties = {
    xs: 12,
    sm: 6,
    md: 4,
  };
  // *************** RENDER *************** //
  return (
    <Grid container spacing={[1.5, 1.5, 2.5]}>
      <Grid item {...columnWidthProperties}>
        <IntroBoxEntryWrapper title="DARK TERMINAL ACCESS COIN - DTAC">
          <IntroBoxValueListing
            values={{
              Supply: "25.000.000",
              Price: "TBA",
            }}
          />
          <Button color="error" variant="outlined" disabled>
            Coming soon
          </Button>
        </IntroBoxEntryWrapper>
      </Grid>
      <Grid item {...columnWidthProperties}>
        <IntroBoxEntryWrapper title="DARK TERMINAL NFTS">
          <IntroBoxValueListing
            values={{
              Supply: "1,111",
              "All time volume": "10,222.00 SOL",
              "NFTS benefits": "50% of all DT revenues",
            }}
          />
        </IntroBoxEntryWrapper>
      </Grid>
      <Grid item {...columnWidthProperties}>
        <IntroBoxEntryWrapper title="DARK TERMINAL GAMES">
          <HomeGamesCarousel />
        </IntroBoxEntryWrapper>
      </Grid>
    </Grid>
  );
};

export default IntroBoxes;
