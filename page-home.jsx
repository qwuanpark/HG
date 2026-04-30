// 홈 페이지 — 실제 사진 기반

// 다중 사진 보유 현장을 우선 흐름에 노출
const PROJECT_FLOW_TOP = [14, 23, 16, 24, 26, 27, 18, 25, 20, 13, 12];
const PROJECT_FLOW_BOT = [11, 19, 1, 22, 21, 28, 29, 17, 15, 9, 10, 5];

function Hero({ setPage }) {
  return (
    <section style={{position:"relative", background:"#f4f1ec", overflow:"hidden"}}>
      <div style={{maxWidth:1440, margin:"0 auto", padding:"100px 40px 80px", display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:80, alignItems:"end"}}>
        {/* Left: text */}
        <div>
          <Eyebrow>Haegang Super Sash · Est. 1991</Eyebrow>

          <h1 style={{
            fontFamily:"'Noto Serif KR', serif", fontWeight:500,
            fontSize:84, lineHeight:1.05, letterSpacing:"-0.025em",
            margin:"0 0 36px", color:"#1a2332", textWrap:"pretty"
          }}>
            시스템창호 한 길,<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontWeight:500, color:"#b8946a"}}>since</span> 1991.
          </h1>

          <p style={{fontSize:18, lineHeight:1.75, color:"rgba(26,35,50,0.78)", margin:"0 0 48px", maxWidth:520, textWrap:"pretty"}}>
            울산 자체 공장에서 직접 만드는 에너지 절약형 고기밀·고단열 PVC 시스템창호.
            첨단 기술로 설계·제작되는 <strong style={{fontWeight:600, color:"#1a2332"}}>해강 수퍼샤시</strong>는
            탁월한 단열성과 방음 효과를 자랑합니다.
          </p>

          {/* metric strip */}
          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, marginBottom:48, borderTop:"1px solid rgba(26,35,50,0.18)", borderBottom:"1px solid rgba(26,35,50,0.18)"}}>
            {[
              ["60%", "난방비 절감", "ENERGY"],
              ["37–40", "차음 dB", "ACOUSTIC"],
              ["80mm", "5격실 시스템", "STRUCTURE"],
            ].map(([v, ko, en], i) => (
              <div key={i} style={{padding:"22px 24px 22px 0", borderRight: i<2 ? "1px solid rgba(26,35,50,0.12)" : "none", paddingLeft: i>0 ? 24 : 0}}>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:36, fontWeight:500, lineHeight:1, color:"#1a2332", marginBottom:6}}>{v}</div>
                <div style={{fontSize:12, color:"rgba(26,35,50,0.7)", marginBottom:2}}>{ko}</div>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:9, letterSpacing:"0.18em", opacity:0.5}}>{en}</div>
              </div>
            ))}
          </div>

          <div style={{display:"flex", gap:16, alignItems:"center"}}>
            <button onClick={()=>setPage("quote")} style={{
              background:"#1a2332", color:"#f4f1ec", border:"none",
              padding:"18px 32px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontWeight:500, fontSize:15
            }}>견적 문의하기 →</button>
            <button onClick={()=>setPage("products")} style={{
              background:"none", color:"#1a2332", border:"1px solid #1a2332",
              padding:"18px 32px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontWeight:500, fontSize:15
            }}>제품 라인업 보기</button>
          </div>
        </div>

        {/* Right: hero photo + auxiliary thumbs */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 220px", gap:14, alignItems:"start"}}>
          <div style={{position:"relative", aspectRatio:"4/5"}}>
            <Photo src="assets/projects/06-haeundae-merville.jpg" alt="해강 시공 사례 — 해운대 중동 하나경동 메르빌" caption="006 · MERVILLE · HAEUNDAE" h="100%" pos="center top" />
            <div style={{
              position:"absolute", bottom:-1, right:-1, background:"#b8946a", color:"#1a2332",
              padding:"24px 28px", maxWidth:280
            }}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:9, letterSpacing:"0.2em", opacity:0.7, marginBottom:6}}>FEATURED PROJECT</div>
              <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600, lineHeight:1.3, marginBottom:4}}>해운대 중동<br/>하나경동 메르빌</div>
              <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:13, opacity:0.85}}>Residential · Haeundae, Busan</div>
            </div>
          </div>

          {/* Auxiliary stack — 3 thumb varieties */}
          <div style={{display:"flex", flexDirection:"column", gap:14}}>
            {[
              ["assets/projects/24-cheongdo-hanok.jpg", "024", "청도 옥산 한옥"],
              ["assets/projects/16-ulsan-cafe.jpg", "016", "울산 두왕동 카페"],
              ["assets/projects/02-shinsegae-boutique.jpg", "002", "신세계 부띠크시티"],
            ].map(([src, n, t]) => (
              <button key={n} onClick={()=>setPage("projects")} style={{
                position:"relative", aspectRatio:"3/4", padding:0, border:"none", background:"none",
                cursor:"pointer", overflow:"hidden", fontFamily:"inherit", textAlign:"left"
              }}>
                <Photo src={src} alt={t} caption={`${n} · ${t}`} h="100%" border={true}/>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 자동 흐름 갤러리 — 실제 시공 사진 사용
function FlowGallery() {
  const itemsTop = useMemo(()=> {
    const all = PROJECT_FLOW_TOP.map(id => PROJECTS.find(p=>p.id===id)).filter(Boolean);
    return [...all, ...all, ...all];
  }, []);
  const itemsBot = useMemo(()=> {
    const all = PROJECT_FLOW_BOT.map(id => PROJECTS.find(p=>p.id===id)).filter(Boolean);
    return [...all, ...all, ...all];
  }, []);

  const renderRow = (items, dir, dur) => (
    <div className="hg-marquee-row" style={{overflow:"hidden", marginBottom:14}}>
      <div style={{
        display:"flex", gap:14, width:"max-content",
        animation:`${dir==="left"?"hg-scroll-left":"hg-scroll-right"} ${dur}s linear infinite`
      }}>
        {items.map((p, i) => (
          <div key={`${p.id}-${i}`} style={{flex:"0 0 auto", width:340, height:230, position:"relative"}}>
            <Photo src={p.img} alt={p.title} caption={`${String(p.id).padStart(3,"0")} · ${p.cat}`} />
            <div style={{
              position:"absolute", top:8, right:8,
              fontFamily:"'Noto Serif KR', serif", fontSize:12, fontWeight:500, color:"#f4f1ec",
              background:"rgba(20,30,45,0.75)", padding:"5px 10px", backdropFilter:"blur(4px)"
            }}>{p.title}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section style={{background:"#1a2332", padding:"100px 0 100px", color:"#f4f1ec", overflow:"hidden"}}>
      <div style={{maxWidth:1440, margin:"0 auto", padding:"0 40px", marginBottom:54}}>
        <SectionLabel idx="03" label="Selected Projects · 1991—2024" color="#f4f1ec" />
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"end"}}>
          <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:60, fontWeight:500, lineHeight:1.1, margin:0, letterSpacing:"-0.02em"}}>
            아파트 단지부터<br/>해외 단독주택까지,<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>quiet rigor</span> in every frame.
          </h2>
          <p style={{fontSize:15, lineHeight:1.85, opacity:0.75, margin:0, maxWidth:480}}>
            대림 e편한세상, 신세계 부띠크시티, 부산 코모도 호텔, 대명 콘도부터
            일본·중국 단독주택까지 — 30년간 다양한 스케일의 현장에서
            해강의 시스템창호가 사용되었습니다.
          </p>
        </div>
      </div>

      {renderRow(itemsTop, "left", 80)}
      {renderRow(itemsBot, "right", 92)}

      <div style={{maxWidth:1440, margin:"0 auto", padding:"54px 40px 0", textAlign:"center"}}>
        <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", opacity:0.55, textTransform:"uppercase"}}>
          31 documented projects · 4 categories · across Korea, Japan, China
        </div>
      </div>
    </section>
  );
}

// 핵심 정량 stat 블록 — 4개 큰 숫자
function StrengthStats() {
  const stats = [
    { v: "60%", u: "Energy Saved", t: "난방비 절감", d: "다격실 PVC + EPDM Gasket 이중 차단 + 복층유리 구조로 일반 이중창 대비 60% 절감" },
    { v: "37–40", u: "dB Sound Insulation", t: "차음 성능", d: "일반 창호의 차음도 10~15dB 대비 압도적. 생활·교통 소음 완전 차단" },
    { v: "5", u: "Chamber Profile", t: "5격실 프로파일", d: "초고층 적용 가능한 80mm 5격실 시스템. 단열·구조 강성 동시 확보" },
    { v: "30+", u: "Years of Craft", t: "한 길의 경험", d: "1991년 창업 이래 시스템창호 한 분야만 — 단일 카테고리 전문화" }
  ];

  return (
    <section style={{background:"#f4f1ec", padding:"140px 40px 80px"}}>
      <div style={{maxWidth:1440, margin:"0 auto"}}>
        <SectionLabel idx="04" label="Why Haegang · 정량 성능" />

        <div style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:80, alignItems:"start", marginBottom:80}}>
          <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:60, fontWeight:500, lineHeight:1.05, margin:0, letterSpacing:"-0.025em"}}>
            창호의 가치는<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>숫자로</span><br/>
            증명됩니다.
          </h2>
          <p style={{fontSize:16, lineHeight:1.85, color:"rgba(26,35,50,0.78)", margin:"12px 0 0", maxWidth:560}}>
            과학적 다격실 PVC 프로파일과 EPDM Gasket의 이중 차단 구조, 정밀한
            하드웨어가 맞물려 단열·차음·기밀·내풍압의 정량 성능을 만들어냅니다.
          </p>
        </div>

        {/* 4 big stat blocks */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:0, border:"1px solid #1a2332"}}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding:"54px 48px",
              borderRight: i%2===0 ? "1px solid #1a2332" : "none",
              borderBottom: i<2 ? "1px solid #1a2332" : "none",
              background: i===0 ? "#1a2332" : (i===3 ? "#b8946a" : "#fff"),
              color: i===0 ? "#f4f1ec" : "#1a2332",
              display:"flex", flexDirection:"column", justifyContent:"space-between",
              minHeight: 320
            }}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", opacity:0.6, textTransform:"uppercase"}}>
                0{i+1} · {s.u}
              </div>

              <div style={{display:"flex", alignItems:"baseline", gap:14, marginTop:24, marginBottom:24}}>
                <span style={{fontFamily:"'Noto Serif KR', serif", fontSize:140, fontWeight:500, lineHeight:0.85, letterSpacing:"-0.045em"}}>
                  {s.v}
                </span>
              </div>

              <div>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:24, fontWeight:600, marginBottom:10, letterSpacing:"-0.01em"}}>{s.t}</div>
                <div style={{fontSize:14, lineHeight:1.7, opacity:0.82, maxWidth:440, textWrap:"pretty"}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8가지 강점 (보조)
function Strengths() {
  return (
    <section style={{background:"#f4f1ec", padding:"40px 40px 140px"}}>
      <div style={{maxWidth:1440, margin:"0 auto"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:32, gap:40}}>
          <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", opacity:0.55, textTransform:"uppercase"}}>
            8 Technical Reasons · 8가지 기술 강점
          </div>
          <div style={{flex:1, height:1, background:"rgba(26,35,50,0.18)"}} />
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", border:"1px solid #1a2332"}}>
          {STRENGTHS.map((s, i) => (
            <div key={s.n} style={{
              background: "#fff",
              borderRight: i%4!==3 ? "1px solid #1a2332" : "none",
              borderBottom: i<4 ? "1px solid #1a2332" : "none",
              padding:"34px 28px", display:"flex", flexDirection:"column", gap:12, minHeight: 240
            }}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
                <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55}}>{s.n}</span>
                <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:12, opacity:0.65, fontWeight:400}}>{s.u}</span>
              </div>
              <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:21, fontWeight:600, lineHeight:1.3, color:"#1a2332"}}>{s.t}</div>
              <div style={{fontSize:15, lineHeight:1.7, color:"rgba(26,35,50,0.78)", marginTop:"auto", textWrap:"pretty"}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 제품 라인업 — 5개 카드 with chamber spec
function ProductLineup({ setPage }) {
  // 제품별 chamber 요약 (data.jsx의 specs에서 추출)
  const chamberFor = (p) => {
    const profiles = p.specs.map(s => s.profile);
    return [...new Set(profiles)];
  };

  return (
    <section style={{background:"#f4f1ec", padding:"140px 40px"}}>
      <div style={{maxWidth:1440, margin:"0 auto"}}>
        <SectionLabel idx="05" label="Product Lineup · 5 Series" />
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"end", marginBottom:80}}>
          <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:60, fontWeight:500, lineHeight:1.05, margin:0, letterSpacing:"-0.025em"}}>
            윗열기·미닫이·복합형·<br/>도어·라운드 —<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>5 Series, One System.</span>
          </h2>
          <p style={{fontSize:16, lineHeight:1.85, color:"rgba(26,35,50,0.78)", margin:0}}>
            모든 라인은 동일한 다격실 PVC 프로파일과 EPDM Gasket 구조를
            공유합니다. 일반·저층 적용은 <strong>3격실 58mm</strong>, 초고층 적용은
            <strong> 5격실 80mm</strong> 시스템으로 사양이 분기됩니다.
          </p>
        </div>

        {/* Featured first card — large */}
        <div style={{display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:14, marginBottom:14}}>
          <button onClick={()=>setPage("products")} style={{
            background:"#1a2332", color:"#f4f1ec", border:"none", padding:0,
            display:"grid", gridTemplateColumns:"1fr 1fr", textAlign:"left", cursor:"pointer",
            fontFamily:"inherit", overflow:"hidden", minHeight:480
          }}>
            <div style={{padding:"48px 44px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
              <div>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", color:"#b8946a", marginBottom:18}}>
                  SERIES 01 · {PRODUCTS[0].code}
                </div>
                <h3 style={{fontFamily:"'Noto Serif KR', serif", fontSize:42, fontWeight:500, lineHeight:1.1, margin:"0 0 12px", letterSpacing:"-0.02em"}}>
                  {PRODUCTS[0].nameKo}
                </h3>
                <div style={{fontFamily:"'Newsreader', serif", fontSize:18, fontStyle:"italic", opacity:0.7, marginBottom:28}}>
                  {PRODUCTS[0].name}
                </div>
                <p style={{fontSize:14, lineHeight:1.75, opacity:0.82, margin:0, maxWidth:380, textWrap:"pretty"}}>
                  {PRODUCTS[0].desc}
                </p>
              </div>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, marginTop:36, paddingTop:24, borderTop:"1px solid rgba(244,241,236,0.18)"}}>
                {PRODUCTS[0].specs.map((s, i) => (
                  <div key={i} style={{paddingRight:i===0?16:0, paddingLeft:i===1?16:0, borderRight:i===0?"1px solid rgba(244,241,236,0.18)":"none"}}>
                    <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:9, letterSpacing:"0.18em", opacity:0.55, marginBottom:6}}>{s.type.split("·")[0].trim()}</div>
                    <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:22, fontWeight:600, color:"#b8946a"}}>{s.profile}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:"relative"}}>
              <Photo src={PRODUCTS[0].caseImg} alt={PRODUCTS[0].name} caption="T/T · INSTALLATION" border={false} h="100%" />
            </div>
          </button>

          <button onClick={()=>setPage("products")} style={{
            background:"#fff", color:"#1a2332", border:"1px solid rgba(26,35,50,0.18)", padding:0,
            display:"flex", flexDirection:"column", textAlign:"left", cursor:"pointer",
            fontFamily:"inherit", overflow:"hidden"
          }}>
            <div style={{aspectRatio:"4/3"}}>
              <Photo src={PRODUCTS[1].caseImg} alt={PRODUCTS[1].name} caption="T/S · INSTALLATION" border={false} />
            </div>
            <div style={{padding:"30px 30px 36px", display:"flex", flexDirection:"column", flex:1}}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", color:"#b8946a", marginBottom:14}}>
                SERIES 02 · {PRODUCTS[1].code}
              </div>
              <h3 style={{fontFamily:"'Noto Serif KR', serif", fontSize:26, fontWeight:600, lineHeight:1.2, margin:"0 0 6px", letterSpacing:"-0.01em"}}>
                {PRODUCTS[1].nameKo}
              </h3>
              <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:14, opacity:0.65, marginBottom:18}}>{PRODUCTS[1].name}</div>
              <div style={{display:"flex", gap:16, flexWrap:"wrap", marginTop:"auto", paddingTop:18, borderTop:"1px solid rgba(26,35,50,0.15)"}}>
                {chamberFor(PRODUCTS[1]).map(c => (
                  <div key={c} style={{
                    fontFamily:"'Noto Serif KR', serif", fontSize:15, fontWeight:600, color:"#b8946a",
                    padding:"6px 12px", border:"1px solid #b8946a"
                  }}>{c}</div>
                ))}
              </div>
            </div>
          </button>
        </div>

        {/* 3 smaller cards */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14}}>
          {PRODUCTS.slice(2).map((p, i) => (
            <button key={p.code} onClick={()=>setPage("products")} style={{
              background:"#fff", color:"#1a2332", border:"1px solid rgba(26,35,50,0.18)", padding:0,
              display:"flex", flexDirection:"column", textAlign:"left", cursor:"pointer",
              fontFamily:"inherit", overflow:"hidden"
            }}>
              <div style={{aspectRatio:"4/3"}}>
                <Photo src={p.caseImg} alt={p.name} caption={`${p.code} · INSTALLATION`} border={false} />
              </div>
              <div style={{padding:"26px 26px 30px", display:"flex", flexDirection:"column", flex:1}}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", color:"#b8946a", marginBottom:14}}>
                  SERIES 0{i+3} · {p.code}
                </div>
                <h3 style={{fontFamily:"'Noto Serif KR', serif", fontSize:22, fontWeight:600, lineHeight:1.25, margin:"0 0 6px", letterSpacing:"-0.01em"}}>
                  {p.nameKo}
                </h3>
                <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:13, opacity:0.65, marginBottom:18}}>{p.name}</div>
                <div style={{display:"flex", gap:8, flexWrap:"wrap", marginTop:"auto", paddingTop:18, borderTop:"1px solid rgba(26,35,50,0.15)"}}>
                  {chamberFor(p).map(c => (
                    <div key={c} style={{
                      fontFamily:"'Noto Serif KR', serif", fontSize:13, fontWeight:600, color:"#b8946a",
                      padding:"5px 10px", border:"1px solid #b8946a"
                    }}>{c}</div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div style={{textAlign:"center", marginTop:60}}>
          <button onClick={()=>setPage("products")} style={{
            background:"#1a2332", color:"#f4f1ec", border:"none",
            padding:"18px 36px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontSize:15
          }}>전체 라인업 상세 보기 →</button>
        </div>
      </div>
    </section>
  );
}

// CTA
function HomeCTA({ setPage }) {
  return (
    <section style={{background:"#b8946a", padding:"100px 40px"}}>
      <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:80, alignItems:"center"}}>
        <div>
          <Eyebrow>Get a Quote · 견적 문의</Eyebrow>
          <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:54, fontWeight:500, lineHeight:1.1, margin:"0 0 24px", letterSpacing:"-0.02em", color:"#1a2332"}}>
            현장에 가장 적합한<br/>창호 사양을 제안드립니다.
          </h2>
          <p style={{fontSize:16, lineHeight:1.8, color:"rgba(26,35,50,0.85)", margin:"0 0 36px", maxWidth:520}}>
            평형, 창 개수, 제품 라인을 입력하시면 현장에 맞는 견적과 시공 일정을
            검토해드립니다. 신축·리모델링·교체 모두 상담 가능합니다.
          </p>
          <button onClick={()=>setPage("quote")} style={{
            background:"#1a2332", color:"#f4f1ec", border:"none",
            padding:"20px 36px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontWeight:500, fontSize:16
          }}>온라인 견적 시작 →</button>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:1, background:"#1a2332", padding:1}}>
          {[
            ["본사·공장", "052-263-8005", "울산 울주 삼남"],
            ["부산사무소", "051-501-9006", "금정구 청룡동"],
            ["전국 대표", "1833-5788", "Mon–Fri 09:00–18:00"],
            ["E-mail", "haegang8005@naver.com", "24h Inquiry"]
          ].map(([k, v, sub]) => (
            <div key={k} style={{background:"#b8946a", padding:"22px 26px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:20}}>
              <div>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, textTransform:"uppercase", marginBottom:4}}>{k}</div>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:20, fontWeight:600, color:"#1a2332"}}>{v}</div>
              </div>
              <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:13, color:"rgba(26,35,50,0.7)", textAlign:"right"}}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ setPage }) {
  return (
    <main>
      <Hero setPage={setPage} />
      <FlowGallery />
      <StrengthStats />
      <Strengths />
      <ProductLineup setPage={setPage} />
      <HomeCTA setPage={setPage} />
    </main>
  );
}

Object.assign(window, { Home });
