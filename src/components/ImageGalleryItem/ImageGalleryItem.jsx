import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openImageModal,
}) => {
  return (
    <GalleryItem key={id}>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => {
          openImageModal(largeImageURL);
        }}
      />
    </GalleryItem>
  );
};
