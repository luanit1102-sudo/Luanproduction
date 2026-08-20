import React, { useState } from 'react';
import { DIEN_BIEN_DISTRICTS, DIEN_BIEN_OVERVIEW } from './data/dienBienData';
import { AdministrativeUnit } from './types';
import { Navbar } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { MergerExplorer } from './components/MergerExplorer';
import { EthnicSection } from './components/EthnicSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { LandmarksSection } from './components/LandmarksSection';
import { ToursSection } from './components/ToursSection';
import { AiAssistant } from './components/AiAssistant';
import { QuizSection } from './components/QuizSection';
import { DistrictDetailModal } from './components/DistrictDetailModal';
import { 
  Sparkles, 
  MapPin, 
  Layers, 
  Users, 
  Utensils, 
  Landmark, 
  Compass, 
  HelpCircle,
  ArrowUpRight,
  Info
} from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('map');
  const [selectedDistrict, setSelectedDistrict] = useState<AdministrativeUnit | null>(null);
  const [modalDistrict, setModalDistrict] = useState<AdministrativeUnit | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [aiCustomPrompt, setAiCustomPrompt] = useState<string>('');

  const handleSelectDistrict = (district: AdministrativeUnit) => {
    setSelectedDistrict(district);
  };

  const handleOpenMergerDetails = (district: AdministrativeUnit) => {
    setModalDistrict(district);
  };

  const handleAskAiAboutTopic = (topic: string, districtName?: string) => {
    const promptText = districtName
      ? `Hãy cung cấp thông tin chi tiết về ${districtName} của tỉnh Điện Biên: bao gồm địa giới hành chính sau sáp nhập, thành phần các dân tộc, đặc sản tiêu biểu và các di tích danh thắng không thể bỏ qua.`
      : `Tôi muốn tìm hiểu sâu về chủ đề: ${topic} tại tỉnh Điện Biên.`;
    
    setAiCustomPrompt(promptText);
    setActiveTab('ai');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-stone-950">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Quick Provincial Overview Hero Ribbon */}
        <section className="bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900 border border-stone-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Cổng Thông Tin Địa Giới, Bản Đồ & Văn Hóa Tây Bắc</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display tracking-tight">
                Tỉnh Điện Biên Sau Sáp Nhập & Điều Chỉnh Địa Giới
              </h1>
              <p className="text-xs sm:text-sm text-stone-400 max-w-2xl leading-relaxed">
                Khám phá 10 đơn vị hành chính (1 TP, 1 TX, 8 Huyện), 129 xã phường, bản sắc 19 dân tộc, kho tàng đặc sản OCOP và di tích chiến trường lừng lẫy năm châu.
              </p>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0 bg-stone-950/70 p-3 rounded-2xl border border-stone-800 text-center">
              <div className="px-2">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">ĐV Hành chính</span>
                <span className="text-base sm:text-lg font-extrabold text-emerald-400 font-display">10 Huyện/TP</span>
              </div>
              <div className="px-2 border-x border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Xã/Phường</span>
                <span className="text-base sm:text-lg font-extrabold text-amber-400 font-display">129 Đơn vị</span>
              </div>
              <div className="px-2">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Dân tộc</span>
                <span className="text-base sm:text-lg font-extrabold text-sky-400 font-display">19 Dân tộc</span>
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Tab Contents */}
        {activeTab === 'map' && (
          <InteractiveMap
            districts={DIEN_BIEN_DISTRICTS}
            selectedDistrict={selectedDistrict}
            onSelectDistrict={handleSelectDistrict}
            onOpenMergerDetails={handleOpenMergerDetails}
            onOpenAiGuideWithTopic={(topic, districtName) => handleAskAiAboutTopic(topic, districtName)}
          />
        )}

        {activeTab === 'mergers' && (
          <MergerExplorer
            districts={DIEN_BIEN_DISTRICTS}
            onSelectDistrict={handleSelectDistrict}
          />
        )}

        {activeTab === 'people' && (
          <EthnicSection
            onAskAiAboutEthnic={(ethnicName) => {
              setAiCustomPrompt(`Hãy giới thiệu chi tiết về phong tục tập quán, trang phục truyền thống, lễ hội và ẩm thực đặc trưng của người ${ethnicName} tại tỉnh Điện Biên.`);
              setActiveTab('ai');
            }}
          />
        )}

        {activeTab === 'specialties' && (
          <SpecialtiesSection
            districts={DIEN_BIEN_DISTRICTS}
            onSelectDistrict={(d) => {
              setSelectedDistrict(d);
              setActiveTab('map');
            }}
            onAskAiAboutSpecialty={(spName) => {
              setAiCustomPrompt(`Hãy chia sẻ về nguồn gốc, hương vị, cách chế biến và địa chỉ thưởng thức chuẩn nhất món đặc sản "${spName}" của Điện Biên.`);
              setActiveTab('ai');
            }}
          />
        )}

        {activeTab === 'landmarks' && (
          <LandmarksSection
            districts={DIEN_BIEN_DISTRICTS}
            onSelectDistrict={(d) => {
              setSelectedDistrict(d);
              setActiveTab('map');
            }}
            onAskAiAboutLandmark={(lmName) => {
              setAiCustomPrompt(`Hãy kể cho tôi nghe lịch sử, ý nghĩa và hướng dẫn tham quan di tích/danh thắng "${lmName}" tại Điện Biên.`);
              setActiveTab('ai');
            }}
          />
        )}

        {activeTab === 'tours' && (
          <ToursSection
            onAskAiCustomTour={(tourTitle) => {
              setAiCustomPrompt(`Tôi muốn lên kế hoạch chi tiết cho chuyến đi Điện Biên theo hành trình "${tourTitle}". Hãy tư vấn chi tiết về phương tiện di chuyển từ Hà Nội, khách sạn, điểm ăn uống và lưu ý cần thiết.`);
              setActiveTab('ai');
            }}
          />
        )}

        {activeTab === 'ai' && (
          <AiAssistant initialPrompt={aiCustomPrompt} />
        )}

        {activeTab === 'quiz' && (
          <QuizSection />
        )}

      </main>

      {/* Modal for In-depth District Detail */}
      <DistrictDetailModal
        district={modalDistrict}
        onClose={() => setModalDistrict(null)}
        onAskAi={(topic, districtName) => handleAskAiAboutTopic(topic, districtName)}
      />

      {/* Footer */}
      <footer className="mt-16 bg-stone-900 border-t border-stone-800 py-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-stone-950 font-display">
              ĐB
            </div>
            <div>
              <p className="text-stone-200 font-semibold">Cổng Thông Tin Điện Biên Số</p>
              <p className="text-[11px] text-stone-500">Cập nhật theo Nghị quyết 815/NQ-UBTVQH14 & Quy hoạch phát triển tỉnh</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span>Bản đồ Địa giới Hành chính</span>
            <span>•</span>
            <span>19 Dân tộc Tây Bắc</span>
            <span>•</span>
            <span>Đặc sản OCOP</span>
            <span>•</span>
            <span>Trợ lý AI Thông Minh</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
