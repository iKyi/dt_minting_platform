import { SvgIconProps, SvgIcon } from "@mui/material";

const StarIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        fillOpacity="0.8"
        d="M7.352 1.443c.224-.59 1.072-.59 1.296 0l1.45 4.014a.693.693 0 00.647.443h3.561c.658 0 .945.819.428 1.22L12.2 9.4a.677.677 0 00-.225.764l.925 3.922c.225.63-.504 1.171-1.056.784l-3.441-2.184a.7.7 0 00-.805 0L4.156 14.87c-.551.387-1.281-.154-1.056-.784l.926-3.922A.678.678 0 003.8 9.4L1.266 7.12c-.518-.401-.23-1.22.427-1.22h3.561a.692.692 0 00.648-.443l1.45-4.014h0z"
      ></path>
    </SvgIcon>
  );
};

export default StarIcon;
