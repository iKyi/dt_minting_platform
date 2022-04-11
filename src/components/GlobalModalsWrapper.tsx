import ComingSoonModal from "components/Reusable/ComingSoonModal";
import InfoModal from "components/Reusable/InfoModal";

export type GlobalModalsWrapperPropsType = {};

const GlobalModalsWrapper: React.VFC<GlobalModalsWrapperPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <>
      <ComingSoonModal />
      <InfoModal />
    </>
  );
};

export default GlobalModalsWrapper;
