import { useState } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
        &lt;
      </button>
      <Image
        src={images[currentIndex]}
        alt="Gallery image"
        width={300}
        height={200}
        className="rounded-lg mx-auto"
      />
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
        &gt;
      </button>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}