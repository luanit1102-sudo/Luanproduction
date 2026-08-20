import { AdministrativeUnit, EthnicGroupOverview, TourRoute, QuizQuestion } from '../types';

export const DIEN_BIEN_OVERVIEW = {
  provinceName: 'Tỉnh Điện Biên',
  country: 'Việt Nam',
  region: 'Tây Bắc Bộ',
  areaKm2: 9562.9,
  population: 635000,
  density: 66.4,
  borderLength: 455.57, // km (Việt - Lào: 414.71 km; Việt - Trung: 40.86 km)
  ethnicCount: 19,
  adminUnitsCount: {
    city: 1, // TP. Điện Biên Phủ
    town: 1, // TX. Mường Lay
    districts: 8, // Điện Biên, Điện Biên Đông, Mường Ảng, Mường Chà, Mường Nhé, Nậm Pồ, Tủa Chùa, Tuần Giáo
    totalCommunesAndWards: 129, // 115 xã, 9 phường, 5 thị trấn
  },
  administrativeMilestones: [
    {
      year: '2019 - 2020',
      title: 'Nghị quyết số 815/NQ-UBTVQH14',
      description: 'Mở rộng địa giới hành chính TP. Điện Biên Phủ bằng cách sáp nhập toàn bộ xã Tà Lèng, xã Thanh Minh, một phần các xã Noong Bua, Thanh Nưa, Thanh Xương từ huyện Điện Biên vào TP. Điện Biên Phủ; đồng thời sắp xếp điều chỉnh diện tích và dân số.',
    },
    {
      year: '2023 - 2025',
      title: 'Đề án sắp xếp đơn vị hành chính cấp xã tỉnh Điện Biên',
      description: 'Thực hiện tinh gọn bộ máy, sáp nhập các xã, bản, tổ dân phố chưa đạt tiêu chuẩn diện tích & dân số, nâng cấp hạ tầng đô thị TP. Điện Biên Phủ và các thị trấn trung tâm.',
    },
    {
      year: '2012 - 2013',
      title: 'Nghị quyết số 45/NQ-CP',
      description: 'Thành lập huyện biên giới Nậm Pồ trên cơ sở điều chỉnh địa giới hành chính từ huyện Mường Nhé và huyện Mường Chà.',
    },
    {
      year: '2006',
      title: 'Nghị định số 135/2006/NĐ-CP',
      description: 'Thành lập huyện Mường Ảng trên cơ sở tách từ huyện Tuần Giáo, tạo bước đệm phát triển vùng chuyên canh cà phê Arabica.',
    }
  ]
};

