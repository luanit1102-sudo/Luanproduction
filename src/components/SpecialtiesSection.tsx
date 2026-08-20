import React, { useState } from 'react';
import { AdministrativeUnit, SpecialtyItem } from '../types';
import { Utensils, Award, Sparkles, Filter, Search, MapPin, Tag } from 'lucide-react';

interface SpecialtiesSectionProps {
  districts: AdministrativeUnit[];
  onSelectDistrict: (district: AdministrativeUnit) => void;
  onAskAiAboutSpecialty: (specialtyName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  districts,
  onSelectDistrict,
  onAskAiAboutSpecialty,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDistrictFilter, setSelectedDistrictFilter] = useState<string>('all');
  const [specialtySearch, setSpecialtySearch] = useState<string>('');

  // Collect all specialties with their district info
  const allSpecialties = districts.flatMap(d => 
    d.specialties.map(sp => ({
      ...sp,
      districtFullName: d.fullName,
      districtObj: d
    }))
  );

  const categories = [
    { id: 'all', label: 'Tất cả đặc sản' },
    { id: 'AmThuc', label: 'Ẩm thực truyền thống' },
    { id: 'NongSan', label: 'Nông sản núi rừng' },
    { id: 'OCOP', label: 'Sản phẩm OCOP tiêu biểu' },
    { id: 'DoUong', label: 'Rượu men lá & Đồ uống' },
  ];

  const filteredSpecialties = allSpecialties.filter(sp => {
    const matchCategory = selectedCategory === 'all' || sp.category === selectedCategory;
    const matchDistrict = selectedDistrictFilter === 'all' || sp.districtId === selectedDistrictFilter;
    const matchSearch = sp.name.toLowerCase().includes(specialtySearch.toLowerCase()) ||
      sp.description.toLowerCase().includes(specialtySearch.toLowerCase()) ||
      sp.tasteProfile.toLowerCase().includes(specialtySearch.toLowerCase()) ||
      sp.districtFullName.toLowerCase().includes(specialtySearch.toLowerCase());

    return matchCategory && matchDistrict && matchSearch;
  });

  return (
    <div className="space-y-8" id="specialties-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/60 via-stone-900 to-emerald-950/60 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Utensils className="w-3.5 h-3.5" />
            <span>Mỹ vị Núi rừng & Tinh hoa Tây Bắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Đặc Sản, Ẩm Thực & Sản Phẩm OCOP Tỉnh Điện Biên
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Từ hạt ngọc <strong>Gạo Tám Điện Biên</strong> ngọt dẻo trên cánh đồng Mường Thanh, <strong>Thịt trâu gác bếp</strong> đượm khói mắc khén, <strong>Cá Pa Pỉnh Tộp</strong> thơm nức lá rừng đến <strong>Chè Shan Tuyết cổ thụ</strong> trăm năm Tủa Chùa và <strong>Cà phê Arabica</strong> Mường Ảng vươn tầm quốc tế.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-800 space-y-3 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white font-semibold shadow-md'
                    : 'bg-stone-950 text-stone-400 border border-stone-800 hover:text-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* District Select & Search */}
          <div className="flex items-center space-x-2">
            <select
              value={selectedDistrictFilter}
              onChange={(e) => setSelectedDistrictFilter(e.target.value)}
              className="bg-stone-950 border border-stone-800 text-stone-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">Tất cả huyện/TP</option>
              {districts.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={specialtySearch}
                onChange={(e) => setSpecialtySearch(e.target.value)}
                placeholder="Tìm món ngon..."
                className="pl-8 pr-3 py-1.5 bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs rounded-xl focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Specialties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSpecialties.map((sp) => (
          <div
            key={sp.id}
            className="bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-amber-500/40 p-5 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-200 group"
          >
            <div className="space-y-3">
              
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {sp.category === 'AmThuc' ? 'Ẩm thực bản địa' : sp.category === 'OCOP' ? 'Sản phẩm OCOP' : sp.category === 'DoUong' ? 'Đồ uống truyền thống' : 'Nông sản đặc hữu'}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                    {sp.name}
                  </h3>
                </div>

                {sp.ocopRating && (
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center space-x-1">
                    <span>OCOP</span>
                    <span>{'★'.repeat(sp.ocopRating)}</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-stone-300 leading-relaxed">
                {sp.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {sp.highlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-stone-950 text-stone-400 border border-stone-800"
                  >
                    ✓ {hl}
                  </span>
                ))}
              </div>

              {/* Flavor Profile */}
              <div className="bg-stone-950/60 p-2.5 rounded-xl border border-stone-800 text-[11px] space-y-0.5">
                <strong className="text-amber-400 block">Hương vị đặc trưng:</strong>
                <p className="text-stone-300 italic">{sp.tasteProfile}</p>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
              <button
                onClick={() => onSelectDistrict(sp.districtObj)}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-medium"
              >
                <MapPin className="w-3 h-3" />
                <span>{sp.districtFullName}</span>
              </button>

              <button
                onClick={() => onAskAiAboutSpecialty(sp.name)}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium flex items-center space-x-1 transition"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Cách thưởng thức</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
