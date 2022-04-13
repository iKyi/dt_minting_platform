import { Box, List, ListItem, Typography } from "@mui/material";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import SquareBoxTitle from "components/Reusable/Layout/SquareBoxTitle";

export const IntroBoxValueListing: React.FC<{
  values: Record<string, string>;
}> = ({ values }) => {
  if (Object.keys(values).length === 0) return null;
  return (
    <List>
      {Object.keys(values).map((key: string) => {
        return (
          <ListItem key={key} disableGutters>
            <Typography>{key}:</Typography>
            <Typography color="primary" sx={{ ml: 1 }}>
              {values[key]}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
};

export type IntroBoxEntryWrapperPropsType = {
  children?: any;
  title: string;
};

const IntroBoxEntryWrapper: React.VFC<IntroBoxEntryWrapperPropsType> = ({
  children,
  title,
}) => {
  // *************** RENDER *************** //
  return (
    <SquareBorderBox darkborder sx={{ p: 1.5, minHeight: "100%" }}>
      <SquareBoxTitle>{title}</SquareBoxTitle>
      <Box>{children}</Box>
    </SquareBorderBox>
  );
};

export default IntroBoxEntryWrapper;