export const DISTRICTS_DATA: AdministrativeUnit[] = [
  {
    id: 'dien-bien-phu',
    name: 'TP. Điện Biên Phủ',
    fullName: 'Thành phố Điện Biên Phủ',
    type: 'thanh_pho',
    coordinates: [21.386, 103.018],
    areaKm2: 308.18,
    population: 85600,
    density: 278,
    svgPathId: 'path_dbp',
    color: '#ef4444',
    highlightColor: '#f87171',
    heroTagline: 'Thủ phủ lịch sử lừng lẫy năm châu - Đô thị hoa ban rực rỡ',
    summary: 'Trung tâm chính trị, kinh tế, văn hóa của tỉnh, nơi ghi dấu chiến thắng Điện Biên Phủ chấn động địa cầu. Sau khi mở rộng địa giới hành chính theo Nghị quyết 815/NQ-UBTVQH14, thành phố bao gồm 7 phường và 5 xã.',
    mergerDetails: {
      period: 'Nghị quyết 815/NQ-UBTVQH14 & Giai đoạn mới',
      resolutionName: 'Nghị quyết 815/NQ-UBTVQH14 của Ủy ban Thường vụ Quốc hội',
      summary: 'Mở rộng gấp hơn 4 lần diện tích tự nhiên của thành phố (từ 64,27 km² lên 308,18 km²), tiếp nhận xã Tà Lèng, Thanh Minh và các thôn bản từ huyện Điện Biên.',
      keyChanges: [
        'Sáp nhập toàn bộ diện tích và dân số của xã Tà Lèng (huyện Điện Biên) vào xã Thanh Minh (TP. Điện Biên Phủ).',
        'Điều chỉnh địa giới xã Thanh Hưng, Thanh Xương, Thanh Nưa, Noong Bua tạo không gian phát triển đô thị mới.',
        'Mở rộng không gian quy hoạch Cảng hàng không Điện Biên, đón máy bay thân rộng A321, mở rộng các trục đường Võ Nguyên Giáp, Pom La.',
        'Đạt tiêu chí đô thị loại III và đang hướng tới đô thị loại II giàu bản sắc văn hóa du lịch.'
      ],
      impactOnPopulationArea: 'Diện tích tăng từ 64.27 km² lên 308.18 km²; dân số tăng thêm hơn 25.000 người, tạo động lực liên kết toàn vùng lòng chảo Mường Thanh.'
    },
    subUnits: [
      { name: 'Phường Mường Thanh', type: 'phuong' },
      { name: 'Phường Him Lam', type: 'phuong' },
      { name: 'Phường Tân Thanh', type: 'phuong' },
      { name: 'Phường Thanh Bình', type: 'phuong' },
      { name: 'Phường Nam Thanh', type: 'phuong' },
      { name: 'Phường Noong Bua', type: 'phuong', isMergedOrAdjusted: true, notes: 'Điều chỉnh bổ sung địa giới' },
      { name: 'Phường Thanh Trường', type: 'phuong' },
      { name: 'Xã Thanh Minh', type: 'xa', isMergedOrAdjusted: true, notes: 'Sáp nhập toàn bộ xã Tà Lèng vào' },
      { name: 'Xã Nà Nhạn', type: 'xa', isMergedOrAdjusted: true, notes: 'Chuyển từ huyện Điện Biên về TP' },
      { name: 'Xã Nà Tấu', type: 'xa', isMergedOrAdjusted: true, notes: 'Chuyển từ huyện Điện Biên về TP' },
      { name: 'Xã Mường Phăng', type: 'xa', isMergedOrAdjusted: true, notes: 'Địa danh Sở Chỉ huy Chiến dịch Điện Biên Phủ sáp nhập vào TP' },
      { name: 'Xã Pá Khoang', type: 'xa', isMergedOrAdjusted: true, notes: 'Khu du lịch hồ Pá Khoang chuyển về TP' }
    ],
    ethnicGroups: [
      { name: 'Người Kinh', percentageInDistrict: '46.2%', costume: 'Áo dài truyền thống, âu phục hiện đại', customs: 'Thờ cúng tổ tiên, tết Nguyên Đán, nếp sống đô thị văn minh', specialFestival: 'Lễ hội Đền Hoàng Công Chất, Kỷ niệm Chiến thắng Điện Biên Phủ (7/5)' },
      { name: 'Người Thái (Thái Đen)', percentageInDistrict: '39.8%', costume: 'Áo cóm bó sát cúc bạc hình con bướm, váy dài chấm gót, khăn Piêu thêu tay rực rỡ', customs: 'Ở nhà sàn gỗ ngói pơmu, múa xòe, hát Then, tục gội đầu ngày cuối năm', specialFestival: 'Lễ hội Hoa Ban (tháng 3 âm lịch), Xòe Thái di sản UNESCO' },
      { name: 'Người H\'Mông', percentageInDistrict: '11.5%', costume: 'Váy xòe xếp ly thổ cẩm dệt lanh, hoa văn thêu tinh xảo, đính chuỗi đồng bạc', customs: 'Sống vùng cao sườn núi, tết Nào Pe Chầu, nghệ thuật khèn Mông', specialFestival: 'Lễ hội Gầu Tào, Hội múa khèn Mông' }
    ],
    specialties: [
      {
        id: 'sp_thit_trau_gac_bep',
        name: 'Thịt trâu gác bếp Điện Biên',
        districtId: 'dien-bien-phu',
        category: 'AmThuc',
        description: 'Đặc sản làm từ bắp trâu tươi tươi ướp mắc khén, hạt dổi, ớt rừng, gừng tỏi rồi hun khói củi nhãn tự nhiên 2-3 tháng.',
        origin: 'Công thức cổ truyền người Thái đen Điện Biên',
        highlights: ['Thịt thớ dài đỏ hồng', 'Hương khói bếp đượm đà', 'Cay thơm mắc khén hạt dổi'],
        tasteProfile: 'Ngọt đậm sâu thớ thịt, cay the nồng nàn, thơm mùi khói tự nhiên',
        season: 'Quanh năm, đặc biệt vụ Thu - Đông',
        ocopRating: 4
      },
      {
        id: 'sp_cham_cheo',
        name: 'Chẩm Chéo Tây Bắc',
        districtId: 'dien-bien-phu',
        category: 'OCOP',
        description: 'Gia vị linh hồn ẩm thực Tây Bắc: giã nhuyễn ớt nướng, muối hạt, tỏi, gừng, rau thơm rừng, mắc khén, hạt dổi thơm nức mũi.',
        origin: 'Bản Noong Bua, Him Lam, Mường Thanh',
        highlights: ['Gia vị vạn năng cho thịt nướng, rau luộc', 'Chứng nhận OCOP 4 sao'],
        tasteProfile: 'Cay, the, nồng, đượm vị rừng sâu',
        ocopRating: 4
      },
      {
        id: 'sp_banh_khau_xen',
        name: 'Bánh Khẩu Xén ngũ sắc',
        districtId: 'dien-bien-phu',
        category: 'AmThuc',
        description: 'Bánh phồng giòn truyền thống làm từ gạo nếp nương và sắn bản địa, tạo màu tự nhiên từ lá cẩm, nghệ tím, quả gấc.',
        origin: 'Bản văn hóa người Thái Mường Thanh',
        highlights: ['Giòn rụm tan trong miệng', 'Màu ngũ sắc thiên nhiên'],
        tasteProfile: 'Thơm bùi, ngọt thanh nhẹ, béo giòn',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_doi_a1',
        name: 'Di tích Đồi A1 (Eliane 2)',
        districtId: 'dien-bien-phu',
        type: 'LichSu',
        historicalEvent: 'Trận đánh 39 ngày đêm ác liệt nhất Chiến dịch Điện Biên Phủ, khối bộc phá 960kg nổ tung đêm 6/5/1954.',
        description: 'Cứ điểm kiên cố nhất của Pháp, nay còn nguyên hố bộc phá sâu thẳm, xe tăng Bazeille, hệ thống địa đạo và hầm chỉ huy.',
        coordinates: [21.383, 103.018],
        bestTimeToVisit: 'Tháng 3 - 5 & Tháng 10 - 12'
      },
      {
        id: 'lm_ham_de_castries',
        name: 'Hầm Tướng De Castries',
        districtId: 'dien-bien-phu',
        type: 'LichSu',
        historicalEvent: 'Nơi tướng De Castries và toàn bộ bộ chỉ huy tập đoàn cứ điểm đầu hàng vô điều kiện vào chiều 7/5/1954.',
        description: 'Công sự ngầm dài 20m kiên cố bằng vòm thép và bao cát giữa cánh đồng Mường Thanh.',
        coordinates: [21.386, 103.009]
      },
      {
        id: 'lm_so_chi_huy_muong_phang',
        name: 'Sở Chỉ huy Chiến dịch Mường Phăng',
        districtId: 'dien-bien-phu',
        type: 'LichSu',
        historicalEvent: 'Nơi Đại tướng Võ Nguyên Giáp đưa ra quyết định lịch sử chuyển phương châm từ "Đánh nhanh thắng nhanh" sang "Đánh chắc tiến chắc".',
        description: 'Ẩn mình dưới tán rừng nguyên sinh Mường Phăng, gồm lán làm việc, hầm xuyên núi dài 69m nối lán Đại tướng với Thiếu tướng Hoàng Văn Thái.',
        coordinates: [21.451, 103.149]
      },
      {
        id: 'lm_ho_pa_khoang',
        name: 'Hồ Pá Khoang & Đảo Hoa Anh Đào',
        districtId: 'dien-bien-phu',
        type: 'ThienNhien',
        description: 'Hồ nước ngọt rộng hơn 600ha giữa lòng thung lũng đại ngàn, nơi có đảo hoa anh đào Nhật Bản nở rực rỡ vào tháng 1-2 hàng năm.',
        coordinates: [21.439, 103.125]
      }
    ],
    geography: {
      terrain: 'Thung lũng lòng chảo phì nhiêu Mường Thanh bao bọc bởi các dải núi cao trùng điệp',
      rivers: ['Sông Nậm Rốm', 'Suối Nậm Núa'],
      passesOrMountains: ['Núi Pu Hồng Mèo', 'Dãy núi Mường Phăng'],
      climateNote: 'Nhiệt đới gió mùa vùng cao, biên độ nhiệt ngày đêm lớn, mùa khô từ tháng 10 đến tháng 4 năm sau rất mát mẻ.'
    },
    photoGallery: [
      {
        title: 'Tượng đài Chiến thắng Điện Biên Phủ',
        caption: 'Biểu tượng anh dũng trên đỉnh đồi D1 sừng sững',
        category: 'lich_su',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Hồ Pá Khoang mùa hoa anh đào',
        caption: 'Mặt nước biếc trong lành rợp bóng mây trời',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'muong-lay',
    name: 'TX. Mường Lay',
    fullName: 'Thị xã Mường Lay',
    type: 'thi_xa',
    coordinates: [22.057, 103.136],
    areaKm2: 112.67,
    population: 12500,
    density: 111,
    svgPathId: 'path_ml',
    color: '#0284c7',
    highlightColor: '#38bdf8',
    heroTagline: 'Thủ phủ người Thái Trắng - Viên ngọc xanh ngã ba sông Đà',
    summary: 'Thị xã nhỏ nhất Việt Nam nép mình bên lòng hồ thủy điện Sơn La mênh mông, nơi hội tụ 3 dòng sông: sông Đà, sông Nậm Na, sông Nậm Mức. Kiến trúc nhà sàn đá phiến đồng bộ độc nhất vô nhị.',
    mergerDetails: {
      period: 'Quy hoạch tái thiết sau ngập lòng hồ Thủy điện Sơn La',
      resolutionName: 'Nghị quyết số 25/2005/QH11 & Điều chỉnh quy hoạch đô thị sông nước',
      summary: 'Chuyển dời toàn bộ trung tâm thị xã Lai Châu cũ thành TX. Mường Lay, tái cấu trúc 2 phường và 1 xã ven lòng hồ sinh thái.',
      keyChanges: [
        'Quy hoạch đồng bộ hàng nghìn ngôi nhà sàn lợp ngói đá phiến đen độc đáo của người Thái Trắng.',
        'Hình thành cụm cảng du lịch đường thủy lòng hồ kết nối Điện Biên với Mường Tè, Sìn Hồ, Quỳnh Nhai (Sơn La).',
        'Khôi phục và nâng tầm Di sản văn hóa phi vật thể Quốc gia: Lễ hội Đua thuyền đuôi én Mường Lay vào dịp đầu năm mới.'
      ],
      impactOnPopulationArea: 'Trở thành thị xã du lịch sinh thái sông nước độc đáo bậc nhất vùng Tây Bắc.'
    },
    subUnits: [
      { name: 'Phường Sông Đà', type: 'phuong' },
      { name: 'Phường Na Lay', type: 'phuong' },
      { name: 'Xã Lay Nưa', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người Thái Trắng (Tày Đón)', percentageInDistrict: '70.8%', costume: 'Áo cóm màu trắng tinh khôi, cổ chữ V gợi cảm duyên dáng, tóc búi Tằng cẩu cao vút', customs: 'Nhà sàn gỗ lợp đá phiến tự nhiên, nghệ thuật xòe nón, múa quạt, ẩm thực cá sông', specialFestival: 'Lễ hội Đua thuyền đuôi én (1/1 Dương lịch), Lễ hội Kin Pang Then' },
      { name: 'Người Kinh', percentageInDistrict: '15.4%', costume: 'Âu phục hiện đại', customs: 'Thương nghiệp vận tải đường sông, đánh bắt thủy sản', specialFestival: 'Hội làng đầu xuân' },
      { name: 'Người H\'Mông & Khơ Mú', percentageInDistrict: '13.8%', costume: 'Trang phục hoa văn dệt tay', customs: 'Sống sườn đồi cao, canh tác nương rẫy và cây quế, thảo quả', specialFestival: 'Lễ Tra hạt Mùa vụ' }
    ],
    specialties: [
      {
        id: 'sp_ca_bong_song_da',
        name: 'Cá Bống vùi tro & Cá Lăng sông Đà',
        districtId: 'muong-lay',
        category: 'AmThuc',
        description: 'Cá suối và cá lòng hồ sông Đà tươi rói tẩm ướp sả, ớt, gừng, húng quế, gói lá chuối rồi vùi vào tro bếp than hồng chín âm ỉ.',
        origin: 'Bản Nậm Cản, Lay Nưa, Mường Lay',
        highlights: ['Thơm phức lá dong lá chuối', 'Thịt cá dai ngọt không tanh'],
        tasteProfile: 'Ngọt béo đậm vị cá tự nhiên, the cay ấm bụng',
        ocopRating: 4
      },
      {
        id: 'sp_banh_chi_chop',
        name: 'Bánh Chí Chọp & Khẩu Xén Mường Lay',
        districtId: 'muong-lay',
        category: 'AmThuc',
        description: 'Món bánh truyền thống đón khách quý của người Thái Trắng, làm từ nếp nương đồ xôi giã nhuyễn cán mỏng rồi chiên phồng xốp.',
        origin: 'Phường Na Lay, TX Mường Lay',
        highlights: ['Giòn tan, thơm ngậy nếp thơm', 'Di sản ẩm thực dân tộc Thái'],
        tasteProfile: 'Bùi béo, thơm hương lúa nương',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_ngã_ba_song_da',
        name: 'Lòng hồ thủy điện Sơn La & Ngã ba sông',
        districtId: 'muong-lay',
        type: 'ThienNhien',
        description: 'Vùng non nước hữu tình nơi sông Đà hòa vào sông Nậm Na và sông Nậm Mức, tạo nên cảnh sắc như vịnh Hạ Long trên cạn giữa lòng Tây Bắc.',
        coordinates: [22.059, 103.141]
      },
      {
        id: 'lm_nha_san_da_phien',
        name: 'Quần thể nhà sàn đá phiến Bản Nậm Cản',
        districtId: 'muong-lay',
        type: 'VanHoa',
        description: 'Hàng trăm ngôi nhà sàn cổ truyền lợp đá phiến đen bóng được chế tác tinh xảo, soi bóng bên dòng sông Đà biếc xanh.',
        coordinates: [22.062, 103.134]
      }
    ],
    geography: {
      terrain: 'Thung lũng hẹp kẹp giữa 2 dãy núi cao ven lòng hồ ngập nước sông Đà',
      rivers: ['Sông Đà', 'Sông Nậm Na', 'Sông Nậm Mức'],
      passesOrMountains: ['Dãy núi Phu Meo', 'Hẻm vực Nậm Na'],
      climateNote: 'Độ ẩm cao, sương mù giăng bồng bềnh trên mặt hồ lúc bình minh và hoàng hôn.'
    },
    photoGallery: [
      {
        title: 'Đua thuyền đuôi én trên sông Đà',
        caption: 'Hội đua thuyền náo nức ngày đầu năm mới',
        category: 'con_nguoi',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'dien-bien',
    name: 'Huyện Điện Biên',
    fullName: 'Huyện Điện Biên',
    type: 'huyen',
    coordinates: [21.285, 103.012],
    areaKm2: 1395.99,
    population: 102400,
    density: 73,
    svgPathId: 'path_db',
    color: '#10b981',
    highlightColor: '#34d399',
    heroTagline: 'Vựa lúa Mường Thanh ngút ngàn - Suối khoáng U Va & Cửa khẩu Tây Trang',
    summary: 'Bao trọn cánh đồng Mường Thanh - cánh đồng lớn nhất Tây Bắc ("Nhất Thanh, nhì Lò, tam Than, tứ Tấc"). Huyện có đường biên giới giáp Lào dài hơn 171km, có suối khoáng nóng U Va và di tích Thành Bản Phủ.',
    mergerDetails: {
      period: 'Sau sắp xếp theo Nghị quyết 815/NQ-UBTVQH14',
      resolutionName: 'Nghị quyết 815/NQ-UBTVQH14',
      summary: 'Bàn giao các xã Mường Phăng, Pá Khoang, Nà Nhạn, Nà Tấu, Tà Lèng về TP. Điện Biên Phủ; huyện tái cơ cấu còn 21 xã nông thôn trù phú.',
      keyChanges: [
        'Tập trung đầu tư hạ tầng nông nghiệp công nghệ cao trên cánh đồng Mường Thanh.',
        'Phát triển kinh tế cửa khẩu quốc tế Tây Trang - Pang Hok nối liền sang Luang Prabang (Lào).',
        'Quy hoạch các vùng trồng lúa gạo Tám Điện Biên đạt chuẩn chỉ dẫn địa lý quốc gia.'
      ],
      impactOnPopulationArea: 'Ổn định 21 đơn vị hành chính cấp xã, giữ vững danh hiệu vựa lúa an ninh lương thực Tây Bắc.'
    },
    subUnits: [
      { name: 'Xã Thanh An', type: 'xa' },
      { name: 'Xã Thanh Xương', type: 'xa', isMergedOrAdjusted: true },
      { name: 'Xã Thanh Yên', type: 'xa' },
      { name: 'Xã Thanh Hưng', type: 'xa', isMergedOrAdjusted: true },
      { name: 'Xã Noong Luống', type: 'xa' },
      { name: 'Xã Noong Hẹt', type: 'xa' },
      { name: 'Xã Sam Mứn', type: 'xa' },
      { name: 'Xã Pom Lót', type: 'xa' },
      { name: 'Xã Na Ư', type: 'xa', notes: 'Khu vực Cửa khẩu quốc tế Tây Trang' },
      { name: 'Xã Hua Thanh', type: 'xa' },
      { name: 'Xã Mường Nhà', type: 'xa' },
      { name: 'Xã Mường Lói', type: 'xa' },
      { name: 'Xã Phu Luông', type: 'xa' },
      { name: 'Xã Hẹ Muông', type: 'xa' },
      { name: 'Xã Pa Thơm', type: 'xa', notes: 'Hang động Pa Thơm biên giới' },
      { name: 'Xã Núa Ngam', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người Thái', percentageInDistrict: '58.4%', costume: 'Váy đen dài, thắt lưng xanh ngọc, khăn Piêu rực rỡ', customs: 'Trồng trọt lúa nước Mường Thanh điêu luyện, dệt thổ cẩm, ẩm thực xôi nếp nương', specialFestival: 'Lễ hội Cầu Mùa, Lễ mừng cơm mới (Kin Khẩu Mới)' },
      { name: 'Người H\'Mông', percentageInDistrict: '27.2%', costume: 'Váy thêu hoa văn sặc sỡ, đeo xà tích bạc', customs: 'Sống trên các sườn núi cao biên giới (Na Ư, Mường Nhà)', specialFestival: 'Tết té nước Bun Huột Nga (giao thoa Lào), Tết Nào Pe Chầu' },
      { name: 'Người Kinh & Lào, Khơ Mú', percentageInDistrict: '14.4%', costume: 'Trang phục truyền thống giao thoa', customs: 'Thương mại biên mậu, thủ công mây tre đan', specialFestival: 'Lễ hội Kin Pang Then' }
    ],
    specialties: [
      {
        id: 'sp_gao_tam_dien_bien',
        name: 'Gạo Tám Điện Biên & Gạo Nếp Nương',
        districtId: 'dien-bien',
        category: 'NongSan',
        description: 'Hạt ngọc trời ban từ cánh đồng Mường Thanh được tưới tắm dòng phù sa sông Nậm Rốm, hạt gạo thon nhỏ, khi nấu cơm dẻo quánh, đậm ngọt thơm lừng.',
        origin: 'Cánh đồng Mường Thanh (xã Thanh An, Sam Mứn, Noong Hẹt)',
        highlights: ['Chỉ dẫn địa lý quốc gia', 'Cơm nguội vẫn dẻo thơm', 'OCOP 5 sao tiềm năng'],
        tasteProfile: 'Dẻo mềm, vị ngọt đậm sâu tự nhiên, ngát hương thơm lúa non',
        ocopRating: 5
      },
      {
        id: 'sp_pa_pinh_top',
        name: 'Pa Pỉnh Tộp (Cá suối nướng gập)',
        districtId: 'dien-bien',
        category: 'AmThuc',
        description: 'Cá chép hoặc trôi suối mổ lưng, nhồi đầy ắp rau thơm rừng, ớt tươi, hành tỏi, gừng lá hẹ và mắc khén, sau đó gập đôi nẹp que tre nướng than hồng.',
        origin: 'Các bản người Thái ven sông Nậm Rốm, Nậm Núa',
        highlights: ['Món ăn tinh hoa người Thái', 'Thơm nức mùi mắc khén'],
        tasteProfile: 'Thịt cá ngọt béo, cay tê đầu lưỡi, thơm quyến rũ khó quên',
        ocopRating: 4
      }
    ],
    landmarks: [
      {
        id: 'lm_thanh_ban_phu',
        name: 'Di tích Lịch sử Thành Bản Phủ',
        districtId: 'dien-bien',
        type: 'LichSu',
        historicalEvent: 'Căn cứ địa của nghĩa quân thủ lĩnh Hoàng Công Chất đánh đuổi giặc Phẻ bảo vệ bờ cõi Mường Thanh thế kỷ 18.',
        description: 'Tòa thành đất cổ bao bọc bởi lũy tre gai ngút ngàn, có đền thờ Hoàng Công Chất linh thiêng và cây đa - cây si ôm nhau hàng trăm năm tuổi.',
        coordinates: [21.328, 103.003]
      },
      {
        id: 'lm_khoang_nong_uva',
        name: 'Suối khoáng nóng U Va & Hua Pe',
        districtId: 'dien-bien',
        type: 'ThienNhien',
        description: 'Mạch nguồn nước khoáng tự nhiên 70-80°C giàu khoáng chất quý giữa phong cảnh hữu tình hữu ý.',
        coordinates: [21.317, 103.031]
      },
      {
        id: 'lm_cua_khau_tay_trang',
        name: 'Cửa khẩu Quốc tế Tây Trang',
        districtId: 'dien-bien',
        type: 'BienGioi',
        description: 'Cửa ngõ huyết mạch nối Việt Nam với tỉnh Phongsaly và cố đô Luang Prabang (Lào), nằm trên đỉnh đèo cao lộng gió.',
        coordinates: [21.218, 102.915]
      }
    ],
    geography: {
      terrain: 'Cánh đồng bằng phẳng thung lũng Mường Thanh ở trung tâm, bao quanh bởi các dãy núi biên giới Việt - Lào',
      rivers: ['Sông Nậm Rốm', 'Sông Nậm Núa'],
      passesOrMountains: ['Đèo Tây Trang', 'Dãy núi Pu Đen Đinh'],
      climateNote: 'Nhiệt độ ấm áp hơn các huyện vùng cao, thích hợp thâm canh 2-3 vụ lúa bội thu.'
    },
    photoGallery: [
      {
        title: 'Cánh đồng lúa vàng Mường Thanh',
        caption: 'Bạt ngàn sóng lúa chín thơm ngát trời Tây Bắc',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'muong-ang',
    name: 'Huyện Mường Ảng',
    fullName: 'Huyện Mường Ảng',
    type: 'huyen',
    coordinates: [21.517, 103.225],
    areaKm2: 443.52,
    population: 52100,
    density: 117,
    svgPathId: 'path_ma',
    color: '#d97706',
    highlightColor: '#fbbf24',
    heroTagline: 'Thủ phủ Cà phê Arabica thơm lừng - Biển mây đèo Tằng Quái',
    summary: 'Vùng đất thổ nhưỡng Bazan màu mỡ với độ cao lý tưởng từ 700 - 1.200m so với mực nước biển, tạo nên vùng chuyên canh Cà phê Arabica Mường Ảng nức tiếng xuất khẩu sang châu Âu, Nhật Bản.',
    mergerDetails: {
      period: 'Huyện thành lập năm 2006 (Nghị định 135/CP)',
      resolutionName: 'Nghị định số 135/2006/NĐ-CP & Quy hoạch nông thôn mới 2021-2030',
      summary: 'Tách ra từ huyện Tuần Giáo, Mường Ảng nhanh chóng vươn lên thành trung tâm nông sản xuất khẩu chủ lực của tỉnh.',
      keyChanges: [
        'Xây dựng chuỗi liên kết chỉ dẫn địa lý "Cà phê Mường Ảng".',
        'Phát triển vùng chuyên canh cây ăn trái bưởi da xanh, cam sành, mắc ca.',
        'Nâng cấp tuyến Quốc lộ 279 xuyên huyện nối đèo Tằng Quái với TP. Điện Biên Phủ.'
      ],
      impactOnPopulationArea: 'Gồm 1 thị trấn và 9 xã với nền kinh tế nông nghiệp hàng hóa phát triển vượt bậc.'
    },
    subUnits: [
      { name: 'Thị trấn Mường Ảng', type: 'thi_tran' },
      { name: 'Xã Ẳng Cang', type: 'xa' },
      { name: 'Xã Ẳng Nưa', type: 'xa' },
      { name: 'Xã Ẳng Tở', type: 'xa' },
      { name: 'Xã Búng Lao', type: 'xa' },
      { name: 'Xã Mường Đăng', type: 'xa' },
      { name: 'Xã Mường Lạn', type: 'xa' },
      { name: 'Xã Nặm Lịch', type: 'xa' },
      { name: 'Xã Ngối Cáy', type: 'xa' },
      { name: 'Xã Xuân Lao', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người Thái', percentageInDistrict: '64.5%', costume: 'Áo cóm cúc bướm, váy nhung đen', customs: 'Làm vườn cà phê, dệt thổ cẩm bản Cang', specialFestival: 'Hội xòe hoa, Hội mừng vụ mùa cà phê' },
      { name: 'Người H\'Mông', percentageInDistrict: '23.1%', costume: 'Váy thêu hoa rực rỡ sắc màu vùng cao', customs: 'Sống đỉnh đồi Tằng Quái, thổi khèn lá, kèn môi', specialFestival: 'Lễ hội Gầu Tào ngày mùng 4 Tết' },
      { name: 'Người Khơ Mú & Kinh', percentageInDistrict: '12.4%', costume: 'Trang phục truyền thống', customs: 'Đan lát giỏ mây tre, chế biến nông sản xuất khẩu', specialFestival: 'Lễ hội Cầu Mưa' }
    ],
    specialties: [
      {
        id: 'sp_ca_phe_muong_ang',
        name: 'Cà phê Arabica Mường Ảng',
        districtId: 'muong-ang',
        category: 'OCOP',
        description: 'Hạt cà phê Arabica Catimor trồng trên sườn núi đá vôi độ cao gần 1.000m, được rửa ướt và phơi nắng tự nhiên, cho vị chua thanh tao, hậu vị ngọt sâu và hương thơm nồng nàn.',
        origin: 'Thung lũng Ẳng Cang, Ẳng Nưa, Mường Ảng',
        highlights: ['Sản phẩm OCOP 4 sao', 'Xuất khẩu sang Đức, Mỹ, Nhật'],
        tasteProfile: 'Chua thanh cam chanh, thơm hương hoa quả nhiệt đới, hậu vị mật ong',
        ocopRating: 4
      },
      {
        id: 'sp_buoi_da_xanh_muong_ang',
        name: 'Bưởi da xanh & Mắc ca Mường Ảng',
        districtId: 'muong-ang',
        category: 'NongSan',
        description: 'Trái bưởi da xanh tép hồng mọng nước, vị ngọt lịm không he đắng; hạt mắc ca sấy nứt vỏ béo ngậy.',
        origin: 'Vùng đồi Búng Lao, Mường Đăng',
        highlights: ['Chuẩn VietGAP an toàn', 'Mọng nước ngọt thanh'],
        tasteProfile: 'Ngọt thanh mát, giòn tép, béo bùi',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_deo_tang_quai',
        name: 'Đèo Tằng Quái - Săn Biển Mây',
        districtId: 'muong-ang',
        type: 'ThienNhien',
        description: 'Cung đèo dài 11km nối Tuần Giáo với Mường Ảng, quanh năm mây mù trập trùng như chốn bồng lai tiên cảnh vào mỗi sớm mai.',
        coordinates: [21.536, 103.265]
      },
      {
        id: 'lm_hang_tham_huong',
        name: 'Hang Thẩm Vang & Đồi Cà phê Bạt ngàn',
        districtId: 'muong-ang',
        type: 'ThienNhien',
        description: 'Quần thể hang động thạch nhũ huyền bí nằm giữa các triền đồi cà phê hoa nở trắng muốt ngát hương thơm vào tháng 2-3.',
        coordinates: [21.505, 103.218]
      }
    ],
    geography: {
      terrain: 'Thung lũng gợn sóng lượn quanh núi cao, đất đỏ bazan và đất mùn đồi núi phì nhiêu',
      rivers: ['Suối Nặm Ảng', 'Suối Nậm Lạn'],
      passesOrMountains: ['Đèo Tằng Quái', 'Núi Huổi Tở'],
      climateNote: 'Khí hậu mát mẻ quanh năm, sương mù dày ban đêm tạo lượng ẩm dồi dào cho cây cà phê.'
    },
    photoGallery: [
      {
        title: 'Biển mây đèo Tằng Quái',
        caption: 'Mây vờn sườn núi Mường Ảng sớm bình minh',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'muong-nhe',
    name: 'Huyện Mường Nhé',
    fullName: 'Huyện Mường Nhé',
    type: 'huyen',
    coordinates: [22.189, 102.458],
    areaKm2: 1573.73,
    population: 43200,
    density: 27.4,
    svgPathId: 'path_mn',
    color: '#8b5cf6',
    highlightColor: '#a78bfa',
    heroTagline: 'Cực Tây Tổ quốc A Pa Chải - Một con gà gáy ba nước cùng nghe',
    summary: 'Nơi đón ánh hoàng hôn muộn nhất Việt Nam. Nổi tiếng với Cột mốc số 0 biên giới ngã ba Việt - Lào - Trung Quốc trên đỉnh Khoan La San cao 1.864m, cùng Khu bảo tồn thiên nhiên Mường Nhé rừng nguyên sinh bạt ngàn.',
    mergerDetails: {
      period: 'Chia tách thành lập huyện Nậm Pồ (2012) & Giữ vững an ninh biên giới',
      resolutionName: 'Nghị quyết 45/NQ-CP của Chính phủ',
      summary: 'Sau khi tách 5 xã sang huyện Nậm Pồ, Mường Nhé kiện toàn 11 xã biên cương, đẩy mạnh bảo vệ rừng đặc dụng và du lịch cột mốc Cực Tây.',
      keyChanges: [
        'Xây dựng đường bê tông tuần tra biên giới lên tận chân Cột mốc số 0 A Pa Chải.',
        'Bảo tồn nghiêm ngặt hơn 45.000 ha rừng đặc dụng Khu bảo tồn thiên nhiên Mường Nhé.',
        'Định canh định cư vững chắc cho đồng bào các dân tộc thiểu số Hà Nhì, Si La, Cống.'
      ],
      impactOnPopulationArea: 'Ổn định đời sống cho 11 xã biên giới, giữ vững chủ quyền thiêng liêng miền biên viễn.'
    },
    subUnits: [
      { name: 'Xã Mường Nhé', type: 'xa', notes: 'Trung tâm huyện lỵ' },
      { name: 'Xã Sín Thầu', type: 'xa', notes: 'Địa bàn Cột mốc Cực Tây A Pa Chải' },
      { name: 'Xã Sen Thượng', type: 'xa' },
      { name: 'Xã Leng Su Sìn', type: 'xa' },
      { name: 'Xã Chung Chải', type: 'xa' },
      { name: 'Xã Mường Toong', type: 'xa' },
      { name: 'Xã Nậm Kè', type: 'xa' },
      { name: 'Xã Nậm Vì', type: 'xa' },
      { name: 'Xã Quảng Lâm', type: 'xa' },
      { name: 'Xã Huổi Lếch', type: 'xa' },
      { name: 'Xã Pá Mỳ', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người Hà Nhì', percentageInDistrict: '28.6%', costume: 'Trang phục nữ đính hàng trăm hạt cườm, tua rua len đỏ rực rỡ, mũ đội đầu dệt cầu kỳ', customs: 'Nhà trình tường đất nện dày dặn ấm đông mát hè, phong tục cúng rừng, lễ hội tạ ơn Mẹ Đất', specialFestival: 'Lễ hội Cúng rừng (Gạ Ma Thú), Lễ hội Tết Cơm mới (Hồ Sự Chà)' },
      { name: 'Người H\'Mông', percentageInDistrict: '46.8%', costume: 'Váy dệt lanh hoa văn sáp ong', customs: 'Trồng ngô nương, chăn nuôi trâu bò vùng cao', specialFestival: 'Lễ hội Nào Sồng' },
      { name: 'Người Thái, Cống, Si La, Dao', percentageInDistrict: '24.6%', costume: 'Trang phục hoa văn cúc bạc, vòng cổ bạc', customs: 'Sống quần cư ven suối, nghề làm gốm, dệt vải cổ truyền', specialFestival: 'Lễ cúng bản, Lễ tra hạt ngô' }
    ],
    specialties: [
      {
        id: 'sp_ruou_mong_pe_muong_nhe',
        name: 'Rượu ngô men lá Sín Thầu & Mật ong rừng',
        districtId: 'muong-nhe',
        category: 'DoUong',
        description: 'Nấu từ ngô hạt nương lên men bằng 36 loại thảo dược lá rừng quý hiếm, chưng cất nước suối nguồn A Pa Chải trong vắt, uống êm say dịu ngọt.',
        origin: 'Bản Tá Miếu, Sín Thầu (Bản cực Tây)',
        highlights: ['Men lá rừng bí truyền', 'Không đau đầu, thơm ngát thảo dược'],
        tasteProfile: 'Thơm nồng nàn, êm dịu tê ngọt cổ họng',
        ocopRating: 4
      },
      {
        id: 'sp_thit_heo_muoi_ha_nhi',
        name: 'Thịt lợn gác bếp ướp lá thảo quả Hà Nhì',
        districtId: 'muong-nhe',
        category: 'AmThuc',
        description: 'Thịt lợn đen bản địa nuôi thả rừng ướp muối hột, thảo quả, tiêu rừng treo trên gác bếp trình tường đất nhiều tháng.',
        origin: 'Xã Chung Chải, Sín Thầu',
        highlights: ['Thịt săn chắc thơm mùi thảo quả'],
        tasteProfile: 'Đậm đà, béo ngậy mà không ngấy, ngát hương thảo quả',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_cot_moc_a_pa_chai',
        name: 'Cột mốc Cực Tây Tổ quốc A Pa Chải (Mốc 0)',
        districtId: 'muong-nhe',
        type: 'BienGioi',
        historicalEvent: 'Cột mốc 3 mặt bằng đá hoa cương phân định ranh giới Việt Nam - Lào - Trung Quốc tại tọa độ 22°24\'02" B - 102°08\'38" Đ.',
        description: 'Tọa lạc trên đỉnh núi Khoan La San lộng gió, điểm chạm thiêng liêng của mọi phượt thủ và người con đất Việt.',
        coordinates: [22.401, 102.144],
        bestTimeToVisit: 'Tháng 11 đến tháng 4 năm sau trời trong xanh khô ráo'
      },
      {
        id: 'lm_khu_bao_ton_muong_nhe',
        name: 'Khu Bảo tồn Thiên nhiên Mường Nhé',
        districtId: 'muong-nhe',
        type: 'ThienNhien',
        description: 'Hệ sinh thái rừng mưa nhiệt đới nguyên sinh với hàng trăm loài động thực vật quý hiếm trong Sách Đỏ như vượn đen má hung, gấu ngựa, cây pơ mu ngàn năm.',
        coordinates: [22.155, 102.385]
      },
      {
        id: 'lm_nha_trinh_tuong_ha_nhi',
        name: 'Quần thể Nhà trình tường đất Sín Thầu',
        districtId: 'muong-nhe',
        type: 'VanHoa',
        description: 'Những ngôi nhà tường đất nện màu vàng đất dày 40-50cm vững chãi tựa pháo đài giữa mây ngàn biên ải.',
        coordinates: [22.382, 102.268]
      }
    ],
    geography: {
      terrain: 'Dãy núi đá phiến sắc nhọn hiểm trở, rừng rậm rạp phân cắt mạnh',
      rivers: ['Sông Mo Phí', 'Suối Nậm Nhé', 'Suối Nậm Ma'],
      passesOrMountains: ['Đỉnh Khoan La San (1.864m)', 'Đèo Sen Thượng'],
      climateNote: 'Mùa đông rất lạnh và sương muối, mùa hè mát mẻ dễ chịu.'
    },
    photoGallery: [
      {
        title: 'Cột mốc ngã ba biên giới A Pa Chải',
        caption: 'Điểm cực Tây thiêng liêng của Tổ quốc',
        category: 'lich_su',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'tua-chua',
    name: 'Huyện Tủa Chùa',
    fullName: 'Huyện Tủa Chùa',
    type: 'huyen',
    coordinates: [21.932, 103.351],
    areaKm2: 684.14,
    population: 61800,
    density: 90.3,
    svgPathId: 'path_tc',
    color: '#059669',
    highlightColor: '#10b981',
    heroTagline: 'Cao nguyên đá cổ kỳ vĩ - Rừng Chè Shan Tuyết cổ thụ ngàn năm',
    summary: 'Được mệnh danh là "Đồng Văn thu nhỏ của Điện Biên". Nổi tiếng với cao nguyên đá vôi Tả Phìn tai mèo điệp trùng, rừng chè Shan Tuyết cổ thụ Sín Chải hàng trăm năm tuổi, chợ phiên Tả Sìn Thàng và rượu Mông Pê thơm lừng.',
    mergerDetails: {
      period: 'Sắp xếp cụm dân cư và bản làng vùng cao 2021-2030',
      resolutionName: 'Kế hoạch bảo tồn di sản cao nguyên đá và chè cổ thụ Tủa Chùa',
      summary: 'Quy hoạch phát triển vùng lõi chè Shan Tuyết cổ thụ đạt OCOP 4 sao và công viên địa chất cao nguyên đá tai mèo.',
      keyChanges: [
        'Bảo tồn nghiêm ngặt hơn 4.000 cây chè Shan Tuyết cổ thụ từ 100 - 500 năm tuổi tại xã Sín Chải, Tả Sìn Thàng.',
        'Đưa chợ phiên Tả Sìn Thàng và chợ đêm Tủa Chùa thành điểm nhấn du lịch văn hóa vùng cao.',
        'Khai thác tuyến du lịch sinh thái lòng hồ thủy điện Bản Chát - sông Đà.'
      ],
      impactOnPopulationArea: 'Gồm 1 thị trấn và 11 xã vùng cao gìn giữ vẹn nguyên văn hóa H\'Mông, Xạ Phang.'
    },
    subUnits: [
      { name: 'Thị trấn Tủa Chùa', type: 'thi_tran' },
      { name: 'Xã Sín Chải', type: 'xa', notes: 'Rừng chè Shan Tuyết cổ thụ nghìn năm' },
      { name: 'Xã Tả Sìn Thàng', type: 'xa', notes: 'Chợ phiên văn hóa nổi tiếng' },
      { name: 'Xã Tả Phìn', type: 'xa', notes: 'Cao nguyên đá tai mèo' },
      { name: 'Xã Lao Xả Phình', type: 'xa' },
      { name: 'Xã Trung Thu', type: 'xa' },
      { name: 'Xã Sính Phình', type: 'xa' },
      { name: 'Xã Mường Báng', type: 'xa' },
      { name: 'Xã Mường Đun', type: 'xa' },
      { name: 'Xã Huổi Só', type: 'xa', notes: 'Bến thuyền lòng hồ sông Đà' },
      { name: 'Xã Tủa Thàng', type: 'xa' },
      { name: 'Xã Kháng Thầu', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người H\'Mông (Mông Trắng, Mông Đen, Mông Hoa)', percentageInDistrict: '71.2%', costume: 'Váy xếp nhiều tầng đính hạt cườm, tạp dề thổ cẩm thêu tay tinh vi', customs: 'Uống rượu ngô Mông Pê bát tô, kỹ thuật canh tác hốc đá, tết Nào Pe Chầu', specialFestival: 'Hội chọi dê Tủa Chùa, Lễ hội Gầu Tào' },
      { name: 'Người Thái', percentageInDistrict: '17.3%', costume: 'Áo cóm cúc bạc, khăn Piêu', customs: 'Sống thung lũng Mường Báng, Mường Đun, dệt vải', specialFestival: 'Lễ hội Lồng Tồng' },
      { name: 'Người Xạ Phang (Hoa kiều vùng cao), Dao, Kinh', percentageInDistrict: '11.5%', costume: 'Giày thêu hoa Xạ Phang nức tiếng, áo dài vạt xéo', customs: 'Nghề thêu giày cổ truyền, buôn bán gia vị thuốc bắc', specialFestival: 'Hội may thêu rằm tháng Giêng' }
    ],
    specialties: [
      {
        id: 'sp_che_shan_tuyet_tua_chua',
        name: 'Chè Shan Tuyết cổ thụ Sín Chải (Bạch Trà)',
        districtId: 'tua-chua',
        category: 'OCOP',
        description: 'Búp chè ngậm sương mù trên những cây chè cổ thụ cao 10-15m tuổi đời 300-500 năm trên đỉnh núi mây phủ, búp phủ lớp lông tơ trắng muốt như tuyết.',
        origin: 'Xã Sín Chải, Tả Sìn Thàng, Tủa Chùa',
        highlights: ['Sản phẩm OCOP 4 sao', 'Nước trà vàng óng ánh mật ong', 'Cây chè di sản Việt Nam'],
        tasteProfile: 'Vị chát dịu thanh tao, ngọt hậu sâu lắng mãi nơi cuống họng',
        ocopRating: 4
      },
      {
        id: 'sp_ruou_mong_pe_tua_chua',
        name: 'Rượu Mông Pê Tủa Chùa',
        districtId: 'tua-chua',
        category: 'DoUong',
        description: 'Rượu ngô truyền thống của đồng bào Mông ủ men thảo dược lá cây quý trên núi đá, chưng cất bằng nồi gỗ thủ công.',
        origin: 'Cao nguyên đá Tả Phìn, Sính Phình',
        highlights: ['Nổi tiếng khắp Tây Bắc', 'Men lá gia truyền'],
        tasteProfile: 'Êm nồng, cay ngọt thơm lừng mùi ngô nương',
        ocopRating: 4
      },
      {
        id: 'sp_khoai_so_tua_chua',
        name: 'Khoai sọ tím & Dê núi Tủa Chùa',
        districtId: 'tua-chua',
        category: 'NongSan',
        description: 'Khoai sọ tím ruột dẻo quánh nấu canh sườn thơm nức; thịt dê núi leo vách đá tai mèo thịt săn chắc ngọt lịm.',
        origin: 'Xã Lao Xả Phình, Tả Phìn',
        highlights: ['Dẻo bở thơm ngậy'],
        tasteProfile: 'Bùi bở ngọt thơm',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_cao_nguyen_da_ta_phin',
        name: 'Cao nguyên đá tai mèo Tả Phìn',
        districtId: 'tua-chua',
        type: 'ThienNhien',
        description: 'Rừng đá tai mèo đen sẫm lô xô vươn lên trời xanh trải dài hàng chục cây số, nơi đồng bào Mông kiên cường gieo ngô trong từng hốc đá.',
        coordinates: [21.968, 103.379]
      },
      {
        id: 'lm_cho_ta_sin_thang',
        name: 'Chợ phiên Tả Sìn Thàng',
        districtId: 'tua-chua',
        type: 'VanHoa',
        description: 'Chợ phiên họp vào các ngày Tý và ngày Ngọ trong tháng, nơi hội tụ sắc màu thổ cẩm rực rỡ, tiếng khèn Mông réo rắt và chén rượu Mông Pê nồng say.',
        coordinates: [21.995, 103.364]
      },
      {
        id: 'lm_dong_kho_chua_xua',
        name: 'Hang động Khó Chua Xua & Bến Huổi Só',
        districtId: 'tua-chua',
        type: 'ThienNhien',
        description: 'Hang động thạch nhũ lung linh kỳ vĩ được xếp hạng Di tích danh lam thắng cảnh Quốc gia.',
        coordinates: [21.912, 103.398]
      }
    ],
    geography: {
      terrain: 'Địa hình núi đá vôi Karst phân cắt hiểm trở bậc nhất tỉnh, độ dốc lớn, vực sâu thăm thẳm',
      rivers: ['Sông Đà', 'Suối Nậm Mức'],
      passesOrMountains: ['Đèo Tủa Chùa', 'Dãy núi Tả Phìn'],
      climateNote: 'Độ cao trung bình 1.200m, quanh năm mây mù bao phủ mát lạnh như Sa Pa.'
    },
    photoGallery: [
      {
        title: 'Cây chè Shan Tuyết cổ thụ trăm năm',
        caption: 'Báu vật giữa mây ngàn Sín Chải Tủa Chùa',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'tuan-giao',
    name: 'Huyện Tuần Giáo',
    fullName: 'Huyện Tuần Giáo',
    type: 'huyen',
    coordinates: [21.583, 103.418],
    areaKm2: 1136.29,
    population: 87900,
    density: 77.4,
    svgPathId: 'path_tg',
    color: '#ea580c',
    highlightColor: '#f97316',
    heroTagline: 'Cửa ngõ miền Tây Bắc - Đèo Pha Đin huyền thoại tứ đại đỉnh đèo',
    summary: 'Cửa ngõ phía Đông nối Điện Biên với Sơn La và Hà Nội qua Quốc lộ 6. Nổi danh với Đèo Pha Đin (nơi trời và đất gặp nhau), di tích kháng chiến hào hùng của dân công hỏa tuyến tiếp tế cho chiến dịch Điện Biên Phủ.',
    mergerDetails: {
      period: 'Quy hoạch phát triển vùng đô thị cửa ngõ 2021-2030',
      resolutionName: 'Kế hoạch phát triển giao thương cửa ngõ QL6 - QL279',
      summary: 'Hoàn thiện mạng lưới kết nối giao thông huyết mạch, phát triển cụm công nghiệp nông lâm sản và du lịch Đèo Pha Đin.',
      keyChanges: [
        'Tôn tạo cụm Di tích lịch sử Đèo Pha Đin - điểm son huyền thoại của đoàn dân công tải đạn năm 1954.',
        'Quy hoạch vùng trồng thảo quả, mắc ca và táo mèo (sơn tra) hữu cơ.',
        'Mở rộng thị trấn Tuần Giáo thành trung tâm trung chuyển hàng hóa phía Đông.'
      ],
      impactOnPopulationArea: 'Gồm 1 thị trấn và 18 xã nông thôn giữ vai trò cửa ngõ giao thương toàn tỉnh.'
    },
    subUnits: [
      { name: 'Thị trấn Tuần Giáo', type: 'thi_tran' },
      { name: 'Xã Tỏa Tình', type: 'xa', notes: 'Khu vực đỉnh Đèo Pha Đin' },
      { name: 'Xã Quài Tở', type: 'xa' },
      { name: 'Xã Quài Nưa', type: 'xa' },
      { name: 'Xã Quài Cang', type: 'xa' },
      { name: 'Xã Mường Thín', type: 'xa' },
      { name: 'Xã Mường Mùn', type: 'xa' },
      { name: 'Xã Mường Khong', type: 'xa' },
      { name: 'Xã Pú Nhung', type: 'xa', notes: 'Quê hương anh hùng thiếu niên Vừ A Dính' },
      { name: 'Xã Phình Sáng', type: 'xa' },
      { name: 'Xã Rạng Đông', type: 'xa' },
      { name: 'Xã Chiềng Sinh', type: 'xa' },
      { name: 'Xã Chiềng Đông', type: 'xa' },
      { name: 'Xã Nà Sáy', type: 'xa' },
      { name: 'Xã Mù Cả', type: 'xa' },
      { name: 'Xã Ta Ma', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người Thái', percentageInDistrict: '51.3%', costume: 'Áo cóm, váy nhung, khăn Piêu thêu hoa', customs: 'Sống các thung lũng dọc QL6, cấy lúa nếp tan thơm dẻo', specialFestival: 'Lễ hội Xên Bản, Xên Mường' },
      { name: 'Người H\'Mông', percentageInDistrict: '39.8%', costume: 'Váy xòe thổ cẩm, quê hương anh hùng Vừ A Dính', customs: 'Trồng táo mèo, thảo quả rừng trên đỉnh đèo cao', specialFestival: 'Lễ hội Gầu Tào đỉnh Pha Đin' },
      { name: 'Người Khơ Mú, Kinh', percentageInDistrict: '8.9%', costume: 'Trang phục đa dạng', customs: 'Làm nghề thủ công truyền thống, kinh doanh dịch vụ dừng chân', specialFestival: 'Hội chợ xuân Tuần Giáo' }
    ],
    specialties: [
      {
        id: 'sp_tao_meo_pha_din',
        name: 'Táo Mèo (Sơn Tra) & Mật ong hoa táo Đèo Pha Đin',
        districtId: 'tuan-giao',
        category: 'NongSan',
        description: 'Quả sơn tra mọc tự nhiên trên đỉnh núi Tỏa Tình độ cao 1.400m ngấm gió sương, ngâm rượu hoặc ủ mật ong có màu vàng hổ phách sóng sánh thơm ngát.',
        origin: 'Xã Tỏa Tình, Pú Nhung, Tuần Giáo',
        highlights: ['Vị chua chát ngọt thanh', 'Tốt cho tim mạch và tiêu hóa'],
        tasteProfile: 'Chua thanh đậm đà, chát nhẹ, ngọt hậu',
        ocopRating: 4
      },
      {
        id: 'sp_nep_tan_tuan_giao',
        name: 'Gạo nếp tan Mường Thín',
        districtId: 'tuan-giao',
        category: 'NongSan',
        description: 'Giống nếp quý hạt tròn mẩy, khi đồ xôi dẻo quánh, để 2-3 ngày không lại gạo.',
        origin: 'Thung lũng Mường Thín, Quài Tở',
        highlights: ['Thơm ngát cả gian bếp', 'Đặc sản dâng cúng tổ tiên'],
        tasteProfile: 'Dẻo dính ngọt bùi, béo ngậy tự nhiên',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_deo_pha_din',
        name: 'Đèo Pha Đin - Tứ Đại Đỉnh Đèo',
        districtId: 'tuan-giao',
        type: 'ThienNhien',
        historicalEvent: 'Tuyến đường huyết mạch nơi máy bay Pháp dội hàng nghìn tấn bom đạn nhằm chặn đường tiếp viện của quân dân ta năm 1954.',
        description: 'Cung đèo dài 32km ngoạn mục, đỉnh đèo cao 1.648m quanh năm mây phủ, có khu du lịch sinh thái Pha Đin Pass rực rỡ muôn hoa.',
        coordinates: [21.573, 103.524]
      },
      {
        id: 'lm_que_huong_vu_a_dinh',
        name: 'Khu tưởng niệm Anh hùng Vừ A Dính',
        districtId: 'tuan-giao',
        type: 'LichSu',
        historicalEvent: 'Nơi người thiếu niên dũng cảm dân tộc H\'Mông hy sinh anh dũng trước họng súng quân thù năm 1949 khi mới 15 tuổi.',
        description: 'Tọa lạc tại xã Pú Nhung, địa chỉ đỏ giáo dục truyền thống yêu nước cho thế hệ trẻ.',
        coordinates: [21.652, 103.389]
      }
    ],
    geography: {
      terrain: 'Địa hình núi cao xen kẽ thung lũng karst hẹp trải dài từ Đông sang Tây',
      rivers: ['Suối Nậm Mức', 'Suối Nậm Mu'],
      passesOrMountains: ['Đèo Pha Đin (1.648m)', 'Núi Pú Nhung'],
      climateNote: 'Chênh lệch nhiệt độ lớn, mùa đông trên đỉnh đèo có thể xuất hiện băng giá.'
    },
    photoGallery: [
      {
        title: 'Cung đường uốn lượn Đèo Pha Đin',
        caption: 'Hùng vĩ chốn giao hòa giữa Đất và Trời',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'dien-bien-dong',
    name: 'Huyện Điện Biên Đông',
    fullName: 'Huyện Điện Biên Đông',
    type: 'huyen',
    coordinates: [21.289, 103.256],
    areaKm2: 1206.39,
    population: 68700,
    density: 57,
    svgPathId: 'path_dbd',
    color: '#0891b2',
    highlightColor: '#06b6d4',
    heroTagline: 'Vùng đất Tháp cổ Mường Luân - Đậm đà bản sắc H\'Mông & Bò thịt chất lượng cao',
    summary: 'Huyện miền núi phía Đông Nam với cảnh quan điệp trùng, nổi tiếng với Di tích kiến trúc nghệ thuật Quốc gia Tháp Mường Luân xây dựng từ thế kỷ 16 mang phong cách giao thoa Việt - Lào cổ kính.',
    mergerDetails: {
      period: 'Tách lập huyện năm 1995 & Quy hoạch nông thôn mới 2021-2030',
      resolutionName: 'Nghị định số 59-CP & Đề án giảm nghèo bền vững vùng đồng bào dân tộc',
      summary: 'Quy hoạch phát triển đàn bò thịt thương phẩm, bảo tồn văn hóa dệt lanh thủ công của người Mông Đỏ.',
      keyChanges: [
        'Trùng tu và phát huy giá trị Tháp Mường Luân và Tháp Chiềng Sơ.',
        'Hình thành vùng nuôi bò thịt vỗ béo quy mô lớn nhất tỉnh.',
        'Mở tuyến đường huyết mạch nối Điện Biên Đông với huyện Sông Mã (Sơn La).'
      ],
      impactOnPopulationArea: 'Gồm 1 thị trấn và 13 xã vùng cao đa sắc tộc gắn bó keo sơn.'
    },
    subUnits: [
      { name: 'Thị trấn Điện Biên Đông', type: 'thi_tran' },
      { name: 'Xã Mường Luân', type: 'xa', notes: 'Di tích Tháp cổ Mường Luân' },
      { name: 'Xã Chiềng Sơ', type: 'xa', notes: 'Di tích Tháp Chiềng Sơ' },
      { name: 'Xã Phì Nhừ', type: 'xa' },
      { name: 'Xã Keo Lôm', type: 'xa', notes: 'Đèo Keo Lôm lộng gió' },
      { name: 'Xã Nong U', type: 'xa' },
      { name: 'Xã Pú Nhi', type: 'xa' },
      { name: 'Xã Na Son', type: 'xa' },
      { name: 'Xã Tìa Dình', type: 'xa' },
      { name: 'Xã Háng Lìa', type: 'xa' },
      { name: 'Xã Luân Giói', type: 'xa' },
      { name: 'Xã Xa Dung', type: 'xa' },
      { name: 'Xã Phình Giàng', type: 'xa' },
      { name: 'Xã Pu Hồng', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người H\'Mông (Mông Đỏ, Mông Hoa)', percentageInDistrict: '56.7%', costume: 'Váy thổ cẩm đỏ rực rỡ dệt bằng sợi lanh, hoa văn vẽ sáp ong tinh xảo', customs: 'Canh tác ruộng bậc thang, múa khèn, trò chơi ném pao ngày tết', specialFestival: 'Lễ hội Nào Pe Chầu, Hội chọi bò Điện Biên Đông' },
      { name: 'Người Thái', percentageInDistrict: '32.1%', costume: 'Áo cóm, váy đen, khăn Piêu', customs: 'Sống ven sông Mã (Mường Luân, Chiềng Sơ), múa xòe, làm gốm', specialFestival: 'Lễ hội Cầu mưa Xên Bản' },
      { name: 'Người Khơ Mú, Sinh Mun, Kinh', percentageInDistrict: '11.2%', costume: 'Trang phục dân tộc độc đáo', customs: 'Nghề đan lát tre nứa tinh xảo, ẩm thực cá suối', specialFestival: 'Lễ hội Tra hạt mừng cơm mới' }
    ],
    specialties: [
      {
        id: 'sp_bo_kho_dien_bien_dong',
        name: 'Thịt bò khô & Bò một nắng Điện Biên Đông',
        districtId: 'dien-bien-dong',
        category: 'AmThuc',
        description: 'Bò cỏ bản địa chăn thả tự nhiên trên các triền đồi cỏ non, thịt chắc thơm ngọt, ướp mắc khén ớt rừng sấy than hoa.',
        origin: 'Xã Phì Nhừ, Keo Lôm, Na Son',
        highlights: ['Thịt bò cỏ 100% tự nhiên', 'Thớ thịt đỏ au thơm ngọt'],
        tasteProfile: 'Ngọt đậm thớ thịt, cay the đậm đà',
        ocopRating: 4
      },
      {
        id: 'sp_lac_do_dien_bien_dong',
        name: 'Lạc đỏ & Mật ong rừng Điện Biên Đông',
        districtId: 'dien-bien-dong',
        category: 'NongSan',
        description: 'Hạt lạc đỏ béo ngậy giàu dinh dưỡng trồng trên nương rẫy; mật ong khoái rừng nguyên chất đặc sánh.',
        origin: 'Xã Luân Giói, Mường Luân',
        highlights: ['Hạt lạc đỏ mẩy thơm bùi'],
        tasteProfile: 'Béo ngậy thơm nức, ngọt thanh',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_thap_muong_luan',
        name: 'Di tích Tháp cổ Mường Luân',
        districtId: 'dien-bien-dong',
        type: 'LichSu',
        historicalEvent: 'Tháp phật giáo cổ kính xây dựng vào thế kỷ 16 cao 15,5m, minh chứng cho tình đoàn kết hữu nghị bền chặt Việt - Lào.',
        description: 'Kiến trúc tháp gạch nung hoa văn rồng phượng, đài sen mềm mại soi bóng bên dòng sông Mã hiền hòa.',
        coordinates: [21.189, 103.352]
      },
      {
        id: 'lm_deo_keo_lom',
        name: 'Đèo Keo Lôm & Thung lũng ruộng bậc thang',
        districtId: 'dien-bien-dong',
        type: 'ThienNhien',
        description: 'Cung đèo quanh co đưa du khách qua những triền đồi ngập tràn sắc hoa đào, hoa mận và sóng ruộng bậc thang mùa lúa chín.',
        coordinates: [21.272, 103.214]
      }
    ],
    geography: {
      terrain: 'Dãy núi cao chia cắt mạnh từ Tây Bắc xuống Đông Nam, xen giữa là lưu vực sông Mã',
      rivers: ['Sông Mã', 'Suối Nậm Luân'],
      passesOrMountains: ['Đèo Keo Lôm', 'Dãy núi Phù Lồng Sa'],
      climateNote: 'Mùa khô nắng nóng rực rỡ, mùa mưa tạo dòng chảy cuồn cuộn trên sông Mã hùng vĩ.'
    },
    photoGallery: [
      {
        title: 'Tháp cổ Mường Luân bên dòng sông Mã',
        caption: 'Di tích lịch sử văn hóa quốc gia thế kỷ 16',
        category: 'lich_su',
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'muong-cha',
    name: 'Huyện Mường Chà',
    fullName: 'Huyện Mường Chà',
    type: 'huyen',
    coordinates: [21.802, 103.115],
    areaKm2: 1199.42,
    population: 49500,
    density: 41.3,
    svgPathId: 'path_mc',
    color: '#ca8a04',
    highlightColor: '#eab308',
    heroTagline: 'Cửa ngõ biên cương Tây Bắc - Hang động huyền ảo & Bánh dày nếp nương Mường Mươn',
    summary: 'Nằm giữa trung tâm nối TP. Điện Biên Phủ với thị xã Mường Lay và huyện Mường Nhé. Nổi tiếng với di tích hang động Pa Ham, chợ phiên Mường Mươn và nghệ thuật làm Bánh dày dẻo thơm của người H\'Mông.',
    mergerDetails: {
      period: 'Tách huyện Nậm Pồ năm 2012 & Ổn định đơn vị hành chính',
      resolutionName: 'Nghị quyết số 45/NQ-CP',
      summary: 'Sau khi tách các xã vùng biên giới sang huyện Nậm Pồ, Mường Chà giữ vững 1 thị trấn và 11 xã với định hướng phát triển du lịch sinh thái hang động và cây cao su, quế.',
      keyChanges: [
        'Xếp hạng Di tích quốc gia Hang động Pa Ham và Thẩm Púa.',
        'Mở rộng diện tích trồng cây cao su và quế xuất khẩu.',
        'Nâng cấp tuyến Quốc lộ 12 huyết mạch giao thương sang nước bạn Lào.'
      ],
      impactOnPopulationArea: 'Củng cố 12 đơn vị hành chính cấp xã, tạo vành đai sinh thái bền vững.'
    },
    subUnits: [
      { name: 'Thị trấn Mường Chà', type: 'thi_tran' },
      { name: 'Xã Mường Mươn', type: 'xa', notes: 'Địa bàn có chợ phiên nổi tiếng' },
      { name: 'Xã Pa Ham', type: 'xa', notes: 'Di tích Hang động Pa Ham' },
      { name: 'Xã Sa Lông', type: 'xa' },
      { name: 'Xã Hừa Ngài', type: 'xa' },
      { name: 'Xã Huổi Mí', type: 'xa' },
      { name: 'Xã Huổi Lèng', type: 'xa' },
      { name: 'Xã Ma Thì Hồ', type: 'xa' },
      { name: 'Xã Na Sang', type: 'xa' },
      { name: 'Xã Nậm Nèn', type: 'xa' },
      { name: 'Xã Mường Tùng', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người H\'Mông', percentageInDistrict: '58.9%', costume: 'Váy dệt lanh thêu hoa, tạp dề đỏ', customs: 'Lễ hội giã bánh dày đầu xuân, bắn nỏ, ném còn', specialFestival: 'Lễ hội Gầu Tào, Hội giã bánh dày Mường Chà' },
      { name: 'Người Thái', percentageInDistrict: '27.4%', costume: 'Áo cóm cúc bạc, váy đen', customs: 'Sống ven các con suối Mường Tùng, Mường Mươn', specialFestival: 'Lễ mừng cơm mới' },
      { name: 'Người Khơ Mú, Dao, Kinh', percentageInDistrict: '13.7%', costume: 'Trang phục truyền thống', customs: 'Canh tác lúa rẫy, trồng quế, chăn nuôi gia súc', specialFestival: 'Lễ Cầu mùa' }
    ],
    specialties: [
      {
        id: 'sp_banh_day_muong_cha',
        name: 'Bánh Dày nếp nương Mường Chà',
        districtId: 'muong-cha',
        category: 'AmThuc',
        description: 'Làm từ nếp nương tuyển chọn giã thủ công bằng cối đá củi gỗ khi xôi còn nóng hổi, gói lá chuối tiêu thơm lừng ăn kèm chả hoặc mật ong rừng.',
        origin: 'Bản Hừa Ngài, Sa Lông, Mường Chà',
        highlights: ['Bánh dẻo thơm để cả tuần vẫn mềm', 'Món ăn biểu tượng tình cảm gia đình'],
        tasteProfile: 'Dẻo quánh, ngọt bùi thơm hương nếp nương',
        ocopRating: 4
      },
      {
        id: 'sp_mang_dang_muong_cha',
        name: 'Măng đắng & Măng trúc Mường Chà',
        districtId: 'muong-cha',
        category: 'NongSan',
        description: 'Mầm măng đắng đầu mùa nướng than tro hoặc luộc chấm chẩm chéo, vị đắng ngọt bùi quyến rũ thực khách.',
        origin: 'Rừng nứa Pa Ham, Huổi Mí',
        highlights: ['Rau sạch từ rừng già tự nhiên'],
        tasteProfile: 'Đắng thanh đầu lưỡi, ngọt bùi về sau',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_hang_dong_pa_ham',
        name: 'Quần thể Hang động Pa Ham',
        districtId: 'muong-cha',
        type: 'ThienNhien',
        description: 'Di tích danh lam thắng cảnh Quốc gia gồm hàng loạt hang động karst huyền ảo với thạch nhũ muôn hình vạn trạng soi bóng xuống dòng Nậm Mức.',
        coordinates: [21.874, 103.178]
      },
      {
        id: 'lm_hang_tham_pua',
        name: 'Di tích Hang Thẩm Púa',
        districtId: 'muong-cha',
        type: 'LichSu',
        historicalEvent: 'Nơi đặt Sở chỉ huy đầu tiên của Chiến dịch Điện Biên Phủ và là nơi diễn ra hội nghị cán bộ toàn mặt trận phổ biến lệnh nổ súng ngày 14/1/1954.',
        description: 'Hang đá tự nhiên rộng lớn che chắn an toàn cho bộ chỉ huy chiến dịch.',
        coordinates: [21.821, 103.092]
      }
    ],
    geography: {
      terrain: 'Địa hình thung lũng sông xen kẽ các dải núi đá vôi dốc đứng',
      rivers: ['Sông Nậm Mức', 'Suối Nậm He'],
      passesOrMountains: ['Đèo Mường Chà', 'Đèo Ma Thì Hồ'],
      climateNote: 'Khí hậu mát mẻ ven sông, sương mù dày vào mùa đông.'
    },
    photoGallery: [
      {
        title: 'Hang động thạch nhũ Pa Ham',
        caption: 'Kiệt tác điêu khắc của thiên nhiên Tây Bắc',
        category: 'canh_quan',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'nam-po',
    name: 'Huyện Nậm Pồ',
    fullName: 'Huyện Nậm Pồ',
    type: 'huyen',
    coordinates: [21.942, 102.756],
    areaKm2: 1498.05,
    population: 58600,
    density: 39.1,
    svgPathId: 'path_np',
    color: '#4f46e5',
    highlightColor: '#6366f1',
    heroTagline: 'Huyện biên giới trẻ trung - Sắc thắm hoa đào & Bản sắc Dao Khâu, H\'Mông',
    summary: 'Được thành lập năm 2012 từ việc điều chỉnh địa giới của Mường Nhé và Mường Chà. Huyện có hơn 128km đường biên giới tiếp giáp Lào, sở hữu cảnh sắc thiên nhiên nguyên sơ, thác Nậm Đăm và văn hóa độc đáo của đồng bào Dao Khâu, Thái, Mông.',
    mergerDetails: {
      period: 'Thành lập huyện năm 2012 theo Nghị quyết 45/NQ-CP',
      resolutionName: 'Nghị quyết số 45/NQ-CP của Chính phủ',
      summary: 'Thành lập huyện Nậm Pồ trên cơ sở tách 10 xã từ Mường Nhé và 5 xã từ Mường Chà, mở ra trang sử phát triển mới cho vùng biên cương.',
      keyChanges: [
        'Xây dựng trung tâm hành chính huyện tại xã Nà Hỳ khang trang hiện đại.',
        'Hoàn thiện hệ thống giao thông liên xã xuyên biên giới.',
        'Bảo tồn phong tục cấp sắc của người Dao Khâu và trang phục dệt thủ công.'
      ],
      impactOnPopulationArea: 'Quy tụ 15 xã biên giới tạo thế trận quốc phòng toàn dân vững chắc.'
    },
    subUnits: [
      { name: 'Xã Nà Hỳ', type: 'xa', notes: 'Trung tâm huyện lỵ Nậm Pồ' },
      { name: 'Xã Chà Cang', type: 'xa' },
      { name: 'Xã Chà Nưa', type: 'xa', notes: 'Xã đạt chuẩn Nông thôn mới kiểu mẫu' },
      { name: 'Xã Chà Tở', type: 'xa' },
      { name: 'Xã Nà Bủng', type: 'xa', notes: 'Xã biên giới giáp Lào' },
      { name: 'Xã Nà Khoa', type: 'xa' },
      { name: 'Xã Nậm Chua', type: 'xa' },
      { name: 'Xã Nậm Khăn', type: 'xa' },
      { name: 'Xã Nậm Nhừ', type: 'xa' },
      { name: 'Xã Nậm Tin', type: 'xa' },
      { name: 'Xã Pa Tần', type: 'xa' },
      { name: 'Xã Phìn Hồ', type: 'xa' },
      { name: 'Xã Si Pa Phìn', type: 'xa' },
      { name: 'Xã Vàng Đán', type: 'xa' }
    ],
    ethnicGroups: [
      { name: 'Người H\'Mông', percentageInDistrict: '62.4%', costume: 'Váy thổ cẩm hoa văn lanh, trang sức bạc', customs: 'Sống trên các đỉnh núi cao biên ải, tết Nào Pe Chầu', specialFestival: 'Hội chọi chim họa mi, Lễ hội Gầu Tào' },
      { name: 'Người Thái', percentageInDistrict: '19.8%', costume: 'Áo cóm, váy nhung đen, khăn Piêu', customs: 'Mô hình làng du lịch văn hóa cộng đồng bản Chà Nưa', specialFestival: 'Lễ hội Lồng Tồng' },
      { name: 'Người Dao (Dao Khâu, Dao Đỏ), Hoa, Kinh', percentageInDistrict: '17.8%', costume: 'Áo chàm đính đồng bạc, mũ trùm đầu đỏ rực rỡ', customs: 'Lễ Cấp sắc 7 đèn - 12 đèn công nhận người trưởng thành', specialFestival: 'Lễ hội Cấp sắc người Dao' }
    ],
    specialties: [
      {
        id: 'sp_thit_trau_kho_nam_po',
        name: 'Thịt gác bếp & Lạp xưởng hun khói Nậm Pồ',
        districtId: 'nam-po',
        category: 'AmThuc',
        description: 'Lạp xưởng làm từ thịt lợn đen bản địa ướp rượu ngô men lá và hạt tiêu rừng, sấy chậm bằng khói củi bương thơm nức mũi.',
        origin: 'Xã Chà Nưa, Nà Hỳ, Nậm Pồ',
        highlights: ['Thơm mùi khói tự nhiên', 'Vị ngọt bùi dai giòn'],
        tasteProfile: 'Chua thanh nhẹ, béo giòn, đậm đà gia vị',
        ocopRating: 4
      },
      {
        id: 'sp_bi_xanh_nam_po',
        name: 'Bí xanh thơm & Khoai sọ Nà Hỳ',
        districtId: 'nam-po',
        category: 'NongSan',
        description: 'Giống bí bản địa khi nấu tỏa hương thơm ngát như mùi nếp mới, cùi dày giòn ngọt thanh khiết.',
        origin: 'Thung lũng Chà Cang, Si Pa Phìn',
        highlights: ['Đặc sản OCOP 3 sao', 'Không hóa chất'],
        tasteProfile: 'Ngọt mát, ngát mùi cốm non',
        ocopRating: 3
      }
    ],
    landmarks: [
      {
        id: 'lm_ban_cha_nua',
        name: 'Làng Nông thôn mới kiểu mẫu Chà Nưa',
        districtId: 'nam-po',
        type: 'VanHoa',
        description: 'Bản làng kiểu mẫu xinh đẹp với những nếp nhà sàn khang trang, đường hoa rực rỡ và mô hình du lịch sinh thái cộng đồng thân thiện.',
        coordinates: [21.892, 102.812]
      },
      {
        id: 'lm_thac_nam_dam',
        name: 'Thác Nậm Đăm & Cung đường biên cương Si Pa Phìn',
        districtId: 'nam-po',
        type: 'ThienNhien',
        description: 'Thác nước nhiều tầng trắng xóa đổ giữa rừng nguyên sinh đại ngàn hoang sơ quyến rũ.',
        coordinates: [21.965, 102.735]
      }
    ],
    geography: {
      terrain: 'Núi non trùng điệp, độ dốc lớn, nhiều khe suối sâu và rừng đầu nguồn',
      rivers: ['Suối Nậm Pồ', 'Suối Nà Hỳ', 'Suối Nậm Nhừ'],
      passesOrMountains: ['Đèo Si Pa Phìn', 'Dãy núi Vàng Đán'],
      climateNote: 'Khí hậu mát mẻ, trong lành, mùa hè nhiều thác nước hùng vĩ.'
    },
    photoGallery: [
      {
        title: 'Bản làng thanh bình Chà Nưa',
        caption: 'Điểm sáng nông thôn mới vùng biên ải Điện Biên',
        category: 'con_nguoi',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const ETHNIC_GROUPS_OVERVIEW: EthnicGroupOverview[] = [
  {
    id: 'thai',
    name: 'Dân tộc Thái (Thái Đen & Thái Trắng)',
    alternateNames: 'Tày Đăm, Tày Đón',
    populationInDienBien: 242000,
    percentageInProvince: 38.1,
    mainDistricts: ['TP. Điện Biên Phủ', 'Huyện Điện Biên', 'TX. Mường Lay', 'Mường Ảng', 'Tuần Giáo'],
    costumeFeatures: 'Nữ mặc áo cóm bó sát cơ thể với hàng cúc bướm bằng bạc, thắt lưng xanh (xài eo), váy đen buông chùng, khăn Piêu thêu hoa văn kỳ công (Thái Đen) hoặc áo cóm trắng cổ chữ V (Thái Trắng). Phụ nữ có chồng búi tóc "Tằng cẩu" trên đỉnh đầu.',
    customsAndBeliefs: 'Ở nhà sàn gỗ lợp ngói đá phiến hoặc ngói pơmu. Quan niệm vạn vật hữu linh, thờ cúng tổ tiên (đẳm), tổ chức Xên Bản, Xên Mường. Mến khách với chén rượu cần và điệu múa xòe nồng thắm.',
    traditionalHousing: 'Nhà sàn gỗ khang trang hình mai rùa (Thái Đen) hoặc nhà sàn vuông vức lợp đá phiến (Thái Trắng).',
    festivals: ['Lễ hội Hoa Ban (tháng 3)', 'Nghệ thuật Xòe Thái (Di sản thế giới UNESCO)', 'Lễ hội Đua thuyền đuôi én Mường Lay', 'Kin Pang Then'],
    musicalArts: 'Khèn bè, Tính tẩu (đàn Tính), pí thiu, hát Then ngọt ngào, các điệu xòe cổ: xòe nón, xòe quạt, xòe khăn.',
    avatarBg: 'bg-emerald-700'
  },
  {
    id: 'hmong',
    name: 'Dân tộc H\'Mông (Mông Trắng, Mông Hoa, Mông Đỏ, Mông Đen)',
    alternateNames: 'Mèo, Mẹo',
    populationInDienBien: 218000,
    percentageInProvince: 34.3,
    mainDistricts: ['Tủa Chùa', 'Mường Nhé', 'Nậm Pồ', 'Mường Chà', 'Điện Biên Đông', 'Tuần Giáo'],
    costumeFeatures: 'Nữ mặc váy xòe xếp nếp lộng lẫy dệt bằng sợi lanh, hoa văn vẽ sáp ong chàm xanh và thêu chỉ ngũ sắc rực rỡ, đeo nhiều vòng bạc, xà tích leng keng vui tai. Nam mặc áo cánh ngắn quần đũng rộng thắt đai lưng.',
    customsAndBeliefs: 'Sống trên sườn núi cao hiểm trở, kiên cường canh tác hốc đá và ruộng bậc thang. Thờ ma nhà, ma cửa. Tết Nào Pe Chầu vào tháng Chạp âm lịch với tục giã bánh dày cúng trời đất.',
    traditionalHousing: 'Nhà gỗ trệt bọc ván hoặc nhà trình tường đất dày dặn chống chọi sương muối giá rét.',
    festivals: ['Lễ hội Gầu Tào (cầu phúc, cầu con)', 'Tết Nào Pe Chầu', 'Hội múa khèn Mông', 'Hội ném Pao đầu xuân'],
    musicalArts: 'Khèn Mông (biểu tượng tâm hồn chàng trai H\'Mông), sáo Mông, kèn lá, kèn môi réo rắt gọi bạn tình.',
    avatarBg: 'bg-rose-700'
  },
  {
    id: 'kinh',
    name: 'Dân tộc Kinh (Người Việt)',
    alternateNames: 'Việt',
    populationInDienBien: 110000,
    percentageInProvince: 17.3,
    mainDistricts: ['TP. Điện Biên Phủ', 'Huyện Điện Biên', 'TX. Mường Lay', 'Mường Ảng', 'Tuần Giáo'],
    costumeFeatures: 'Âu phục hiện đại, áo dài truyền thống trong các dịp lễ hội trang trọng.',
    customsAndBeliefs: 'Thờ cúng tổ tiên, Phật giáo, tín ngưỡng thờ Thành hoàng làng, người có công mở cõi như Tướng quân Hoàng Công Chất.',
    traditionalHousing: 'Nhà xây hiện đại, nhà phố đô thị và nhà vườn thôn quê.',
    festivals: ['Kỷ niệm Chiến thắng Điện Biên Phủ (7/5)', 'Lễ hội Đền Hoàng Công Chất', 'Tết Nguyên Đán'],
    musicalArts: 'Ca trù, dân ca, các khúc ca hào hùng về Điện Biên lịch sử.',
    avatarBg: 'bg-amber-700'
  },
  {
    id: 'ha-nhi',
    name: 'Dân tộc Hà Nhì',
    alternateNames: 'U Ní, Xá U Ní',
    populationInDienBien: 24500,
    percentageInProvince: 3.9,
    mainDistricts: ['Mường Nhé (Sín Thầu, Chung Chải, Sen Thượng, Leng Su Sìn)'],
    costumeFeatures: 'Trang phục nữ vô cùng cầu kỳ với áo dài trùm mông đính hạt cườm, bạc trắng, tua rua len đỏ rực rỡ, mái tóc bện bằng len đen dày dặn như vầng trăng khuyết.',
    customsAndBeliefs: 'Sống nơi biên viễn Cực Tây A Pa Chải. Nổi tiếng với tục cúng rừng thiêng Gạ Ma Thú, cấm người lạ vào bản trong ngày lễ để giữ sự thanh tịnh cho đất trời.',
    traditionalHousing: 'Nhà trình tường đất nện màu vàng đất dày 45-50cm kiên cố tựa pháo đài giữa mây ngàn.',
    festivals: ['Lễ hội Cúng rừng Gạ Ma Thú', 'Tết Cơm mới Hồ Sự Chà', 'Tết Khô Già Già'],
    musicalArts: 'Kèn Am Ba, sáo Cúc Kẹ, bài ca cúng thần rừng thiêng liêng.',
    avatarBg: 'bg-purple-700'
  },
  {
    id: 'kho-mu',
    name: 'Dân tộc Khơ Mú',
    alternateNames: 'Xá Cẩu, Mảng Cẩu',
    populationInDienBien: 18900,
    percentageInProvince: 3.0,
    mainDistricts: ['Điện Biên Đông', 'Mường Ảng', 'Tuần Giáo', 'Mường Chà', 'Nậm Pồ'],
    costumeFeatures: 'Trang phục giao thoa với người Thái nhưng khăn đội đầu có hoa văn hình học độc đáo, ưa chuộng trang sức chuỗi hạt vỏ ốc và đồng xu cổ.',
    customsAndBeliefs: 'Bậc thầy về đan lát mây tre đan, nghề làm nương rẫy, tục thờ ma bản (hroi mương), tổ chức lễ Cầu mưa và Tra hạt lúa.',
    traditionalHousing: 'Nhà sàn mái khum hình mu rùa bằng nứa tre thoáng mát.',
    festivals: ['Lễ hội Cầu Mưa', 'Lễ Tra hạt Lúa Mới (Tẹ Chạ)'],
    musicalArts: 'Đàn T\'rưng tre, ống gõ Chưng bưng rộn ràng âm vang suối ngàn.',
    avatarBg: 'bg-blue-700'
  },
  {
    id: 'dao',
    name: 'Dân tộc Dao (Dao Khâu, Dao Đỏ)',
    alternateNames: 'Mán',
    populationInDienBien: 7200,
    percentageInProvince: 1.1,
    mainDistricts: ['Nậm Pồ', 'Mường Nhé', 'Tuần Giáo'],
    costumeFeatures: 'Áo chàm nhuộm đen tuyền viền chỉ đỏ, cổ áo đính 3 đến 5 quả bông len đỏ rực rỡ, khăn trùm đầu thêu chữ vạn và cây cỏ.',
    customsAndBeliefs: 'Tín ngưỡng Bàn Vương, Lễ Cấp sắc (Quần Quái) linh thiêng công nhận người đàn ông trưởng thành có tâm đức với cộng đồng.',
    traditionalHousing: 'Nhà nửa sàn nửa đất hoặc nhà trệt bằng gỗ thông pơ mu.',
    festivals: ['Lễ Cấp sắc 7 đèn - 12 đèn', 'Tết Nhảy (Nhiang Chàm Đao)'],
    musicalArts: 'Trống chuông, tù và sừng trâu, điệu múa rùa múa kiếm.',
    avatarBg: 'bg-indigo-700'
  },
  {
    id: 'cong-si-la-la-hu',
    name: 'Các Dân tộc Rất Ít Người (Cống, Si La, Lào, Kháng, Mảng)',
    alternateNames: 'Nhóm dân tộc bản địa đặc biệt',
    populationInDienBien: 14400,
    percentageInProvince: 2.3,
    mainDistricts: ['Mường Nhé', 'Điện Biên', 'Nậm Pồ', 'Điện Biên Đông'],
    costumeFeatures: 'Trang phục nữ Si La đính đầy tiền xu bạc trước ngực áo, người Cống với cạp váy dệt hoa văn hình thoi tinh xảo.',
    customsAndBeliefs: 'Gìn giữ những nghi lễ nông nghiệp sơ khai như Lễ cúng hoa mào gà (người Cống), Lễ cúng cơm mới bên bếp thiêng.',
    traditionalHousing: 'Nhà sàn vách nứa đơn sơ hòa mình vào thiên nhiên hoang dã.',
    festivals: ['Lễ hội Hoa Mào Gà người Cống', 'Tết Té Nước Bun Huột Nga người Lào'],
    musicalArts: 'Điệu múa chim muông, sáo nứa đơn thanh tao.',
    avatarBg: 'bg-teal-700'
  }
];

export const TOUR_ROUTES: TourRoute[] = [
  {
    id: 'tour-1',
    title: 'Hành Trình Lịch Sử & Hoa Ban Rực Rỡ (3 Ngày 2 Đêm)',
    duration: '3 Ngày 2 Đêm',
    districtsCovered: ['TP. Điện Biên Phủ', 'Huyện Điện Biên', 'Mường Ảng'],
    theme: 'Lịch sử hào hùng, Thung lũng Mường Thanh & Cà phê Arabica',
    highlights: ['Đồi A1', 'Hầm De Castries', 'Sở chỉ huy Mường Phăng', 'Hồ Pá Khoang', 'Thành Bản Phủ', 'Đèo Tằng Quái Mường Ảng'],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'Khám phá Chiến trường Điện Biên Phủ & Ẩm thực Thái',
        activities: [
          'Thăm Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ chiêm ngưỡng bức tranh Panorama khổng lồ',
          'Viếng Nghĩa trang Liệt sĩ Đồi A1 và cứ điểm đồi A1, Hầm De Castries',
          'Thưởng thức bữa tối Pa Pỉnh Tộp, thịt trâu gác bếp và giao lưu Xòe Thái tại Bản Mển'
        ]
      },
      {
        day: 'Ngày 2',
        title: 'Mường Phăng Đại ngàn & Hồ Pá Khoang',
        activities: [
          'Thăm Sở chỉ huy Chiến dịch Điện Biên Phủ ẩn mình dưới tán rừng Mường Phăng',
          'Du ngoạn thuyền trên Hồ Pá Khoang, ngắm đảo hoa anh đào',
          'Tắm suối khoáng nóng U Va phục hồi sức khỏe'
        ]
      },
      {
        day: 'Ngày 3',
        title: 'Vựa lúa Mường Thanh & Thủ phủ Cà phê Mường Ảng',
        activities: [
          'Chiêm bái Đền thờ Hoàng Công Chất tại Thành Bản Phủ',
          'Mua gạo Tám Điện Biên OCOP 5 sao tại cánh đồng Mường Thanh',
          'Săn mây đèo Tằng Quái và thưởng thức Cà phê Arabica thơm lừng tại Mường Ảng'
        ]
      }
    ]
  },
  {
    id: 'tour-2',
    title: 'Chinh Phục Cực Tây A Pa Chải & Biển Hồ Mường Lay (4 Ngày 3 Đêm)',
    duration: '4 Ngày 3 Đêm',
    districtsCovered: ['TP. Điện Biên Phủ', 'Mường Chà', 'Mường Nhé', 'TX. Mường Lay'],
    theme: 'Chinh phục Cực Tây Tổ quốc, Văn hóa Hà Nhì & Sông nước Sông Đà',
    highlights: ['Cột mốc số 0 A Pa Chải', 'Nhà trình tường Sín Thầu', 'Hang động Pa Ham', 'Nhà sàn đá phiến Mường Lay', 'Lòng hồ thủy điện Sơn La'],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'Điện Biên Phủ - Mường Chà - Mường Nhé',
        activities: [
          'Khởi hành theo QL12 chiêm ngưỡng thung lũng Mường Chà',
          'Thưởng thức Bánh dày nếp nương người Mông',
          'Đến Mường Nhé, ngắm hoàng hôn đỏ ối nơi miền biên viễn'
        ]
      },
      {
        day: 'Ngày 2',
        title: 'Chạm tay vào Cột mốc Cực Tây Tổ quốc A Pa Chải',
        activities: [
          'Vượt đỉnh Khoan La San chạm tay vào Cột mốc 0 số ba ngả Việt - Lào - Trung',
          'Trải nghiệm văn hóa tộc người Hà Nhì tại bản Tá Miếu và thưởng thức rượu men lá',
          'Khám phá kiến trúc nhà trình tường đất dày dặn độc đáo'
        ]
      },
      {
        day: 'Ngày 3',
        title: 'Mường Nhé về Thị xã Mường Lay sông nước',
        activities: [
          'Di chuyển về TX. Mường Lay ngắm ngã ba sông Đà, sông Nậm Na',
          'Thăm quần thể nhà sàn đá phiến đen bản Nậm Cản',
          'Thưởng thức cá lăng sông Đà, bánh khẩu xén truyền thống của người Thái Trắng'
        ]
      },
      {
        day: 'Ngày 4',
        title: 'Du thuyền sông Đà & Trở về',
        activities: [
          'Ngồi thuyền đuôi én lướt trên lòng hồ sông Đà trong xanh màu ngọc bích',
          'Mua đặc sản cá bống vùi tro, bánh chí chọp làm quà lưu niệm'
        ]
      }
    ]
  },
  {
    id: 'tour-3',
    title: 'Huyền Thoại Cao Nguyên Đá Tủa Chùa & Đèo Pha Đin (3 Ngày 2 Đêm)',
    duration: '3 Ngày 2 Đêm',
    districtsCovered: ['Tuần Giáo', 'Tủa Chùa', 'TP. Điện Biên Phủ'],
    theme: 'Cao nguyên đá Karst, Chè Shan Tuyết cổ thụ & Tứ đại đỉnh đèo',
    highlights: ['Đèo Pha Đin', 'Chè Shan Tuyết Sín Chải', 'Cao nguyên đá Tả Phìn', 'Chợ phiên Tả Sìn Thàng', 'Rượu Mông Pê'],
    itinerary: [
      {
        day: 'Ngày 1',
        title: 'Vượt Đèo Pha Đin huyền thoại vào Tuần Giáo',
        activities: [
          'Chinh phục đỉnh đèo Pha Đin cao 1.648m nơi gặp gỡ Đất Trời',
          'Thưởng thức táo mèo ngâm mật ong và xôi nếp tan Mường Thín',
          'Thăm quê hương Anh hùng liệt sĩ thiếu niên Vừ A Dính tại Pú Nhung'
        ]
      },
      {
        day: 'Ngày 2',
        title: 'Cao nguyên đá Tủa Chùa & Báu vật Chè Cổ Thụ',
        activities: [
          'Khám phá mê cung rừng đá tai mèo Tả Phìn kỳ vĩ',
          'Trèo hái búp chè Shan Tuyết cổ thụ 400 năm tuổi tại Sín Chải và uống chén bạch trà thơm mát',
          'Hòa mình vào chợ phiên Tả Sìn Thàng rực rỡ sắc màu thổ cẩm và nhấp chén rượu Mông Pê'
        ]
      },
      {
        day: 'Ngày 3',
        title: 'Ngắm sông Đà từ bến Huổi Só & Về TP. Điện Biên Phủ',
        activities: [
          'Ngắm nhìn hẻm vực sông Đà từ trên vách đá Tủa Thàng',
          'Trở về trung tâm Điện Biên Phủ kết thúc hành trình ấn tượng'
        ]
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Tỉnh Điện Biên hiện nay có bao nhiêu đơn vị hành chính cấp huyện sau các đợt sắp xếp, sáp nhập?',
    options: ['8 đơn vị', '9 đơn vị', '10 đơn vị (1 TP, 1 TX, 8 Huyện)', '12 đơn vị'],
    correctAnswer: 2,
    explanation: 'Điện Biên gồm 10 đơn vị hành chính cấp huyện: TP. Điện Biên Phủ, TX. Mường Lay và 8 huyện: Điện Biên, Điện Biên Đông, Mường Ảng, Mường Chà, Mường Nhé, Nậm Pồ, Tủa Chùa, Tuần Giáo.',
    districtRelation: 'dien-bien-phu'
  },
  {
    id: 2,
    question: 'Nghị quyết số 815/NQ-UBTVQH14 của Ủy ban Thường vụ Quốc hội đã có thay đổi quan trọng nào với TP. Điện Biên Phủ?',
    options: [
      'Đổi tên thành phố thành Thành phố Mường Thanh',
      'Mở rộng gấp hơn 4 lần diện tích tự nhiên bằng cách sáp nhập xã Tà Lèng, Thanh Minh và điều chỉnh địa giới từ huyện Điện Biên',
      'Tách thành phố làm 2 quận riêng biệt',
      'Chuyển trung tâm hành chính sang huyện Tuần Giáo'
    ],
    correctAnswer: 1,
    explanation: 'Nghị quyết 815 đã mở rộng TP. Điện Biên Phủ từ 64,27 km² lên 308,18 km², tiếp nhận xã Tà Lèng sáp nhập vào Thanh Minh và các xã Nà Nhạn, Nà Tấu, Mường Phăng, Pá Khoang từ huyện Điện Biên.',
    districtRelation: 'dien-bien-phu'
  },
  {
    id: 3,
    question: 'Cột mốc số 0 Cực Tây Tổ quốc "Một con gà gáy ba nước cùng nghe" nằm ở địa bàn xã và huyện nào của Điện Biên?',
    options: [
      'Xã Tả Phìn, Huyện Tủa Chùa',
      'Xã Sín Thầu, Huyện Mường Nhé',
      'Xã Chà Nưa, Huyện Nậm Pồ',
      'Xã Lay Nưa, TX. Mường Lay'
    ],
    correctAnswer: 1,
    explanation: 'Cột mốc Cực Tây A Pa Chải ngã ba biên giới Việt Nam - Lào - Trung Quốc tọa lạc trên đỉnh Khoan La San thuộc xã Sín Thầu, huyện Mường Nhé.',
    districtRelation: 'muong-nhe'
  },
  {
    id: 4,
    question: 'Cánh đồng nào được mệnh danh là vựa lúa lớn nhất vùng Tây Bắc ("Nhất Thanh, nhì Lò, tam Than, tứ Tấc")?',
    options: [
      'Cánh đồng Mường Lò (Yên Bái)',
      'Cánh đồng Mường Thanh (Điện Biên)',
      'Cánh đồng Mường Than (Lai Châu)',
      'Cánh đồng Mường Tấc (Sơn La)'
    ],
    correctAnswer: 1,
    explanation: 'Cánh đồng Mường Thanh trù phú nằm ở huyện Điện Biên và TP. Điện Biên Phủ, nơi sản sinh ra hạt gạo Tám Điện Biên dẻo ngọt trứ danh.',
    districtRelation: 'dien-bien'
  },
  {
    id: 5,
    question: 'Báu vật Chè Shan Tuyết cổ thụ hàng trăm năm tuổi ngậm sương mây nổi tiếng nhất ở huyện nào của Điện Biên?',
    options: [
      'Huyện Tủa Chùa (xã Sín Chải, Tả Sìn Thàng)',
      'Huyện Mường Ảng',
      'Huyện Điện Biên Đông',
      'TX. Mường Lay'
    ],
    correctAnswer: 0,
    explanation: 'Rừng chè Shan Tuyết cổ thụ trên cao nguyên đá Tủa Chùa có những cây đại thụ 300 - 500 năm tuổi, cho ra dòng bạch trà OCOP 4 sao vang danh.',
    districtRelation: 'tua-chua'
  },
  {
    id: 6,
    question: 'Huyện nào của tỉnh Điện Biên được mệnh danh là "Thủ phủ Cà phê Arabica" xuất khẩu sang châu Âu và Nhật Bản?',
    options: [
      'Huyện Mường Nhé',
      'Huyện Mường Ảng',
      'Huyện Tuần Giáo',
      'Huyện Nậm Pồ'
    ],
    correctAnswer: 1,
    explanation: 'Mường Ảng sở hữu thổ nhưỡng bazan và độ cao lý tưởng, là vùng chuyên canh Cà phê Arabica Mường Ảng nức tiếng xuất khẩu quốc tế.',
    districtRelation: 'muong-ang'
  },
  {
    id: 7,
    question: 'Thị xã Mường Lay nổi tiếng với nét kiến trúc nhà ở độc nhất vô nhị nào của đồng bào người Thái Trắng?',
    options: [
      'Nhà trình tường đất hình tròn',
      'Nhà sàn gỗ cổ truyền lợp ngói bằng đá phiến đen',
      'Nhà rông mái cao vút',
      'Nhà nổi bồng bềnh bằng tre nứa'
    ],
    correctAnswer: 1,
    explanation: 'TX. Mường Lay có hàng nghìn nếp nhà sàn truyền thống của người Thái Trắng được lợp đồng bộ bằng đá phiến đen bóng soi bóng xuống dòng sông Đà.',
    districtRelation: 'muong-lay'
  },
  {
    id: 8,
    question: 'Đèo nào ở cửa ngõ huyện Tuần Giáo được vinh danh là một trong "Tứ đại đỉnh đèo" hùng vĩ bậc nhất miền Bắc?',
    options: [
      'Đèo Ô Quy Hồ',
      'Đèo Mã Pí Lèng',
      'Đèo Khau Phạ',
      'Đèo Pha Đin'
    ],
    correctAnswer: 3,
    explanation: 'Đèo Pha Đin (tiếng Thái nghĩa là Phạ Đin - nơi giao hòa giữa Trời và Đất) dài 32km trên Quốc lộ 6 thuộc huyện Tuần Giáo.',
    districtRelation: 'tuan-giao'
  },
  {
    id: 9,
    question: 'Di tích kiến trúc nghệ thuật cổ kính Tháp Mường Luân xây dựng vào thế kỷ 16 nằm ở huyện nào?',
    options: [
      'Huyện Điện Biên Đông',
      'Huyện Mường Chà',
      'Huyện Nậm Pồ',
      'Huyện Tủa Chùa'
    ],
    correctAnswer: 0,
    explanation: 'Tháp Mường Luân cao 15,5m soi bóng bên dòng sông Mã thuộc xã Mường Luân, huyện Điện Biên Đông mang dấu ấn kiến trúc Phật giáo hòa hợp Việt - Lào.',
    districtRelation: 'dien-bien-dong'
  },
  {
    id: 10,
    question: 'Điện Biên là nơi chung sống của bao nhiêu dân tộc anh em?',
    options: ['12 dân tộc', '15 dân tộc', '19 dân tộc', '54 dân tộc'],
    correctAnswer: 2,
    explanation: 'Tỉnh Điện Biên có 19 dân tộc anh em cùng sinh sống đoàn kết (Thái, H\'Mông, Kinh, Dao, Khơ Mú, Hà Nhì, Lào, Hoa, Kháng, Mảng, Cống, Si La, La Hủ, Nùng, Tày, Phù Lá, Thổ, Cao Lan, Mường).',
    districtRelation: 'dien-bien-phu'
  }
];

export const DIEN_BIEN_DISTRICTS = DISTRICTS_DATA;
