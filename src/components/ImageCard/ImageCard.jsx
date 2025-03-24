import css from "./ImageCard.module.css";

const ImageCard = ({ galleryItem, onClick }) => {
  const {
    urls: { small },
    alt_description,
    id,
  } = galleryItem;

  return (
    <div className={css.thumb}>
      <img
        src={small}
        alt={alt_description}
        className={css.cardImg}
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default ImageCard;
