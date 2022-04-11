import { SvgIconProps, SvgIcon } from "@mui/material";

const SuitcaseIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 16 13" {...props}>
      <path
        fillOpacity="0.8"
        d="M6.5 0A1.5 1.5 0 005 1.5V2H1.5A1.5 1.5 0 000 3.5v8A1.5 1.5 0 001.5 13h13a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0014.5 2H11v-.5A1.5 1.5 0 009.5 0h-3zm0 1h3a.5.5 0 01.5.5V2H6v-.5a.5.5 0 01.5-.5zm1.886 6.914L15 6.151V11.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V6.15l6.614 1.764a1.5 1.5 0 00.772 0zM1.5 3h13a.5.5 0 01.5.5v1.616L8.129 6.948a.5.5 0 01-.258 0L1 5.116V3.5a.5.5 0 01.5-.5z"
      ></path>
    </SvgIcon>
  );
};

export default SuitcaseIcon;
