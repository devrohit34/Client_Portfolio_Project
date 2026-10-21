import React, { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Menu, X, Sun, Moon, Mail, Phone, Globe,
  School, Trophy, Users, Medal, Cpu, Lightbulb, Settings, TrendingUp,
  Handshake, GraduationCap, Sparkles, ChartNoAxesCombined, ExternalLink,
  Building2, Wrench, BookOpen, Quote, Newspaper, MapPin
} from 'lucide-react'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip
} from 'recharts'

const revenueData = [
  { year: '2022', amount: 0.5, label: '₹50 Lakh' },
  { year: '2023', amount: 1, label: '₹1 Crore' },
  { year: '2024', amount: 1.5, label: '₹1.5 Crore' },
  { year: '2025', amount: 2.5, label: '₹2.5 Crore' },
  { year: '2026', amount: 3.5, label: '₹3.5 Crore' },
]

const metrics = [
  { icon: School, value: '300+', title: 'Schools Empowered', detail: 'Robotics & AI labs and future-ready learning' },
  { icon: Trophy, value: '100+', title: 'Competitions Organised', detail: 'National and state-level opportunities' },
  { icon: Users, value: '10,000+', title: 'Workshops Delivered', detail: 'For students, teachers and school teams' },
  { icon: Medal, value: '50+', title: 'Record Achievements', detail: 'India Book of Records-related student and team achievements' },
]

const responsibilities = [
  { icon: Handshake, number: '01', title: 'School Partnerships', subtitle: 'Build relationships that last', items: ['School visits and lead generation', 'Institutional relationships', 'Proposals and closures', 'Long-term partner success'] },
  { icon: Lightbulb, number: '02', title: 'Solutioning', subtitle: 'Design for real classrooms', items: ['Robotics & AI lab design', 'NEP 2020 mapping', 'Customised proposals', 'Technical solution planning'] },
  { icon: Settings, number: '03', title: 'Execution & Training', subtitle: 'From plan to classroom', items: ['Lab setup and implementation', 'Teacher training', 'Student onboarding', 'End-to-end handover'] },
  { icon: TrendingUp, number: '04', title: 'Business Growth', subtitle: 'Scale impact sustainably', items: ['Workshops and competitions', 'Upselling and expansion', 'Referrals and network growth', 'Partnership development'] },
]

const gallery = [
  { image: '/images/school-records-event.jpeg', title: 'Student Achievement & Records', tag: 'School impact', description: 'Celebrating student innovation and achievement alongside school partners.' },
  { image: '/images/press-coverage.jpeg', title: 'Media Recognition', tag: 'Press coverage', description: 'Coverage of a student technology project and its recognition.' },
  { image: '/images/Pasted%20Image.png', title: 'Education Community', tag: 'Leadership', description: 'Engaging with the wider education community at an event.' },
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(n => n.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach(n => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['About', '#about'], ['Impact', '#impact'], ['Growth Story', '#growth'], ['Responsibilities', '#work'], ['Gallery', '#gallery'], ['Contact', '#contact']]
  return <header className="site-header">
    <a href="#home" className="brand" aria-label="Satish Rajput home">
      <span className="brand-mark">SR</span><span className="brand-copy"><b>SATISH RAJPUT</b><small>Business Head · WHIZROBO</small></span>
    </a>
    <button className="mobile-menu icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>
    <div className="header-actions">
      <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title="Toggle colour theme">
        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}<span className="toggle-knob" />
      </button>
      <a className="button button-primary header-cta" href="#contact">Let’s Connect <ArrowRight size={16} /></a>
    </div>
  </header>
}

function SectionHeading({ eyebrow, title, accent, description, light = false }) {
  return <div className={`section-heading ${light ? 'heading-light' : ''}`} data-reveal>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title} {accent && <span>{accent}</span>}</h2>
    {description && <p>{description}</p>}
  </div>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grid"></div><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
    <div className="hero-copy">
      <div className="eyebrow"><span className="pulse-dot"></span> BUSINESS LEADER <i>·</i> EDUCATIONAL TECHNOLOGY <i>·</i> SCHOOL PARTNERSHIPS</div>
      <h1>Empowering<br/>Schools with<br/><span>Future-Ready<br className="desktop-break"/> Technology.</span></h1>
      <p className="hero-lede">I work closely with schools to bring Robotics, AI, STEM and innovative learning solutions that create real impact for students, teachers and communities.</p>
      <div className="hero-buttons"><a className="button button-primary" href="#impact">Explore My Impact <ArrowRight size={17}/></a><a className="button button-outline" href="#contact"><Mail size={17}/> Get In Touch</a></div>
      <div className="hero-tags"><span><Building2/> School Partnerships</span><span><Cpu/> Robotics & AI Labs</span><span><GraduationCap/> STEM Education</span><span><Trophy/> Competitions & Workshops</span></div>
    </div>
    <div className="hero-visual">
      <div className="portrait-ring"></div><div className="portrait-glow"></div>
      <img className="hero-portrait" src="/images/satish-portrait.png" alt="Satish Rajput in a formal navy suit" />
      <div className="portrait-signature"><span>Satish Rajput</span><small>Business Head · WHIZROBO</small></div>
      <div className="floating-card experience-card"><span className="floating-icon"><Sparkles/></span><div><strong>10+</strong><small>Years of Experience</small></div></div>
      <div className="floating-card schools-card"><School/><div><strong>300+</strong><small>Schools empowered</small></div></div>
      <div className="floating-card growth-card"><ChartNoAxesCombined/><div><strong>7X</strong><small>Revenue growth</small></div></div>
      <div className="orbit-dot dot-a"></div><div className="orbit-dot dot-b"></div>
    </div>
    <div className="hero-bottom"><span><span className="line"></span> Scroll to explore</span><a href="#about" aria-label="Scroll to About section"><ArrowDownRight/></a></div>
  </section>
}

