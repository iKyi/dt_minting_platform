import { Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import binaryTitle from "assets/images/sections/homepage/gameCarousel/binaryTitle.png";
import numbersBg from "assets/images/sections/homepage/gameCarousel/numbersBackground.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export type HomeGamesCarouselPropsType = {};

const BinaryHackSlide: React.FC = () => {
  return (
    <Link
      href="https://games.darkterminal.io/binary/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100px",
        backgroundImage: `url('${numbersBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <img src={binaryTitle} alt="Binary hack Title" />
    </Link>
  );
};

const HomeGamesCarousel: React.VFC<HomeGamesCarouselPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        "& .swiper-button-next,& .swiper-button-prev": {
          color: "error.main",
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        scrollbar={{ draggable: true }}
        navigation
      >
        <SwiperSlide>
          <BinaryHackSlide />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeGamesCarousel;
