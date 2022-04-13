import { IMintDataType } from "components/Pages/Launchpad/FeaturedMintEntry";
import { DateTime } from "luxon";

type IMintProgressParamType = {
  releaseDate?: IMintDataType["releaseDate"];
  soldOut?: boolean;
};

const useIsMintInProgress = (data: IMintProgressParamType) => {
  const { releaseDate, soldOut } = data;

  if (!releaseDate || soldOut) {
    return false;
  }

  const mintDate = DateTime.fromISO(releaseDate);
  const now = DateTime.now();

  if (mintDate && mintDate < now && !soldOut) {
    return true;
  }
};
export default useIsMintInProgress;
