// 공통 레이아웃 — Nav, Footer, Section helpers, Photo placeholder defs

const { useState, useEffect, useRef, useMemo } = React;

// ============== Photo helpers ==============
// SVG defs (인쇄용 그레인 + 비네팅)
function PhDefs() {
  return (
    <svg width="0" height="0" style={{position:"absolute"}} aria-hidden>
      <defs>
        <filter id="hg-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0"/>
          <feComposite in2="SourceGraphic" operator="in"/>
        </filter>
        <radialGradient id="hg-vignette" cx="50%" cy="50%" r="65%">
          <stop offset="60%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="100%" stopColor="rgba(20,30,45,0.35)"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// Photo wrapper: caption corner + grain overlay over real photo
function Photo({ src, alt, caption, h, fit="cover", pos="center", border=true, style={} }) {
  return (
    <div style={{
      position:"relative", width:"100%", height: h || "100%",
      background:"#1a2332", overflow:"hidden",
      border: border ? "1px solid rgba(26,35,50,0.18)" : "none",
      ...style
    }}>
      <img src={src} alt={alt||""} loading="lazy"
        style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:fit, objectPosition:pos, display:"block"}} />
      {/* 비네팅 */}
      <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 55%, rgba(20,30,45,0.18))", pointerEvents:"none"}} />
      {caption && (
        <div style={{
          position:"absolute", bottom:8, left:8,
          fontFamily:"'JetBrains Mono', monospace", fontSize:9, letterSpacing:"0.1em",
          color:"#f4f1ec", background:"rgba(20,30,45,0.55)", padding:"3px 7px",
          textTransform:"uppercase", backdropFilter:"blur(4px)"
        }}>{caption}</div>
      )}
    </div>
  );
}

// ============== Nav ==============
function Nav({ page, setPage, dark=false }) {
  const fg = dark ? "#f4f1ec" : "#1a2332";
  const bg = dark ? "rgba(20,30,45,0.92)" : "rgba(244,241,236,0.92)";
  const items = [
    ["home", "홈", "HOME"],
    ["about", "회사소개", "ABOUT"],
    ["products", "제품", "PRODUCTS"],
    ["projects", "시공사례", "PROJECTS"],
    ["quote", "견적문의", "QUOTE"]
  ];
  return (
    <header style={{
      position:"sticky", top:0, zIndex:50,
      background: bg, backdropFilter:"blur(14px)",
      borderBottom:`1px solid ${dark?"rgba(244,241,236,0.12)":"rgba(26,35,50,0.12)"}`,
      color: fg
    }}>
      <div style={{
        maxWidth:1440, margin:"0 auto", padding:"18px 40px",
        display:"flex", alignItems:"center", justifyContent:"space-between", gap:40
      }}>
        <button onClick={()=>setPage("home")} style={{background:"none", border:"none", cursor:"pointer", color:"inherit", padding:0, textAlign:"left"}}>
          <div style={{fontFamily:"'Noto Serif KR', serif", fontWeight:600, fontSize:20, letterSpacing:"-0.01em", lineHeight:1}}>
            해강시스템창호
          </div>
          <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:11, letterSpacing:"0.04em", opacity:0.65, marginTop:3}}>
            Haegang Super Sash · Since 1991
          </div>
        </button>

        <nav style={{display:"flex", alignItems:"center", gap:2}}>
          {items.map(([k, ko, en])=> {
            const active = page===k;
            return (
              <button key={k} onClick={()=>setPage(k)} style={{
                background:"none", border:"none", cursor:"pointer",
                color: "inherit", opacity: active ? 1 : 0.62,
                padding:"10px 18px", display:"flex", flexDirection:"column", alignItems:"center", gap:1,
                borderBottom: active ? `1.5px solid ${fg}` : "1.5px solid transparent",
                transition:"opacity 180ms"
              }}
              onMouseEnter={e=>{ if(!active) e.currentTarget.style.opacity = 0.95; }}
              onMouseLeave={e=>{ if(!active) e.currentTarget.style.opacity = 0.62; }}>
                <span style={{fontFamily:"'Noto Serif KR', serif", fontWeight:500, fontSize:14}}>{ko}</span>
                <span style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:9, letterSpacing:"0.12em", opacity:0.7}}>{en}</span>
              </button>
            );
          })}
          <button onClick={()=>setPage("quote")} style={{
            marginLeft:18, background:"#1a2332", color:"#f4f1ec", border:"none",
            padding:"12px 22px", cursor:"pointer", fontFamily:"'Noto Serif KR', serif", fontWeight:500, fontSize:13,
            letterSpacing:"0.02em"
          }}>
            견적 문의 →
          </button>
        </nav>
      </div>
    </header>
  );
}

