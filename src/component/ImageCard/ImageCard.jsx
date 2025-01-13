const ImageCard = ({ item, onImageClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={s.img}
        onClick={() => {
          onImageClick(item.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
