import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setInfoModal } from "features/global/globalSlice";
import ModalWrapper from "./ModalWrapper";

export type InfoModalPropsType = {
  children?: any;
};

const InfoModal: React.VFC<InfoModalPropsType> = ({ children }) => {
  const modalInnerData = useAppSelector((state) => state.global.infoModal);
  const dispatch = useAppDispatch();

  const closeInfoModal = () => {
    dispatch(setInfoModal(null));
  };
  // *************** RENDER *************** //
  return (
    <ModalWrapper open={modalInnerData ? true : false} onClose={closeInfoModal}>
      <Box sx={{ p: 4, textAlign: "center" }}>{modalInnerData?.toString()}</Box>
    </ModalWrapper>
  );
};

export default InfoModal;
