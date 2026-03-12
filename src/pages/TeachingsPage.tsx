import { useState } from "react";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import img1 from "@/assets/Apostle.jpg";
import img2 from "@/assets/Eli.jpg";
import img3 from "@/assets/Tsi.jpg";

const categories = ["All", "General", "Faith", "Prayer", "Healing", "Identity in Christ", "Spiritual Growth"];

const featuredSermons = [
  {
    id: 1,
    title: "ከፈተና መውጫ",
    speaker: "Apostle Bisrat Bezuayene",
    date: "March 10, 2024",
    youtubeId: "R4l004u91l8",
    thumbnail: img1,
    category: "Faith"
  },
  {
    id: 2,
    title: "በእግዚያብሔር መታመን",
    speaker: "Apostle Bisrat Bezuayene",
    date: "March 10, 2024",
    youtubeId: "zWzanyITPPs",
    thumbnail: img1,
    category: "Faith"
  },
  {
    id: 3,
    title: "ውጤታማ ፀሎት",
    speaker: "Tsion Adnew",
    date: "March 8, 2024",
    youtubeId: "I3MwqBr8odw",
    thumbnail: img3,
    category: "General"
  }
];

const sermons = [
  {
    id: 1,
    title: "Take the shield of faith / የእምነትን ጋሻ አንሱ",
    speaker: "Apostle Bisrat Bezuayene",
    date: "March 3, 2024",
    duration: "45 minutes",
    youtubeId: "bsH40M0FuAc",
    thumbnail: img1,
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
    thumbnail: img2,
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
    thumbnail: img3,
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
    thumbnail: img1,
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
    thumbnail: img2,
    youtubeLink: "https://www.youtube.com/watch?v=WfR_3hOJvi8",
    category: "Spiritual Growth"
  },
  {
    id: 6,
    title: "Loving God / እግዚያብሔርን መውደድ",
    speaker: "Minassie Ephrem",
    date: "January 28, 2024",
    duration: "44 minutes",
    youtubeId: "3cXzWQwqoAc",
    thumbnail: img3,
    youtubeLink: "https://www.youtube.com/watch?v=3cXzWQwqoAc&t=1206s",
    category: "General"
  },
  {
    id: 7,
    title: "Holy Communion / የጌጋ ሥጋና ደም",
    speaker: "Brother Elias Terefe",
    date: "January 21, 2024",
    duration: "48 minutes",
    youtubeId: "r7oFpuS3Ork",
    thumbnail: img1,
    youtubeLink: "https://youtu.be/r7oFpuS3Ork?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "General"
  },
  {
    id: 8,
    title: "The power of your word / የአንድነት ኃይል",
    speaker: "Apostle Bisrat Bezuayene",
    date: "January 14, 2024",
    duration: "52 minutes",
    youtubeId: "Feud8crVu0w",
    thumbnail: img2,
    youtubeLink: "https://youtu.be/Feud8crVu0w?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "Spiritual Growth"
  },
  {
    id: 9,
    title: "Believers authority / የአማኝ ስልጣን",
    speaker: "Apostle Bisrat Bezuayene",
    date: "January 7, 2024",
    duration: "46 minutes",
    youtubeId: "3dm7pyhKtM4",
    thumbnail: img3,
    youtubeLink: "https://youtu.be/3dm7pyhKtM4?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "Faith"
  },
  {
    id: 10,
    title: "For whose happiness do you live? / ለማን ደስታ ትኖራለህ?",
    speaker: "Apostle Bisrat Bezuayene",
    date: "December 31, 2023",
    duration: "50 minutes",
    youtubeId: "xsXdAHZkm9Q",
    thumbnail: img1,
    youtubeLink: "https://youtu.be/xsXdAHZkm9Q?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "General"
  },
  {
    id: 11,
    title: "The power of praise / የምስጋና ኃይል",
    speaker: "Apostle Bisrat Bezuayene",
    date: "December 24, 2023",
    duration: "44 minutes",
    youtubeId: "BNMEVkXSFZY",
    thumbnail: img2,
    youtubeLink: "https://youtu.be/BNMEVkXSFZY?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "Prayer"
  },
  {
    id: 12,
    title: "The power of focus / የትኩረት ኃይል",
    speaker: "Apostle Bisrat Bezuayene",
    date: "December 17, 2023",
    duration: "49 minutes",
    youtubeId: "7PnK8B9rMZg",
    thumbnail: img3,
    youtubeLink: "https://youtu.be/7PnK8B9rMZg?list=PL4YPIT1aFwRK4I-p7t7aoZNFWKZ9ASJDd",
    category: "Spiritual Growth"
  }
];

