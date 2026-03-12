import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import bgimg from "@/assets/teachingpg2.jpg";
import img1 from "@/assets/Apostle.jpg";
import img2 from "@/assets/Eli.jpg";
import img3 from "@/assets/Tsi.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa" ;
import { FiArrowRight } from 'react-icons/fi'; 
import { useState, useEffect } from "react"; 


const teachings = [
  {
    id: 1,
    title: "Take the shield of faith / የእምነትን ጋሻ አንሱ",
    speaker: "Apostle Bisrat Bezuayene",
    date: "March 3, 2024",
    duration: "45 minutes",
    youtubeId: "bsH40M0FuAc",
    image: img1,
    youtubeLink: "https://www.youtube.com/watch?v=bsH40M0FuAc&t=3s",
    category: "Faith"
  },
  {
    id: 2,
    title: "The way of favor blessing and success / የሞገስ የበረከት የስኬት መንገድ",
    speaker: "Apostle Bisrat Bezuayene",
    date: "February 25, 2024",
    duration: "38 minutes",
    youtubeId: "sEm4rZMlwq4",
    image: img2,
    youtubeLink: "https://www.youtube.com/watch?v=sEm4rZMlwq4&t=2s",
    category: "Spiritual Growth"
  },
  {
    id: 3,
    title: "Effective prayer / ውጤታማ ፀሎት",
    speaker: "Tsion Adnew",
    date: "February 18, 2024",
    duration: "42 minutes",
    youtubeId: "I3MwqBr8odw",
    image: img3,
    youtubeLink: "https://www.youtube.com/watch?v=I3MwqBr8odw&t=195s",
    category: "Prayer"
  },
  {
    id: 4,
    title: "When God comes to visit / እግዚያብሒር ሊጎበኝ ሲመጣ",
    speaker: "Brother Elias Terefe",
    date: "February 11, 2024",
    duration: "50 minutes",
    youtubeId: "SaXqZyu6vPU",
    image: img1,
    youtubeLink: "https://www.youtube.com/watch?v=SaXqZyu6vPU",
    category: "General"
  },
  {
    id: 5,
    title: "Understanding the unseen realm / የማይታየውን አለም መረዳት",
    speaker: "Amen Daniel",
    date: "February 4, 2024",
    duration: "40 minutes",
    youtubeId: "WfR_3hOJvi8",
    image: img2,
    youtubeLink: "https://www.youtube.com/watch?v=WfR_3hOJvi8",
    category: "Spiritual Growth"
  }
];

export function Teachings() {
  return (
    <div id="teachings" className="relative min-h-screen w-full overflow-hidden">
    <Section background="gradient">
      {/* <SectionHeader 
        title="Recent Teachings"
        subtitle="Grow in your faith through biblical messages that speak to real life. Each teaching is designed to encourage, challenge, and equip you for your spiritual journey."
      /> */}



      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-[200px] flex flex-col items-center justify-center overflow-hidden]">
      
      <img
        src={bgimg}
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> 

     
      <div className="absolute inset-0 bg-[#2B1F66]/[0.92]" />

        <div className="relative z-10 flex flex-col items-center justify-center">
      
          <h1 className="relative z-10 font-['Outfit'] font-bold text-[110px] text-white -ml-[420px] tracking-tight">
            TEACHINGS
          </h1>

      <div className="absolute bottom-[10px] w-[800px] h-[73px] bg-[#6D28D9] -ml-[420px] -z-10" />
      
       </div>

    </div>
      

      <div className="relative overflow-hidden mt-20 mb-8">
        {/* Scrolling container */}
        <div className="flex gap-6 animate-scroll">
          {/* First set of cards */}
          {teachings.map((teaching) => (
            <Card 
              key={`first-${teaching.id}`} 
              className="flex-shrink-0 w-[400px] group hover:shadow-medium transition-all duration-300 border-gold/10 hover:border-gold/30"
            >
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={`https://img.youtube.com/vi/${teaching.youtubeId}/maxresdefault.jpg`}
                    alt={teaching.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = teaching.image;
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-primary font-medium">{teaching.speaker}</div>
                  
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {teaching.title}
                  </h3>
                  
                  <div className="relative flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {teaching.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {teaching.duration}
                    </div>
                    
                    <div className="absolute bottom-0 right-0">
                      <a
                        href={teaching.youtubeLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transform transition-transform duration-300 hover:scale-125"
                      >
                        <FaYoutube className="text-red-600 hover:text-red-500 w-9 h-9" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {teachings.map((teaching) => (
            <Card 
              key={`second-${teaching.id}`} 
              className="flex-shrink-0 w-[400px] group hover:shadow-medium transition-all duration-300 border-gold/10 hover:border-gold/30"
            >
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={`https://img.youtube.com/vi/${teaching.youtubeId}/maxresdefault.jpg`}
                    alt={teaching.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = teaching.image;
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-primary font-medium">{teaching.speaker}</div>
                  
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {teaching.title}
                  </h3>
                  
                  <div className="relative flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {teaching.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {teaching.duration}
                    </div>
                    
                    <div className="absolute bottom-0 right-0">
                      <a
                        href={teaching.youtubeLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transform transition-transform duration-300 hover:scale-125"
                      >
                        <FaYoutube className="text-red-600 hover:text-red-500 w-9 h-9" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 mt-14">
        {teachings.map((teaching) => (
          <Card key={teaching.id} className="group hover:shadow-medium transition-all duration-300 border-gold/10 hover:border-gold/30">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-hero rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm text-primary font-medium">{teaching.series}</div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {teaching.title}
                </h3>
                
                <p className="text-text-soft leading-relaxed">
                  {teaching.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {teaching.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {teaching.duration}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
      
      <div className="relative text-center mt-8">
        <Link to="/teachings">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            See all teachings
          </Button>
        </Link>
      </div>
    </Section>
    </div>
  );
}