// ============== Footer ==============
function Footer() {
  return (
    <footer style={{background:"#1a2332", color:"#f4f1ec", padding:"80px 40px 40px"}}>
      <div style={{maxWidth:1440, margin:"0 auto"}}>
        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr", gap:60, paddingBottom:60, borderBottom:"1px solid rgba(244,241,236,0.15)"}}>
          <div>
            <div style={{fontFamily:"'Noto Serif KR', serif", fontWeight:600, fontSize:24, marginBottom:6}}>(주)해강시스템창호</div>
            <div style={{fontFamily:"'Newsreader', serif", fontStyle:"italic", fontSize:14, opacity:0.65, marginBottom:24}}>
              Haegang Super Sash · Since 1991
            </div>
            <p style={{fontSize:13, lineHeight:1.7, opacity:0.75, margin:0, maxWidth:340}}>
              30년 이상 시스템창호 한 길.<br/>
              울산 자체 공장 직생산, 에너지 절약형 고기밀·고단열 PVC 시스템창호 전문 제조기업.
            </p>
          </div>

          <div>
            <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55, textTransform:"uppercase", marginBottom:18}}>
              Headquarters · Factory
            </div>
            <div style={{fontSize:13, lineHeight:1.85, opacity:0.85}}>
              울산광역시 울주군<br/>삼남면 공암길 8<br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, opacity:0.7}}>T. 052-263-8005</span><br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, opacity:0.7}}>F. 052-262-8009</span>
            </div>
          </div>

          <div>
            <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55, textTransform:"uppercase", marginBottom:18}}>
              Busan Office
            </div>
            <div style={{fontSize:13, lineHeight:1.85, opacity:0.85}}>
              부산시 금정구<br/>중앙대로 2131 (청룡동)<br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, opacity:0.7}}>T. 051-501-9006</span><br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, opacity:0.7}}>T. 1833-5788</span>
            </div>
          </div>

          <div>
            <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.18em", opacity:0.55, textTransform:"uppercase", marginBottom:18}}>
              Contact
            </div>
            <div style={{fontSize:13, lineHeight:1.85, opacity:0.85}}>
              haegang8005@naver.com<br/><br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, opacity:0.6}}>대표 · 박근배</span><br/>
              <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, opacity:0.6}}>사업자 · 610-81-49677</span>
            </div>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:30, fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:"0.1em", opacity:0.5, textTransform:"uppercase"}}>
          <div>© 2026 HAEGANG WINDOW SYSTEMS CO., LTD.</div>
          <div>Founded 1991 · Incorporated 2001 · ISO 9001 · KS Certified</div>
        </div>
      </div>
    </footer>
  );
}

// ============== Section helpers ==============
function SectionLabel({ idx, label, color="#1a2332" }) {
  return (
    <div style={{display:"flex", alignItems:"baseline", gap:18, marginBottom:32, color}}>
      <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", opacity:0.55}}>{idx}</span>
      <div style={{flex:"0 0 32px", height:1, background:"currentColor", opacity:0.4}} />
      <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", opacity:0.7}}>{label}</span>
    </div>
  );
}

function Eyebrow({ children, color="#1a2332" }) {
  return (
    <div style={{
      fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:"0.2em",
      textTransform:"uppercase", color, opacity:0.65, marginBottom:18
    }}>{children}</div>
  );
}

Object.assign(window, { Nav, Footer, Photo, PhDefs, SectionLabel, Eyebrow });
