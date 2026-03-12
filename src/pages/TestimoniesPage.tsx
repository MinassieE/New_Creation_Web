import { useState, useEffect } from "react";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const featuredTestimony = {
  id: 1,
  youtubeId: "c4cmdgNAPwI",
  title: "ሙሉ ጉባኤ ያለቀሰበት ምስክርነት/ሙሉ ጉባኤ ያለቀሰበት ምስክርነት//ሐኪም ትሞታለህ አለኝ//",
  name: "ወንድም አንዱአለም እና እህት ሳባ",
  story: "God has transformed our lives in miraculous ways. Through faith and prayer, we witnessed healing and restoration that only God could do. Our testimony is a reminder that nothing is impossible with God."
};

const videoTestimonies = [
  {
    id: 1,
    youtubeId: "GsV_itG4zo0",
    title: "የኒዎርክ ዩኒቨርስቲ ከናሳና ቦይንግ ጋር ኢንተርን ሺፕ ሰጡኝ",
    name: "ወንድም ናሆም መልካሙ"
  },
  {
    id: 2,
    youtubeId: "be2y112prPM",
    title: "እንደሞተ ሰው ሆንኩኝ //ከአፍሪካ አሜሪካ መላው ኤዢያ ላቲን አሜሪካና አውሮፓ ሱሴን ለማርካት እዞር ነበር",
    name: "ወንድም ካሳዬ (ኬኬ)"
  },
  {
    id: 3,
    youtubeId: "5ERsZmih8iA",
    title: "ሁሉም ሰው ሊያየው የሚገባ የህይወት ለውጥ ምስክርነት የጭንገፋ መንፈስ ተሰበረ",
    name: "ወንድም ደመየሱስ እና ኤልፒ"
  },
  {
    id: 4,
    youtubeId: "Qhish7l2GMU",
    title: "ሁለት እግሮቿ ቃቃቃ ብለው ገጠሙ// 9 አመት ካሰቃየኝ በሽታ ተፈውሻለሁ//",
    name: "ዲቦራ እና ቢንያም"
  },
  {
    id: 5,
    youtubeId: "GjVpJbkJ3BQ",
    title: "ከሱስ፥ ራስን ከመጥላት፥ ከኩነኔ ከዲፕርሽን....ነጻ ወጥቻለሁ",
    name: "ህይወት ተስፋዬ"
  },
  {
    id: 6,
    youtubeId: "aiiyYc2XS0k",
    title: "ተፈወስኩ//የተሰጠኝን መድሃኒት ካልወሰድኩ ለሳምንት ሆስፒታል እገባ ነበር//",
    name: "ዶ/ር ገሊላ ዘገየ"
  }
];

const writtenTestimonies = [
  {
    id: 1,
    name: "Daniel M.",
    story: "I was struggling with depression and anxiety for years. When I came to New Creation Church, I encountered the love of Christ in a powerful way. Through prayer and the Word, God completely healed my mind and gave me peace that surpasses understanding."
  },
  {
    id: 2,
    name: "Sara T.",
    story: "God restored my broken marriage when I thought there was no hope. Through the teaching on forgiveness and love, my husband and I reconciled and our family is stronger than ever. Glory to God!"
  },
  {
    id: 3,
    name: "Abebe K.",
    story: "I was diagnosed with a terminal illness and doctors gave me months to live. The church prayed for me and God performed a miracle. Today I am completely healed and serving God with my whole heart."
  },
  {
    id: 4,
    name: "Marta S.",
    story: "I came to this church broken and lost. God used the teaching and the loving community to transform my life. Now I am walking in purpose and helping others find Christ."
  },
  {
    id: 5,
    name: "Yohannes K.",
    story: "After losing my job, I felt hopeless. The church family supported me in prayer and faith. Within weeks, God opened doors I never imagined. He is faithful!"
  },
  {
    id: 6,
    name: "Ruth A.",
    story: "I was bound by fear and doubt for so long. Through the powerful teaching at New Creation, I learned who I am in Christ. Now I walk in freedom and victory every day."
  }
];

