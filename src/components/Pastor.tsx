import { Section } from "@/components/ui/section";
import pastorImage from "@/assets/pastor-couple.jpg";
import { Button } from "@/components/ui/button";

export function Pastor() {
  return (
    <Section background="default" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Blue Border */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#0076C0] rounded-lg -z-10"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={pastorImage}
                alt="Apostle Bisrat Bezuayene and Meron Alemu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-[#242054] leading-tight">
              APOSTLE BISRAT & MERON ALEMU
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                At New Creation International Church Ethiopia, we believe your best days are still out in front of you. Whether you are joining us in person or online, we invite you to experience our services and be a part of the New Creation family.
              </p>
              
              <p>
                The Bible says when you are planted in the house of the Lord, you will flourish. Get ready to step into a new level of your destiny!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => {
                  const welcomeSection = document.getElementById('welcome');
                  if (welcomeSection) {
                    welcomeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-transparent border-2 border-[#242054] text-[#242054] font-outfit font-semibold px-8 py-6 text-base rounded-md hover:bg-[#242054] hover:text-white transition-all duration-300"
              >
                Welcome to New Creation
              </Button>
              <Button 
                size="lg"
                onClick={() => {
                  const welcomeSection = document.getElementById('welcome');
                  if (welcomeSection) {
                    welcomeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-transparent border-2 border-[#242054] text-[#242054] font-outfit font-semibold px-8 py-6 text-base rounded-md hover:bg-[#242054] hover:text-white transition-all duration-300"
              >
                New Here?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}