// 해강시스템창호 — 실제 자료 기반 데이터

const COMPANY = {
  name: "(주)해강시스템창호",
  brand: "해강 수퍼샤시",
  brandEn: "HAEGANG SUPER SASH",
  ceo: "박근배",
  bizNo: "610-81-49677",
  founded: "1991.08.01",
  incorporated: "2001.04.20",
  hq: {
    addr: "울산광역시 울주군 삼남면 공암길 8",
    tel: "052-263-8005",
    fax: "052-262-8009",
    email: "haegang8005@naver.com"
  },
  busan: {
    addr: "부산시 금정구 중앙대로 2131 (청룡동)",
    tel: "051-501-9006",
    tel2: "1833-5788",
    fax: "051-501-9007"
  }
};

// 5개 제품 라인 — 실제 사양 + 전체 도면·사진
const PRODUCTS = [
  {
    code: "T/T",
    slug: "turn-tilt",
    name: "Turn and Tilt Window",
    nameKo: "윗열기 및 여닫이창",
    img: "assets/products/turn-tilt.jpg",
    cases: [
      "assets/products/turn-tilt-case.jpg",
      "assets/products/turn-tilt-case-2.jpg",
      "assets/products/turn-tilt-case-3.jpg"
    ],
    iso: "assets/products/turn-tilt-iso.jpg",
    sections: [
      "assets/products/turn-tilt-section.jpg",
      "assets/products/turn-tilt-section-2.jpg",
      "assets/products/turn-tilt-section-3.jpg"
    ],
    desc: "윗열기 상태에서 창호 윗부분이 약 15cm 안쪽으로 열려 자연 환기가 이루어지며, 특수 기어로 사방 잠금 장치가 작동되어 침입과 도난을 방지합니다.",
    use: "주거 / 거실 / 침실 / 사무실",
    specs: [
      { type: "일반주택·저층 아파트용", profile: "3격실 58mm", glass: "21~27mm 복층·3중유리" },
      { type: "초고층용", profile: "5격실 80mm", glass: "22~29mm 또는 39~46mm" }
    ]
  },
  {
    code: "T/S",
    slug: "tilt-slide",
    name: "Tilt and Slide Window",
    nameKo: "윗열기 및 미닫이창",
    img: "assets/products/tilt-slide.jpg",
    cases: [
      "assets/products/tilt-slide-case.jpg",
      "assets/products/tilt-slide-case-2.jpg"
    ],
    iso: "assets/products/tilt-slide-iso.jpg",
    sections: [
      "assets/products/tilt-slide-section.jpg",
      "assets/products/tilt-slide-section-2.jpg",
      "assets/products/tilt-slide-section-3.jpg"
    ],
    desc: "환기 기능과 함께 Sash가 안쪽으로 빠져나와 Rail을 따라 미끄러지듯 열려 실내공간 효율을 극대화. 대형 창문도 핸들 하나로 부드럽게 개폐됩니다.",
    use: "테라스 / 발코니 / 대형 개구부",
    specs: [
      { type: "일반주택·저층 아파트용", profile: "3격실 58mm", glass: "22~27mm" },
      { type: "초고층용", profile: "5격실 80mm", glass: "22~29mm 또는 39~46mm" }
    ]
  },
  {
    code: "COMBO",
    slug: "combo",
    name: "Turn-Tilt + Tilt-Slide",
    nameKo: "복합형 시스템창호",
    img: "assets/products/combo-hero.jpg",
    cases: [
      "assets/products/combo-case-1.jpg",
      "assets/products/combo-case-2.jpg"
    ],
    iso: "assets/products/combo-iso.jpg",
    sections: [
      "assets/products/combo-section-1.jpg",
      "assets/products/combo-section-2.jpg",
      "assets/products/combo-section-3.jpg"
    ],
    desc: "Turn & Tilt와 Tilt & Slide 두 방식의 장점을 모두 적용한 복합형. 한 입면에서 다양한 개폐 방식을 자유롭게 구성할 수 있습니다.",
    use: "복합 입면 / 디자인 주택",
    specs: [
      { type: "일반·저층 아파트용", profile: "3격실 58mm", glass: "22~27mm" },
      { type: "초고층용", profile: "5격실 80mm", glass: "22~29mm 또는 39~46mm" }
    ]
  },
  {
    code: "ED",
    slug: "entrance-door",
    name: "Entrance Door",
    nameKo: "출입문 시스템 도어",
    img: "assets/products/entrance-door.jpg",
    cases: [
      "assets/products/entrance-door-case.jpg",
      "assets/products/entrance-door-case-2.jpg"
    ],
    iso: "assets/products/entrance-door-iso.jpg",
    sections: [
      "assets/products/entrance-door-section.jpg",
      "assets/products/entrance-door-section-2.jpg",
      "assets/products/entrance-door-section-3.jpg"
    ],
    desc: "실내·외를 연결하는 시스템 도어. 기어장치로 개폐가 용이하고 견고하게 제작되며, 다중 잠금장치로 방범을 강화했습니다.",
    use: "주택 출입문 / 베란다 / 사무실 / 병원",
    specs: [
      { type: "표준형", profile: "5격실 80mm", glass: "22~29mm" }
    ]
  },
  {
    code: "RW",
    slug: "round-window",
    name: "Round Window",
    nameKo: "라운드 창",
    img: "assets/products/round.jpg",
    cases: [
      "assets/products/round-case.jpg",
      "assets/products/round-case-2.jpg"
    ],
    iso: null,
    sections: [
      "assets/products/round-section.jpg",
      "assets/products/round-section-2.jpg",
      "assets/products/round-section-3.jpg"
    ],
    desc: "뛰어난 단열·방음 효과에 부드러운 곡선 디자인으로 인테리어 효과와 품격을 높이는 시스템 창호.",
    use: "포인트 창 / 인테리어 / 디자인 입면",
    specs: [
      { type: "곡면형", profile: "3격실 58mm", glass: "21~27mm" }
    ]
  }
];

