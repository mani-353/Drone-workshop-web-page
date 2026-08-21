
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle, Clock, DollarSign, FileText, Users, Shield, Award, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const workshopImages = [
    { src: "/Workshop_3.jpeg", title: "Edition I Workshop Delegation" },
    { src: "/Workshop_2.jpeg", title: "DGPS & GNSS Base Station Setup" },
    { src: "/IMG_1644.jpg", title: "Practical Field Flight Training" },
    { src: "/Workshop_4.jpeg", title: "Participants & Faculty Assembly" },
    { src: "/IMG_1705.jpg", title: "Interactive Classroom Sessions" },
    { src: "/Workshop_1.jpeg", title: "Technical Lecture Hall Sessions" },
    { src: "/IMG_1914.jpg", title: "Inaugural Ceremony" },
    { src: "/IMG_1956.jpg", title: "Valedictory & Certification" },
    { src: "/IMG_1898.jpg", title: "Industry Delegate Discussions" },
    { src: "/IMG_2060.jpg", title: "Batch of Edition I" }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [workshopImages.length]);

  // Scroll into view when slide changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentSlide * 320;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
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

  const registrationSteps = [
    {
      step: 1,
      title: "Fill Registration Form",
      description: "Complete the online registration form with all required details",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Make Payment",
      description: "Transfer course fees using provided bank details or demand draft",
      icon: DollarSign,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Confirmation",
      description: "Receive confirmation email with workshop details and schedule",
      icon: CheckCircle,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const courseBenefits = [
    "5-day intensive training program",
    "Expert faculty from permium institutions and academic/industry",
    "Certificate from NIT Rourkela",
    "Networking opportunities with professionals",
    "Access to latest drone surveying techniques",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl animate-float"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 hero-heading-alt">
              Register for the Workshop
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
              Secure your spot in this premium drone surveying and mapping workshop
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                <Clock className="h-5 w-5 mr-2" />
                Registration Deadline: Nov 16, 2026
              </Badge>
              <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                <Users className="h-5 w-5 mr-2" />
                Limited Seats Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Card */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-enhanced animate-on-scroll shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl mb-4">
                Workshop Registration
              </CardTitle>
              <p className="text-blue-100 text-lg">
                Click the button below to access our secure registration form
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Ready to Register?
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    Complete your registration through our secure Google Forms portal.
                    The form will collect all necessary information for your workshop participation.
                  </p>

                  <Button
                    className="btn-primary text-xl px-12 py-6 animate-pulse-glow"
                    asChild
                  >
                    <a
                      href="https://forms.gle/XgrHk66zProX7qQQ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      Register Now
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-green-800 mb-3 text-lg">Course Fee</h4>
                    <div className="space-y-2 text-green-700">
                      <p className="text-2xl font-bold">₹25,000 + 18% GST</p>
                      <p className="text-sm">Per participant from industries</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-red-800 mb-3 text-lg">Payment Deadline</h4>
                    <div className="space-y-2 text-red-700">
                      <p className="text-xl font-bold">November 16, 2026</p>
                      <p className="text-sm">Registration fees once paid will not be refunded</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">
            <span className="hero-heading">Registration Process</span>
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 animate-on-scroll">
            Simple three-step process to secure your spot
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registrationSteps.map((step, index) => (
              <Card key={index} className="card-enhanced text-center group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                    Step {step.step}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-800 via-slate-800 to-orange-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-8">
                Course Benefits
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {courseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="card-enhanced animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-yellow-600" />
                    <h4 className="font-bold text-yellow-800">Registration Deadline</h4>
                  </div>
                  <p className="text-yellow-700">
                    Course fee along with nominations must be sent latest by November 16, 2026
                  </p>
                </div>

                <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-blue-600" />
                    <h4 className="font-bold text-blue-800">Non-Residential Course</h4>
                  </div>
                  <p className="text-blue-700">
                    Course fee does not include boarding, lodging, or transportation charges
                  </p>
                </div>

                <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-red-600" />
                    <h4 className="font-bold text-red-800">Refund Policy</h4>
                  </div>
                  <p className="text-red-700">
                    Registration fees once paid will not be refunded
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Highlights Carousel */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 animate-on-scroll">
            <Badge className="mb-3 px-4 py-1.5 text-sm bg-blue-100 text-blue-800 border-blue-200">
              <Camera className="h-4 w-4 mr-1.5" />
              Edition I Gallery
            </Badge>
            <h2 className="text-4xl font-bold mb-3">
              <span className="hero-heading">Glimpses from Previous Workshop</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our participants experienced in the first edition
            </p>
          </div>

          <div className="relative">
            {/* Prev Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-10 w-10 border border-slate-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </Button>

            {/* Carousel Track */}
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-12 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {workshopImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[300px] rounded-xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-500 group cursor-pointer ${
                    index === currentSlide ? 'scale-105 shadow-2xl ring-2 ring-blue-400' : 'opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative h-[200px] bg-slate-900">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white text-sm font-semibold leading-tight">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-10 w-10 border border-slate-200"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {workshopImages.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Edition Glimpse */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Card className="card-enhanced overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-900 to-slate-900 text-white animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-orange-500 text-white border-0 text-sm px-3 py-1">
                  Edition I Legacy
                </Badge>
                <h3 className="text-3xl font-bold leading-tight">
                  Join the League of Certified Mining Professionals
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Edition I brought together industry engineers, geologists, and surveying officers from leading mining organizations across India. Gain formal certification from NIT Rourkela and advance your career with hands-on drone expertise.
                </p>
                <div className="pt-2">
                  <Button className="btn-accent text-base px-8 py-5" asChild>
                    <a
                      href="https://forms.gle/XgrHk66zProX7qQQ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Secure Your Seat for Edition II
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-[360px]">
                <img
                  src="/IMG_1956.jpg"
                  alt="Edition I Certificate Distribution Ceremony"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg text-xs text-white">
                  Certificate Distribution Ceremony with NIT Rourkela Faculty & Edition I Delegates
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
