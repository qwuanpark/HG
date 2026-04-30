// 회사소개, 제품, 시공사례, 견적문의

// ============================================
// ABOUT — 회사소개
// ============================================
function About({ setPage }) {
  return (
    <main style={{background:"#f4f1ec"}}>
      {/* Hero */}
      <section style={{padding:"100px 40px 0"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <Eyebrow>About · 회사소개</Eyebrow>
          <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:80, alignItems:"end", marginBottom:60}}>
            <h1 style={{fontFamily:"'Noto Serif KR', serif", fontSize:84, fontWeight:500, lineHeight:1.05, margin:0, letterSpacing:"-0.025em"}}>
              30년 이상,<br/>
              시스템창호 한 길.<br/>
              <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>One craft. One factory.</span>
            </h1>
            <p style={{fontSize:17, lineHeight:1.85, color:"rgba(26,35,50,0.78)", margin:0}}>
              해강시스템창호는 1991년 창업 이래 시스템창호 한 분야만을 고집해온
              에너지 절약형 고기밀 시스템창호 전문 업체입니다. 첨단 기술로 설계·제작되는
              <strong style={{fontWeight:600}}> 해강 수퍼샤시</strong>는 탁월한 단열성과 방음 효과,
              세련된 디자인과 다양한 컬러로 모든 형태의 창호를 제공합니다.
            </p>
          </div>
        </div>

        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr", gap:14, padding:"0 40px"}}>
          <div style={{aspectRatio:"3/2"}}>
            <Photo src="assets/about-intro.jpg" alt="해강시스템창호 본사·공장" caption="HAEGANG · ULSAN HQ + FACTORY" fit="contain" style={{background:"#e8e3da"}} />
          </div>
          <div style={{aspectRatio:"3/2"}}>
            <Photo src="assets/about-1.jpg" alt="공장 외관" caption="MANUFACTURING" fit="contain" style={{background:"#e8e3da"}} />
          </div>
          <div style={{aspectRatio:"3/2"}}>
            <Photo src="assets/about-2.jpg" alt="압출 라인" caption="EXTRUSION LINE" fit="contain" style={{background:"#e8e3da"}} />
          </div>
        </div>
      </section>

      {/* 인사말 */}
      <section style={{padding:"140px 40px"}}>
        <div style={{maxWidth:1100, margin:"0 auto"}}>
          <SectionLabel idx="01" label="Greeting · 인사말" />
          <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:32, fontWeight:500, lineHeight:1.55, letterSpacing:"-0.015em", color:"#1a2332", textWrap:"pretty", marginBottom:48}}>
            "해강시스템창호는 30년 이상을 시스템창호만 고집해온 에너지 절약형
            고기밀 시스템창호 전문 업체입니다. 최고의 품질과 서비스로 고객을 위해
            부단히 노력하고 있으며, 세련된 디자인과 다양한 컬러로 소비자가
            요구하는 <em style={{fontFamily:"'Newsreader', serif", color:"#b8946a"}}>모든 형태의 창호</em>를 제공하고 있습니다."
          </div>
          <div style={{display:"flex", gap:14, alignItems:"baseline", paddingTop:24, borderTop:"1px solid rgba(26,35,50,0.18)"}}>
            <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:22, fontWeight:600, color:"#1a2332"}}>박근배</div>
            <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.18em", opacity:0.55, textTransform:"uppercase"}}>대표이사 · CEO</div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{background:"#1a2332", color:"#f4f1ec", padding:"140px 40px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <SectionLabel idx="02" label="History · 연혁" color="#f4f1ec" />
          <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:60, fontWeight:500, lineHeight:1.1, margin:"0 0 80px", letterSpacing:"-0.02em"}}>
            창업 → 법인화 → 인증.<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>three milestones</span> in three decades.
          </h2>

          <div style={{display:"grid", gridTemplateColumns:"180px 1fr", gap:0}}>
            {TIMELINE.map((t, i) => (
              <React.Fragment key={i}>
                <div style={{padding:"28px 0", borderTop:"1px solid rgba(244,241,236,0.18)", display:"flex", alignItems:"flex-start"}}>
                  <span style={{fontFamily:"'Noto Serif KR', serif", fontSize:36, fontWeight:500, color:"#b8946a", letterSpacing:"-0.01em"}}>{t.year}</span>
                </div>
                <div style={{padding:"34px 0", borderTop:"1px solid rgba(244,241,236,0.18)", fontSize:18, lineHeight:1.6, opacity:0.92}}>
                  {t.event}
                </div>
              </React.Fragment>
            ))}
            <div style={{borderTop:"1px solid rgba(244,241,236,0.18)", height:1}} />
            <div style={{borderTop:"1px solid rgba(244,241,236,0.18)", height:1}} />
          </div>
        </div>
      </section>

      {/* 인증·특허 */}
      <section style={{padding:"140px 40px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <SectionLabel idx="03" label="Certifications · 인증·특허" />
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"end", marginBottom:60}}>
            <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:58, fontWeight:500, lineHeight:1.1, margin:0, letterSpacing:"-0.02em"}}>
              품질은 인증으로<br/>증명됩니다.
            </h2>
            <p style={{fontSize:15, lineHeight:1.85, color:"rgba(26,35,50,0.78)", margin:0}}>
              KS Q ISO 9001 품질경영시스템과 KS 제품인증을 비롯해 시스템창호
              제조에 필요한 다수의 인증·특허를 보유하고 있습니다.
            </p>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14, marginBottom:60}}>
            {[1,2,3,4,5,6].map(n => (
              <div key={n} style={{aspectRatio:"3/4", background:"#fff", padding:14, border:"1px solid rgba(26,35,50,0.15)"}}>
                <div style={{width:"100%", height:"100%", overflow:"hidden"}}>
                  <Photo src={`assets/certs/cert-${n}.jpg`} alt={`인증서 ${n}`} caption={`CERT · ${String(n).padStart(2,"0")}`} fit="contain" border={false} style={{background:"#f4f1ec"}}/>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:0, border:"1px solid #1a2332"}}>
            {[
              ["2014.12.01", "ISO 9001 · KS Q ISO 9001:2009 / 9001:2008", "품질경영시스템 인증서"],
              ["2015.02.17", "KS 제품인증 (Korean Industrial Standards)", "PVC 시스템창호 제품인증"],
              ["—", "이중창 결로 방지 구조 특허", "에너지 절약형 단열 구조"],
              ["—", "초고층용 5격실 80mm 시스템 창호", "고층 건축물 적용 사양"]
            ].map(([d, t, sub], i) => (
              <div key={i} style={{padding:"32px 28px", borderRight: i%2===0 ? "1px solid #1a2332" : "none", borderBottom: i<2 ? "1px solid #1a2332" : "none"}}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, marginBottom:14}}>{d}</div>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:20, fontWeight:600, lineHeight:1.4, marginBottom:6}}>{t}</div>
                <div style={{fontSize:13, color:"rgba(26,35,50,0.7)"}}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{padding:"0 40px 140px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <SectionLabel idx="04" label="Locations · 오시는 길" />
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            {[
              { tag:"HQ + FACTORY", t:"본사·공장", addr:"울산광역시 울주군 삼남면 공암길 8 (419-76)", tel:"052-263-8005", fax:"052-262-8009", note:"제1·제2공장 (자체 PVC 압출 + 가공 라인)"},
              { tag:"BUSAN OFFICE", t:"부산사무소", addr:"부산시 금정구 중앙대로 2131 (청룡동)", tel:"051-501-9006 · 1833-5788", fax:"051-501-9007", note:"부산·경남권 영업 / A·S 응대"},
            ].map((l, i) => (
              <div key={i} style={{background:"#fff", padding:"40px", border:"1px solid rgba(26,35,50,0.18)"}}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", color:"#b8946a", marginBottom:18}}>{l.tag}</div>
                <h3 style={{fontFamily:"'Noto Serif KR', serif", fontSize:32, fontWeight:500, margin:"0 0 24px", letterSpacing:"-0.01em"}}>{l.t}</h3>
                <div style={{fontSize:15, lineHeight:1.7, color:"rgba(26,35,50,0.85)", marginBottom:24}}>{l.addr}</div>
                <div style={{display:"flex", gap:32, paddingTop:20, borderTop:"1px solid rgba(26,35,50,0.15)", flexWrap:"wrap"}}>
                  <div>
                    <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55, marginBottom:4}}>TEL</div>
                    <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:16, fontWeight:500}}>{l.tel}</div>
                  </div>
                  <div>
                    <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55, marginBottom:4}}>FAX</div>
                    <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:16, fontWeight:500}}>{l.fax}</div>
                  </div>
                </div>
                <div style={{fontSize:13, color:"rgba(26,35,50,0.6)", marginTop:20, fontStyle:"italic"}}>{l.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================
// PRODUCTS — 제품
// ============================================
function Products({ setPage }) {
  const [active, setActive] = useState(0);
  const [caseIdx, setCaseIdx] = useState(0);
  const [sectionIdx, setSectionIdx] = useState(0);
  const p = PRODUCTS[active];

  // 탭 전환 시 갤러리 인덱스 리셋
  useEffect(()=> { setCaseIdx(0); setSectionIdx(0); }, [active]);

  return (
    <main style={{background:"#f4f1ec"}}>
      <section style={{padding:"100px 40px 60px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <Eyebrow>Products · 제품</Eyebrow>
          <h1 style={{fontFamily:"'Noto Serif KR', serif", fontSize:80, fontWeight:500, lineHeight:1.05, margin:"0 0 36px", letterSpacing:"-0.025em"}}>
            5개 시스템창호 라인,<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>one common standard.</span>
          </h1>
          <p style={{fontSize:17, lineHeight:1.8, color:"rgba(26,35,50,0.78)", maxWidth:780, margin:0}}>
            윗열기 · 미닫이 · 복합형 · 출입문 · 라운드 — 다양한 개구부와
            건축 입면 요구에 맞춰 5가지 라인을 제공합니다. 모든 라인은
            동일한 다격실 PVC 프로파일과 EPDM Gasket 구조를 공유합니다.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section style={{padding:"0 40px", position:"sticky", top:69, zIndex:20, background:"#f4f1ec"}}>
        <div style={{maxWidth:1440, margin:"0 auto", borderBottom:"1px solid rgba(26,35,50,0.2)", display:"flex", gap:0, overflowX:"auto"}}>
          {PRODUCTS.map((prod, i) => {
            const isActive = i === active;
            return (
              <button key={prod.code} onClick={()=>setActive(i)} style={{
                background:"none", border:"none", padding:"22px 26px",
                cursor:"pointer", fontFamily:"inherit", textAlign:"left",
                borderBottom: isActive ? "2px solid #1a2332" : "2px solid transparent",
                marginBottom:-1, color: isActive ? "#1a2332" : "rgba(26,35,50,0.55)",
                whiteSpace:"nowrap"
              }}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.7, marginBottom:6}}>{prod.code}</div>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:16, fontWeight:600}}>{prod.nameKo}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Detail — Hero with main case image + ISO */}
      <section style={{padding:"60px 40px 0"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"start", marginBottom:60}}>
            <div>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.22em", color:"#b8946a", marginBottom:18}}>
                SERIES {String(active+1).padStart(2,"0")} / 0{PRODUCTS.length} · {p.code}
              </div>
              <h2 style={{fontFamily:"'Noto Serif KR', serif", fontSize:54, fontWeight:500, lineHeight:1.1, margin:"0 0 12px", letterSpacing:"-0.02em"}}>
                {p.nameKo}
              </h2>
              <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:22, color:"rgba(26,35,50,0.6)", marginBottom:32}}>
                {p.name}
              </div>
              <p style={{fontSize:16, lineHeight:1.85, color:"rgba(26,35,50,0.82)", margin:"0 0 32px", textWrap:"pretty"}}>
                {p.desc}
              </p>
              <div style={{padding:"18px 0", borderTop:"1px solid rgba(26,35,50,0.18)", borderBottom:"1px solid rgba(26,35,50,0.18)", marginBottom:24}}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.55, marginBottom:6}}>RECOMMENDED USE</div>
                <div style={{fontSize:15, fontWeight:500}}>{p.use}</div>
              </div>

              {/* ISO drawing — large preview with caption below */}
              {p.iso && (
                <div style={{background:"#fff", padding:28, border:"1px solid rgba(26,35,50,0.18)"}}>
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:18}}>
                    <div>
                      <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.55, marginBottom:6}}>ISOMETRIC VIEW</div>
                      <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600}}>입체 단면 도면</div>
                    </div>
                    <div style={{fontSize:12, color:"rgba(26,35,50,0.55)", maxWidth:280, lineHeight:1.55, textAlign:"right"}}>
                      프로파일 격실 구조와 보강재 위치를 한눈에 확인할 수 있는 isometric 도면.
                    </div>
                  </div>
                  <div style={{aspectRatio:"16/9", background:"#f4f1ec"}}>
                    <Photo src={p.iso} alt={`${p.name} ISO`} fit="contain" border={false} style={{background:"#f4f1ec"}}/>
                  </div>
                </div>
              )}
            </div>

            {/* Right — case gallery with thumbnails */}
            <div>
              <div style={{aspectRatio:"4/5", marginBottom:14}}>
                <Photo src={p.cases[caseIdx]} alt={p.name} caption={`${p.code} · INSTALLATION ${String(caseIdx+1).padStart(2,"0")}`} />
              </div>
              {p.cases.length > 1 && (
                <div style={{display:"grid", gridTemplateColumns:`repeat(${p.cases.length}, 1fr)`, gap:8}}>
                  {p.cases.map((src, i) => (
                    <button key={i} onClick={()=>setCaseIdx(i)} style={{
                      aspectRatio:"4/3", padding:0, border: i===caseIdx ? "2px solid #1a2332" : "1px solid rgba(26,35,50,0.18)",
                      background:"none", cursor:"pointer", overflow:"hidden", opacity: i===caseIdx ? 1 : 0.55, transition:"opacity 200ms"
                    }}>
                      <img src={src} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Spec table + section drawings (multi) */}
      <section style={{padding:"0 40px 100px"}}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:14}}>
          {/* Specs */}
          <div style={{background:"#fff", padding:"40px", border:"1px solid rgba(26,35,50,0.18)"}}>
            <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.55, marginBottom:24}}>SPECIFICATIONS</div>
            <table style={{width:"100%", borderCollapse:"collapse"}}>
              <thead>
                <tr style={{borderBottom:"1px solid rgba(26,35,50,0.25)"}}>
                  <th style={{textAlign:"left", padding:"12px 0", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, fontWeight:400}}>적용</th>
                  <th style={{textAlign:"left", padding:"12px 0", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, fontWeight:400}}>프로파일</th>
                  <th style={{textAlign:"left", padding:"12px 0", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, fontWeight:400}}>유리 두께</th>
                </tr>
              </thead>
              <tbody>
                {p.specs.map((s, i) => (
                  <tr key={i} style={{borderBottom:"1px solid rgba(26,35,50,0.1)"}}>
                    <td style={{padding:"22px 0", fontFamily:"'Noto Serif KR', serif", fontSize:15, fontWeight:500}}>{s.type}</td>
                    <td style={{padding:"22px 0", fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600, color:"#b8946a"}}>{s.profile}</td>
                    <td style={{padding:"22px 0", fontSize:14, color:"rgba(26,35,50,0.85)"}}>{s.glass}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, marginTop:32, paddingTop:24, borderTop:"1px solid rgba(26,35,50,0.15)"}}>
              {[
                ["EPDM", "Gasket"],
                ["Multi", "Chamber"],
                ["Steel", "Reinforced"],
                ["EU Type", "Hardware"]
              ].map(([k, v], i) => (
                <div key={i} style={{borderRight: i<3 ? "1px solid rgba(26,35,50,0.12)" : "none", paddingRight:12, paddingLeft: i>0 ? 12 : 0}}>
                  <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600}}>{k}</div>
                  <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.15em", opacity:0.6, marginTop:3, textTransform:"uppercase"}}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section drawings — gallery (selectable) */}
          <div style={{background:"#fff", padding:"40px", border:"1px solid rgba(26,35,50,0.18)", display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:18}}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.55}}>
                SECTION DRAWING — {String(sectionIdx+1).padStart(2,"0")} / {String(p.sections.length).padStart(2,"0")}
              </div>
              {p.sections.length > 1 && (
                <div style={{display:"flex", gap:6}}>
                  <button onClick={()=>setSectionIdx(i=>(i-1+p.sections.length)%p.sections.length)} style={{
                    width:28, height:28, padding:0, border:"1px solid rgba(26,35,50,0.25)", background:"none", cursor:"pointer", fontFamily:"inherit", color:"#1a2332"
                  }}>‹</button>
                  <button onClick={()=>setSectionIdx(i=>(i+1)%p.sections.length)} style={{
                    width:28, height:28, padding:0, border:"1px solid rgba(26,35,50,0.25)", background:"none", cursor:"pointer", fontFamily:"inherit", color:"#1a2332"
                  }}>›</button>
                </div>
              )}
            </div>
            <div style={{flex:1, minHeight:340, marginBottom: p.sections.length > 1 ? 14 : 0}}>
              <Photo src={p.sections[sectionIdx]} alt={`${p.name} 단면도`} caption={`${p.code} · TECHNICAL`} fit="contain" border={false} style={{background:"#f4f1ec"}}/>
            </div>
            {p.sections.length > 1 && (
              <div style={{display:"grid", gridTemplateColumns:`repeat(${p.sections.length}, 1fr)`, gap:6}}>
                {p.sections.map((src, i) => (
                  <button key={i} onClick={()=>setSectionIdx(i)} style={{
                    aspectRatio:"4/3", padding:0, border: i===sectionIdx ? "2px solid #1a2332" : "1px solid rgba(26,35,50,0.18)",
                    background:"#f4f1ec", cursor:"pointer", overflow:"hidden", opacity: i===sectionIdx ? 1 : 0.55, transition:"opacity 200ms"
                  }}>
                    <img src={src} alt="" style={{width:"100%", height:"100%", objectFit:"contain", display:"block"}}/>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All series comparison */}
      <section style={{background:"#1a2332", color:"#f4f1ec", padding:"100px 40px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <SectionLabel idx="06" label={`Quick Compare · ${PRODUCTS.length}개 라인업 한눈에`} color="#f4f1ec" />
          <div style={{display:"grid", gridTemplateColumns:`repeat(${PRODUCTS.length}, 1fr)`, gap:0, border:"1px solid rgba(244,241,236,0.18)"}}>
            {PRODUCTS.map((prod, i) => (
              <button key={prod.code} onClick={()=>{setActive(i); window.scrollTo({top:0, behavior:"smooth"});}} style={{
                background: i===active ? "#b8946a" : "transparent",
                color: i===active ? "#1a2332" : "#f4f1ec",
                border:"none", borderRight: i<PRODUCTS.length-1 ? "1px solid rgba(244,241,236,0.18)" : "none",
                padding:"36px 24px", textAlign:"left", cursor:"pointer", fontFamily:"inherit",
                display:"flex", flexDirection:"column", gap:14
              }}>
                <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", opacity:0.7}}>{prod.code}</div>
                <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:20, fontWeight:600, lineHeight:1.3}}>{prod.nameKo}</div>
                <div style={{fontSize:12, opacity:0.75, lineHeight:1.5}}>{prod.use}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================
// PROJECTS — 시공사례
// ============================================
function Lightbox({ project, onClose }) {
  const [idx, setIdx] = useState(0);
  const imgs = project?.imgs || [];

  useEffect(()=> {
    if (!project) return;
    setIdx(0);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx(i => (i+1) % imgs.length);
      if (e.key === "ArrowLeft") setIdx(i => (i-1+imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  return (
    <div onClick={onClose} style={{
      position:"fixed", inset:0, background:"rgba(20,30,45,0.96)", zIndex:100,
      display:"flex", flexDirection:"column", padding:"40px 40px 24px"
    }}>
      {/* Top bar */}
      <div onClick={e=>e.stopPropagation()} style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", color:"#f4f1ec", marginBottom:24}}>
        <div>
          <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.22em", opacity:0.55, marginBottom:6}}>
            PROJECT {String(project.id).padStart(3,"0")} · {project.cat.toUpperCase()}
          </div>
          <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:26, fontWeight:500, letterSpacing:"-0.01em"}}>{project.title}</div>
          <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:14, opacity:0.7, marginTop:4}}>{project.region}</div>
        </div>
        <button onClick={onClose} style={{
          background:"none", border:"1px solid rgba(244,241,236,0.4)", color:"#f4f1ec",
          padding:"10px 18px", cursor:"pointer", fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.18em"
        }}>CLOSE ✕</button>
      </div>

      {/* Main image area */}
      <div onClick={e=>e.stopPropagation()} style={{flex:1, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", minHeight:0}}>
        <img src={imgs[idx]} alt={project.title} style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain", display:"block"}}/>

        {imgs.length > 1 && (
          <React.Fragment>
            <button onClick={()=>setIdx(i=>(i-1+imgs.length)%imgs.length)} style={{
              position:"absolute", left:0, top:"50%", transform:"translateY(-50%)",
              background:"rgba(244,241,236,0.1)", border:"1px solid rgba(244,241,236,0.3)", color:"#f4f1ec",
              width:48, height:48, cursor:"pointer", fontFamily:"inherit", fontSize:22, lineHeight:1
            }}>‹</button>
            <button onClick={()=>setIdx(i=>(i+1)%imgs.length)} style={{
              position:"absolute", right:0, top:"50%", transform:"translateY(-50%)",
              background:"rgba(244,241,236,0.1)", border:"1px solid rgba(244,241,236,0.3)", color:"#f4f1ec",
              width:48, height:48, cursor:"pointer", fontFamily:"inherit", fontSize:22, lineHeight:1
            }}>›</button>
          </React.Fragment>
        )}
      </div>

      {/* Thumbs */}
      {imgs.length > 1 && (
        <div onClick={e=>e.stopPropagation()} style={{display:"flex", gap:8, justifyContent:"center", marginTop:20, flexWrap:"wrap"}}>
          {imgs.map((src, i) => (
            <button key={i} onClick={()=>setIdx(i)} style={{
              width:80, height:60, padding:0, background:"none", cursor:"pointer", overflow:"hidden",
              border: i===idx ? "2px solid #b8946a" : "1px solid rgba(244,241,236,0.25)",
              opacity: i===idx ? 1 : 0.55, transition:"opacity 200ms"
            }}>
              <img src={src} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
            </button>
          ))}
        </div>
      )}

      <div onClick={e=>e.stopPropagation()} style={{textAlign:"center", color:"rgba(244,241,236,0.5)", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", marginTop:14}}>
        {String(idx+1).padStart(2,"0")} / {String(imgs.length).padStart(2,"0")} · ESC TO CLOSE · ← → TO NAVIGATE
      </div>
    </div>
  );
}

function Projects({ setPage }) {
  const [filter, setFilter] = useState("ALL");
  const [open, setOpen] = useState(null);
  const cats = ["ALL", "단지", "상업", "주택", "해외"];
  const filtered = filter === "ALL" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  const counts = {
    ALL: PROJECTS.length,
    단지: PROJECTS.filter(p=>p.cat==="단지").length,
    상업: PROJECTS.filter(p=>p.cat==="상업").length,
    주택: PROJECTS.filter(p=>p.cat==="주택").length,
    해외: PROJECTS.filter(p=>p.cat==="해외").length,
  };

  return (
    <main style={{background:"#f4f1ec"}}>
      <section style={{padding:"100px 40px 60px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <Eyebrow>Projects · 시공사례</Eyebrow>
          <div style={{display:"grid", gridTemplateColumns:"1.5fr 1fr", gap:80, alignItems:"end"}}>
            <h1 style={{fontFamily:"'Noto Serif KR', serif", fontSize:80, fontWeight:500, lineHeight:1.05, margin:0, letterSpacing:"-0.025em"}}>
              아파트 단지부터<br/>
              <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>overseas residences</span><br/>
              까지.
            </h1>
            <p style={{fontSize:16, lineHeight:1.85, color:"rgba(26,35,50,0.78)", margin:0}}>
              해강시스템창호의 시공 사례 일부를 카테고리별로 정리했습니다.
              대형 단지·호텔·콘도부터 단독주택, 일본·중국 해외 현장까지 폭넓은
              스펙트럼의 현장 경험을 보유하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{padding:"0 40px"}}>
        <div style={{maxWidth:1440, margin:"0 auto", borderBottom:"1px solid rgba(26,35,50,0.2)", display:"flex", gap:6, paddingBottom:0, alignItems:"baseline", flexWrap:"wrap"}}>
          {cats.map(c => {
            const active = filter === c;
            return (
              <button key={c} onClick={()=>setFilter(c)} style={{
                background:"none", border:"none", cursor:"pointer", fontFamily:"inherit",
                padding:"18px 22px", color: active ? "#1a2332" : "rgba(26,35,50,0.5)",
                borderBottom: active ? "2px solid #1a2332" : "2px solid transparent",
                marginBottom:-1, display:"flex", gap:10, alignItems:"baseline"
              }}>
                <span style={{fontFamily:"'Noto Serif KR', serif", fontSize:17, fontWeight:600}}>{c === "ALL" ? "전체" : c}</span>
                <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.15em", opacity:0.6}}>{String(counts[c]).padStart(2,"0")}</span>
              </button>
            );
          })}
          <div style={{marginLeft:"auto", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.5, paddingBottom:18}}>
            {String(filtered.length).padStart(2,"0")} / {String(PROJECTS.length).padStart(2,"0")} PROJECTS
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{padding:"40px 40px 140px"}}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14}}>
          {filtered.map(p => {
            const multi = p.imgs.length > 1;
            return (
              <button key={p.id} onClick={()=>setOpen(p)} style={{
                display:"flex", flexDirection:"column", background:"none", border:"none", padding:0, cursor:"pointer", textAlign:"left", fontFamily:"inherit"
              }}>
                <div style={{aspectRatio:"4/3", position:"relative"}}>
                  <Photo src={p.img} alt={p.title} caption={`${String(p.id).padStart(3,"0")} · ${p.cat}`} />
                  {multi && (
                    <div style={{
                      position:"absolute", top:8, right:8,
                      fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.15em",
                      color:"#1a2332", background:"#b8946a", padding:"4px 8px",
                    }}>+{p.imgs.length-1}</div>
                  )}
                </div>
                <div style={{padding:"18px 0 8px", display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:14}}>
                  <div>
                    <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600, lineHeight:1.3}}>{p.title}</div>
                    <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:13, color:"rgba(26,35,50,0.6)", marginTop:4}}>{p.region}</div>
                  </div>
                  <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.15em", color:"#b8946a", whiteSpace:"nowrap"}}>{p.cat.toUpperCase()}</div>
                </div>
              </button>
            );
          })}
        </div>

        <div style={{maxWidth:1440, margin:"60px auto 0", textAlign:"center", fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.5, textTransform:"uppercase"}}>
          Click any project to open photo gallery · {PROJECTS.filter(p=>p.imgs.length>1).length} projects with detail photos
        </div>
      </section>

      <Lightbox project={open} onClose={()=>setOpen(null)} />
    </main>
  );
}

// ============================================
// QUOTE — 견적문의
// ============================================
function Quote({ setPage }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    siteType: "", region: "", product: "", size: "", timing: "",
    name: "", phone: "", email: "", note: ""
  });

  const upd = (k, v) => setForm(f => ({...f, [k]: v}));

  return (
    <main style={{background:"#f4f1ec"}}>
      <section style={{padding:"80px 40px 60px"}}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <Eyebrow>Quote · 견적 문의</Eyebrow>
          <h1 style={{fontFamily:"'Noto Serif KR', serif", fontSize:72, fontWeight:500, lineHeight:1.05, margin:"0 0 24px", letterSpacing:"-0.025em"}}>
            현장에 맞는 사양과<br/>
            <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", color:"#b8946a"}}>realistic timeline</span>을 검토합니다.
          </h1>
          <p style={{fontSize:16, lineHeight:1.8, color:"rgba(26,35,50,0.78)", margin:0, maxWidth:680}}>
            아래 4단계 폼을 작성해주시면 영업 담당자가 24시간 이내 회신드립니다.
            긴급한 문의는 <a href="tel:0522638005" style={{color:"#1a2332", fontWeight:600}}>052-263-8005</a> 또는 <a href="tel:18335788" style={{color:"#1a2332", fontWeight:600}}>1833-5788</a>로 연락 주세요.
          </p>
        </div>
      </section>

      <section style={{padding:"0 40px 140px"}}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:14}}>
          {/* Form */}
          <div style={{background:"#fff", padding:"50px", border:"1px solid rgba(26,35,50,0.18)"}}>
            {/* Steps */}
            <div style={{display:"flex", gap:14, marginBottom:50}}>
              {[1,2,3,4].map(n => (
                <button key={n} onClick={()=>setStep(n)} style={{
                  flex:1, background:"none", border:"none", padding:"14px 0", cursor:"pointer",
                  borderTop: step>=n ? "2px solid #1a2332" : "2px solid rgba(26,35,50,0.18)",
                  textAlign:"left", fontFamily:"inherit",
                  color: step>=n ? "#1a2332" : "rgba(26,35,50,0.5)"
                }}>
                  <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.65, marginBottom:4}}>STEP 0{n}</div>
                  <div style={{fontFamily:"'Noto Serif KR', serif", fontSize:14, fontWeight:600}}>
                    {["현장 정보", "제품 선택", "일정·요청", "연락처"][n-1]}
                  </div>
                </button>
              ))}
            </div>

            {/* Step 1 */}
            {step===1 && (
              <div>
                <Label>현장 종류</Label>
                <RadioGrid options={["개인주택 (신축)", "개인주택 (리모델링)", "아파트", "오피스텔/상업", "콘도/리조트", "기타"]} value={form.siteType} onChange={v=>upd("siteType", v)} />

                <Label style={{marginTop:36}}>지역</Label>
                <Input value={form.region} onChange={v=>upd("region", v)} placeholder="예: 울산광역시 남구 / 서울 강남구" />

                <Label style={{marginTop:36}}>개구부 크기 (선택)</Label>
                <Input value={form.size} onChange={v=>upd("size", v)} placeholder="예: 가로 2400 × 세로 1800 (mm), 6창 등" />

                <NextBack onNext={()=>setStep(2)} />
              </div>
            )}

            {step===2 && (
              <div>
                <Label>희망 제품 라인</Label>
                <RadioGrid
                  options={PRODUCTS.map(p=>`${p.nameKo} (${p.code})`).concat(["상담 후 결정"])}
                  value={form.product} onChange={v=>upd("product", v)}
                />

                <div style={{marginTop:36, padding:"24px", background:"#f4f1ec", borderLeft:"3px solid #b8946a"}}>
                  <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, marginBottom:8}}>NOTE</div>
                  <div style={{fontSize:14, lineHeight:1.7, color:"rgba(26,35,50,0.85)"}}>
                    어떤 라인이 적합한지 잘 모르시면 <strong>상담 후 결정</strong>을 선택해 주세요. 현장 조건(층수, 입면, 단열 등급)에 맞춰 최적 제품을 제안드립니다.
                  </div>
                </div>

                <NextBack onBack={()=>setStep(1)} onNext={()=>setStep(3)} />
              </div>
            )}

            {step===3 && (
              <div>
                <Label>시공 희망 시기</Label>
                <RadioGrid options={["2주 이내", "1개월 이내", "3개월 이내", "미정 / 검토중"]} value={form.timing} onChange={v=>upd("timing", v)} />

                <Label style={{marginTop:36}}>요청사항 (선택)</Label>
                <Textarea value={form.note} onChange={v=>upd("note", v)} placeholder="단열 등급, 컬러, 도면 첨부 가능 여부 등 자유롭게 적어주세요." />

                <NextBack onBack={()=>setStep(2)} onNext={()=>setStep(4)} />
              </div>
            )}

            {step===4 && (
              <div>
                <Label>성함</Label>
                <Input value={form.name} onChange={v=>upd("name", v)} placeholder="홍길동" />

                <Label style={{marginTop:24}}>연락처</Label>
                <Input value={form.phone} onChange={v=>upd("phone", v)} placeholder="010-0000-0000" />

                <Label style={{marginTop:24}}>이메일 (선택)</Label>
                <Input value={form.email} onChange={v=>upd("email", v)} placeholder="name@example.com" />

                <div style={{marginTop:36, padding:"22px 24px", background:"#1a2332", color:"#f4f1ec", display:"flex", alignItems:"center", gap:14}}>
                  <input type="checkbox" defaultChecked style={{width:18, height:18, accentColor:"#b8946a"}} />
                  <div style={{fontSize:13, lineHeight:1.6}}>
                    <strong>개인정보 처리방침</strong>에 동의합니다. 입력하신 정보는 견적 회신 목적으로만 사용되며, 별도 동의 없이 제3자에게 제공되지 않습니다.
                  </div>
                </div>

                <div style={{display:"flex", gap:14, marginTop:36}}>
                  <button onClick={()=>setStep(3)} style={{
                    flex:"0 0 auto", background:"none", border:"1px solid #1a2332", color:"#1a2332",
                    padding:"18px 28px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontSize:14
                  }}>← 이전</button>
                  <button onClick={()=>alert("견적 문의가 접수되었습니다. 24시간 이내 담당자가 연락드립니다.")} style={{
                    flex:1, background:"#b8946a", border:"none", color:"#1a2332",
                    padding:"18px 28px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontSize:15, fontWeight:600
                  }}>견적 문의 보내기 →</button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{background:"#1a2332", color:"#f4f1ec", padding:"36px"}}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.22em", opacity:0.6, marginBottom:18}}>SUMMARY</div>
              <h3 style={{fontFamily:"'Noto Serif KR', serif", fontSize:24, fontWeight:500, margin:"0 0 28px", letterSpacing:"-0.01em"}}>입력 내역</h3>
              <div style={{display:"flex", flexDirection:"column", gap:18}}>
                {[
                  ["현장", form.siteType],
                  ["지역", form.region],
                  ["크기", form.size],
                  ["제품", form.product],
                  ["일정", form.timing],
                  ["성함", form.name],
                  ["연락처", form.phone],
                ].filter(([,v])=>v).map(([k, v]) => (
                  <div key={k} style={{display:"flex", justifyContent:"space-between", paddingBottom:14, borderBottom:"1px solid rgba(244,241,236,0.15)", gap:14}}>
                    <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.6, flex:"0 0 60px"}}>{k}</span>
                    <span style={{fontSize:14, textAlign:"right", flex:1}}>{v}</span>
                  </div>
                ))}
                {!form.siteType && !form.region && !form.product && (
                  <div style={{fontSize:13, opacity:0.55, fontStyle:"italic", lineHeight:1.7}}>
                    좌측 폼을 작성하시면 입력하신 내용이 이곳에 요약됩니다.
                  </div>
                )}
              </div>
            </div>

            <div style={{background:"#b8946a", padding:"36px"}}>
              <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.22em", opacity:0.7, color:"#1a2332", marginBottom:18}}>DIRECT CONTACT</div>
              <div style={{display:"flex", flexDirection:"column", gap:18}}>
                {[
                  ["본사·공장", "052-263-8005"],
                  ["부산사무소", "051-501-9006"],
                  ["전국 대표", "1833-5788"],
                ].map(([k, v]) => (
                  <a key={v} href={`tel:${v.replace(/-/g,"")}`} style={{
                    display:"flex", justifyContent:"space-between", alignItems:"baseline", textDecoration:"none",
                    color:"#1a2332", paddingBottom:14, borderBottom:"1px solid rgba(26,35,50,0.2)"
                  }}>
                    <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.7}}>{k}</span>
                    <span style={{fontFamily:"'Noto Serif KR', serif", fontSize:18, fontWeight:600}}>{v}</span>
                  </a>
                ))}
              </div>
              <a href="mailto:haegang8005@naver.com" style={{
                marginTop:24, display:"block", textAlign:"center", background:"#1a2332", color:"#f4f1ec",
                padding:"14px", textDecoration:"none", fontFamily:"'Noto Serif KR', serif", fontSize:13, fontWeight:500
              }}>haegang8005@naver.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Quote helpers
