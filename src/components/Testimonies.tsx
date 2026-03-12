import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import testimonybg from "@/assets/testimonybg.jpg"
import kk from "@/assets/kk.jpg"
import nahom from "@/assets/nahom.jpg"
import demeyesus from "@/assets/demeyesus.jpg"
import andy from "@/assets/andy.jpg"
import { FaYoutube } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";

const testimonies = [
  {
    id: 1,
    name: "ወንድም ካሳዬ (ኬኬ)",
    role: "Member",
    testimony: "እንደሞተ ሰው ሆንኩኝ //ከአፍሪካ አሜሪካ መላው ኤዢያ ላቲን አሜሪካና አውሮፓ ሱሴን ለማርካት እዞር ነበር/ ወንድም ካሳዬ (ኬኬ)",
    image: kk,
    youtubeLink: "https://www.youtube.com/watch?v=be2y112prPM&list=PL4YPIT1aFwRKJDN6yp-NNe3JSYwUr-U9Y&index=3"
  },
  {
    id: 2,
    name: "ወንድም ደመየሱስ እና ኤልፒ",
    role: "Member",
    testimony: "ሁሉም ሰው ሊያየው የሚገባ የህይወት ለውጥ ምስክርነት የጭንገፋ መንፈስ ተሰበረ ወንድም ደመየሱስ እና ኤልፒ/ ሐዋርያው ብስራት(ጃፒ )",
    image: demeyesus,
    youtubeLink: "https://youtu.be/5ERsZmih8iA?si=EDjtYkuWI0BNciWd"
  },
  {
    id: 3,
    name: "ወንድም ናሆም መልካሙ",
    role: "University student",
    testimony: "የኒዎርክ ዩኒቨርስቲ ከናሳና ቦይንግ ጋር ኢንተርን ሺፕ ሰጡኝ እጅግ አስደናቂ ምስክርንት/ወንድም ናሆም መልካሙNew Creation Church",
    image: nahom,
    youtubeLink: "https://youtu.be/GsV_itG4zo0?si=q4pbgbe9q6YeKq-Z"
  },
  {
    id: 4,
    name: "ወንድም አንዱአለም እና እህት ሳባ", 
    role: "Member",
    testimony: "ሙሉ ጉባኤ ያለቀሰበት ምስክርነት/ሙሉ ጉባኤ ያለቀሰበት ምስክርነት//ሐኪም ትሞታለህ አለኝ//ወንድም አንዱአለም እና እህት ሳባ",
    image: andy,
    youtubeLink: "https://youtu.be/c4cmdgNAPwI?si=a5dGMEGEAwYmc247"
  }
];

export function Testimonies() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    <Section background="soft">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-[200px] flex flex-col items-center justify-center overflow-hidden mb-24">
      
      <img
        src={testimonybg}
        alt="Testimony Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> 

     
      <div className="absolute inset-0 bg-[#2B1F66]/[0.92]" />

        <div className="relative z-10 flex flex-col items-center justify-center">
      
          <h1 className="relative z-10 font-['Outfit'] font-bold text-[110px] text-white -ml-[420px] tracking-tight">
            TESTIMONY
          </h1>

      <div className="absolute bottom-[10px] w-[800px] h-[73px] bg-[#6D28D9] -ml-[420px] -z-10" />
      
       </div>

    </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-center">
        {testimonies.map((testimony) => (
    <div
      key={testimony.id}
      className="mt-14 relative bg-[#2B1F66] w-[300px] h-[360px] rounded-lg flex flex-col items-center justify-start text-center text-white shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:[box-shadow:0_14px_30px_-5px_rgba(0.5,0.5,0.5,0.5)]"
    >
      {/* Circular Image */}
      <div 
        className="absolute -top-20 w-[171px] h-[171px] rounded-full border-[8px] border-white overflow-hidden"
        style={{
          boxShadow: "0px 14px 5.5px rgba(0, 0, 0, 0.25)",
        }}
        >
        <img
          src={testimony.image}
          alt={testimony.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-32 px-6 flex flex-col items-center">
        <p className="italic text-sm text-white/90 leading-relaxed mb-4 mt-2">
          "{testimony.testimony}"
        </p>
        <h4 className="font-bold text-lg">{testimony.name}</h4>
        <p className="text-xs text-white/70">{testimony.role}</p>
      </div>

      <div className="absolute bottom-4 right-7">
        <a
          href={testimony.youtubeLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-all duration-300"
        >
          <FaYoutube size={36} />
        </a>
      </div>
    </div>
    
  ))}
</div>

      
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center">
        {testimonies.map((testimony) => (
          <Card key={testimony.id} className="relative overflow-hidden group hover:shadow-medium transition-all duration-300">
            <CardContent className="p-16">
              <div className="absolute top-4 right-4 text-gold/20 group-hover:text-gold/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimony.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimony.name}</h4>
                  <p className="text-sm text-text-soft">{testimony.role}</p>
                </div>
              </div>
              
              <blockquote className="text-text-soft leading-relaxed italic relative z-10">
                "{testimony.testimony}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div> */}
      
      <div className="text-center">
        <Link to="/testimonies">
          <Button 
            variant="outline"
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Read More Testimonies
          </Button>
        </Link>
      </div>
      
    </Section>
    </div>
  );
}