// 시공사례 — imgs 배열 (현장별 복수 사진)
const PROJECTS = [
  // 단지·아파트
  { id: 1, title: "이문동 대림 e편한세상", cat: "단지", region: "서울 동대문", imgs: ["assets/projects/01-imundong-daerim.jpg"] },
  { id: 2, title: "신도림 대림아파트", cat: "단지", region: "서울 구로", imgs: ["assets/projects/07-sindorim-daerim.jpg"] },
  { id: 3, title: "안산 대림아파트", cat: "단지", region: "경기 안산", imgs: ["assets/projects/08-ansan-daerim.jpg"] },
  { id: 4, title: "군포 삼정 주상복합", cat: "단지", region: "경기 군포", imgs: ["assets/projects/09-gunpo-samjung.jpg"] },
  { id: 5, title: "잠원동 이수아파트", cat: "단지", region: "서울 서초", imgs: ["assets/projects/10-jamwondong-isu.jpg"] },
  { id: 6, title: "의정부 삼성아파트", cat: "단지", region: "경기 의정부", imgs: ["assets/projects/11-uijeongbu-samsung.jpg"] },
  { id: 7, title: "부산 안락동 경동라인", cat: "단지", region: "부산 동래", imgs: ["assets/projects/12-busan-anrak.jpg"] },
  { id: 8, title: "경동 우신 알프스타운", cat: "단지", region: "부산", imgs: ["assets/projects/13-kyungdong-alps.jpg"] },
  { id: 9, title: "연산동 경동 메르빌", cat: "단지", region: "부산 연제", imgs: ["assets/projects/05-yeonsandong-merville.jpg"] },
  { id: 10, title: "해운대 중동 하나경동 메르빌", cat: "단지", region: "부산 해운대", imgs: ["assets/projects/06-haeundae-merville.jpg"] },
  // 호스피탈리티·상업
  { id: 11, title: "동대구역 신세계 부띠크시티", cat: "상업", region: "대구 동구", imgs: ["assets/projects/02-shinsegae-boutique.jpg"] },
  { id: 12, title: "부산 코모도 호텔", cat: "상업", region: "부산 중구", imgs: ["assets/projects/03-busan-commodore.jpg"] },
  { id: 13, title: "영천 주노호텔", cat: "상업", region: "경북 영천", imgs: [
    "assets/projects/14-yeongcheon-juno.jpg",
    "assets/projects/14-yeongcheon-juno-2.jpg",
    "assets/projects/14-yeongcheon-juno-3.jpg",
    "assets/projects/14-yeongcheon-juno-4.jpg",
    "assets/projects/14-yeongcheon-juno-5.jpg",
    "assets/projects/14-yeongcheon-juno-6.jpg"
  ] },
  { id: 14, title: "대명 콘도", cat: "상업", region: "강원·전국", imgs: ["assets/projects/04-daemyung-condo.jpg"] },
  { id: 15, title: "태안 가로림 펜션", cat: "상업", region: "충남 태안", imgs: ["assets/projects/15-taean-pension.jpg"] },
  { id: 16, title: "울산 두왕동 카페", cat: "상업", region: "울산 남구", imgs: [
    "assets/projects/16-ulsan-cafe.jpg",
    "assets/projects/16-ulsan-cafe-2.jpg",
    "assets/projects/16-ulsan-cafe-3.jpg",
    "assets/projects/16-ulsan-cafe-4.jpg",
    "assets/projects/16-ulsan-cafe-5.jpg",
    "assets/projects/16-ulsan-cafe-6.jpg"
  ] },
  { id: 17, title: "부산 서면 목원빌딩", cat: "상업", region: "부산 부산진", imgs: ["assets/projects/17-busan-mokwon.jpg"] },
  { id: 18, title: "명례 공장 사무동", cat: "상업", region: "경남 밀양", imgs: [
    "assets/projects/18-myeongrye-factory.jpg",
    "assets/projects/18-myeongrye-factory-2.jpg",
    "assets/projects/18-myeongrye-factory-3.jpg",
    "assets/projects/18-myeongrye-factory-4.jpg",
    "assets/projects/18-myeongrye-factory-5.jpg",
    "assets/projects/18-myeongrye-factory-6.jpg"
  ] },
  // 주택
  { id: 19, title: "언양 주택", cat: "주택", region: "울산 울주", imgs: ["assets/projects/19-eonyang-house.jpg"] },
  { id: 20, title: "일산 주택", cat: "주택", region: "경기 고양", imgs: [
    "assets/projects/20-ilsan-house.jpg",
    "assets/projects/20-ilsan-house-2.jpg",
    "assets/projects/20-ilsan-house-3.jpg"
  ] },
  { id: 21, title: "여주 주택", cat: "주택", region: "경기 여주", imgs: ["assets/projects/21-yeoju-house.jpg"] },
  { id: 22, title: "포천 주택", cat: "주택", region: "경기 포천", imgs: ["assets/projects/22-pocheon-house.jpg"] },
  { id: 23, title: "삼남면 방기리 주택", cat: "주택", region: "울산 울주", imgs: [
    "assets/projects/23-samnam-banggi.jpg",
    "assets/projects/23-samnam-banggi-2.jpg",
    "assets/projects/23-samnam-banggi-3.jpg",
    "assets/projects/23-samnam-banggi-4.jpg",
    "assets/projects/23-samnam-banggi-5.jpg",
    "assets/projects/23-samnam-banggi-6.jpg"
  ] },
  { id: 24, title: "청도 옥산 한옥", cat: "주택", region: "경북 청도", imgs: [
    "assets/projects/24-cheongdo-hanok.jpg",
    "assets/projects/24-cheongdo-hanok-2.jpg",
    "assets/projects/24-cheongdo-hanok-3.jpg",
    "assets/projects/24-cheongdo-hanok-4.jpg",
    "assets/projects/24-cheongdo-hanok-5.jpg",
    "assets/projects/24-cheongdo-hanok-6.jpg"
  ] },
  { id: 25, title: "군위 전원주택", cat: "주택", region: "경북 군위", imgs: [
    "assets/projects/25-gunwi-house.jpg",
    "assets/projects/25-gunwi-house-2.jpg",
    "assets/projects/25-gunwi-house-3.jpg"
  ] },
  { id: 26, title: "남해 주택 1", cat: "주택", region: "경남 남해", imgs: [
    "assets/projects/26-namhae-house1.jpg",
    "assets/projects/26-namhae-house1-2.jpg",
    "assets/projects/26-namhae-house1-3.jpg",
    "assets/projects/26-namhae-house1-4.jpg",
    "assets/projects/26-namhae-house1-5.jpg",
    "assets/projects/26-namhae-house1-6.jpg"
  ] },
  { id: 27, title: "남해 주택 2", cat: "주택", region: "경남 남해", imgs: [
    "assets/projects/27-namhae-house2.jpg",
    "assets/projects/27-namhae-house2-2.jpg",
    "assets/projects/27-namhae-house2-3.jpg",
    "assets/projects/27-namhae-house2-4.jpg",
    "assets/projects/27-namhae-house2-5.jpg",
    "assets/projects/27-namhae-house2-6.jpg"
  ] },
  // 해외
  { id: 28, title: "일본 Oono House", cat: "해외", region: "Japan", imgs: ["assets/projects/28-japan-oono.jpg"] },
  { id: 29, title: "북경 신성 그린빌라", cat: "해외", region: "Beijing, China", imgs: ["assets/projects/29-beijing-greenvilla.jpg"] }
];

