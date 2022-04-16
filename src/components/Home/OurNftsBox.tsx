import { Box, Grid, Typography } from "@mui/material";
import { centerFlex } from "lib/sxUtils";
import imageOne from "assets/images/sections/homepage/homeCardsPresentation/1.png";
import imageTwo from "assets/images/sections/homepage/homeCardsPresentation/2.png";
import imageThree from "assets/images/sections/homepage/homeCardsPresentation/3.png";
import { useEffect, useRef } from "react";
import { setTimeout } from "timers-browserify";
import { useLocation } from "react-router-dom";
import { FONTS } from "lib/theme";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import SquareBoxTitle from "components/Reusable/Layout/SquareBoxTitle";

const GridCardEntry: React.FC<NFTObject> = (props: NFTObject) => {
  const { image, name, royal, supply } = props;

  const mainColor = "error.main";

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          textTransform: "uppercase",
          color: mainColor,
          ...centerFlex,
          py: 1,
          justifyContent: "flex-start",
          fontWeight: 500,
          fontSize: "1.1rem",
          fontFamily: FONTS.FURORE,
        }}
      >
        {name}
      </Box>
      <SquareBorderBox sx={{ position: "relative", lineHeight: 1 }}>
        <img
          src={image}
          alt="Nyx nft"
          style={{ width: "100%", height: "auto", lineHeight: 1 }}
        />
      </SquareBorderBox>
      <Box sx={{ py: 1.5, width: "100%" }}>
        <Grid
          container
          sx={{
            px: 1.5,
            py: 1,
          }}
          rowSpacing={0.6}
        >
          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "primary.contrastText",
              }}
            >
              ROYALTIES
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography
              sx={{ fontSize: "0.85rem", fontWeight: 600, color: "error.main" }}
            >
              {royal}%
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "primary.contrastText",
              }}
            >
              SUPPLY
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography
              sx={{ fontSize: "0.85rem", fontWeight: 600, color: "error.main" }}
            >
              {supply}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

interface NFTObject {
  image: any;
  name: string;
  royal: number;
  supply: number;
  color: "light" | "primary" | "error";
}

const items: NFTObject[] = [
  {
    color: "error",
    image: imageOne,
    royal: 30,
    name: "NYX",
    supply: 109,
  },
  {
    color: "primary",
    name: "D3GEN",
    image: imageTwo,
    royal: 10,
    supply: 460,
  },
  {
    color: "light",
    image: imageThree,
    name: "CODEX",
    royal: 10,
    supply: 542,
  },
];

export type OurNftsBoxPropsType = {};

const OurNftsBox: React.VFC<OurNftsBoxPropsType> = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const currentHref = window.location.href;
      if (currentHref.includes("#nfts")) {
        boxRef?.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
    }, 400);
  }, [location]);

  // *************** RENDER *************** //
  return (
    <SquareBorderBox
      sx={{
        mt: [1.3, 1.3, 2.5],
        p: 1.5,
      }}
    >
      <SquareBoxTitle>{"Dark Terminal NFTs"}</SquareBoxTitle>
      <Grid
        container
        columnSpacing={[0, 2, 4]}
        rowSpacing={[3, 3, 0]}
        justifyContent="center"
      >
        {items.map((item) => {
          return (
            <Grid key={item.name} item xs={12} sm={6} md={4}>
              <GridCardEntry {...item} />
            </Grid>
          );
        })}
      </Grid>
    </SquareBorderBox>
  );
};

export default OurNftsBox;
