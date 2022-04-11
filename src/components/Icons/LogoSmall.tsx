import { SvgIconProps, SvgIcon } from "@mui/material";

const LogoSmallIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 45 36" {...props}>
      <path d="M44.034 14.466v-2.114h-7.161V8.696h-3.455v3.656H31.16v2.114h2.258v12.94H30.2v1.364h3.217v3.725H7.808v-1.602h4.15v-2.114h-4.15v-7.166H6.413v-1.369h1.397v-10.08H5.48v-.788H7.81V6.354h1.68V4.99H7.81V4.06h25.609v3.26h3.455V.588H35.01v2.12h-1.275V.588H8.703v1.398H7.45V.59H4.335V4.97H2.757v1.365h1.578V28.75H0v2.114h4.335v5.061h1.564v-1.439h1.253v1.44h29.72V28.77h5.267v-1.365h-5.266v-12.94h7.161zM36.412 28.77v-1.365 1.365z"></path>
      <path d="M21.2 14.764l-8.182-4.792v5.029l2.184 1.364-3.762 1.96v5.025l9.76-5.225v-3.361zM28.529 22.32h-9.224v3.33h9.224v-3.33z"></path>
    </SvgIcon>
  );
};

export default LogoSmallIcon;
