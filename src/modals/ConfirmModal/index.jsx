import ReactModal from "react-modal";
import ConfirmContent from "./components/ConfirmContent";

ReactModal.setAppElement("#root");

const ConfirmModal = ({ isConfirmOpen = false, closeModal }) => {
  return (
    <ReactModal
      isOpen={isConfirmOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={"z-10"}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        },
        content: {
          border: "none",
          outline: "none",
        },
      }}
    >
      <ConfirmContent closeModal={closeModal} />
    </ReactModal>
  );
};

export default ConfirmModal;
