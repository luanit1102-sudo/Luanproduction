import React, { useState } from 'react';
import { AdministrativeUnit } from '../types';
import { VectorMap } from './VectorMap';
import { LeafletMap } from './LeafletMap';
import { 
  Layers, 
  Map as MapIcon, 
  Globe, 
  Mountain, 
  Sparkles, 
  Users, 
  Utensils, 
  Landmark, 
  Search, 
  ChevronRight, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface InteractiveMapProps {
  districts: AdministrativeUnit[];
  selectedDistrict: AdministrativeUnit | null;
  onSelectDistrict: (district: AdministrativeUnit) => void;
  onOpenMergerDetails: (district: AdministrativeUnit) => void;
  onOpenAiGuideWithTopic: (topic: string, districtName?: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  onOpenMergerDetails,
  onOpenAiGuideWithTopic,
}) => {
  const [mapMode, setMapMode] = useState<'vector' | 'leaflet'>('vector');
  const [leafletStyle, setLeafletStyle] = useState<'terrain' | 'satellite' | 'street'>('terrain');
  const [activeLayer, setActiveLayer] = useState<'all' | 'specialties' | 'landmarks' | 'ethnicity' | 'mergers'>('all');
  const [districtSearch, setDistrictSearch] = useState('');

  const filteredDistricts = districts.filter(d => 
    d.fullName.toLowerCase().includes(districtSearch.toLowerCase()) ||
    d.summary.toLowerCase().includes(districtSearch.toLowerCase()) ||
    d.specialties.some(s => s.name.toLowerCase().includes(districtSearch.toLowerCase()))
  );

  return (
    <div className="space-y-6" id="interactive-map-section">
      
      {/* Top Controls & View Mode Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-stone-900/80 p-4 rounded-2xl border border-stone-800 backdrop-blur-sm">
        
        {/* Left: Map Mode Switcher */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider hidden sm:inline">Chế độ xem:</span>
          <div className="bg-stone-950 p-1 rounded-xl border border-stone-800 flex space-x-1">
            <button
              onClick={() => setMapMode('vector')}
              id="btn-mode-vector"
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                mapMode === 'vector'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Đồ họa Sáp nhập</span>
            </button>

            <button
              onClick={() => setMapMode('leaflet')}
              id="btn-mode-leaflet"
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                mapMode === 'leaflet'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Địa hình / Vệ tinh GIS</span>
            </button>
          </div>

          {/* If leaflet mode, show terrain/satellite toggle */}
          {mapMode === 'leaflet' && (
            <div className="bg-stone-950 p-1 rounded-xl border border-stone-800 flex space-x-1">
              <button
                onClick={() => setLeafletStyle('terrain')}
                className={`px-2.5 py-1 text-xs rounded-md transition ${leafletStyle === 'terrain' ? 'bg-stone-700 text-emerald-300 font-semibold' : 'text-stone-400'}`}
              >
                Địa hình
              </button>
              <button
                onClick={() => setLeafletStyle('satellite')}
                className={`px-2.5 py-1 text-xs rounded-md transition ${leafletStyle === 'satellite' ? 'bg-stone-700 text-emerald-300 font-semibold' : 'text-stone-400'}`}
              >
                Vệ tinh
              </button>
              <button
                onClick={() => setLeafletStyle('street')}
                className={`px-2.5 py-1 text-xs rounded-md transition ${leafletStyle === 'street' ? 'bg-stone-700 text-emerald-300 font-semibold' : 'text-stone-400'}`}
              >
                Đường bộ
              </button>
            </div>
          )}
        </div>

        {/* Right: Layer filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider hidden lg:inline mr-1">Lớp tin:</span>
          
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              activeLayer === 'all' ? 'bg-stone-700 text-white border border-stone-600' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            Tất cả
          </button>

          <button
            onClick={() => setActiveLayer('mergers')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center space-x-1 ${
              activeLayer === 'mergers' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            <Layers className="w-3 h-3 text-amber-400" />
            <span>Địa giới sáp nhập</span>
          </button>

          <button
            onClick={() => setActiveLayer('specialties')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center space-x-1 ${
              activeLayer === 'specialties' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            <Utensils className="w-3 h-3 text-emerald-400" />
            <span>Đặc sản OCOP</span>
          </button>

          <button
            onClick={() => setActiveLayer('landmarks')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center space-x-1 ${
              activeLayer === 'landmarks' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-stone-950 text-stone-400 border border-stone-800'
            }`}
          >
            <Landmark className="w-3 h-3 text-sky-400" />
            <span>Di tích lịch sử</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Map & Side Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 7 cols: Map Canvas */}
        <div className="lg:col-span-7 space-y-3">
          {mapMode === 'vector' ? (
            <VectorMap
              districts={districts}
              selectedDistrict={selectedDistrict}
              onSelectDistrict={onSelectDistrict}
              activeLayer={activeLayer}
            />
          ) : (
            <LeafletMap
              districts={districts}
              selectedDistrict={selectedDistrict}
              onSelectDistrict={onSelectDistrict}
              mapStyle={leafletStyle}
            />
          )}

          {/* Fast Fact Badge under Map */}
          <div className="bg-stone-900/60 p-3 rounded-xl border border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Tổng diện tích tự nhiên: <strong className="text-stone-200">9.562,9 km²</strong></span>
            </div>
            <div className="hidden sm:block">
              <span>Đường biên giới: <strong className="text-stone-200">455,57 km</strong> (Việt - Lào & Việt - Trung)</span>
            </div>
          </div>
        </div>

        {/* Right 5 cols: District Inspector or List Selector */}
        <div className="lg:col-span-5 space-y-4">
          
          {selectedDistrict ? (
            /* Detailed Inspector for Selected District */
            <div className="bg-stone-900/95 rounded-2xl border border-stone-700 p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200" id="district-inspector-panel">
              
              {/* Header */}
              <div className="flex items-start justify-between border-b border-stone-800 pb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: selectedDistrict.color }}
                    />
                    <h3 className="text-xl font-bold text-white font-display">
                      {selectedDistrict.fullName}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-1 italic">
                    "{selectedDistrict.heroTagline}"
                  </p>
                </div>

                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  {selectedDistrict.type === 'thanh_pho' ? 'Thành phố' : selectedDistrict.type === 'thi_xa' ? 'Thị xã' : 'Huyện'}
                </span>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center bg-stone-950/70 p-3 rounded-xl border border-stone-800">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase">Diện tích</span>
                  <p className="text-sm font-bold text-emerald-400">{selectedDistrict.areaKm2} km²</p>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 uppercase">Dân số</span>
                  <p className="text-sm font-bold text-white">{selectedDistrict.population.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 uppercase">Mật độ</span>
                  <p className="text-sm font-bold text-amber-400">{selectedDistrict.density} ng/km²</p>
                </div>
              </div>

              {/* Administrative Changes Highlight */}
              <div className="bg-amber-950/20 border border-amber-500/30 p-3 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between text-amber-300 text-xs font-semibold">
                  <span className="flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Biến động địa giới & Sáp nhập</span>
                  </span>
                  <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-200">
                    {selectedDistrict.mergerDetails.period}
                  </span>
                </div>
                <p className="text-stone-300 text-xs leading-relaxed">
                  {selectedDistrict.mergerDetails.summary}
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => onOpenMergerDetails(selectedDistrict)}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center space-x-1 underline"
                  >
                    <span>Xem đầy đủ xã/phường sau sắp xếp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* People & Ethnicity */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-stone-200">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dân tộc & Văn hóa nổi bật</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDistrict.ethnicGroups.map((eg, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] px-2 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700 flex items-center space-x-1"
                    >
                      <strong className="text-emerald-400">{eg.name}</strong>
                      <span className="text-stone-400">({eg.percentageInDistrict})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties & Gastronomy */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-stone-200">
                  <Utensils className="w-3.5 h-3.5 text-amber-400" />
                  <span>Đặc sản & Sản vật OCOP</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDistrict.specialties.map((sp) => (
                    <div 
                      key={sp.id} 
                      className="bg-stone-950/60 p-2.5 rounded-xl border border-stone-800 hover:border-emerald-500/40 transition"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-emerald-300">
                        <span className="truncate">{sp.name}</span>
                        {sp.ocopRating && (
                          <span className="text-[10px] text-amber-400 font-bold">★{sp.ocopRating}</span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">{sp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmarks */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-stone-200">
                  <Landmark className="w-3.5 h-3.5 text-sky-400" />
                  <span>Di tích & Thắng cảnh tiêu biểu</span>
                </div>
                <div className="space-y-1.5">
                  {selectedDistrict.landmarks.map((lm) => (
                    <div key={lm.id} className="text-xs bg-stone-950/40 p-2 rounded-lg border border-stone-800/80">
                      <strong className="text-sky-300 block">{lm.name}</strong>
                      <p className="text-stone-400 text-[11px] mt-0.5">{lm.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ask AI Button regarding this district */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenAiGuideWithTopic('Khám phá chi tiết', selectedDistrict.fullName)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white text-xs font-semibold shadow-lg flex items-center justify-center space-x-2 transition"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Hỏi Trợ lý AI về {selectedDistrict.name}</span>
                </button>
              </div>

            </div>
          ) : (
            /* Quick District Selector List */
            <div className="bg-stone-900/80 rounded-2xl border border-stone-800 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <h3 className="text-sm font-bold text-stone-200 flex items-center space-x-2">
                  <span>10 Đơn vị Hành chính Tỉnh</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-stone-800 text-stone-400">{districts.length}</span>
                </h3>
              </div>

              {/* Search Filter inside list */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={districtSearch}
                  onChange={(e) => setDistrictSearch(e.target.value)}
                  placeholder="Lọc huyện / đặc sản..."
                  className="w-full pl-8 pr-3 py-1.5 bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredDistricts.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => onSelectDistrict(d)}
                    className="p-2.5 rounded-xl bg-stone-950/50 hover:bg-stone-800 border border-stone-800/80 hover:border-emerald-500/50 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0 group-hover:scale-125 transition" 
                        style={{ backgroundColor: d.color }}
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-stone-200 group-hover:text-emerald-400">
                            {d.fullName}
                          </span>
                          {d.id === 'dien-bien-phu' && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                              Mở rộng 4x
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-stone-400 line-clamp-1">{d.specialties[0]?.name || d.heroTagline}</p>
                      </div>
                    </div>

                    <div className="text-right text-[11px] text-stone-400 shrink-0">
                      <span>{d.areaKm2} km²</span>
                      <ChevronRight className="w-3.5 h-3.5 inline ml-1 text-stone-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
