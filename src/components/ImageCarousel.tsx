
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const mediaItems = [
    {
      type: 'image',
      src: "/drone.gif",
      alt: "Drone in flight",
      caption: "Advanced Drone Technology in Action"
    },
    {
      type: 'image',
      src: "/drone2.gif",
      alt: "Aerial Mapping",
      caption: "Aerial Mapping Technology"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % mediaItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
      <div className="relative w-full h-full">
        {mediaItems.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {media.type === 'video' ? (
              <video
                src={media.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{media.caption}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-8' : 'bg-white/50'
              }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