export default function TestimoniesPage() {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{youtubeId: string, title: string, name: string} | null>(null);
  const [showTestimonyForm, setShowTestimonyForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+251",
    email: "",
    title: "",
    message: ""
  });

  // Auto-scroll written testimonies every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonyIndex((prev) => 
        prev === writtenTestimonies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentTestimonyIndex((prev) => 
      prev === 0 ? writtenTestimonies.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonyIndex((prev) => 
      prev === writtenTestimonies.length - 1 ? 0 : prev + 1
    );
  };

  const openVideoModal = (youtubeId: string, title: string, name: string) => {
    setSelectedVideo({ youtubeId, title, name });
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!value.startsWith("+251")) {
        setFormData({ ...formData, [name]: "+251" });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmitTestimony = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Testimony submitted:", formData);
    setShowTestimonyForm(false);
    setFormData({
      name: "",
      phone: "+251",
      email: "",
      title: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageNavbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-4 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['Outfit'] font-bold text-6xl text-gray-900 mb-4">
            Testimonies
          </h1>
          <p className="font-['Outfit'] text-xl italic text-[#6D28D9] max-w-3xl mx-auto mb-4">
            "They triumphed over him by the blood of the Lamb and by the word of their testimony."
            <span className="block text-base mt-2 text-gray-700">— Revelation 12:11</span>
          </p>
        </div>
      </div>

      {/* Featured Video Testimony - Side by Side Layout */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8">Featured Testimony</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video on Left */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${featuredTestimony.youtubeId}`}
                title={featuredTestimony.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Details on Right */}
          <div className="space-y-6">
            <h3 className="font-['Outfit'] font-bold text-3xl text-gray-900">
              {featuredTestimony.title}
            </h3>
            <p className="font-['Outfit'] text-xl text-[#6D28D9] font-semibold">
              {featuredTestimony.name}
            </p>
            <p className="font-['Outfit'] text-lg text-gray-700 leading-relaxed">
              {featuredTestimony.story}
            </p>
          </div>
        </div>
      </div>

      {/* Video Testimony Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8">Video Testimonies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonies.map((testimony) => (
            <div
              key={testimony.id}
              onClick={() => openVideoModal(testimony.youtubeId, testimony.title, testimony.name)}
              className="cursor-pointer"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#6D28D9]">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-t-lg overflow-hidden relative">
                    <img
                      src={`https://img.youtube.com/vi/${testimony.youtubeId}/maxresdefault.jpg`}
                      alt={testimony.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-['Outfit'] text-xl font-bold text-gray-900 group-hover:text-[#6D28D9] transition-colors">
                      {testimony.title}
                    </h3>
                    <p className="font-['Outfit'] text-sm text-gray-600">
                      {testimony.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Watch More on YouTube Button */}
        <div className="flex justify-center mt-8">
          <a 
            href="https://www.youtube.com/watch?v=4mUzvHikco0&list=PL4YPIT1aFwRKJDN6yp-NNe3JSYwUr-U9Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#6D28D9] hover:bg-[#5a21b6] text-white font-['Outfit'] font-semibold px-8 py-3">
              Watch More on YouTube
            </Button>
          </a>
        </div>
      </div>

      {/* Written Testimonies Carousel - Auto-scrolling */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8 text-center">Written Testimonies</h2>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonyIndex * 100}%)` }}
            >
              {writtenTestimonies.map((testimony) => (
                <div key={testimony.id} className="w-full flex-shrink-0 px-8">
                  <Card className="bg-white shadow-xl">
                    <CardContent className="p-16">
                      <div className="text-center space-y-8">
                        <p className="font-['Outfit'] text-lg text-gray-700 leading-relaxed italic">
                          "{testimony.story}"
                        </p>
                        <div>
                          <p className="font-['Outfit'] font-bold text-xl text-[#6D28D9]">
                            — {testimony.name}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {writtenTestimonies.map((testimony, index) => (
              <button
                key={testimony.id}
                onClick={() => setCurrentTestimonyIndex(index)}
                className={`transition-all duration-300 ${
                  currentTestimonyIndex === index
                    ? "bg-[#6D28D9] w-10 h-3 rounded-full"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3 rounded-full"
                }`}
                aria-label={`Go to testimony ${index + 1}`}
              />
            ))}
            <span className="ml-2 font-['Outfit'] text-sm text-gray-600">
              {currentTestimonyIndex + 1} / {writtenTestimonies.length}
            </span>
          </div>
        </div>
      </div>

      {/* Share Your Testimony CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-['Outfit'] font-bold text-4xl text-white mb-4">
            Share What God Has Done
          </h2>
          <p className="font-['Outfit'] text-lg text-white/90 mb-8">
            Your testimony can inspire and encourage others. Share how God has worked in your life.
          </p>
          <Button 
            onClick={() => setShowTestimonyForm(true)}
            className="bg-white text-[#6D28D9] hover:bg-gray-100 font-['Outfit'] font-semibold px-8 py-4 text-lg"
          >
            Share Your Testimony
          </Button>
          <p className="font-['Outfit'] text-sm text-white/70 mt-4">
            Let your story bring hope to others
          </p>
        </div>
      </div>

      {/* Testimony Submission Form Modal */}
      {showTestimonyForm && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 overflow-y-auto"
          onClick={() => setShowTestimonyForm(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-lg my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTestimonyForm(false)}
              className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-2">
                Share Your Testimony
              </h2>
              <p className="font-['Outfit'] text-gray-600 mb-6">
                Tell us how God has worked in your life
              </p>

              <form onSubmit={handleSubmitTestimony} className="space-y-6">
                <div>
                  <label className="font-['Outfit'] font-semibold text-gray-700 block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D28D9] font-['Outfit']"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] font-semibold text-gray-700 block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D28D9] font-['Outfit']"
                    placeholder="+251912345678"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] font-semibold text-gray-700 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D28D9] font-['Outfit']"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] font-semibold text-gray-700 block mb-2">
                    Testimony Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D28D9] font-['Outfit']"
                    placeholder="e.g., God Healed Me, Financial Breakthrough"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] font-semibold text-gray-700 block mb-2">
                    Your Testimony *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D28D9] font-['Outfit'] resize-none"
                    placeholder="Share your testimony here..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#6D28D9] hover:bg-[#5a21b6] text-white font-['Outfit'] font-semibold py-3"
                  >
                    Submit Testimony
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowTestimonyForm(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-['Outfit'] font-semibold py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-['Outfit'] font-bold text-2xl text-gray-900 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="font-['Outfit'] text-lg text-[#6D28D9] font-semibold">
                {selectedVideo.name}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
