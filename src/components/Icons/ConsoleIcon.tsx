import { SvgIconProps, SvgIcon } from "@mui/material";

const ConsoleIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 17 15" {...props}>
      <path
        fillOpacity="0.8"
        d="M3.167.333H14a2.5 2.5 0 012.5 2.5V12a2.5 2.5 0 01-2.5 2.5H3.166a2.5 2.5 0 01-2.5-2.5V2.833a2.5 2.5 0 012.5-2.5zm0 .834A1.667 1.667 0 001.5 2.833h14.166A1.667 1.667 0 0014 1.167H3.166zM1.5 12a1.667 1.667 0 001.667 1.667H14A1.666 1.666 0 0015.666 12V3.667H1.5V12zm11.666 0H9v-.833h4.166V12zM4 5.75l.589-.59 3.506 3.507-3.506 3.505-.59-.589 2.917-2.916L4 5.75z"
      ></path>
    </SvgIcon>
  );
};

export default ConsoleIcon;
