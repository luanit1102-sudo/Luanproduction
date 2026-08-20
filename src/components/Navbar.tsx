import React from 'react';
import { 
  MapPin, 
  Layers, 
  Users, 
  Utensils, 
  Landmark, 
  Sparkles, 
  HelpCircle, 
  Compass, 
  Search,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenQuickTour?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenQuickTour
}) => {
  const navItems = [
    { id: 'map', label: 'Bản đồ Tương tác', icon: MapPin },
    { id: 'mergers', label: 'Địa giới & Sáp nhập', icon: Layers, badge: 'Nổi bật' },
    { id: 'people', label: '19 Dân tộc', icon: Users },
    { id: 'specialties', label: 'Đặc sản & OCOP', icon: Utensils },
    { id: 'landmarks', label: 'Di tích & Thắng cảnh', icon: Landmark },
    { id: 'tours', label: 'Lịch trình Gợi ý', icon: Compass },
    { id: 'ai', label: 'Trợ lý AI Điện Biên', icon: Sparkles, highlight: true },
    { id: 'quiz', label: 'Đố vui', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 shadow-xl" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
            onClick={() => setActiveTab('map')}
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-600 flex items-center justify-center shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform duration-200">
              <span className="text-stone-950 font-bold text-lg font-display">ĐB</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-bold tracking-tight text-base sm:text-lg font-display">ĐIỆN BIÊN</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                  Địa giới mới
                </span>
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">Địa giới hành chính · Con người · Đặc sản</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-xs hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              id="global-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm huyện, xã, đặc sản, di tích..."
              className="w-full pl-9 pr-3 py-1.5 bg-stone-800/80 border border-stone-700 text-stone-100 placeholder-stone-400 text-xs sm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-stone-400 hover:text-stone-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* AI Guide quick badge */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('ai')}
              id="btn-nav-ai-prompt"
              className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-emerald-500/20 hover:from-amber-500/30 hover:to-emerald-500/30 border border-amber-500/30 text-amber-300 text-xs font-medium transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Hỏi AI về Điện Biên</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-stone-800/60" id="main-nav-tabs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40 font-semibold'
                    : item.highlight
                    ? 'text-amber-300 hover:bg-stone-800/80 hover:text-amber-200'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.highlight ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                    isActive ? 'bg-white text-emerald-700' : 'bg-emerald-500/30 text-emerald-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
