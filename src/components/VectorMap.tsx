import React, { useState } from 'react';
import { AdministrativeUnit } from '../types';
import { MapPin, Info, Sparkles, Utensils, Landmark, Users } from 'lucide-react';

interface VectorMapProps {
  districts: AdministrativeUnit[];
  selectedDistrict: AdministrativeUnit | null;
  onSelectDistrict: (district: AdministrativeUnit) => void;
  activeLayer: 'all' | 'specialties' | 'landmarks' | 'ethnicity' | 'mergers';
}

export const VectorMap: React.FC<VectorMapProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  activeLayer
}) => {
  const [hoveredDistrict, setHoveredDistrict] = useState<AdministrativeUnit | null>(null);

  // SVG coordinates and custom stylized SVG path for each of the 10 administrative units of Dien Bien
  const districtPolygons: Record<string, { d: string; center: [number, number]; labelPos: [number, number] }> = {
    'muong-nhe': {
      // Far North-West, triangular extreme west
      d: 'M 75 140 L 40 180 L 30 230 L 70 290 L 140 280 L 175 220 L 150 170 L 120 145 Z',
      center: [95, 215],
      labelPos: [95, 215]
    },
    'nam-po': {
      // West-central, created from Muong Nhe and Muong Cha
      d: 'M 140 280 L 70 290 L 95 360 L 150 400 L 200 370 L 220 315 L 175 280 Z',
      center: [145, 340],
      labelPos: [145, 340]
    },
    'muong-lay': {
      // North, junction on Da river, compact town
      d: 'M 255 180 L 230 215 L 250 250 L 295 240 L 305 200 L 285 180 Z',
      center: [270, 215],
      labelPos: [270, 215]
    },
    'muong-cha': {
      // Central-North corridor connecting south to north
      d: 'M 175 220 L 175 280 L 220 315 L 260 330 L 290 290 L 280 240 L 230 215 Z',
      center: [225, 270],
      labelPos: [225, 270]
    },
    'tua-chua': {
      // North-East, rocky plateau along Da river
      d: 'M 295 240 L 280 290 L 310 350 L 365 330 L 380 270 L 340 240 Z',
      center: [330, 290],
      labelPos: [330, 290]
    },
    'tuan-giao': {
      // East gateway, Pha Din pass
      d: 'M 310 350 L 280 390 L 320 450 L 390 430 L 415 370 L 365 330 Z',
      center: [350, 390],
      labelPos: [350, 390]
    },
    'muong-ang': {
      // Central-East valley, coffee land
      d: 'M 245 370 L 280 390 L 295 445 L 260 460 L 230 420 L 235 385 Z',
      center: [265, 415],
      labelPos: [265, 415]
    },
    'dien-bien-dong': {
      // South-East, along Song Ma river
      d: 'M 260 460 L 295 445 L 320 450 L 350 520 L 310 580 L 250 540 L 245 490 Z',
      center: [295, 510],
      labelPos: [295, 510]
    },
    'dien-bien-phu': {
      // Central heartland city, Muong Thanh valley (expanded after 815 resolution)
      d: 'M 205 425 L 235 410 L 255 450 L 240 485 L 200 480 L 195 445 Z',
      center: [225, 448],
      labelPos: [225, 448]
    },
    'dien-bien': {
      // South, bordering Laos & encompassing the remaining parts
      d: 'M 150 400 L 200 370 L 205 425 L 195 445 L 200 480 L 240 485 L 245 540 L 220 600 L 160 560 L 135 480 L 140 430 Z',
      center: [185, 490],
      labelPos: [185, 490]
    }
  };

  return (
    <div className="relative w-full bg-stone-950/80 rounded-2xl border border-stone-800 p-3 sm:p-5 overflow-hidden flex flex-col items-center justify-center min-h-[460px] shadow-2xl">
      
      {/* Map Legend Overlay */}
      <div className="absolute top-4 left-4 z-20 bg-stone-900/90 backdrop-blur-md p-3 rounded-xl border border-stone-800 text-xs shadow-lg max-w-[210px] hidden sm:block">
        <div className="flex items-center space-x-1.5 text-stone-200 font-semibold mb-2">
          <Info className="w-3.5 h-3.5 text-emerald-400" />
          <span>Chú giải Bản đồ</span>
        </div>
        <div className="space-y-1.5 text-[11px] text-stone-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
            <span>Thành phố (Tỉnh lỵ)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0"></span>
            <span>Thị xã Mường Lay</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>8 Huyện hành chính</span>
          </div>
          <div className="flex items-center space-x-2 pt-1 border-t border-stone-800 text-[10px] text-emerald-400">
            <span>💡 Nhấp vào vùng để xem chi tiết</span>
          </div>
        </div>
      </div>

      {/* SVG Map Graphic */}
      <svg
        viewBox="0 0 450 630"
        className="w-full max-w-[480px] h-auto max-h-[520px] select-none filter drop-shadow-md"
        id="dien-bien-svg-vector-map"
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <circle cx="225" cy="315" r="280" fill="url(#mapGlow)" />

        {/* Border outline of neighboring countries & provinces */}
        <path
          d="M 25 150 L 10 240 L 50 320 L 100 450 L 150 580 L 220 620"
          stroke="#44403c"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.4"
        />
        <text x="35" y="320" fill="#78716c" fontSize="10" transform="rotate(-70 35 320)" opacity="0.6">
          Biên giới Việt - Lào
        </text>
        <text x="70" y="110" fill="#78716c" fontSize="10" opacity="0.6">
          Biên giới Việt - Trung
        </text>

        {/* District Shape Polygons */}
        {districts.map((district) => {
          const poly = districtPolygons[district.id];
          if (!poly) return null;

          const isSelected = selectedDistrict?.id === district.id;
          const isHovered = hoveredDistrict?.id === district.id;

          return (
            <g
              key={district.id}
              className="cursor-pointer transition-all duration-200"
              onClick={() => onSelectDistrict(district)}
              onMouseEnter={() => setHoveredDistrict(district)}
              onMouseLeave={() => setHoveredDistrict(null)}
              id={`svg-district-${district.id}`}
            >
              {/* Main district polygon */}
              <path
                d={poly.d}
                fill={
                  isSelected
                    ? district.highlightColor
                    : isHovered
                    ? '#38bdf8'
                    : district.color
                }
                fillOpacity={isSelected ? 0.95 : isHovered ? 0.85 : 0.6}
                stroke={isSelected ? '#ffffff' : '#1c1917'}
                strokeWidth={isSelected ? 2.5 : 1.5}
                className="transition-all duration-200 hover:filter hover:brightness-110"
              />

              {/* Special highlight border for merged or expanded districts */}
              {(activeLayer === 'mergers' || district.id === 'dien-bien-phu') && (
                <path
                  d={poly.d}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray={district.id === 'dien-bien-phu' ? 'none' : '3 2'}
                  opacity={district.id === 'dien-bien-phu' ? 0.9 : 0.6}
                />
              )}

              {/* District Label Text */}
              <text
                x={poly.labelPos[0]}
                y={poly.labelPos[1]}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontSize={district.id === 'dien-bien-phu' ? 10 : 9.5}
                fontWeight={isSelected || isHovered ? 'bold' : '600'}
                className="pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              >
                {district.name}
              </text>

              {/* Active Pulse Pin on Selected */}
              {isSelected && (
                <circle
                  cx={poly.center[0]}
                  cy={poly.center[1]}
                  r="6"
                  fill="#ffffff"
                  className="map-marker-pulse pointer-events-none"
                />
              )}
            </g>
          );
        })}

        {/* Highlight Landmarks Icons on Map */}
        {(activeLayer === 'all' || activeLayer === 'landmarks') && (
          <g className="pointer-events-none">
            {/* A Pa Chai extreme point */}
            <circle cx="50" cy="165" r="4.5" fill="#ef4444" stroke="#fff" strokeWidth="1.2" />
            <text x="60" y="168" fill="#fca5a5" fontSize="8" fontWeight="bold">Cực Tây A Pa Chải</text>

            {/* Hill A1 & Dien Bien Phu */}
            <circle cx="225" cy="445" r="4.5" fill="#eab308" stroke="#fff" strokeWidth="1.2" />
            <text x="235" y="448" fill="#fef08a" fontSize="8" fontWeight="bold">Đồi A1 · Mường Thanh</text>

            {/* Pha Din Pass */}
            <circle cx="395" cy="380" r="4.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.2" />
            <text x="350" y="370" fill="#bae6fd" fontSize="8" fontWeight="bold">Đèo Pha Đin</text>

            {/* Tua Chua tea forest */}
            <circle cx="335" cy="275" r="4" fill="#10b981" stroke="#fff" strokeWidth="1.2" />
            <text x="345" y="278" fill="#a7f3d0" fontSize="8" fontWeight="bold">Chè Cổ Thụ</text>
          </g>
        )}
      </svg>

      {/* Floating Hover Card */}
      {hoveredDistrict && (
        <div className="absolute bottom-4 right-4 z-30 bg-stone-900/95 backdrop-blur-md p-3.5 rounded-xl border border-stone-700 text-stone-100 shadow-2xl text-xs max-w-[260px] animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5 mb-2">
            <span className="font-bold text-sm text-emerald-400">{hoveredDistrict.fullName}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">
              {hoveredDistrict.type === 'thanh_pho' ? 'Thành phố' : hoveredDistrict.type === 'thi_xa' ? 'Thị xã' : 'Huyện'}
            </span>
          </div>
          <p className="text-stone-300 text-[11px] line-clamp-2 mb-2 italic">
            "{hoveredDistrict.heroTagline}"
          </p>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-stone-400">
            <div>Diện tích: <span className="text-stone-200 font-medium">{hoveredDistrict.areaKm2} km²</span></div>
            <div>Dân số: <span className="text-stone-200 font-medium">{hoveredDistrict.population.toLocaleString()} người</span></div>
            <div className="col-span-2 text-[10px] text-amber-300 flex items-center space-x-1">
              <span>🍲 Đặc sản:</span>
              <span className="text-stone-200 truncate">{hoveredDistrict.specialties[0]?.name || 'Nổi bật'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
