import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smooth transition
import { Users, FileText, Scale, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';

// ASSETS
import mainLogo from './assets/Idynamics_logo.png';
import heroImg from './assets/hero-image.png';
import locationsImg from './assets/locations.png';
import amenitiesImg from './assets/office-amenities.png';
import orgImg from './assets/org-structure.png';

import './App.css';
import './ManagementStructure.css'; // Import the management CSS
import PoliciesPage from './PoliciesPage';
import AmenitiesPage from './AmenitiesPage';

const wiggleAnimation = {
  y: [0, -12, 0],
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// ─── AVATAR COMPONENT ───────────────────────────────────────────
const Avatar = ({ image, name }) => {
  const [imgError, setImgError] = React.useState(false);
  const imgUrl = image ? new URL(`./assets/${image}`, import.meta.url).href : null;

  if (imgUrl && !imgError) {
    return <img src={imgUrl} alt={name} className="avatar-img" onError={() => setImgError(true)} />;
  }

  return (
    <div className="avatar-placeholder">
      <span className="avatar-placeholder-icon">👤</span>
      <p className="avatar-placeholder-label">{image}</p>
    </div>
  );
};

// ─── MAIN APP ──────────────────────────────────────────────────
const App = () => {
  // NAVIGATION STATE
  const [view, setView] = useState('portal'); // 'portal' or 'management'

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const leaders = [
    { name: "N Nagarajan", role: "Chief Executive Officer", image: "n-nagarajan.png" },
    { name: "Sujan Christo", role: "Chief Operating Officer", image: "sujan-christo.png" },
    { name: "Franklin Jose", role: "Head of Human Resources", image: "franklin-jose.png" },
    { name: "Jim Andrew", role: "Head of Art Department", image: "jim-andrew.png" },
    { name: "Smithy Sekhar", role: "Head of Compliance/QA/AI research", image: "smithy-sekhar.png" }
  ];

  // IF VIEW IS MANAGEMENT, SHOW THE NEW PAGE
  if (view === 'management') {
    return <ManagementStructurePage onBack={() => setView('portal')} />;
  }

  // IF VIEW IS POLICIES, SHOW THE POLICIES PAGE
  if (view === 'policies') {
    return <PoliciesPage onBack={() => setView('portal')} />;
  }

  // IF VIEW IS AMENITIES, SHOW THE AMENITIES PAGE
  if (view === 'amenities') {
    return <AmenitiesPage onBack={() => setView('portal')} />;
  }

  return (
    <div className="idynamics-portal">
      <nav className="navbar">
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={mainLogo} alt="Logo" className="navbar-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#office">The Office</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="container flex-row">
          <div className="hero-content">
            <h1 className="main-title">
              Welcome to the <br /><span className="text-blue">iDynamics Family!</span>
            </h1>
            <p className="subtitle">We're thrilled to have you on board. Let's get you settled in.</p>
          </div>
          <motion.div animate={wiggleAnimation} className="hero-image">
            <img src={heroImg} alt="Hero Illustration" />
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="leadership-section" id="leadership">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="leader-card">
                <Avatar image={leader.image} name={leader.name} />
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL STRUCTURE - CONNECTED HERE */}
      <section className="split-section" id="leadership-structure">
        <div className="container flex-row">
          <div className="content-left">
            <h3 className="pre-title">Understanding our</h3>
            <h2 className="accent-title">Organizational Structure</h2>
            <p className="description">Our management structure shows the organization of leadership and the chain of command.</p>
            {/* CLICK HANDLER ADDED HERE */}
            <LearnMoreBtn onClick={() => setView('management')} />
          </div>
          <motion.div animate={wiggleAnimation} className="image-right">
            <img src={orgImg} alt="Org Structure" />
          </motion.div>
        </div>
      </section>

      {/* REST OF SECTIONS REMAIN SAME */}
      <section className="split-section bg-soft" id="policies">
        <div className="container flex-row">
          <div className="content-left">
            <h3 className="pre-title">Understanding our</h3>
            <h2 className="accent-title">Workplace Policies</h2>
            <p className="description">These policies ensure consistency, compliance, and a smooth working environment.</p>
            <LearnMoreBtn onClick={() => setView('policies')} />
          </div>
          <div className="policy-grid">
            <PolicyCard icon={<Users />} title="Employee Guidelines" desc="Work ethics & conduct" />
            <PolicyCard icon={<FileText />} title="HR Policies" desc="Leave & Benefits" />
            <PolicyCard icon={<Scale />} title="Compliance Rules" desc="Legal standards" />
            <PolicyCard icon={<ShieldCheck />} title="Data Security" desc="Protection" />
          </div>
        </div>
      </section>

      <section className="split-section" id="office">
        <div className="container flex-row">
          <div className="content-left">
            <h3 className="pre-title">Understanding our</h3>
            <h2 className="accent-title">Office Perks & Amenities</h2>
            <p className="description">Our office facilities are designed to enhance comfort and productivity.</p>
            <LearnMoreBtn onClick={() => setView('amenities')} />
          </div>
          <motion.div animate={wiggleAnimation} className="image-right">
            <img src={amenitiesImg} alt="Office Amenities" />
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 iDynamics. All rights reserved.</p>
      </footer>
    </div>
  );
};

// FLOWCHART NODE — each person is one card
const FlowNode = ({ name, role, badge, tier = 'default', delay = 0 }) => (
  <motion.div
    className={`flow-node flow-node--${tier}`}
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay, type: 'spring', stiffness: 200 }}
    whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,174,239,0.12)' }}
  >
    {badge && <span className="flow-node__badge">{badge}</span>}
    <h3 className="flow-node__name">{name}</h3>
    <p className="flow-node__role">{role}</p>
  </motion.div>
);