function About() {
  return <section className="about section-pad" id="about">
    <div className="about-photo-wrap" data-reveal>
      <img src="/images/satish-event-portrait.jpeg" alt="Satish Rajput attending an education event" />
      <div className="photo-caption"><span className="caption-dot"></span> Working alongside the education community</div>
      <div className="about-stamp"><strong>10+</strong><span>Years building<br/>meaningful impact</span></div>
    </div>
    <div className="about-copy" data-reveal>
      <SectionHeading eyebrow="ABOUT SATISH" title="Partnerships that turn" accent="ideas into impact." description="A business leader with a decade of experience in business development, robotics and AI lab implementation, educational technology, institutional partnerships, and end-to-end execution." />
      <p className="body-copy">My work is rooted in collaborating with schools—understanding their needs, shaping practical learning solutions, and supporting implementation from the first conversation through training and handover. The goal is simple: help schools create engaging, future-ready learning experiences for students and teachers.</p>
      <div className="about-values"><div><span><Handshake/></span><b>Relationship-first</b><small>Long-term school partnerships</small></div><div><span><Wrench/></span><b>Execution-focused</b><small>From proposal to implementation</small></div></div>
      <a href="#work" className="text-link">Explore my responsibilities <ArrowRight size={16}/></a>
    </div>
  </section>
}

function Impact() {
  return <section className="impact-section section-pad" id="impact">
    <SectionHeading eyebrow="SCHOOL-CENTRED IMPACT" title="Creating real impact" accent="in schools." description="A decade of bringing technology-enabled learning closer to classrooms through partnerships, labs, workshops and student opportunities." />
    <div className="metrics-grid">{metrics.map((m, i) => <article className="metric-card" data-reveal key={m.title} style={{'--delay': `${i * 90}ms`}}><div className="metric-top"><span className="metric-icon"><m.icon/></span><span className="metric-index">0{i + 1}</span></div><strong className="metric-value">{m.value}</strong><h3>{m.title}</h3><p>{m.detail}</p><div className="metric-accent"></div></article>)}</div>
    <div className="impact-note" data-reveal><span className="note-icon"><Sparkles/></span><p><b>Impact is more than a number.</b> It is the school that gains a new lab, the teacher who feels confident using it, and the student who discovers a new possibility.</p></div>
  </section>
}

function SchoolGallery() {
  const [active, setActive] = useState(0)
  const move = (direction) => setActive(current => (current + direction + gallery.length) % gallery.length)
  return <section className="school-gallery section-pad" id="gallery">
    <div className="gallery-intro" data-reveal><span className="eyebrow">IN THE FIELD</span><h2>School partnerships.<br/><span>Real-world moments.</span></h2><p>From student recognition to education events, these moments reflect the people and projects behind the impact.</p><div className="gallery-controls"><button onClick={() => move(-1)} aria-label="Previous gallery photo">←</button><span>0{active + 1} <i>/</i> 0{gallery.length}</span><button onClick={() => move(1)} aria-label="Next gallery photo">→</button></div></div>
    <div className="gallery-feature" data-reveal>
      <div className="gallery-image-frame"><img src={gallery[active].image} alt={gallery[active].title}/><span className="gallery-tag">{gallery[active].tag}</span></div>
      <div className="gallery-caption"><div><h3>{gallery[active].title}</h3><p>{gallery[active].description}</p></div><button className="round-arrow" onClick={() => move(1)} aria-label="Next photo"><ArrowRight/></button></div>
      <div className="gallery-thumbs">{gallery.map((item, index) => <button key={item.image} onClick={() => setActive(index)} className={index === active ? 'thumb active' : 'thumb'} aria-label={`Show ${item.title}`}><img src={item.image} alt=""/><span>{item.tag}</span></button>)}</div>
    </div>
  </section>
}

