import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className={s.container}>
        {images.map((item) => (
          <li key={item.id}>
            <div>
              <ImageCard item={item} onImageClick={onImageClick} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
