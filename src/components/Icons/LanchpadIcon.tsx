import { SvgIconProps, SvgIcon } from "@mui/material";

const LaunchpadIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        fillOpacity="0.8"
        d="M5.587 11.842c-.402 1.219-1.367 2.11-2.787 2.586a6.824 6.824 0 01-1.976.342.594.594 0 01-.595-.595A6.82 6.82 0 01.571 12.2c.476-1.42 1.367-2.385 2.586-2.786a.594.594 0 11.379 1.122c-1.464.49-1.917 2.073-2.058 2.986.914-.14 2.496-.594 2.987-2.058a.594.594 0 011.122.38zm7.422-5.654l-.66.669v4.554a1.203 1.203 0 01-.35.84l-2.407 2.4a1.16 1.16 0 01-1.182.297 1.188 1.188 0 01-.825-.907l-.587-2.934L3.893 8 .958 7.414a1.189 1.189 0 01-.61-2.006l2.4-2.407c.224-.222.525-.347.84-.35h4.555l.668-.66C10.937-.136 13.114-.076 13.953.05a1.166 1.166 0 01.996.996c.126.84.186 3.016-1.94 5.141zm-11.821.06l2.801.557L6.954 3.84H3.588l-2.4 2.408zM5.029 7.45L7.55 9.97l4.62-4.621c.58-.58 1.903-2.14 1.606-4.124C11.79.928 10.23 2.25 9.65 2.83L5.029 7.45zm6.13.595L8.195 11.01l.557 2.801 2.407-2.4V8.046z"
      ></path>
    </SvgIcon>
  );
};

export default LaunchpadIcon;