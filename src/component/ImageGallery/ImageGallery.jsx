import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const Images = ({ image, page, onImageClick }) => {
  return (
    <div>
      <ul className={s.container}>
        {image.map((item, index) => {
          const uniqueKey = `${item.id}-${page}-${index}`;
          return (
            <li key={uniqueKey}>
              <div>
                <ImageCard item={item} onImageClick={onImageClick} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Images;
