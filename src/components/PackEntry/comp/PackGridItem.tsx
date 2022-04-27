import { Box, Button } from "@mui/material";
import { useMemo } from "react";
import { IPackCardData } from "../PackEntryIndex";

export type PackGridItemPropsType = {
  data: IPackCardData;
};

enum COLORS {
  PRIMARY = "primary.main",
  RED = "error.main",
}

const PackGridItem: React.FC<PackGridItemPropsType> = ({ data }) => {
  const { image, status } = data;

  const mainColor = status === "claimed" ? COLORS.PRIMARY : COLORS.RED;

  const claimAction = () => {
    console.log("claim");
  };

  const { text, action } = useMemo(() => {
    let textValue = status === "claimed" ? "CLAIMED" : "CLAIM";
    let actionValue = status === "unclaimed" ? claimAction : null;

    return { text: textValue, action: actionValue };
  }, [status]);
  // *************** RENDER *************** //
  return (
    <Box>
      <Box
        sx={{
          // background: `url('${getStrapiMedia(image)}')`,
          background: `url('${image}')`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: [259, 259, 380],
          width: "100%",
          mb: 1.5,
        }}
      />

      <Button
        fullWidth
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          color: mainColor,
          py: 1.5,
          bgcolor: `rgba(0,0,0,0.18)`,
          fontWeight: "bold",
          fontSize: "0.9rem",
          border: "1px solid",
          borderColor: mainColor,
        }}
        disabled={!action}
        onClick={action ? action : () => null}
      >
        {text}
      </Button>
    </Box>
  );
};

export default PackGridItem;
