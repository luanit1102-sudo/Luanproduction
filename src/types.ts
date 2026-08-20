export type DistrictType = 'thanh_pho' | 'thi_xa' | 'huyen';

export interface SubUnit {
  name: string;
  type: 'phuong' | 'xa' | 'thi_tran';
  isMergedOrAdjusted?: boolean;
  notes?: string;
}

export interface MergerDetail {
  period: string;
  resolutionName: string;
  summary: string;
  keyChanges: string[];
  impactOnPopulationArea: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  districtId: string;
  category: 'AmThuc' | 'NongSan' | 'OCOP' | 'QuaTang' | 'DoUong';
  description: string;
  origin: string;
  highlights: string[];
  tasteProfile: string;
  season?: string;
  ocopRating?: number; // 3, 4, 5 star
  iconName?: string;
  imageUrl?: string;
}

export interface EthnicCulture {
  name: string;
  percentageInDistrict: string;
  costume: string;
  customs: string;
  specialFestival: string;
}

export interface Landmark {
  id: string;
  name: string;
  districtId: string;
  type: 'LichSu' | 'ThienNhien' | 'VanHoa' | 'BienGioi';
  historicalEvent?: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  bestTimeToVisit?: string;
  imageUrl?: string;
}

export interface AdministrativeUnit {
  id: string;
  name: string;
  fullName: string;
  type: DistrictType;
  coordinates: [number, number]; // [lat, lng]
  areaKm2: number;
  population: number;
  density: number;
  svgPathId: string; // for custom interactive vector map SVG
  color: string;
  highlightColor: string;
  heroTagline: string;
  summary: string;
  
  // Administrative rearrangement & merger details
  mergerDetails: MergerDetail;
  subUnits: SubUnit[];
  
  // People & Ethnicity
  ethnicGroups: EthnicCulture[];
  
  // Specialties
  specialties: SpecialtyItem[];
  
  // Landmarks & Tourism
  landmarks: Landmark[];
  
  // Geographic features
  geography: {
    terrain: string;
    rivers: string[];
    passesOrMountains: string[];
    climateNote: string;
  };

  photoGallery: {
    title: string;
    caption: string;
    category: 'canh_quan' | 'con_nguoi' | 'dac_san' | 'lich_su';
    image: string;
  }[];
}

export interface EthnicGroupOverview {
  id: string;
  name: string;
  alternateNames?: string;
  populationInDienBien: number;
  percentageInProvince: number;
  mainDistricts: string[];
  costumeFeatures: string;
  customsAndBeliefs: string;
  traditionalHousing: string;
  festivals: string[];
  musicalArts: string;
  avatarBg: string;
}

export interface TourRoute {
  id: string;
  title: string;
  duration: string;
  districtsCovered: string[];
  theme: string;
  highlights: string[];
  itinerary: { day: string; title: string; activities: string[] }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  districtRelation: string;
}
