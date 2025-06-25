import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Users,
  GraduationCap,
  Building,
  CreditCard,
  Award
} from 'lucide-react';

const CourseContent = () => {
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

  const dailyContent = [
    {
      day: "Day 1",
      title: "Introduction to Drone Technology & Mining Applications",
      topics: [
        "Importance of surveying in mining operations",
        "Overview of Drone Surveys vs. Total Station Surveys – Pros & Cons",
        "Types of drones used in mining (Fixed-wing, Multi-rotor)",
        "Regulations & Compliance (DGCA, FAA, Mining Laws)",
        "Applications in Mining for Detecting Gas Leaks, Coal Mine Fires",
        "Environmental Monitoring, Mine planning, Volume Estimation",
        "Safety Monitoring, Slope Monitoring"
      ],
      icon: "🚁",
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Day 2",
      title: "Drone Hardware & Software Fundamentals",
      topics: [
        "Components of a drone (GPS, IMU, Camera, Sensors)",
        "Understanding GSD (Ground Sampling Distance) & Accuracy",
        "Flight planning using autonomous mission software",
        "Setting up flight paths, altitude, overlaps for mining surveys",
        "Pre-flight checklist & Safety protocols",
        "Hands-on practice with drone mission planning software"
      ],
      icon: "⚙️",
      color: "from-green-500 to-green-600"
    },
    {
      day: "Day 3",
      title: "Hands-on Drone Flying & Data Collection",
      topics: [
        "Field Training: Operating drones in a mining site",
        "Take-off, landing, battery management",
        "Capturing high-resolution images, LiDAR scans",
        "Emergency handling & troubleshooting common issues"
      ],
      icon: "🎯",
      color: "from-orange-500 to-orange-600"
    },
    {
      day: "Day 4",
      title: "Drone Data Processing for Mining Applications",
      topics: [
        "Introduction to photogrammetry: 3D models, DEM, DSM, DTM",
        "Processing images using software",
        "Point Cloud generation",
        "Generating DTM (Digital Terrain Models) from drone data",
        "Methods for measuring mine volumes, stockpile estimation",
        "Comparison with traditional total station & GPS methods"
      ],
      icon: "📊",
      color: "from-purple-500 to-purple-600"
    },
    {
      day: "Day 5",
      title: "GIS & Remote Sensing Data for Mine Mapping",
      topics: [
        "Basics of GIS (Geographic Information Systems)",
        "Integrating drone survey data into GIS",
        "Creating topographic maps, contour models",
        "Application in mine planning, reclamation, and environmental monitoring"
      ],
      icon: "🗺️",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-scale">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 hero-heading">
              Course Content & Structure
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-xl">
              Comprehensive 5-day intensive training program designed for mining professionals
            </p>
          </div>
        </div>
      </section>

      {/* Daily Content */}
      <section className="py-2 px-2">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 animate-on-scroll">
            Daily Schedule
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {dailyContent.map((day, index) => (
              <Card key={index} className="animate-on-scroll hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 bg-white">
                <CardHeader className={`bg-gradient-to-r ${day.color} text-white rounded-t-lg`}>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{day.icon}</div>
                    <div>
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white">
                        {day.day}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">{day.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-2 px-2">
        <div className="container mx-auto max-w-7xl">
          {/* Sponsorship Section */}
          <Card className="mt-6 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                Sponsorship Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { tier: "Platinum Sponsor", amount: "₹2.00 Lakhs", participants: "4 free participants", color: "from-gray-400 to-gray-600" },
                  { tier: "Gold Sponsor", amount: "₹1.50 Lakhs", participants: "3 free participants", color: "from-yellow-400 to-yellow-600" },
                  { tier: "Silver Sponsor", amount: "₹1.00 Lakh", participants: "2 free participants", color: "from-gray-300 to-gray-500" }
                ].map((sponsor, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${sponsor.color} mx-auto mb-3 flex items-center justify-center`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">{sponsor.tier}</h4>
                    <div className="text-lg font-bold text-blue-600 mb-1">{sponsor.amount}</div>
                    <div className="text-sm text-slate-600">{sponsor.participants}</div>
                    <div className="text-xs text-slate-500 mt-2">*GST @18% applicable</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Course Structure and Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="structure" className="w-full ">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-slate-100 text-slate-700 h-auto p-2">
              <TabsTrigger value="structure" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">Course Structure</TabsTrigger>
              <TabsTrigger value="participation" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">Participation</TabsTrigger>
              <TabsTrigger value="fees" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">Fees & Payment</TabsTrigger>
              <TabsTrigger value="accommodation" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">Accommodation</TabsTrigger>
            </TabsList>

            <TabsContent value="structure" className="animate-on-scroll ">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    Course Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The course will be primarily offered by faculty members of NIT Rourkela. Experts from other academic institutions,
                    regulatory agencies, organizations like IITs, NITs and DGMS and industries may be invited to share their latest
                    research findings with the participants.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Each session will be followed by interactive Question & Answer sessions to ensure comprehensive understanding
                    and practical application of the concepts learned.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="participation" className="animate-on-scroll">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Who Should Participate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Target Audience:</h4>
                      <ul className="space-y-2">
                        {[
                          "Mining Engineers",
                          "Surveyors & Geologists",
                          "Safety Officers",
                          "Environmental Engineers",
                          "Mine Managers"
                        ].map((role, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-slate-600">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Focus Areas:</h4>
                      <ul className="space-y-2">
                        {[
                          "Environment Management",
                          "Health & Safety Management",
                          "Mining Operations",
                          "Survey & Mapping",
                          "Technology Integration"
                        ].map((area, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span className="text-slate-600">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fees" className="animate-on-scroll">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      Course Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">₹25,000</div>
                      <div className="text-sm text-slate-600">+ 18% GST</div>
                      <div className="text-xs text-slate-500 mt-1">Per participant</div>
                    </div>
                    <div className="text-sm text-slate-600 space-y-2">
                      <p>• Course fee does not include boarding, lodging, or transportation</p>
                      <p>• The course is non-residential</p>
                      <p>• NIT Rourkela is exempted from Income Tax (no TDS deduction)</p>
                      <p>• Registration deadline: <strong>October 27, 2025</strong></p>
                      <p>• Registration fees once paid will not be refunded</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>Bank:</strong> SBI, NIT Campus, Rourkela</p>
                      <p><strong>IFSC:</strong> SBIN0002109</p>
                      <p><strong>Account Name:</strong> CONTINUING EDUCATION, NIT ROURKELA</p>
                      <p><strong>Account Number:</strong> 101 3895 1784</p>
                      <p><strong>MICR:</strong> 769002007</p>
                      <p><strong>SWIFT:</strong> SBININBB137</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg text-sm text-slate-600">
                      <strong>Alternative:</strong> Demand draft in favor of "CONTINUING EDUCATION NIT ROURKELA" payable at Rourkela
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="accommodation" className="animate-on-scroll">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-blue-600" />
                    Accommodation Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-3">On-Campus Guest House</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          Limited availability
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          Prior booking required
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          Payment basis
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          Convenient location
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-3">City Hotels</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Luxury hotels available
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Multiple options
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Various price ranges
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Easy transportation to campus
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Recommendation:</strong> On-campus accommodation is considered most convenient due to proximity to the venue.
                      Request can be made to course coordinators for guest house bookimgs on payment basis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseContent;