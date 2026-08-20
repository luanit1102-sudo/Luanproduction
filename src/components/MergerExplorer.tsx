import React, { useState } from 'react';
import { AdministrativeUnit } from '../types';
import { DIEN_BIEN_OVERVIEW } from '../data/dienBienData';
import { 
  Layers, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Building2, 
  Maximize2, 
  Sparkles,
  Plane,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface MergerExplorerProps {
  districts: AdministrativeUnit[];
  onSelectDistrict: (district: AdministrativeUnit) => void;
}

export const MergerExplorer: React.FC<MergerExplorerProps> = ({
  districts,
  onSelectDistrict,
}) => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [communeSearch, setCommuneSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'merged_only'>('all');

  const milestones = DIEN_BIEN_OVERVIEW.administrativeMilestones;

  // Flatten all sub-units (communes, wards, towns)
  const allSubUnits = districts.flatMap(d => 
    d.subUnits.map(sub => ({
      ...sub,
      districtName: d.fullName,
      districtId: d.id,
      districtColor: d.color
    }))
  );

  const filteredSubUnits = allSubUnits.filter(sub => {
    const matchSearch = sub.name.toLowerCase().includes(communeSearch.toLowerCase()) ||
      sub.districtName.toLowerCase().includes(communeSearch.toLowerCase()) ||
      (sub.notes && sub.notes.toLowerCase().includes(communeSearch.toLowerCase()));
    
    if (filterType === 'merged_only') {
      return matchSearch && sub.isMergedOrAdjusted;
    }
    return matchSearch;
  });

  return (
    <div className="space-y-8" id="mergers-explorer-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/60 via-stone-900 to-emerald-950/60 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Chuyên đề Sắp xếp & Sáp nhập Đơn vị Hành chính</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Diện mạo Địa giới Hành chính Tỉnh Điện Biên sau Sáp nhập
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Khám phá chi tiết các mốc lịch sử điều chỉnh địa giới hành chính, đặc biệt là việc mở rộng gấp hơn 4 lần không gian đô thị của <strong>TP. Điện Biên Phủ</strong> theo Nghị quyết 815/NQ-UBTVQH14 và Đề án tinh gọn đơn vị hành chính cấp xã giai đoạn mới.
          </p>
        </div>
      </div>

      {/* Deep Dive Spotlight: TP. Điện Biên Phủ Before vs After */}
      <div className="bg-stone-900/90 rounded-2xl border border-stone-700 p-6 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Trọng tâm sáp nhập nổi bật</span>
            <h3 className="text-xl font-bold text-white font-display">Mở rộng không gian Thành phố Điện Biên Phủ</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/30 w-fit">
            Nghị quyết số 815/NQ-UBTVQH14
          </span>
        </div>

        {/* Visual Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Before */}
          <div className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-400 uppercase">Trước khi sáp nhập</span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">Đô thị hạn chế</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-2xl font-extrabold text-stone-300 font-display">64,27 km²</div>
              <p className="text-xs text-stone-400">Dân số ~57.000 người gồm 7 phường và duy nhất 1 xã (Thanh Minh cũ).</p>
            </div>
            <ul className="text-xs text-stone-400 space-y-1 pt-2 border-t border-stone-800/80">
              <li>• Không gian quy hoạch sân bay và đường tránh bị kẹp chặt</li>
              <li>• Các di tích như Mường Phăng, Pá Khoang thuộc địa giới huyện lân cận</li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-emerald-950/40 to-stone-950 p-5 rounded-xl border border-emerald-500/40 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sau sắp xếp & Sáp nhập mới</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                Tăng gấp 4,8 lần
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="text-2xl font-extrabold text-emerald-400 font-display">308,18 km²</div>
              <p className="text-xs text-stone-300">Dân số đạt hơn 85.600 người với 7 phường và 5 xã quy mô lớn.</p>
            </div>
            <ul className="text-xs text-stone-300 space-y-1.5 pt-2 border-t border-emerald-900/40">
              <li className="flex items-center space-x-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Sáp nhập toàn bộ xã Tà Lèng vào xã Thanh Minh</span>
              </li>
              <li className="flex items-center space-x-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Tiếp nhận 4 xã: Nà Nhạn, Nà Tấu, Mường Phăng, Pá Khoang</span>
              </li>
              <li className="flex items-center space-x-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Mở rộng nâng cấp Cảng hàng không Điện Biên đón tàu bay A321</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Milestones Interactive Timeline */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white font-display">Các Mốc Lịch sử Điều chỉnh Địa giới</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {milestones.map((ms, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                selectedMilestone === idx
                  ? 'bg-amber-950/40 border-amber-500 text-white shadow-lg'
                  : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:bg-stone-800'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-amber-400 block mb-1">{ms.year}</span>
                <strong className="text-sm text-stone-200 block line-clamp-2">{ms.title}</strong>
              </div>
              <p className="text-[11px] text-stone-400 mt-2 line-clamp-3 leading-relaxed">
                {ms.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Searchable Directory of all 129 Communes, Wards, Towns */}
      <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
          <div>
            <h3 className="text-lg font-bold text-white font-display flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>Tra cứu Đơn vị Hành chính Cấp Xã / Phường Toàn Tỉnh</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">Tổng số 129 đơn vị (115 xã, 9 phường, 5 thị trấn)</p>
          </div>

          {/* Filter merged only toggle */}
          <div className="flex items-center space-x-2 bg-stone-950 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition ${
                filterType === 'all' ? 'bg-stone-700 text-white' : 'text-stone-400'
              }`}
            >
              Tất cả ({allSubUnits.length})
            </button>
            <button
              onClick={() => setFilterType('merged_only')}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition ${
                filterType === 'merged_only' ? 'bg-amber-500/30 text-amber-300 font-semibold' : 'text-stone-400'
              }`}
            >
              Đơn vị đã sáp nhập / điều chỉnh ({allSubUnits.filter(s => s.isMergedOrAdjusted).length})
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={communeSearch}
            onChange={(e) => setCommuneSearch(e.target.value)}
            placeholder="Tìm theo tên xã, phường, thị trấn hoặc huyện..."
            className="w-full pl-9 pr-4 py-2 bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Sub units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
          {filteredSubUnits.map((sub, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl border transition-all ${
                sub.isMergedOrAdjusted
                  ? 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400'
                  : 'bg-stone-950/60 border-stone-800/80 hover:border-stone-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-bold text-xs text-stone-200">{sub.name}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded font-medium ${
                  sub.type === 'phuong'
                    ? 'bg-red-500/20 text-red-300'
                    : sub.type === 'thi_tran'
                    ? 'bg-sky-500/20 text-sky-300'
                    : 'bg-stone-800 text-stone-400'
                }`}>
                  {sub.type === 'phuong' ? 'Phường' : sub.type === 'thi_tran' ? 'Thị trấn' : 'Xã'}
                </span>
              </div>

              <div className="flex items-center space-x-1 text-[11px] text-stone-400 mt-1">
                <MapPin className="w-3 h-3 text-stone-500" />
                <span>{sub.districtName}</span>
              </div>

              {sub.notes && (
                <p className="text-[10px] text-amber-300 mt-1.5 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  {sub.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
