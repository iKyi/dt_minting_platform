import { SvgIconProps, SvgIcon } from "@mui/material";

const KnobsIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 16 14" {...props}>
      <path
        fillOpacity="0.8"
        d="M12.95 2a2.5 2.5 0 00-4.9 0H.5a.5.5 0 000 1h7.55a2.5 2.5 0 004.9 0h2.55a.5.5 0 000-1h-2.55zM10.5 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-2.55 7a2.5 2.5 0 00-4.9 0H.5a.5.5 0 000 1h2.55a2.5 2.5 0 004.9 0h7.55a.5.5 0 000-1H7.95zM5.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      ></path>
    </SvgIcon>
  );
};

export default KnobsIcon;