function Growth() {
  return <section className="growth-section section-pad" id="growth">
    <div className="growth-intro" data-reveal><span className="eyebrow">THE GROWTH STORY</span><h2>From ₹50 lakh<br/>to <span>₹3.5 crore.</span></h2><p>Company-level revenue figures supplied for 2022–2026, showing the broader growth journey at WHIZROBO.</p><div className="growth-multiple"><TrendingUp/><div><strong>7X</strong><small>Revenue multiple</small></div></div></div>
    <div className="chart-card" data-reveal><div className="chart-heading"><div><span className="eyebrow">WHIZROBO · 2022—2026</span><h3>Revenue growth</h3></div><span className="chart-badge"><TrendingUp size={15}/> Growth</span></div>
      <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={revenueData} margin={{top: 18, right: 8, left: 0, bottom: 0}}><defs><linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2879ff" stopOpacity={0.32}/><stop offset="95%" stopColor="#2879ff" stopOpacity={0.015}/></linearGradient></defs><CartesianGrid stroke="var(--chart-grid)" vertical={false} strokeDasharray="4 5"/><XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill:'var(--muted)',fontSize:12}} dy={9}/><YAxis hide domain={[0,4]}/><Tooltip content={({active,payload,label}) => active && payload?.length ? <div className="chart-tooltip"><small>{label}</small><strong>{payload[0].payload.label}</strong></div> : null}/><Area type="monotone" dataKey="amount" stroke="#2879ff" strokeWidth={3} fill="url(#revenueFill)" activeDot={{r:6,stroke:'#fff',strokeWidth:2,fill:'#2879ff'}}/></AreaChart></ResponsiveContainer></div>
      <div className="chart-values">{revenueData.map(d => <div key={d.year}><b>{d.label}</b><span>{d.year}</span></div>)}</div>
      <p className="chart-disclaimer">Company-level figures provided for this portfolio; not a claim of individual revenue ownership.</p>
    </div>
  </section>
}

function Work() {
  return <section className="work-section section-pad" id="work">
    <SectionHeading eyebrow="END-TO-END OWNERSHIP" title="I don’t just sell." accent="I build & deliver." description="A connected approach that supports schools from the first conversation to meaningful, lasting implementation." />
    <div className="responsibility-grid">{responsibilities.map((r, i) => <article className="responsibility-card" key={r.number} data-reveal style={{'--delay': `${i*80}ms`}}><div className="responsibility-top"><span className="responsibility-icon"><r.icon/></span><span className="responsibility-number">{r.number}</span></div><h3>{r.title}</h3><p className="responsibility-subtitle">{r.subtitle}</p><ul>{r.items.map(item => <li key={item}>{item}</li>)}</ul><div className="responsibility-line"></div></article>)}</div>
  </section>
}

function PressFeature() {
  return <section className="press-section section-pad">
    <div className="press-card" data-reveal>
      <div className="press-copy"><span className="eyebrow"><Newspaper size={14}/> RECOGNITION & STORIES</span><h2>Celebrating the power of <span>student innovation.</span></h2><p>School and student achievements deserve to be seen. The supplied press clipping highlights a student technology project and its recognition—an example of what can happen when schools make space for hands-on learning.</p><a className="button button-light" href="#gallery">View event photographs <ArrowRight size={16}/></a></div>
      <div className="press-image"><img src="/images/recognition-stories-robotics-workshop.png" alt="Hindi newspaper clipping about a student technology project and record recognition"/><div className="press-image-overlay">Student innovation · Media coverage</div></div>
    </div>
  </section>
}

function Contact() {
  return <section className="contact-section section-pad" id="contact">
    <div className="contact-main" data-reveal><span className="eyebrow">LET’S BUILD WHAT’S NEXT</span><h2>Future-ready schools<br/><span>start with a conversation.</span></h2><p>Interested in school partnerships, Robotics & AI labs, STEM programmes, workshops, or education initiatives? Let’s connect.</p><a className="button button-primary" href="mailto:rajputsatish18@gmail.com">Start a conversation <ArrowRight size={17}/></a></div>
    <div className="contact-details" data-reveal>
      <a className="contact-item" href="mailto:rajputsatish18@gmail.com"><span><Mail/></span><div><small>Email</small><strong>rajputsatish18@gmail.com</strong><em>Send an email <ExternalLink size={12}/></em></div><ArrowRight className="contact-arrow"/></a>
      <a className="contact-item" href="tel:7814295030"><span><Phone/></span><div><small>Phone</small><strong>7814295030</strong><em>Call directly <ExternalLink size={12}/></em></div><ArrowRight className="contact-arrow"/></a>
      <a className="contact-item" href="https://www.whizrobo.com" target="_blank" rel="noreferrer"><span><Globe/></span><div><small>Company website</small><strong>www.whizrobo.com</strong><em>Visit WHIZROBO <ExternalLink size={12}/></em></div><ArrowRight className="contact-arrow"/></a>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer"><a href="#home" className="footer-brand"><span className="brand-mark">SR</span><span><b>Satish Rajput</b><small>Business Head · WHIZROBO</small></span></a><p>Building partnerships. Enabling schools. Inspiring future-ready learning.</p><a href="#home" className="back-top">Back to top ↑</a><small className="copyright">© {new Date().getFullYear()} Satish Rajput. Portfolio presentation.</small></footer>
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sr-theme') || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('sr-theme', theme) }, [theme])
  useReveal()
  return <div className="app-shell"><Header theme={theme} setTheme={setTheme}/><main><Hero/><About/><Impact/><SchoolGallery/><Growth/><Work/><PressFeature/><Contact/></main><Footer/></div>
}