import React, { useState } from 'react';
import { AdministrativeUnit } from '../types';
import { 
  X, 
  Layers, 
  Users, 
  Utensils, 
  Landmark, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Building2,
  CheckCircle2
} from 'lucide-react';

interface DistrictDetailModalProps {
  district: AdministrativeUnit | null;
  onClose: () => void;
  onAskAi: (topic: string, districtName: string) => void;
}

export const DistrictDetailModal: React.FC<DistrictDetailModalProps> = ({
  district,
  onClose,
  onAskAi,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'merger' | 'subunits' | 'specialties' | 'landmarks'>('overview');

  if (!district) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-stone-900 border border-stone-700 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        id={`district-modal-${district.id}`}
      >
        
        {/* Header */}
        <div className="p-6 bg-stone-950 border-b border-stone-800 flex items-start justify-between relative">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: district.color }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {district.fullName}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                {district.type === 'thanh_pho' ? 'Thành phố' : district.type === 'thi_xa' ? 'Thị xã' : 'Huyện'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 italic">
              "{district.heroTagline}"
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex space-x-1 px-6 py-2 bg-stone-950/80 border-b border-stone-800 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'overview' ? 'bg-emerald-600 text-white font-semibold' : 'text-stone-400 hover:text-white'
            }`}
          >
            Tổng quan & Dân tộc
          </button>
          <button
            onClick={() => setActiveTab('merger')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1 ${
              activeTab === 'merger' ? 'bg-amber-500/30 text-amber-300 font-semibold' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Địa giới & Sáp nhập</span>
          </button>
          <button
            onClick={() => setActiveTab('subunits')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'subunits' ? 'bg-emerald-600 text-white font-semibold' : 'text-stone-400 hover:text-white'
            }`}
          >
            Xã / Phường ({district.subUnits.length})
          </button>
          <button
            onClick={() => setActiveTab('specialties')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1 ${
              activeTab === 'specialties' ? 'bg-emerald-600 text-white font-semibold' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Đặc sản OCOP ({district.specialties.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('landmarks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1 ${
              activeTab === 'landmarks' ? 'bg-emerald-600 text-white font-semibold' : 'text-stone-400 hover:text-white'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Di tích ({district.landmarks.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 uppercase">Diện tích</span>
                  <p className="text-lg font-bold text-emerald-400 font-display">{district.areaKm2} km²</p>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 uppercase">Dân số</span>
                  <p className="text-lg font-bold text-white font-display">{district.population.toLocaleString()}</p>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 uppercase">Mật độ</span>
                  <p className="text-lg font-bold text-amber-400 font-display">{district.density} ng/km²</p>
                </div>
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 uppercase">Hành chính</span>
                  <p className="text-lg font-bold text-sky-400 font-display">{district.subUnits.length} xã/phường</p>
                </div>
              </div>

              {/* Summary Description */}
              <div className="bg-stone-950/60 p-4 rounded-xl border border-stone-800 text-xs sm:text-sm text-stone-300 leading-relaxed">
                {district.summary}
              </div>

              {/* Ethnic Composition */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Thành phần Dân tộc & Đặc trưng Văn hóa</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {district.ethnicGroups.map((eg, idx) => (
                    <div key={idx} className="bg-stone-950/60 p-3.5 rounded-xl border border-stone-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs text-emerald-300 font-bold">{eg.name}</strong>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-bold">{eg.percentageInDistrict}</span>
                      </div>
                      <p className="text-xs text-stone-400">{eg.culturalTrait}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'merger' && (
            <div className="space-y-6">
              <div className="bg-amber-950/30 border border-amber-500/40 p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-amber-300 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Lịch sử và Diễn biến Điều chỉnh Địa giới</span>
                  </h4>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-200 font-semibold">
                    {district.mergerDetails.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {district.mergerDetails.summary}
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Các thay đổi chi tiết:</strong>
                <div className="space-y-2">
                  {district.mergerDetails.changes.map((ch, idx) => (
                    <div key={idx} className="bg-stone-950/60 p-3 rounded-xl border border-stone-800 flex items-start space-x-2.5 text-xs text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'subunits' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {district.subUnits.map((sub, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs ${
                      sub.isMergedOrAdjusted
                        ? 'bg-amber-950/20 border-amber-500/40 text-stone-200'
                        : 'bg-stone-950/60 border-stone-800 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span>{sub.name}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-800 text-stone-400">
                        {sub.type === 'phuong' ? 'Phường' : sub.type === 'thi_tran' ? 'Thị trấn' : 'Xã'}
                      </span>
                    </div>
                    {sub.notes && (
                      <p className="text-[10px] text-amber-300 mt-1">{sub.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specialties' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {district.specialties.map((sp) => (
                <div key={sp.id} className="bg-stone-950/70 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-sm font-bold text-emerald-300">{sp.name}</strong>
                    {sp.ocopRating && (
                      <span className="text-xs text-amber-400 font-bold">OCOP {'★'.repeat(sp.ocopRating)}</span>
                    )}
                  </div>
                  <p className="text-xs text-stone-300">{sp.description}</p>
                  <p className="text-[11px] text-amber-300 italic">Hương vị: {sp.tasteProfile}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'landmarks' && (
            <div className="space-y-3">
              {district.landmarks.map((lm) => (
                <div key={lm.id} className="bg-stone-950/70 p-4 rounded-xl border border-stone-800 space-y-1.5">
                  <strong className="text-sm font-bold text-sky-300 block">{lm.name}</strong>
                  <p className="text-xs text-stone-300">{lm.description}</p>
                  {lm.historicalEvent && (
                    <p className="text-[11px] text-red-300">Ý nghĩa: {lm.historicalEvent}</p>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          <button
            onClick={() => {
              onAskAi('Tư vấn toàn diện', district.fullName);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-lg transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Hỏi Trợ lý AI về {district.name}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition"
          >
            Đóng
          </button>
        </div>

      </div>

    </div>
  );
};
