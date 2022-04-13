import { useEffect, useMemo, useState } from "react";
import { IMintDataType } from "components/Pages/Launchpad/FeaturedMintEntry";
import futureMints from "mockData/futureMints";
import { DateTime } from "luxon";
import { Box } from "@mui/material";
import LaunchpadGrid from "./LaunchpadGrid";

export type LaunchpadIndexPropsType = {
  children?: any;
};

const LaunchpadIndex: React.VFC<LaunchpadIndexPropsType> = ({ children }) => {
  const [mintItems, setMintItems] = useState<IMintDataType[]>([]);

  useEffect(() => {
    setMintItems(futureMints);
  }, []);

  const { future, released } = useMemo(() => {
    const today = DateTime.now();
    let future: IMintDataType[] = [];
    let released: IMintDataType[] = [];

    mintItems.forEach((mint) => {
      if (!mint.releaseDate) {
        future.push(mint);
      } else {
        const formattedDate = DateTime.fromISO(mint.releaseDate);
        if (formattedDate > today) {
          future.push(mint);
        } else {
          released.push(mint);
        }
      }
    });
    return { future, released };
  }, [mintItems]);

  // *************** RENDER *************** //
  return (
    <Box>
      {future.length > 0 && (
        <LaunchpadGrid title="Upcoming Launches" items={future} />
      )}
      {released.length > 0 && (
        <LaunchpadGrid title="Past Launches" items={released} />
      )}
    </Box>
  );
};

export default LaunchpadIndex;
