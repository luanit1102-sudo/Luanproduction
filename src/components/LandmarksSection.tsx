import React, { useState } from 'react';
import { AdministrativeUnit, Landmark } from '../types';
import { Landmark as LandmarkIcon, MapPin, Compass, Sparkles, Search } from 'lucide-react';

interface LandmarksSectionProps {
  districts: AdministrativeUnit[];
  onSelectDistrict: (district: AdministrativeUnit) => void;
  onAskAiAboutLandmark: (landmarkName: string) => void;
}

export const LandmarksSection: React.FC<LandmarksSectionProps> = ({
  districts,
  onSelectDistrict,
  onAskAiAboutLandmark,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allLandmarks = districts.flatMap(d => 
    d.landmarks.map(lm => ({
      ...lm,
      districtFullName: d.fullName,
      districtObj: d
    }))
  );

  const filteredLandmarks = allLandmarks.filter(lm => {
    const matchType = selectedType === 'all' || lm.type === selectedType;
    const matchSearch = lm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lm.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lm.historicalEvent && lm.historicalEvent.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lm.districtFullName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="space-y-8" id="landmarks-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-950/60 via-stone-900 to-amber-950/60 border border-sky-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
            <LandmarkIcon className="w-3.5 h-3.5" />
            <span>Địa danh Lịch sử & Thắng cảnh Hùng vĩ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Di Tích Chiến Trường, Cực Tây Biên Ải & Danh Thắng Điện Biên
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Hành trình theo dấu chân cha anh tại <strong>Đồi A1, Hầm De Castries, Sở chỉ huy Mường Phăng</strong>, chinh phục <strong>Cột mốc Cực Tây A Pa Chải</strong> thiêng liêng, vượt <strong>Đèo Pha Đin</strong> huyền thoại và ngắm <strong>Cao nguyên đá Tủa Chùa</strong> giữa mây trời Tây Bắc.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedType === 'all' ? 'bg-sky-600 text-white font-semibold' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            Tất cả danh thắng
          </button>
          <button
            onClick={() => setSelectedType('LichSu')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedType === 'LichSu' ? 'bg-red-600 text-white font-semibold' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            Di tích Lịch sử Chiến trường
          </button>
          <button
            onClick={() => setSelectedType('ThienNhien')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedType === 'ThienNhien' ? 'bg-emerald-600 text-white font-semibold' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            Thắng cảnh Thiên nhiên
          </button>
          <button
            onClick={() => setSelectedType('BienGioi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              selectedType === 'BienGioi' ? 'bg-amber-600 text-white font-semibold' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            Cột mốc & Biên giới
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm di tích, danh thắng..."
            className="w-full pl-8 pr-3 py-1.5 bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs rounded-xl focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Landmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLandmarks.map((lm) => (
          <div
            key={lm.id}
            className="bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-sky-500/40 p-5 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-200 group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  lm.type === 'LichSu'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : lm.type === 'BienGioi'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {lm.type === 'LichSu' ? 'Di tích Lịch sử' : lm.type === 'BienGioi' ? 'Cột mốc Biên cương' : 'Kỳ quan Thiên nhiên'}
                </span>
                
                <span className="text-[10px] text-stone-400 flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-stone-500" />
                  <span>{lm.coordinates[0].toFixed(2)}°B, {lm.coordinates[1].toFixed(2)}°Đ</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-display">
                {lm.name}
              </h3>

              <p className="text-xs text-stone-300 leading-relaxed">
                {lm.description}
              </p>

              {lm.historicalEvent && (
                <div className="bg-red-950/20 border border-red-500/20 p-2.5 rounded-xl text-[11px] space-y-1">
                  <strong className="text-red-400 block font-semibold">Ý nghĩa lịch sử:</strong>
                  <p className="text-stone-300">{lm.historicalEvent}</p>
                </div>
              )}

              {lm.bestTimeToVisit && (
                <div className="text-[11px] text-stone-400 flex items-center space-x-1">
                  <span className="text-sky-400">📅 Thời điểm lý tưởng:</span>
                  <span>{lm.bestTimeToVisit}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
              <button
                onClick={() => onSelectDistrict(lm.districtObj)}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-medium"
              >
                <MapPin className="w-3 h-3" />
                <span>{lm.districtFullName}</span>
              </button>

              <button
                onClick={() => onAskAiAboutLandmark(lm.name)}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium flex items-center space-x-1 transition"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Tìm hiểu qua AI</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
