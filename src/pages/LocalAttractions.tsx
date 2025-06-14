
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const LocalAttractions = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const attractions = [
    {
      src: "/khandadhar.jpg",
      alt: "Khandadhar Waterfalls",
      title: "Khandadhar Waterfalls",
      description: "Magnificent waterfalls perfect for nature enthusiasts"
    },
    {
      src: "/vaishno_devi_temple.jpg",
      alt: "Vaishno Devi Temple",
      title: "Vaishno Devi Temple",
      description: "Popular Hindu temple and pilgrimage site in Rourkela"
    },
    {
      src: "/nitr.jpg",
      alt: "NIT Rourkela Campus",
      title: "NIT Rourkela Campus",
      description: "Beautiful campus with modern facilities and green spaces"
    },
    {
      src: "/birsa_munda_hockey_stadium.jpg",
      alt: "Birsa Munda Hockey Stadium",
      title: "Birsa Munda Hockey Stadium",
      description: "International standard hockey stadium venue for major tournaments"
    },
    {
      src: "/hill_top_view.jpg",
      alt: "Rourkela Hill Top View",
      title: "Rourkela Hill Top View",
      description: "Panoramic views of the city and surrounding landscape"
    },
    {
      src: "/vedvyas.jpg",
      alt: "Local Heritage Sites",
      title: "Vedvyas Temple",
      description: "Ancient temple with rich history and architecture"
    },
    {
      src: "/hanuman-vadika.jpg",
      alt: "Local Heritage Sites",
      title: "Hanuman Vadika",
      description: "A serene park with a giant Hanuman statue and lush greenery"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % attractions.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + attractions.length) % attractions.length);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-xl animate-float"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-heading">
              Local Attractions in Rourkela
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-4 rounded-xl">
              Discover the beauty and culture surrounding our workshop venue
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="card-enhanced cursor-pointer overflow-hidden group"
                onClick={() => setSelectedImage(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={attraction.src}
                      alt={attraction.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{attraction.title}</h3>
                        <p className="text-sm opacity-90 flex items-center gap-1">
                          <Camera className="h-4 w-4" />
                          Click to view
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{attraction.title}</h3>
                    <p className="text-slate-600 text-sm">{attraction.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={attractions[selectedImage].src}
              alt={attractions[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

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

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{attractions[selectedImage].title}</h3>
              <p className="text-sm opacity-90">
                {selectedImage + 1} of {attractions.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocalAttractions;
