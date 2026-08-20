import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { AdministrativeUnit } from '../types';

interface LeafletMapProps {
  districts: AdministrativeUnit[];
  selectedDistrict: AdministrativeUnit | null;
  onSelectDistrict: (district: AdministrativeUnit) => void;
  mapStyle: 'terrain' | 'satellite' | 'street';
}

export const LeafletMap: React.FC<LeafletMapProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  mapStyle
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [21.55, 103.05],
        zoom: 9,
        minZoom: 8,
        maxZoom: 16,
        zoomControl: true,
      });

      mapInstanceRef.current = map;
      layerGroupRef.current = L.layerGroup().addTo(map);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer according to mapStyle
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    let url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '&copy; OpenStreetMap contributors';

    if (mapStyle === 'satellite') {
      url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    } else if (mapStyle === 'terrain') {
      url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      attribution = 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)';
    }

    tileLayerRef.current = L.tileLayer(url, {
      attribution,
      maxZoom: 18,
    }).addTo(map);
  }, [mapStyle]);

  // Update Markers for Districts and Landmarks
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();
    markersRef.current = [];

    districts.forEach((district) => {
      const isSelected = selectedDistrict?.id === district.id;

      // Custom HTML Marker icon with styling
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative flex flex-col items-center group cursor-pointer" style="transform: translate(-50%, -100%);">
            <div class="flex items-center space-x-1 px-2.5 py-1 rounded-full shadow-lg border ${
              isSelected
                ? 'bg-emerald-500 text-stone-950 font-bold border-white scale-110'
                : 'bg-stone-900/90 text-stone-100 font-medium border-stone-700 hover:bg-stone-800'
            } transition-all duration-150 whitespace-nowrap text-xs">
              <span class="w-2 h-2 rounded-full ${
                district.type === 'thanh_pho' ? 'bg-red-400 animate-ping' : district.type === 'thi_xa' ? 'bg-sky-400' : 'bg-emerald-400'
              }"></span>
              <span>${district.name}</span>
            </div>
            <div class="w-2 h-2 bg-stone-900 border-r border-b border-stone-700 transform rotate-45 -mt-1"></div>
          </div>
        `,
        iconSize: [0, 0],
      });

      const marker = L.marker(district.coordinates, { icon: customIcon });

      // Popup Content
      const popupHtml = `
        <div class="p-2 text-stone-100 min-w-[200px]">
          <div class="font-bold text-sm text-emerald-400 border-b border-stone-700 pb-1 mb-1.5">
            ${district.fullName}
          </div>
          <p class="text-xs text-stone-300 italic mb-2">"${district.heroTagline}"</p>
          <div class="text-[11px] space-y-1 text-stone-300">
            <div><strong>Diện tích:</strong> ${district.areaKm2} km²</div>
            <div><strong>Dân số:</strong> ${district.population.toLocaleString()} người</div>
            <div><strong>Đặc sản:</strong> ${district.specialties.map(s => s.name).slice(0, 2).join(', ')}</div>
          </div>
          <button id="btn-popup-select-${district.id}" class="mt-2.5 w-full py-1 px-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition">
            Xem chi tiết địa giới & sáp nhập
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('click', () => {
        onSelectDistrict(district);
      });

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-popup-select-${district.id}`);
        if (btn) {
          btn.onclick = () => {
            onSelectDistrict(district);
          };
        }
      });

      marker.addTo(layerGroup);
      markersRef.current.push(marker);
    });

    // Also add Landmark Pins
    districts.forEach(d => {
      d.landmarks.forEach(lm => {
        const landmarkIcon = L.divIcon({
          className: 'custom-landmark-pin',
          html: `
            <div class="w-5 h-5 rounded-full bg-amber-500/90 border border-amber-200 text-stone-950 flex items-center justify-center shadow-md hover:scale-125 transition-transform" title="${lm.name}" style="transform: translate(-50%, -50%);">
              <span class="text-[10px] font-bold">★</span>
            </div>
          `,
          iconSize: [0, 0],
        });

        const lmMarker = L.marker(lm.coordinates, { icon: landmarkIcon });
        lmMarker.bindPopup(`
          <div class="p-2 text-stone-100 text-xs">
            <div class="font-bold text-amber-400 mb-1">${lm.name}</div>
            <p class="text-stone-300 text-[11px] mb-1">${lm.description}</p>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">${d.fullName}</span>
          </div>
        `);
        lmMarker.addTo(layerGroup);
      });
    });

    // Focus on selected district if any
    if (selectedDistrict && map) {
      map.flyTo(selectedDistrict.coordinates, 10, { duration: 1 });
    }
  }, [districts, selectedDistrict, onSelectDistrict]);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full z-10" id="leaflet-map-canvas" />
    </div>
  );
};
