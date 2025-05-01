import { React, useEffect, useState } from 'react';
import './Carousel.css';
import { useNavigate } from 'react-router';

const Carousel = ({ imagesPath, phone }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [displacement, setDisplacement] = useState(0);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("imagesPath: ", imagesPath)
    for (let i = 0; i < imagesPath.length; i++) {
      const imageList = images;
      imageList.push(`http://localhost:8080/api/images/${imagesPath[i]}`);
      setImages([...imageList]);
    }
  }, [imagesPath]);

  const nextImage = () => {
    if(imagesPath.length > currentImage){
      setCurrentImage(currentImage + 1);
      setDisplacement(displacement - 100);
    }
  };

  const previousImage = () => {
    if(currentImage > 1){
      setCurrentImage(currentImage - 1);
      setDisplacement(displacement + 100);
    }
  };
  const handlePhoneClick = () => {
    console.log("click");
    navigate(`/phone/${phone.id}`, { state: { phoneData: phone } });
  };

  return (
    <div className="carousel">
      <button className="buttonCarousel left" onClick={previousImage}>
        &#9664; {/* Flecha izquierda */}
      </button>
      
      <div className="imageContainer" style={{ transform: `translateX(${displacement}%)`}} onClick={handlePhoneClick}>
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Imagen ${index}`}
            className={`imageCarousel`}
          />
        ))}
      </div>
      
      <button className="buttonCarousel right"  onClick={nextImage}>
        &#9654; {/* Flecha derecha */}
      </button>
    </div>
  );
};

export default Carousel;