// ANIMATED VERTICAL CONNECTOR
const VLine = ({ height = 48 }) => (
  <div className="flow-vline-wrap">
    <motion.div
      className="flow-vline"
      style={{ height }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  </div>
);

// ANIMATED HORIZONTAL DIVIDER WITH LABEL
const FlowDivider = ({ label, delay = 0 }) => (
  <motion.div
    className="flow-divider"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div
      className="flow-divider__line"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7, delay: delay + 0.1, ease: 'easeOut' }}
    />
    <span className="flow-divider__label">{label}</span>
    <motion.div
      className="flow-divider__line"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7, delay: delay + 0.1, ease: 'easeOut' }}
    />
  </motion.div>
);

// COMPONENT FOR THE MANAGEMENT STRUCTURE PAGE
const ManagementStructurePage = ({ onBack }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flow-wrapper"
    >
      {/* BACK NAV */}
      <div className="flow-topbar">
        <div className="flow-container">
          <motion.button
            onClick={onBack}
            className="flow-back-btn"
            whileHover={{ scale: 1.03, x: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <ArrowLeft size={16} /> Back to Portal
          </motion.button>
        </div>
      </div>

      {/* HERO WITH GLOW */}
      <section className="flow-hero">
        <div className="flow-hero__glow" />
        <div className="flow-hero__glow flow-hero__glow--alt" />
        <div className="flow-hero__glow flow-hero__glow--warm" />
        <div className="flow-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flow-hero__inner"
          >
            {/*  <span className="flow-hero__badge">Organization Chart</span> */}
            <h1 className="flow-hero__title">Management Structure</h1>
            <p className="flow-hero__desc">Visualizing our leadership hierarchy and departmental flow</p>
          </motion.div>
        </div>
      </section>

      {/* FLOWCHART BODY */}
      <section className="flow-container flow-body">

        {/* ═══ LEVEL 1: CEO ═══ */}
        <FlowDivider label="Executive Leadership" delay={0.15} />
        <div className="flow-row flow-row--center">
          <FlowNode name="N Nagarajan" role="Chief Executive Officer" badge="CEO" tier="executive" delay={0.2} />
        </div>

        <VLine />

        <div className="flow-row flow-row--center">
          <FlowNode name="Sujan Christo" role="Chief Operating Officer" badge="COO" tier="executive" delay={0.3} />
        </div>

        {/* ═══ LEVEL 2: DEPARTMENT HEADS ═══ */}
        <VLine height={56} />
        <FlowDivider label="Department Heads" delay={0.4} />

        <div className="flow-row flow-row--spread">
          <FlowNode name="Franklin Jose" role="HR" badge="Human Resources" delay={0.45} />
          <FlowNode name="Anto Hilorian Cruz" role="CFO" badge="Finance" delay={0.5} />
          <FlowNode name="Bevis Oswin" role="Software Head" badge="Software" delay={0.55} />
        </div>
        <div className="flow-row flow-row--spread" style={{ marginTop: 16 }}>
          <FlowNode name="Jim Andrew" role="Art Dept Head" badge="Art" delay={0.6} />
          <FlowNode name="Smithy Sekhar" role="Compliance / QA Head" badge="Compliance & QA" delay={0.65} />
        </div>

        {/* ═══ LEVEL 3: ART DEPARTMENT ═══ */}
        <VLine height={56} />
        <FlowDivider label="Art Department" delay={0.7} />

        <div className="flow-row flow-row--spread">
          <FlowNode name="Stalin Mano" role="Group Art Manager" badge="Marthandam" tier="team" delay={0.75} />
          <FlowNode name="Nithin Sasikumar" role="Group Art Manager" badge="Technopark" tier="team" delay={0.8} />
        </div>
        <VLine height={28} />
        <div className="flow-row flow-row--spread">
          <FlowNode name="Jose Prakash" role="Art Manager" tier="team" delay={0.85} />
          <FlowNode name="Anish Raja" role="Art Manager" tier="team" delay={0.88} />
          <FlowNode name="Biju Valsalan" role="Art Manager" tier="team" delay={0.91} />
          <FlowNode name="Prabhath Sundereshan" role="Art Manager" tier="team" delay={0.94} />
        </div>

        {/* ═══ LEVEL 4: QA ═══ */}
        <VLine height={56} />
        <FlowDivider label="Quality Assurance" delay={0.95} />
        <div className="flow-row flow-row--spread">
          <FlowNode name="Greeshma" role="QA Manager" badge="Technopark" tier="team" delay={1.0} />
          <FlowNode name="Jeniet Varghese" role="QA Manager" badge="Marthandam" tier="team" delay={1.05} />
        </div>

        {/* ═══ LEVEL 5: DIGITIZING ═══ */}
        <VLine height={56} />
        <FlowDivider label="Digitizing" delay={1.1} />
        <div className="flow-row flow-row--center">
          <FlowNode name="Balaji Somasundaram" role="Digitizing Head" badge="Digitizing" delay={1.15} />
        </div>

        {/* ═══ LEVEL 6: IT ═══ */}
        <VLine height={56} />
        <FlowDivider label="Information Technology" delay={1.2} />
        <div className="flow-row flow-row--center">
          <FlowNode name="Bertin Jerald Lazarus" role="IT Head" badge="IT" delay={1.25} />
        </div>

        <div style={{ height: 80 }} />
      </section>
    </motion.div>
  );
};

// UPDATED LEARN MORE BTN TO ACCEPT ONCLICK
const LearnMoreBtn = ({ onClick }) => (
  <motion.button
    className="learn-more-btn"
    onClick={onClick}
    whileHover={{ scale: 1.05, backgroundColor: "#009ed9" }}
    whileTap={{ scale: 0.95 }}
  >
    Learn More
    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}>
      <ChevronRight size={18} />
    </motion.span>
  </motion.button>
);

const PolicyCard = ({ icon, title, desc }) => (
  <motion.div whileHover={{ y: -5 }} className="policy-card">
    <div className="policy-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{desc}</p>
  </motion.div>
);

export default App;