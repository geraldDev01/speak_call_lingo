import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel({ photos }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <Slider {...settings} className="w-full mt-4">
          {photos.map((photo, index) => (
            <div className="w-full" key={index}>
              <Image
                className="w-full h-96 object-cover"
                src={photo}
                alt={`photo-${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
