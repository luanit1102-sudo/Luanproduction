import React, { useState } from 'react';
import { TOUR_ROUTES } from '../data/dienBienData';
import { TourRoute } from '../types';
import { Compass, Calendar, Clock, MapPin, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface ToursSectionProps {
  onAskAiCustomTour: (tourTitle: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  onAskAiCustomTour,
}) => {
  const [selectedTour, setSelectedTour] = useState<TourRoute>(TOUR_ROUTES[0]);

  return (
    <div className="space-y-8" id="tour-routes-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/60 via-stone-900 to-amber-950/60 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Hành Trình Khám Phá Tiêu Biểu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Gợi Ý Lịch Trình Khám Phá Điện Biên Tối Ưu
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Các cung đường được thiết kế khoa học kết nối các di tích lịch sử, làng nghề truyền thống, danh thắng thiên nhiên và thưởng thức trọn vẹn ẩm thực đặc sản Tây Bắc.
          </p>
        </div>
      </div>

      {/* Tour Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TOUR_ROUTES.map((tour) => {
          const isSelected = selectedTour.id === tour.id;
          return (
            <div
              key={tour.id}
              onClick={() => setSelectedTour(tour)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 shadow-xl ${
                isSelected
                  ? 'bg-emerald-950/40 border-emerald-500 shadow-emerald-950/50'
                  : 'bg-stone-900/80 border-stone-800 hover:border-stone-700 hover:bg-stone-850'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{tour.duration}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-display line-clamp-2">
                  {tour.title}
                </h3>

                <p className="text-xs text-stone-300">
                  {tour.theme}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 flex items-center justify-between">
                <span>{tour.districtsCovered.join(' · ')}</span>
                <span className="text-emerald-400 font-bold">Xem chi tiết →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Tour Detailed Breakdown */}
      <div className="bg-stone-900/90 rounded-2xl border border-stone-700 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Chi tiết lịch trình</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
              {selectedTour.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              Thời gian: {selectedTour.duration}
            </span>
          </div>
        </div>

        {/* Highlights Badges */}
        <div className="space-y-2">
          <strong className="text-xs font-semibold text-stone-400 block uppercase tracking-wider">Điểm nhấn không thể bỏ lỡ:</strong>
          <div className="flex flex-wrap gap-2">
            {selectedTour.highlights.map((hl, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-stone-950 text-emerald-300 border border-stone-800 text-xs font-medium flex items-center space-x-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{hl}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Day-by-Day Timeline */}
        <div className="space-y-4 pt-2">
          <strong className="text-xs font-semibold text-stone-400 block uppercase tracking-wider">Kế hoạch chi tiết từng ngày:</strong>
          
          <div className="space-y-4">
            {selectedTour.itinerary.map((dayItem, index) => (
              <div
                key={index}
                className="bg-stone-950/70 rounded-xl p-4 sm:p-5 border border-stone-800 space-y-2 relative"
              >
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    {dayItem.day}
                  </span>
                  <h4 className="text-sm font-bold text-stone-100 font-display">
                    {dayItem.title}
                  </h4>
                </div>

                <ul className="space-y-1.5 text-xs text-stone-300 pl-2 sm:pl-4 pt-1">
                  {dayItem.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Ask AI to Customize Tour */}
        <div className="pt-2">
          <button
            onClick={() => onAskAiCustomTour(selectedTour.title)}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold shadow-xl flex items-center justify-center space-x-2 transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Tùy chỉnh lịch trình riêng với Trợ lý AI (Số lượng người, ngân sách, phương tiện)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