function Label({ children, style={} }) {
  return <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.2em", opacity:0.65, marginBottom:14, textTransform:"uppercase", ...style}}>{children}</div>;
}
function Input({ value, onChange, placeholder }) {
  return (
    <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
      style={{
        width:"100%", padding:"14px 0", border:"none", borderBottom:"1px solid rgba(26,35,50,0.25)",
        background:"transparent", fontFamily:"inherit", fontSize:16, outline:"none",
        transition:"border-color 200ms"
      }}
      onFocus={e=>e.target.style.borderBottomColor="#1a2332"}
      onBlur={e=>e.target.style.borderBottomColor="rgba(26,35,50,0.25)"}
    />
  );
}
function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={4}
      style={{
        width:"100%", padding:"14px 16px", border:"1px solid rgba(26,35,50,0.25)",
        background:"#f4f1ec", fontFamily:"inherit", fontSize:15, outline:"none", resize:"vertical", lineHeight:1.6
      }}
    />
  );
}
function RadioGrid({ options, value, onChange }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:8}}>
      {options.map(o => {
        const active = value === o;
        return (
          <button key={o} onClick={()=>onChange(o)} style={{
            background: active ? "#1a2332" : "#f4f1ec", color: active ? "#f4f1ec" : "#1a2332",
            border:"1px solid", borderColor: active ? "#1a2332" : "rgba(26,35,50,0.2)",
            padding:"16px 18px", textAlign:"left", cursor:"pointer", fontFamily:"inherit", fontSize:14, fontWeight:500
          }}>{o}</button>
        );
      })}
    </div>
  );
}
function NextBack({ onBack, onNext }) {
  return (
    <div style={{display:"flex", gap:14, marginTop:36}}>
      {onBack && <button onClick={onBack} style={{
        flex:"0 0 auto", background:"none", border:"1px solid #1a2332", color:"#1a2332",
        padding:"18px 28px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontSize:14
      }}>← 이전</button>}
      <button onClick={onNext} style={{
        flex:1, background:"#1a2332", border:"none", color:"#f4f1ec",
        padding:"18px 28px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontSize:15
      }}>다음 단계 →</button>
    </div>
  );
}

Object.assign(window, { About, Products, Projects, Quote });
