import { SvgIconProps, SvgIcon } from "@mui/material";

const ChipIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        fillOpacity="0.8"
        d="M8 5a3 3 0 100 6 3 3 0 000-6zM6 8a2 2 0 114 0 2 2 0 01-4 0zm-.5-8a.5.5 0 01.5.5V2h1.5V.5a.5.5 0 011 0V2H10V.5a.5.5 0 011 0V2h.5A2.5 2.5 0 0114 4.5V5h1.5a.5.5 0 010 1H14v1.5h1.5a.5.5 0 010 1H14V10h1.5a.5.5 0 010 1H14v.5a2.5 2.5 0 01-2.5 2.5H11v1.5a.5.5 0 01-1 0V14H8.5v1.5a.5.5 0 01-1 0V14H6v1.5a.5.5 0 01-1 0V14h-.5A2.5 2.5 0 012 11.5V11H.5a.5.5 0 010-1H2V8.5H.5a.5.5 0 010-1H2V6H.5a.5.5 0 010-1H2v-.5A2.5 2.5 0 014.5 2H5V.5a.5.5 0 01.5-.5zM13 4.5A1.5 1.5 0 0011.5 3h-7A1.5 1.5 0 003 4.5v7A1.5 1.5 0 004.5 13h7a1.5 1.5 0 001.5-1.5v-7z"
      ></path>
    </SvgIcon>
  );
};

export default ChipIcon;
