import Modal from "react-modal";
import css from "./imageModal.module.css";

const ImageModal = ({ isModalOpen, openedItem, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "gray",
        },
        content: {
          display: "flex",
          placeItems: "center",
        },
      }}
    >
      <img
        className={css.modalImg}
        src={openedItem?.urls.full}
        alt={openedItem?.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
