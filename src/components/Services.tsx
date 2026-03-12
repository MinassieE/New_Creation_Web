import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";
import bgimg from "@/assets/home-hero-congregation.jpg"
import servicebg from "@/assets/servicebg.jpg"
import { Link } from "react-router-dom";



/* const services = [
  {
    id: 1,
    name: "Sunday Morning Worship",
    time: "10:00 AM",
    day: "Sunday",
    description: "Join us for inspiring worship, biblical teaching, and fellowship as we celebrate God's goodness together.",
    duration: "90 minutes",
    audience: "All Ages"
  },
  {
    id: 2,
    name: "Sunday Evening Service",
    time: "6:00 PM", 
    day: "Sunday",
    description: "A more intimate gathering focused on prayer, testimonies, and deeper biblical study in a relaxed atmosphere.",
    duration: "60 minutes",
    audience: "All Ages"
  },
  {
    id: 3,
    name: "Wednesday Bible Study",
    time: "7:00 PM",
    day: "Wednesday",
    description: "Dive deeper into God's Word with verse-by-verse study, discussion, and practical application for daily living.",
    duration: "75 minutes", 
    audience: "Adults & Teens"
  },
  {
    id: 4,
    name: "Friday Prayer Night",
    time: "7:30 PM",
    day: "Friday",
    description: "Come together for powerful corporate prayer, intercession, and seeking God's will for our church and community.",
    duration: "60 minutes",
    audience: "All Ages"
  },
  {
    id: 5,
    name: "Saturday Youth Service",
    time: "6:00 PM",
    day: "Saturday", 
    description: "High-energy worship, relevant messages, and fun activities designed specifically for teens and young adults.",
    duration: "90 minutes",
    audience: "Ages 13-25"
  }
]; */

export function Services() {
  return (
     <div id="services" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
    <Section background="default" className="flex flex-col lg:flex-row items-start justify-between w-full px-20 py-16 gap-10">

    <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-[200px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgimg}
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> 

      {/* Semi-transparent Rectangle Overlay */}
      <div className="absolute inset-0 bg-[#2B1F66]/[0.92]" />

        <div className="relative z-10 flex flex-col items-center justify-center">
      {/* Text Layer */}
          <h1 className="relative z-10 font-outfit font-bold text-7xl md:text-8xl lg:text-9xl text-white tracking-tight">
            NCIC SERVICES
          </h1>

      <div className="absolute bottom-[10px] w-[700px] md:w-[900px] h-[60px] bg-[#6D28D9] -z-10" />
      
       </div>

    </div>

    <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between w-full mt-20 gap-12">
      
      {/* Left side */}
      <div className="flex flex-col justify-center items-start space-y-6 lg:pr-12 lg:w-1/3">
      
        {/* Small Title */}
        <div className="flex items-center gap-3">
          <h3 className="font-outfit font-semibold text-base md:text-lg text-[#0076C0]">
            Our Main Services
          </h3>
          <div className="h-[1px] w-[70px] bg-[#0076C0]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-[#000000]/[0.83]">
          Become A <br />
          Part Of <br />
          Something <br />
          Great
        </h2>

        {/* Circles (Slider Indicators) */}
        <div className="flex gap-3 pt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 border-2 border-black rounded-full"></div>
        </div>
      </div>
  
      {/* RIGHT SIDE CARDS */}
      <div className="flex justify-center lg:justify-end gap-6 flex-wrap lg:flex-nowrap lg:w-2/3">
        {[
          { num: 1, day: "Sunday", title: "Sunday Service", time: "Morning: 10:00AM - 1:00PM" },
          { num: 2, day: "Tuesday", title: "Teaching Service", time: "Evening: 04:00PM - 08:00PM" },
          { num: 3, day: "Wednesday", title: "Healing & Deliverance", time: "Evening: 04:00PM - 08:00PM" },
          { num: 4, day: "Saturday", title: "Youth Service", time: "Afternoon: 02:00PM - 04:00PM" }
        ].map((service) => (
          <div
            key={service.num}
            className="relative w-[280px] h-[380px] bg-white shadow-xl rounded-lg flex flex-col items-center pt-[90px] pb-6 px-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* CIRCLES */}
            <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 flex items-center justify-center">
              {/* Outer White Circle */}
              <div className="relative shadow-lg flex items-center justify-center w-[140px] h-[140px] bg-white rounded-full">
                {/* Middle Blue Transparent Circle */}
                <div className="absolute w-[100px] h-[100px] bg-[#0076C0]/[0.40] rounded-full shadow-[0px_20px_15px_10px_rgba(79,161,211,0.13)]"></div>

                {/* Inner Gradient Circle */}
                <div className="absolute w-[92px] h-[92px] rounded-full bg-gradient-to-b from-[#0076C0]/[0.69] to-[#AED9F4]/[0.69] shadow-[0px_20px_15px_10px_rgba(79,161,211,0.31)] flex items-center justify-center">
                  <span className="font-outfit font-bold text-white text-3xl">
                    {service.num.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* CARD CONTENT */}
            <div className="mt-4 text-left w-full">
              <h3 className="font-outfit font-bold text-2xl md:text-3xl leading-tight text-[#000000] mb-1">
                {service.title}
              </h3>
              
              <p className="font-outfit font-semibold text-base text-[#0076C0] mb-3">
                Every {service.day}
              </p>

              {/* Time Info */}
              <div className="flex items-center justify-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#0076C0] flex-shrink-0" />
                <p className="font-outfit text-sm text-[#000000]">
                  {service.time}
                </p>
              </div>

              {/* Note if exists */}
              {service.note && (
                <p className="font-outfit text-xs text-[#6D28D9] italic mb-2">
                  {service.note}
                </p>
              )}

              {/* Location Info */}
              <div className="flex items-center justify-start gap-2 mb-6">
                <MapPin className="w-4 h-4 text-[#0076C0] flex-shrink-0" />
                <p className="font-outfit text-sm text-[#000000]">
                  Riche Compound
                </p>
              </div>

              {/* Contact Button */}
              <div className="flex justify-center">
                <button className="font-outfit text-sm text-[#0076C0] border-2 border-[#0076C0] rounded-md px-6 py-2 hover:bg-[#0076C0] hover:text-white transition-all duration-300 w-full">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className="text-center mt-16 w-full">
        <Link to="/services">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-[#0076C0] text-[#0076C0] hover:bg-[#0076C0] hover:text-white transition-all duration-300 px-8 py-6 text-base font-outfit font-semibold rounded-lg"
          >
            View Complete Schedule
          </Button>
        </Link>
      </div>
      
    </Section>
    </div>
  );
}