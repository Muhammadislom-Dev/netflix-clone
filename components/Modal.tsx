import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import MuiModal from "@mui/material/Modal";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <MuiModal open={showModal}>
      <>
        <div>Modal</div>
      </>
    </MuiModal>
  );
}

export default Modal;
