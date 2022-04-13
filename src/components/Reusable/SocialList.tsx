import { IconButton, Stack, Link, Theme, SxProps } from "@mui/material";
import { Twitter, LanguageOutlined } from "@mui/icons-material";
import DiscordIcon from "components/Icons/DiscordIcon";

const SocialIconButton: React.FC<{
  children: any;
  url: string;
}> = ({ children, url }) => {
  return (
    <IconButton
      component={Link}
      href={url}
      sx={{
        fontSize: "1.1rem",
        width: 32,
        height: 32,
        border: "1px solid #fff",
        borderColor: "primary.contrastText",
        color: "primary.contrastText",
        borderRadius: 0,
        transition: "all .2s",
        "&:hover": {
          borderColor: "primary.main",
          color: "primary.main",
        },
      }}
      target="_blank"
      rel="noopener"
    >
      {children}
    </IconButton>
  );
};

export type SocialListPropsType = {
  discord?: string;
  twitter?: string;
  website?: string;
  sx?: SxProps<Theme>;
};

const SocialList: React.VFC<SocialListPropsType> = ({
  discord,
  twitter,
  website,
  sx: importedSx,
}) => {
  // *************** RENDER *************** //
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        ...importedSx,
      }}
    >
      {discord && (
        <SocialIconButton url={discord}>
          <DiscordIcon color="inherit" fontSize="inherit" />
        </SocialIconButton>
      )}
      {twitter && (
        <SocialIconButton url={twitter}>
          <Twitter color="inherit" fontSize="inherit" />
        </SocialIconButton>
      )}
      {website && (
        <SocialIconButton url={website}>
          <LanguageOutlined color="inherit" fontSize="inherit" />
        </SocialIconButton>
      )}
    </Stack>
  );
};

export default SocialList;
