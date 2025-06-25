
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, User, Building, Globe } from 'lucide-react';

const Contact = () => {
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

  const coordinators = [
    {
      name: "Prof. Amit Kumar Gorai",
      title: "Course Coordinator",
      department: "Department of Mining Engineering",
      phone: "+91-661-246 2615",
      email: "goraia@nitrkl.ac.in",
      photo: "/amit_kumar_gorai.jpg", // Replace with actual image URL
      profileLink: "https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/goraia",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Prof. Ram Manohar Bishwal",
      title: "Course Coordinator",
      department: "Department of Mining Engineering",
      phone: "+91-661-246 4611",
      email: "bishwalrm@nitrkl.ac.in",
      photo: "/ram_manhor_bishwal.jpeg", // Replace with actual image URL
      profileLink: "https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/bishwalrm",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Prof. Yugal Kishore Patanwar",
      title: "Course Coordinator",
      department: "Department of Mining Engineering",
      phone: "+91 96816 78018",
      email: "patanwaryk@nitrkl.ac.in",
      photo: "/Yugal_kishor_patanwar.jpg", // Replace with actual image URL
      profileLink: "https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/patanwaryk",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Prof. Charan Kumar Ala",
      title: "Course Coordinator",
      department: "Department of Mining Engineering",
      phone: "+91 77355 37803",
      email: "alacharan@nitrkl.ac.in",
      photo: "/charan_kumar_ala.jpg",
      profileLink: "https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/alacharan",
      color: "from-purple-500 to-purple-600"
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-heading">
              Contact Information
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-4 rounded-xl">
              Get in touch with our course coordinators for any queries or assistance
            </p>
          </div>
        </div>
      </section>

      {/* Course Coordinators */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">
            <span className="hero-heading">Course Coordinators</span>
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 animate-on-scroll">
            Expert faculty members ready to assist you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="card-enhanced group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className={`bg-gradient-to-r ${coordinator.color} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={coordinator.photo}
                        alt={coordinator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Badge className="mb-3 bg-white/20 text-black border-0 backdrop-blur-sm">
                        Course Coordinator
                      </Badge>
                      <CardTitle className="text-xl">
                        <a
                          href={coordinator.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline cursor-pointer"
                        >
                          {coordinator.name}
                        </a>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium">{coordinator.department}</span>
                  </div>

                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <a href={`tel:${coordinator.phone}`} className="hover:text-green-600 transition-colors font-medium">
                      {coordinator.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-orange-600" />
                    </div>
                    <a href={`mailto:${coordinator.email}`} className="hover:text-orange-600 transition-colors font-medium">
                      {coordinator.email}
                    </a>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700" asChild>
                      <a href={`mailto:${coordinator.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700" asChild>
                      <a href={`tel:${coordinator.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach Rourkela */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll">
            <span className="hero-heading">How to Reach Rourkela</span>
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12 animate-on-scroll">
            Multiple convenient ways to reach NIT Rourkela
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-enhanced animate-on-scroll text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✈️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">By Air</h3>
                <p className="text-slate-600 mb-4">
                  Four convenient airports: Rourkela (10 km), Jharsuguda (100 km), Ranchi (167 km), Bhubaneswar (320 km)
                </p>
                <p className="text-sm text-slate-500">
                  Jharsuguda Airport is most convenient for visitors from other states
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced animate-on-scroll text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚂</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">By Train</h3>
                <p className="text-slate-600 mb-4">
                  Rourkela Railway Station connects to major Indian cities with regular services
                </p>
                <p className="text-sm text-slate-500">
                  Direct trains available from Delhi, Mumbai, Kolkata, and Chennai
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced animate-on-scroll text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚌</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">By Road</h3>
                <p className="text-slate-600 mb-4">
                  Excellent connectivity via National Highway 143 and well-maintained state highways
                </p>
                <p className="text-sm text-slate-500">
                  Regular bus services and taxi options from nearby cities available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Institute Address */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-enhanced animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Institute Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-3 bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-800 text-lg">Department of Mining Engineering</h3>
                  <p className="text-slate-700 font-medium">National Institute of Technology Rourkela</p>
                  <p className="text-slate-600">NIT Rourkela - 769008</p>
                  <p className="text-slate-600">Odisha, India</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <a href="https://nitrkl.ac.in" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                      www.nitrkl.ac.in
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full btn-primary" asChild>
                    <a
                      href="https://maps.google.com/maps?q=Mining+Department+NIT+Rourkela,+Rourkela,+Odisha"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      View Mining Department on Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Embed */}
            <Card className="card-enhanced animate-on-scroll overflow-hidden">
              <CardHeader>
                <CardTitle>Mining Department - NIT Rourkela</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96 relative overflow-hidden rounded-b-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8!2d84.90127!3d22.25204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201d4b40a8f2b7%3A0x4c8f9b8e9c4e8d0a!2sMining%20Department%2C%20NIT%20Rourkela!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mining Department - NIT Rourkela Location"
                    className="hover:saturate-0 transition-all duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