const teachingSeries = [
  {
    id: 1,
    title: "Jesus the healer / ፈዋሹ ኢየሱስ",
    videoCount: 9,
    description: "Discovering Jesus as our healer",
    playlistId: "PL4YPIT1aFwRJF9lYwtcBa2QY6L5icYQAl",
    thumbnail: img3,
    playlistLink: "https://www.youtube.com/watch?v=hCX_sIMyC6o&list=PL4YPIT1aFwRJF9lYwtcBa2QY6L5icYQAl"
  },
  {
    id: 2,
    title: "Spirit of faith / የእምነት መንፈስ",
    videoCount: 12,
    description: "A comprehensive series on the spirit of faith",
    playlistId: "PL4YPIT1aFwRJYkMSWcezU8BnXWgq2MF1r",
    thumbnail: img1,
    playlistLink: "https://www.youtube.com/watch?v=LkSkVaeDTTQ&list=PL4YPIT1aFwRJYkMSWcezU8BnXWgq2MF1r"
  },
  {
    id: 3,
    title: "Praying in spirit",
    videoCount: 8,
    description: "Learn to pray effectively in the spirit",
    playlistId: "PL4YPIT1aFwRJR71zPdiSasdMF-Ygnstlc",
    thumbnail: img2,
    playlistLink: "https://www.youtube.com/watch?v=3U5cakUhnXI&list=PL4YPIT1aFwRJR71zPdiSasdMF-Ygnstlc"
  },
  {
    id: 4,
    title: "Righteousness / ፅድቅ",
    videoCount: 10,
    description: "Walking in righteousness through Christ",
    playlistId: "PL4YPIT1aFwRLNlup1GAbY3SHXhUvJ_JYM",
    thumbnail: img3,
    playlistLink: "https://www.youtube.com/watch?v=TWNJ8Y8b_tc&list=PL4YPIT1aFwRLNlup1GAbY3SHXhUvJ_JYM"
  },
  {
    id: 5,
    title: "Who is man / ሰው ማን ነው?",
    videoCount: 15,
    description: "Understanding our identity and purpose",
    playlistId: "PL4YPIT1aFwRKCfE1McsyRf7hSqNkSm5nM",
    thumbnail: img1,
    playlistLink: "https://www.youtube.com/watch?v=a9IpfDQGN5A&list=PL4YPIT1aFwRKCfE1McsyRf7hSqNkSm5nM"
  },
  {
    id: 6,
    title: "Faith / እምነት",
    videoCount: 14,
    description: "Building and strengthening your faith",
    playlistId: "PL4YPIT1aFwRK0WmPw5ESjPXTGOffc73MO",
    thumbnail: img2,
    playlistLink: "https://www.youtube.com/watch?v=NN195Sc2_3Y&list=PL4YPIT1aFwRK0WmPw5ESjPXTGOffc73MO"
  }
];

