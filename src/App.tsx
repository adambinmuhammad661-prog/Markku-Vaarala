/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Stethoscope, 
  ShieldCheck, 
  HeartPulse, 
  Calendar,
  Menu,
  X,
  ExternalLink,
  Share2,
  Bookmark
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive check-ups, cleanings, and preventative care for all ages.",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Restorative Care",
      description: "Fillings, crowns, and bridges to restore your smile's function and beauty.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Emergency Services",
      description: "Prompt care for toothaches, broken teeth, and other dental emergencies.",
      icon: <HeartPulse className="w-6 h-6 text-blue-600" />
    }
  ];

  const reviews = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Very professional and friendly service. Markku is an excellent dentist who explains everything clearly.",
      date: "2 weeks ago"
    },
    {
      name: "Matti L.",
      rating: 5,
      text: "Best dentist in Helsinki. The location in Citycenter is very convenient.",
      date: "1 month ago"
    },
    {
      name: "Sari H.",
      rating: 4,
      text: "Great experience, very modern equipment and gentle care.",
      date: "3 months ago"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                MV
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Markku Vaarala</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#location" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Location</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Reviews</a>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                09 6229540
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4"
          >
            <a href="#services" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#location" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#reviews" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <Button className="w-full bg-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              09 6229540
            </Button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-blue-700 bg-blue-50 border-blue-100">
                  Dentist in Helsinki
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Your Smile is Our <span className="text-blue-600">Priority</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Professional dental care by Markku Vaarala. Located in the heart of Helsinki at Citycenter Mall. We provide gentle, high-quality treatments for a healthy smile.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    Book Appointment
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Our Services
                  </Button>
                </div>
                
                {/* Quick Actions from prompt */}
                <div className="mt-12 flex flex-wrap gap-6 text-slate-500">
                  <button className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Directions</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100">
                      <Star className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Reviews</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100">
                      <Bookmark className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Save</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Share</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Call</span>
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern Dental Clinic"
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                
                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                      <p className="text-sm font-bold text-green-600">Open Now</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">Visit us today at Citycenter Mall for your check-up.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block"></div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white border-y border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Location</h3>
                  <p className="text-slate-600 text-sm">Citycenter Mall, Aleksanterinkatu 19</p>
                  <p className="text-slate-600 text-sm">00100 Helsinki</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600 text-sm">09 6229540</p>
                  <p className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">Click to call</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Hours</h3>
                  <p className="text-slate-600 text-sm">Mon - Fri: 08:00 - 18:00</p>
                  <p className="text-slate-600 text-sm">Sat: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Comprehensive Dental Services</h2>
              <p className="text-slate-600">We offer a wide range of dental treatments using the latest technology to ensure your comfort and the best results.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
                >
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">What Our Patients Say</h2>
                <p className="text-slate-600">Read reviews from our patients about their experience with Markku Vaarala and our team.</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="font-bold text-slate-900">4.9 / 5.0</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="border-slate-100 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 text-yellow-400 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="gap-2">
                View All Google Reviews <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Visit Our Clinic</h2>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                        <p className="text-slate-600">Citycenter Mall, Aleksanterinkatu 19</p>
                        <p className="text-slate-600">00100 Helsinki, Finland</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                        <p className="text-slate-600">09 6229540</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Appointments</h4>
                        <p className="text-slate-600">Call us or book online for your next visit.</p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-12 w-full lg:w-auto bg-blue-600 hover:bg-blue-700 px-12 h-14 text-lg">
                    Get Directions
                  </Button>
                </div>
                <div className="h-[400px] lg:h-auto relative bg-slate-200">
                  {/* Placeholder for Map */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mb-4" />
                    <p className="font-bold text-slate-500">Interactive Map Placeholder</p>
                    <p className="text-sm text-slate-400">Located in Citycenter Mall, Helsinki</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                    alt="Clinic Interior"
                    className="object-cover w-full h-full opacity-40"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for a Healthier Smile?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of happy patients in Helsinki. Book your consultation with Markku Vaarala today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg font-bold">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Call 09 6229540
              </Button>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-700 rounded-full opacity-20"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                  MV
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Markku Vaarala</span>
              </div>
              <p className="max-w-sm mb-6">
                Providing professional dental care in the heart of Helsinki. Our mission is to ensure every patient leaves with a healthy, confident smile.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  09 6229540
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Aleksanterinkatu 19,<br />00100 Helsinki</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-slate-800 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} Markku Vaarala. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