// 백워드 호환 (기존 코드의 p.img / p.caseImg / p.sectionImg 사용)
PROJECTS.forEach(p => { p.img = p.imgs[0]; });
PRODUCTS.forEach(p => { p.caseImg = p.cases[0]; p.sectionImg = p.sections[0]; });

// 실제 연혁 — 검증된 항목만
const TIMELINE = [
  { year: "1991.08", event: "해강휀스타 개인사업자 등록 — 시스템창호 한 길의 시작" },
  { year: "2001.04", event: "(주)해강시스템창호 법인등기 · 울산 울주군 삼남면 공장 가동" },
  { year: "2003", event: "제2공장 증설 승인 · 건축허가" },
  { year: "2014.12", event: "ISO 9001:2008 / KS Q ISO 9001:2009 품질경영시스템 인증" },
  { year: "2015.02", event: "KS 제품인증 취득" }
];

// 8가지 핵심 강점
const STRENGTHS = [
  { n: "01", t: "단열·보온 효과", v: "60%", u: "난방비 절감", d: "다격실 PVC 프로파일과 EPDM Gasket의 이중 차단 구조에 복층유리를 더해, 일반 이중창 대비 60%의 난방비를 절감합니다." },
  { n: "02", t: "완벽한 소음차단", v: "37~40", u: "dB", d: "일반 창호의 차음도 10~15dB 대비 약 3배 수준. 생활 소음과 교통 소음을 효과적으로 차단합니다." },
  { n: "03", t: "기밀 특성", v: "1등급", u: "Air-tight", d: "정밀 설계된 하드웨어와 EPDM 가스켓이 외부 공기 침투를 차단하여 결로 발생을 최소화합니다." },
  { n: "04", t: "수밀 특성", v: "자동", u: "Drainage", d: "폭우 시에도 물 침입이 없으며, 창틀에 고인 빗물은 프레임 하단부 배수로를 따라 자동 배출됩니다." },
  { n: "05", t: "내풍압성", v: "특수", u: "Coupling", d: "중간바와 프레임 연결부에 Mechanical Coupling을 적용하여 강풍 환경에서도 안정적인 구조를 유지합니다." },
  { n: "06", t: "뛰어난 내구성", v: "반영구", u: "Lifetime", d: "PVC와 아연도금 강철 보강재의 결합으로 휨이나 부식이 없으며, 일반 창문 대비 뛰어난 강도를 가집니다." },
  { n: "07", t: "편리한 작동", v: "1핸들", u: "Operation", d: "환기·열기·잠금이 단일 핸들로 작동. 한 번의 회전으로 다중 잠금장치가 동시에 작동합니다." },
  { n: "08", t: "안전한 환기", v: "방범", u: "Ventilation", d: "윗열기 환기 상태에서는 외부 침입이 불가능하여, 도난·침입 걱정 없이 환기할 수 있습니다." }
];

Object.assign(window, { COMPANY, PRODUCTS, PROJECTS, TIMELINE, STRENGTHS });
