import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ galleryList, onImgClick }) => {
  return (
    <ul className={css.imageGallery}>
      {galleryList.map((item) => (
        <li key={item.id} className={css.imageCard}>
          <ImageCard galleryItem={item} onClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
