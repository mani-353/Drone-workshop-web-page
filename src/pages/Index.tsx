import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap, Users, Award, BookOpen, Plane, Map, Shield, Zap, Building } from 'lucide-react';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight hero-heading">
              Drone Surveying & Mapping
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">for Mining Professionals</span>
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-slate-800">November 3-7, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">NIT Rourkela, Odisha</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">Department of Mining Engineering</span>
              </div>
            </div>

            <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              Join us for an intensive 5-day course covering cutting-edge drone technology,
              data processing, GIS integration, and practical applications in mining operations.
              Experience hands-on training with industry experts at India's premier technical institution.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button className="btn-primary text-lg px-10 py-5 animate-pulse-glow">
                  <Users className="h-5 w-5 mr-2" />
                  Register Now
                </Button>
              </Link>
              <Link to="/course-content">
                <Button className="btn-accent text-lg px-10 py-5">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Details
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="animate-on-scroll">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* About Institute & Department */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Institute */}
            <Card className="card-enhanced animate-on-scroll overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/NIT1.webp"
                  alt="NIT Rourkela Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">About NIT Rourkela</h3>
                </div>

                <div className="space-y-4 text-slate-600">
                  <p className="text-slate-600 leading-relaxed">
                    NIT, Rourkela is one of the premier national level institutions of repute for technical education in the country and is funded by the Government of India. It is passionately committed to making our country a world leader in technology and science and to inculcate this commitment among all its students.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    It is a residential campus offering accommodation to faculty, staff and students. The campus has all the amenities for developing personal, social and academic skills of the student community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-bold text-blue-600">601-800</div>
                      <div className="text-xs text-slate-600">World Ranking (Engineering)</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="font-bold text-orange-600">19th</div>
                      <div className="text-xs text-slate-600">NIRF Ranking 2024</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Department */}
            <Card className="card-enhanced animate-on-scroll overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/MN.jpg"
                  alt="Mining Department"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Department of Mining Engineering</h3>
                </div>

                <div className="space-y-4 text-slate-600">
                  <p className="text-slate-600 leading-relaxed">
                    Established in 1979, the Department of Mining Engineering has grown over the years as one of the pioneer mining education centres in the country. It has played a pivotal role in introducing the modern mining engineering curriculum in India.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The Department offers undergraduate, postgraduate and doctoral programs in Mining Engineering. The Department is actively involved in research activities in the areas of mine safety and reliability, spontaneous heating of coal and mine fire, underground and surface environment, coalbed methane, mine closure planning and computer applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">
            <span className="hero-heading">Explore the Workshop</span>
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 animate-on-scroll">
            Discover comprehensive learning modules designed for mining professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Course Content",
                description: "Detailed daily curriculum on drone technology",
                icon: BookOpen,
                path: "/course-content",
                gradient: "from-blue-500 to-blue-600",
                bgPattern: "pattern-dots"
              },
              {
                title: "Registration",
                description: "Secure your spot in this premium workshop with industry experts",
                icon: Users,
                path: "/register",
                gradient: "from-purple-500 to-purple-600", // Changed from orange to purple
                bgPattern: "pattern-grid"
              },
              {
                title: "Local Attractions",
                description: "Preview campus facilities, mining department and local attractions",
                icon: Award,
                path: "/LocalAttractions",
                gradient: "from-green-500 to-green-600",
                bgPattern: "pattern-dots"
              },
              {
                title: "Contact",
                description: "Get in touch with coordinators for queries and assistance",
                icon: MapPin,
                path: "/contact",
                gradient: "from-indigo-500 to-indigo-600", // Changed from purple to indigo for variety
                bgPattern: "pattern-grid"
              }
            ].map((card, index) => (
              <Card key={index} className={`card-enhanced animate-on-scroll group overflow-hidden ${card.bgPattern}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 relative">
                  <div className={`h-2 bg-gradient-to-r ${card.gradient}`}></div>
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{card.description}</p>
                    <Link to={card.path}>
                      <Button variant="outline" className="w-full hover:bg-slate-50 group-hover:border-blue-300 transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose This Workshop?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Gain hands-on experience with industry-leading technology and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description: "Learn from renowned professors and industry professionals from NIT Rourkela and leading institutions",
                icon: GraduationCap,
                gradient: "from-blue-400 to-blue-600"
              },
              {
                title: "Hands-on Training",
                description: "Practical field experience with real drone operations and data processing software",
                icon: Plane,
                gradient: "from-orange-400 to-orange-600"
              },
              {
                title: "Industry Recognition",
                description: "Certification from NIT Rourkela, a premier national institute with excellent industry connections",
                icon: Award,
                gradient: "from-green-400 to-green-600"
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center animate-on-scroll group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${highlight.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 hero-heading">
              Advanced Technologies Covered
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Master cutting-edge tools and techniques in drone surveying and mapping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Drone Technology", desc: "Multi-rotor & Fixed-wing systems" },
              { icon: Map, title: "GIS Integration", desc: "Advanced mapping & analysis" },
              { icon: Shield, title: "Safety Protocols", desc: "DGCA compliance & regulations" },
              { icon: Zap, title: "Data Processing", desc: "Photogrammetry & 3D modeling" }
            ].map((tech, index) => (
              <div key={index} className="card-enhanced p-6 text-center animate-on-scroll group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{tech.title}</h3>
                <p className="text-slate-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
