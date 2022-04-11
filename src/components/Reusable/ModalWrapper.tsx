import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  Modal,
  Typography,
  Box,
  CardContent,
  CardActionArea,
} from "@mui/material";

export type ModalWrapperPropsType = {
  children?: any;
  open: boolean;
  onClose?: any;
  onMainClick?: (props: any) => any;
  title?: string | ReactNode;
  baseWidth?: number;
};

const ActionWrapper: React.FC<{
  onClick?: (props?: any) => any;
  children: any;
}> = ({ onClick, children }) => {
  if (onClick) {
    return (
      <CardActionArea onClick={() => onClick()}>{children}</CardActionArea>
    );
  }
  return children;
};

const ModalWrapper: React.VFC<ModalWrapperPropsType> = ({
  children,
  open,
  onClose,
  onMainClick,
  title,
  baseWidth,
}) => {
  // *************** RENDER *************** //
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: baseWidth ? baseWidth : "500px",
          maxWidth: "calc(100% - 10px)",
          borderRadius: 0,
          background: "none",
          display: "flex",
          flexDirection: "column",
          "&:focus-visible": {
            outline: 0,
            boxShadow: "none",
          },
        }}
      >
        <ActionWrapper onClick={onMainClick}>
          <CardHeader
            title={
              <Typography
                sx={{
                  px: 2,
                }}
              >
                {title}
              </Typography>
            }
            sx={{}}
          />
          <CardContent
            sx={{
              p: 0,
              flex: 1,
              "&:last-of-type:not(:first-of-type)": {
                pb: 0,
              },
            }}
          >
            <Box
              sx={{
                px: 4,
                py: 2,
              }}
            ></Box>
            {children}
          </CardContent>
        </ActionWrapper>
      </Card>
    </Modal>
  );
};

export default ModalWrapper;
