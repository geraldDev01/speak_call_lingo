import Image from "next/image";

const ImageRow = ({ images }) => {
  return (
    <div className="image-row">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <Image src={image.src} alt={image.alt}/>
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
