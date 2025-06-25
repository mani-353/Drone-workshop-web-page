
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle, Clock, DollarSign, FileText, Users, Shield, Award } from 'lucide-react';

const Register = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-heading">
              Register for the Workshop
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
              Secure your spot in this premium drone surveying and mapping workshop
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                <Clock className="h-5 w-5 mr-2" />
                Registration Deadline: Oct 27, 2025
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
                      href="https://forms.gle/mNRhJD5r1J1k3S7e7"
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
                      <p className="text-xl font-bold">October 27, 2025</p>
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
                    Course fee along with nominations must be sent latest by October 27, 2025
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

      <Footer />
    </div>
  );
};

export default Register;
