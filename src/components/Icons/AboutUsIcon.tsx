import { SvgIconProps, SvgIcon } from "@mui/material";

const AboutUsIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 16 14" {...props}>
      <path
        fillOpacity="0.8"
        d="M5.167 0c.27 0 .535.073.765.21l.135.09 1.6 1.2H13.5a2.5 2.5 0 012.479 2.174l.016.162L16 4v7.5a2.5 2.5 0 01-2.336 2.495L13.5 14h-11a2.5 2.5 0 01-2.495-2.336L0 11.5v-9A2.5 2.5 0 012.336.005L2.5 0h2.667zm.99 4.034a1.5 1.5 0 01-.933.458l-.153.008L1 4.499V11.5a1.5 1.5 0 001.356 1.493L2.5 13h11a1.5 1.5 0 001.493-1.355L15 11.5V4a1.5 1.5 0 00-1.355-1.493L13.5 2.5H7.617l-1.46 1.534zM5.168 1H2.5a1.5 1.5 0 00-1.493 1.356L1 2.5v.999l4.071.001a.5.5 0 00.302-.101l.06-.054L6.695 2.02 5.467 1.1a.5.5 0 00-.22-.094L5.167 1z"
      ></path>
    </SvgIcon>
  );
};

export default AboutUsIcon;
