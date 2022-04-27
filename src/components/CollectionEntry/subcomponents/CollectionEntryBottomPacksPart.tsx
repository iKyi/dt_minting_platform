import { Box, CardActionArea, Grid } from "@mui/material";
import { useAppDispatch } from "app/hooks";
import { mockPackListingItems } from "assets/mockData/collections/mockCollectionItems";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";
import SquareBoxTitle from "components/Reusable/Layout/SquareBoxTitle";
import { addLoader, removeLoader } from "features/global/globalSlice";
import axiosGetter from "lib/axios/axiosGetter";
import { useEffect, useState } from "react";
import { ICollectionEntryDataType } from "../CollectionEntry";
import { Link as RouterLink } from "react-router-dom";

export type IPackEntry = {
  id: string;
  image: string;
};

export type CollectionEntryBottomPacksPartPropsType = {
  data: ICollectionEntryDataType;
};

const CollectionEntryBottomPacksPart: React.FC<
  CollectionEntryBottomPacksPartPropsType
> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [packsData, setPacksData] = useState<IPackEntry[] | null>(null);

  useEffect(() => {
    dispatch(addLoader("packLoading"));
    axiosGetter(`https://jsonplaceholder.typicode.com/todos/1`).then(() => {
      setPacksData(mockPackListingItems);
      dispatch(removeLoader("packLoading"));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *************** RENDER *************** //
  if (!packsData) return null;
  return (
    <SquareBorderBox
      sx={{
        mt: [1.5, 1.5, 2.5],
        p: [0.7, 0.7, 1],
      }}
    >
      <SquareBoxTitle>{"Pack Opening"}</SquareBoxTitle>
      <Grid container spacing={[2, 2, 3]}>
        {packsData.map((item) => (
          <Grid key={item.id} item xs={6} md={4} lg={3}>
            <CardActionArea
              component={RouterLink}
              to={`/collections/${data.id}/packs/${item.id}`}
            >
              <Box
                sx={{
                  // background: `url('${getStrapiMedia(image)}')`,
                  background: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  minHeight: [160, 160, 240],
                  width: "100%",
                  mb: 1.5,
                }}
              />

              <Box
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  color: "error.main",
                  py: 1.5,
                  bgcolor: `rgba(0,0,0,0.65)`,
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  border: (theme) => `1px solid ${theme.palette.error.main}`,
                }}
              >
                Open Pack
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </SquareBorderBox>
  );
};

export default CollectionEntryBottomPacksPart;
