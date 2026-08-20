import React, { useState } from 'react';
import { ETHNIC_GROUPS_OVERVIEW } from '../data/dienBienData';
import { EthnicGroupOverview } from '../types';
import { Users, Sparkles, Music, Home, Calendar, Sparkle, Search } from 'lucide-react';

interface EthnicSectionProps {
  onAskAiAboutEthnic: (ethnicName: string) => void;
}

export const EthnicSection: React.FC<EthnicSectionProps> = ({
  onAskAiAboutEthnic,
}) => {
  const [selectedEthnic, setSelectedEthnic] = useState<EthnicGroupOverview>(ETHNIC_GROUPS_OVERVIEW[0]);
  const [ethnicSearch, setEthnicSearch] = useState('');

  const filteredEthnicList = ETHNIC_GROUPS_OVERVIEW.filter(e =>
    e.name.toLowerCase().includes(ethnicSearch.toLowerCase()) ||
    (e.alternateNames && e.alternateNames.toLowerCase().includes(ethnicSearch.toLowerCase())) ||
    e.mainDistricts.some(d => d.toLowerCase().includes(ethnicSearch.toLowerCase()))
  );

  return (
    <div className="space-y-8" id="ethnic-people-section">
      
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/60 via-stone-900 to-amber-950/60 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Users className="w-3.5 h-3.5" />
            <span>Đại gia đình 19 Dân tộc Tây Bắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Con Người, Bản Sắc & Phong Tục 19 Dân Tộc Tỉnh Điện Biên
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Điện Biên là nơi hội tụ bản sắc rực rỡ của 19 dân tộc anh em. Dân tộc <strong>Thái (38%)</strong> và <strong>H'Mông (34%)</strong> chiếm đa số, cùng người Kinh, Hà Nhì, Khơ Mú, Dao, Cống, Si La... tạo nên vườn hoa văn hóa lung linh với điệu Xòe di sản thế giới UNESCO, tiếng khèn Mông gọi bạn tình và những nếp nhà sàn đá phiến ven dòng sông Đà.
          </p>
        </div>
      </div>

      {/* Ethnicity Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 4 cols: Selector List */}
        <div className="lg:col-span-4 bg-stone-900/90 rounded-2xl border border-stone-800 p-4 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <h3 className="text-sm font-bold text-stone-200">Nhóm Dân Tộc</h3>
            <span className="text-xs text-stone-400 font-mono">19 Dân tộc</span>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={ethnicSearch}
              onChange={(e) => setEthnicSearch(e.target.value)}
              placeholder="Tìm dân tộc, địa bàn..."
              className="w-full pl-8 pr-3 py-1.5 bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredEthnicList.map((ethnic) => {
              const isSelected = selectedEthnic.id === ethnic.id;
              return (
                <div
                  key={ethnic.id}
                  onClick={() => setSelectedEthnic(ethnic)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md'
                      : 'bg-stone-950/40 border-stone-800/80 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs">{ethnic.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isSelected ? 'bg-emerald-500 text-stone-950' : 'bg-stone-800 text-emerald-400'
                    }`}>
                      {ethnic.percentageInProvince}%
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                    Dân số: ~{ethnic.populationInDienBien.toLocaleString()} người
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 8 cols: Detailed Cultural Showcase */}
        <div className="lg:col-span-8 bg-stone-900/90 rounded-2xl border border-stone-700 p-6 space-y-6 shadow-2xl animate-in fade-in duration-200">
          
          {/* Header of Selected Ethnic */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${selectedEthnic.avatarBg}`}></span>
                <h3 className="text-2xl font-bold text-white font-display">{selectedEthnic.name}</h3>
              </div>
              {selectedEthnic.alternateNames && (
                <p className="text-xs text-stone-400 mt-0.5">Tên gọi khác: {selectedEthnic.alternateNames}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                Chiếm {selectedEthnic.percentageInProvince}% dân số toàn tỉnh
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800 text-xs">
            <div>
              <strong className="text-stone-400 block mb-0.5">Ước tính dân số tại Điện Biên:</strong>
              <span className="text-base font-bold text-emerald-400 font-display">
                {selectedEthnic.populationInDienBien.toLocaleString()} người
              </span>
            </div>
            <div>
              <strong className="text-stone-400 block mb-0.5">Địa bàn cư trú tập trung chính:</strong>
              <span className="text-stone-200 font-medium">
                {selectedEthnic.mainDistricts.join(', ')}
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-4 text-xs leading-relaxed">
            
            {/* Costume */}
            <div className="bg-stone-950/40 p-4 rounded-xl border border-stone-800 space-y-1.5">
              <div className="flex items-center space-x-2 text-amber-400 font-semibold">
                <Sparkle className="w-4 h-4" />
                <span>Trang phục truyền thống & Nghệ thuật dệt thổ cẩm</span>
              </div>
              <p className="text-stone-300">{selectedEthnic.costumeFeatures}</p>
            </div>

            {/* Customs & Beliefs */}
            <div className="bg-stone-950/40 p-4 rounded-xl border border-stone-800 space-y-1.5">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                <Users className="w-4 h-4" />
                <span>Tập quán, Lối sống & Tín ngưỡng</span>
              </div>
              <p className="text-stone-300">{selectedEthnic.customsAndBeliefs}</p>
            </div>

            {/* Housing & Festivals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-stone-950/40 p-3.5 rounded-xl border border-stone-800 space-y-1">
                <div className="flex items-center space-x-1.5 text-sky-400 font-semibold">
                  <Home className="w-3.5 h-3.5" />
                  <span>Kiến trúc nhà ở cổ truyền</span>
                </div>
                <p className="text-stone-300 text-[11px]">{selectedEthnic.traditionalHousing}</p>
              </div>

              <div className="bg-stone-950/40 p-3.5 rounded-xl border border-stone-800 space-y-1">
                <div className="flex items-center space-x-1.5 text-rose-400 font-semibold">
                  <Music className="w-3.5 h-3.5" />
                  <span>Nhạc cụ & Dân ca dân vũ</span>
                </div>
                <p className="text-stone-300 text-[11px]">{selectedEthnic.musicalArts}</p>
              </div>
            </div>

            {/* Festivals */}
            <div className="bg-stone-950/40 p-4 rounded-xl border border-stone-800 space-y-2">
              <div className="flex items-center space-x-2 text-purple-400 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Lễ hội & Di sản Văn hóa Tiêu biểu</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedEthnic.festivals.map((fest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-purple-950/30 text-purple-300 border border-purple-500/30 text-[11px] font-medium"
                  >
                    ★ {fest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Ask AI Footer */}
          <div className="pt-2">
            <button
              onClick={() => onAskAiAboutEthnic(selectedEthnic.name)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white text-xs font-semibold shadow-lg flex items-center justify-center space-x-2 transition"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Hỏi AI về phong tục & lễ hội của {selectedEthnic.name}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
