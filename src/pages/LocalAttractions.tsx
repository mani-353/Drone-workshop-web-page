import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Navigation } from 'lucide-react';

const LocalAttractions = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Attractions sorted by distance from NIT Rourkela (closest to farthest)
  const attractions = [
    {
      src: "/nitr.jpg",
      alt: "NIT Rourkela Campus",
      title: "NIT Rourkela Campus",
      description: "Premier technical institute with modern facilities, lush green campus, and state-of-the-art laboratories",
      distance: "0 km",
      category: "Educational",
      highlights: ["Modern Architecture", "Green Campus", "Research Facilities"]
    },
    {
      src: "/birsa_munda_hockey_stadium.jpg",
      alt: "Birsa Munda Hockey Stadium",
      title: "Birsa Munda International Hockey Stadium",
      description: "World-class hockey stadium with 20,000 seating capacity, hosted FIH Hockey World Cup 2023",
      distance: "8 km",
      category: "Sports",
      highlights: ["International Stadium", "Hockey World Cup Venue", "Modern Facilities"]
    },
    {
      src: "/igpark.jpg",
      alt: "Indira Gandhi Park",
      title: "Indira Gandhi Park",
      description: "Sprawling 42-acre recreational park with gardens, zoo, aquarium, boating lake and children's play area",
      distance: "12 km",
      category: "Recreation",
      highlights: ["42 Acres", "Zoo & Aquarium", "Boating Lake"]
    },
    {
      src: "/hanuman-vadika.jpg",
      alt: "Hanuman Vadika",
      title: "Hanuman Vadika",
      description: "Serene spiritual complex featuring a giant 75-foot Hanuman statue surrounded by beautiful gardens",
      distance: "15 km",
      category: "Religious",
      highlights: ["Giant Hanuman Statue", "Peaceful Gardens", "Spiritual Atmosphere"]
    },
    {
      src: "/pitamahal.jpg",
      alt: "Pitamahal Dam",
      title: "Pitamahal Dam & Reservoir",
      description: "Popular picnic destination built in 1978 across Pitamahal river, offering scenic views and water activities",
      distance: "22 km",
      category: "Nature",
      highlights: ["Scenic Dam", "Picnic Spot", "Water Activities"]
    },
    {
      src: "/vedvyas.jpg",
      alt: "Vedvyas Temple",
      title: "Vedvyas Temple Complex",
      description: "Ancient temple complex dedicated to Sage Vedvyas, featuring traditional architecture and spiritual significance",
      distance: "25 km",
      category: "Religious",
      highlights: ["Ancient Temple", "Traditional Architecture", "Historical Significance"]
    },
    {
      src: "/vaishno_devi_temple.jpg",
      alt: "Vaishno Devi Temple",
      title: "Vaishno Devi Temple",
      description: "Replica of famous Vaishno Devi shrine with 600 steps leading to cave temple, offering panoramic city views",
      distance: "28 km",
      category: "Religious",
      highlights: ["Cave Temple", "600 Steps", "City Views"]
    },
    {
      src: "/mandiradam.jpg",
      alt: "Mandira Dam",
      title: "Mandira Dam",
      description: "Hydro-electric project and pilgrimage site offering beautiful river views and peaceful environment",
      distance: "35 km",
      category: "Nature",
      highlights: ["Hydro-Electric Project", "River Views", "Peaceful Environment"]
    },
    {
      src: "/khandadhar.jpg",
      alt: "Khandadhar Waterfalls",
      title: "Khandadhar Waterfalls",
      description: "Odisha's highest waterfall at 244 meters, located in dense Sundargarh forests - perfect for nature lovers",
      distance: "104 km",
      category: "Nature",
      highlights: ["Highest in Odisha", "244m Height", "Dense Forest"]
    }
  ];

  const getDirectionsUrl = (attraction) => {
    const nitRourkelaCoords = "22.254136,84.900581"; // NIT Rourkela coordinates
    const query = encodeURIComponent(`${attraction.title}, Rourkela, Odisha`);
    return `https://www.google.com/maps/dir/${nitRourkelaCoords}/${query}`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Educational': 'from-blue-500 to-blue-600',
      'Sports': 'from-green-500 to-green-600',
      'Recreation': 'from-purple-500 to-purple-600',
      'Religious': 'from-orange-500 to-orange-600',
      'Nature': 'from-emerald-500 to-emerald-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

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
      {/* Header would go here */}
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-orange-100/50"></div>
        </div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-pulse"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Discover Rourkela
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              Explore amazing attractions around NIT Rourkela - from ancient temples to modern stadiums,
              natural wonders to recreational parks. All distances calculated from NIT Rourkela campus.
            </p>
            <div className="mt-6 flex justify-center items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4" />
              <span>Sorted by distance from NIT Rourkela</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedImage(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 relative">
                  {/* Image Section */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={attraction.src}
                      alt={attraction.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(attraction.category)} text-white text-xs font-semibold rounded-full`}>
                      {attraction.category}
                    </div>

                    {/* Distance Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {attraction.distance}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="h-4 w-4" />
                          <span className="text-sm">Click to view</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {attraction.highlights.slice(0, 2).map((highlight, idx) => (
                            <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col h-64">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-800 line-clamp-1 flex-1">
                        {attraction.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-slate-500 ml-2 shrink-0">
                        <MapPin className="h-4 w-4" />
                        <span>{attraction.distance}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow-0">
                      {attraction.description}
                    </p>

                    {/* Highlights - Fixed height container */}
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem] items-start content-start">
                      {attraction.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded whitespace-nowrap">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action Button - Always at bottom */}
                    <div className="mt-auto">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(getDirectionsUrl(attraction), '_blank');
                        }}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="relative w-full h-full max-w-5xl max-h-full flex items-center justify-center">
            <img
              src={attractions[selectedImage].src}
              alt={attractions[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20 z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20 z-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* Information Overlay */}
            <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-black/70 backdrop-blur-sm text-white p-3 md:p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{attractions[selectedImage].title}</h3>
                  <p className="text-sm opacity-90 mb-2 line-clamp-2 md:line-clamp-none">{attractions[selectedImage].description}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {attractions[selectedImage].distance} from NIT Rourkela
                    </span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs w-fit">
                      {attractions[selectedImage].category}
                    </span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm opacity-75 mb-2">
                    {selectedImage + 1} of {attractions.length}
                  </p>
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 w-full md:w-auto"
                    onClick={() => window.open(getDirectionsUrl(attractions[selectedImage]), '_blank')}
                  >
                    <Navigation className="h-4 w-4 mr-1" />
                    Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer would go here */}
      <Footer />
    </div>
  );
};

export default LocalAttractions;