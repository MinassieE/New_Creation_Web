import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Calendar, Download, Share2, X } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

export function Devotional() {
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [showShareModal, setShowShareModal] = useState(false);
  
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const devotionalTitle = language === 'en' ? 'Walking in His Light' : 'በእርሱ ብርሃን መራመድ';
  const shareUrl = window.location.href;
  const shareText = `Check out today's devotional: ${devotionalTitle} - New Creation International Church Ethiopia`;

  const handleShare = (platform: string) => {
    let url = '';
    
    switch(platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Section id="devotional" className="bg-gradient-to-br from-[#E6E6FA] via-[#F0E6FF] to-[#E6E6FA] py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-[#242054] mb-4">
            Today's Devotional
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium text-lg">{today}</span>
          </div>
        </div>

        {/* Main Card */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          {/* Devotional Title with Language Toggle and Download */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-6 flex items-center justify-between gap-4">
            {/* Language Toggle - Left */}
            <div className="inline-flex rounded-lg border-2 border-white overflow-hidden shadow-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1.5 font-outfit font-semibold text-sm transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-white text-purple-600'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('am')}
                className={`px-4 py-1.5 font-outfit font-semibold text-sm transition-all duration-300 ${
                  language === 'am'
                    ? 'bg-white text-purple-600'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                አማ
              </button>
            </div>

            {/* Title - Center */}
            <h3 className="font-outfit font-bold text-2xl md:text-3xl text-white text-center flex-1">
              {language === 'en' ? 'Walking in His Light' : 'በእርሱ ብርሃን መራመድ'}
            </h3>

            {/* Share and Download Buttons - Right */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowShareModal(true)}
                className="p-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-sm"
                aria-label="Share Devotional"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-sm"
                aria-label="Download Devotional"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            {/* Scripture Highlight Box */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 border-l-4 border-purple-600 rounded-r-lg p-6 shadow-sm">
              <p className="text-sm font-semibold text-purple-800 uppercase tracking-wide mb-3">
                {language === 'en' ? 'Scripture Reference' : 'የመጽሐፍ ቅዱስ ማጣቀሻ'}
              </p>
              <p className="font-outfit text-xl md:text-2xl font-semibold text-purple-900 mb-4">
                {language === 'en' ? '1 John 1:5-7' : '1 ዮሐንስ 1:5-7'}
              </p>
              <blockquote className="text-base md:text-lg text-gray-800 leading-relaxed italic border-l-2 border-purple-400 pl-4">
                {language === 'en' ? (
                  <>
                    "This is the message we have heard from him and declare to you: God is light; in him there is no darkness at all. 
                    If we claim to have fellowship with him and yet walk in the darkness, we lie and do not live out the truth. 
                    But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, 
                    his Son, purifies us from all sin."
                  </>
                ) : (
                  <>
                    "ከእርሱ የሰማነውና ለእናንተ የምንገልጸው መልእክት ይህ ነው፤ እግዚአብሔር ብርሃን ነው፥ በእርሱም ጨለማ ፈጽሞ የለም። 
                    ከእርሱ ጋር ኅብረት አለን ብለን በጨለማ ብንመላለስ እንዋሻለን፥ እውነትንም አናደርግም። 
                    እርሱ በብርሃን ውስጥ እንደ ሆነ እኛም በብርሃን ብንመላለስ እርስ በርሳችን ኅብረት አለን፥ የልጁም የኢየሱስ ክርስቶስ ደም ከኃጢአት ሁሉ ያነጻናል።"
                  </>
                )}
              </blockquote>
            </div>

            {/* Main Devotional Text */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                {language === 'en' ? (
                  <>
                    <p>
                      As believers, we are called to walk in God's light daily. This means living with transparency, 
                      integrity, and love in all our relationships. When we choose to walk in His light, we experience 
                      true fellowship with God and with one another.
                    </p>
                    
                    <p>
                      Walking in the light isn't about perfection—it's about honesty and openness before God. It means 
                      bringing our struggles, our failures, and our victories into His presence, knowing that His light 
                      exposes not to condemn, but to heal and restore.
                    </p>

                    <p>
                      Today, ask yourself: "Am I walking in God's light in every area of my life?" Let His truth 
                      illuminate any areas of darkness and guide you toward His perfect will. Remember, where His light 
                      shines, darkness cannot remain.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      እንደ አማኞች በየቀኑ በእግዚአብሔር ብርሃን መራመድ ተጠርተናል። ይህ ማለት በሁሉም ግንኙነቶቻችን ውስጥ በግልጽነት፣ 
                      በታማኝነት እና በፍቅር መኖር ማለት ነው። በእርሱ ብርሃን ለመራመድ ስንመርጥ ከእግዚአብሔር እና እርስ በርሳችን ጋር እውነተኛ ኅብረት እናገኛለን።
                    </p>
                    
                    <p>
                      በብርሃን መራመድ ስለ ፍጽምና አይደለም - ከእግዚአብሔር በፊት ስለ ታማኝነት እና ግልጽነት ነው። ይህ ማለት 
                      ትግሎቻችንን፣ ውድቀቶቻችንን እና ድሎቻችንን ወደ እርሱ መገኘት ማምጣት ማለት ነው፣ የእርሱ ብርሃን ለመኮነን ሳይሆን 
                      ለመፈወስ እና ለመመለስ እንደሚያጋልጥ እያወቅን።
                    </p>

                    <p>
                      ዛሬ እራስዎን ይጠይቁ፡ "በህይወቴ በሁሉም ክፍል በእግዚአብሔር ብርሃን እየተራመድኩ ነው?" የእርሱ እውነት 
                      ማንኛውንም የጨለማ አካባቢዎች ያብራራ እና ወደ ፍጹም ፈቃዱ ይምራዎ። ያስታውሱ፣ የእርሱ ብርሃን በሚበራበት ጨለማ ሊቆይ አይችልም።
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Confession Section */}
            <div className="bg-purple-50 rounded-lg p-6 md:p-8 border border-purple-200">
              <h4 className="font-outfit font-bold text-2xl text-purple-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-purple-600 rounded"></span>
                {language === 'en' ? 'Confession' : 'መግለጫ'}
              </h4>
              <p className="text-gray-800 leading-relaxed text-base md:text-lg italic">
                {language === 'en' ? (
                  <>
                    I declare that I am a child of light. I walk in truth, transparency, and integrity before God and man. 
                    The light of Christ shines through me, dispelling every darkness in my life. I am cleansed by the blood 
                    of Jesus, and I walk in fellowship with God and His people. Today, I choose to live in His marvelous light!
                  </>
                ) : (
                  <>
                    የብርሃን ልጅ መሆኔን አውጃለሁ። ከእግዚአብሔር እና ከሰው በፊት በእውነት፣ በግልጽነት እና በታማኝነት እራመዳለሁ። 
                    የክርስቶስ ብርሃን በእኔ ውስጥ ያበራል፣ በህይወቴ ውስጥ ያለውን ጨለማ ሁሉ ያስወግዳል። በኢየሱስ ደም ተነጽቼአለሁ፣ 
                    እናም ከእግዚአብሔር እና ከህዝቡ ጋር በኅብረት እራመዳለሁ። ዛሬ በእርሱ አስደናቂ ብርሃን ለመኖር መርጫለሁ!
                  </>
                )}
              </p>
            </div>
          </div>
        </Card>

        {/* Share Modal */}
        {showShareModal && (
          <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <div 
              className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Outfit'] font-bold text-2xl text-gray-900">
                  Share Devotional
                </h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="font-['Outfit'] text-gray-600 mb-6">
                Share today's devotional with your friends and family
              </p>

              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                  <span className="font-['Outfit'] font-semibold">Facebook</span>
                </button>

                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span className="font-['Outfit'] font-semibold">WhatsApp</span>
                </button>

                <button
                  onClick={() => handleShare('telegram')}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <FaTelegram className="w-6 h-6" />
                  <span className="font-['Outfit'] font-semibold">Telegram</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