export default function TeachingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{youtubeId: string, title: string, speaker: string} | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sermonsPerPage = 6;

  const filteredSermons = selectedCategory === "All" 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredSermons.length / sermonsPerPage);
  const indexOfLastSermon = currentPage * sermonsPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonsPerPage;
  const currentSermons = filteredSermons.slice(indexOfFirstSermon, indexOfLastSermon);

  const currentFeaturedSermon = featuredSermons[currentFeaturedIndex];

  const handlePrevious = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === 0 ? featuredSermons.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === featuredSermons.length - 1 ? 0 : prev + 1
    );
  };

  const openVideoModal = (youtubeId: string, title: string, speaker: string) => {
    setSelectedVideo({ youtubeId, title, speaker });
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageNavbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-4 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['Outfit'] font-bold text-6xl text-gray-900 mb-4">
            Teachings
          </h1>
          <p className="font-['Outfit'] text-xl italic text-[#6D28D9] max-w-3xl mx-auto mb-4">
            "Faith comes by hearing, and hearing by the word of God."
            <span className="block text-base mt-2 text-gray-700">— Romans 10:17</span>
          </p>
        </div>
      </div>

      {/* Featured Sermon */}
      <div className="max-w-5xl mx-auto px-8 py-4">
        <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8">Featured Sermon</h2>
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* YouTube Embed - Full Width */}
            <div className="aspect-video w-full">
              <iframe
                key={currentFeaturedSermon.youtubeId}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentFeaturedSermon.youtubeId}`}
                title={currentFeaturedSermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Sermon Details - Below Video */}
            <div className="p-6">
              <h3 className="font-['Outfit'] font-bold text-2xl text-gray-900 mb-3">
                {currentFeaturedSermon.title}
              </h3>
              <p className="font-['Outfit'] text-base text-[#6D28D9] font-semibold mb-2">
                {currentFeaturedSermon.speaker}
              </p>
              <p className="font-['Outfit'] text-sm text-gray-600">
                <Calendar className="inline w-4 h-4 mr-2" />
                {currentFeaturedSermon.date}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          {featuredSermons.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous sermon"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next sermon"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Featured Sermon Navigation Dots */}
        {featuredSermons.length > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">
            {featuredSermons.map((sermon, index) => (
              <button
                key={sermon.id}
                onClick={() => setCurrentFeaturedIndex(index)}
                className={`transition-all duration-300 ${
                  currentFeaturedIndex === index
                    ? "bg-[#6D28D9] w-10 h-3 rounded-full"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3 rounded-full"
                }`}
                aria-label={`Go to sermon ${index + 1}`}
              />
            ))}
            <span className="ml-2 font-['Outfit'] text-sm text-gray-600">
              {currentFeaturedIndex + 1} / {featuredSermons.length}
            </span>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`font-['Outfit'] px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sermon Library */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8">Sermon Library</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSermons.map((sermon) => (
            <div
              key={sermon.id}
              onClick={() => openVideoModal(sermon.youtubeId, sermon.title, sermon.speaker)}
              className="cursor-pointer"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#6D28D9]">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-t-lg overflow-hidden relative">
                    <img
                      src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = sermon.thumbnail;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="inline-block px-3 py-1 bg-[#6D28D9]/10 text-[#6D28D9] text-xs font-semibold rounded-full">
                      {sermon.category}
                    </span>
                    <h3 className="font-['Outfit'] text-xl font-bold text-gray-900 group-hover:text-[#6D28D9] transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="font-['Outfit'] text-sm text-gray-600">
                      {sermon.speaker}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {sermon.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {sermon.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-['Outfit'] font-semibold transition-all ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-lg font-['Outfit'] font-semibold transition-all ${
                  currentPage === pageNumber
                    ? "bg-[#6D28D9] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-['Outfit'] font-semibold transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Teaching Series Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-['Outfit'] font-bold text-3xl text-gray-900 mb-8">Teaching Series</h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {teachingSeries.map((series) => (
                <Card key={series.id} className="w-[350px] flex-shrink-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-t-lg overflow-hidden relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/videoseries?list=${series.playlistId}`}
                        title={series.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded-full">
                          {series.videoCount} videos
                        </span>
                      </div>
                      <h3 className="font-['Outfit'] text-xl font-bold text-gray-900">
                        {series.title}
                      </h3>
                      <p className="font-['Outfit'] text-gray-600 text-sm">
                        {series.description}
                      </p>
                      <a 
                        href={series.playlistLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-[#6D28D9] hover:bg-[#5a21b6] text-white font-['Outfit'] font-semibold">
                          Watch on YouTube
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* See More Playlists Button */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://www.youtube.com/@NewCreationChurchEthiopia/playlists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6D28D9] hover:bg-[#5a21b6] text-white font-['Outfit'] font-semibold px-8 py-3">
                See More Playlists on YouTube
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Subscribe / Stay Updated Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-['Outfit'] font-bold text-4xl text-white mb-4">
            Never Miss a Teaching
          </h2>
          <p className="font-['Outfit'] text-lg text-white/90 mb-8">
            Subscribe to stay connected with the latest sermons and spiritual teachings.
          </p>
          <a 
            href="https://www.youtube.com/@NewCreationChurchEthiopia/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-[#6D28D9] hover:bg-gray-100 font-['Outfit'] font-semibold px-8 py-4 text-lg">
              Subscribe to YouTube
            </Button>
          </a>
          <p className="font-['Outfit'] text-sm text-white/70 mt-4">
            Join thousands of believers growing in faith through God's Word
          </p>
        </div>
      </div>

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
                {selectedVideo.speaker}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
