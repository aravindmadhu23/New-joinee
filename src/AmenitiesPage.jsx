import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './AmenitiesPage.css';

// ─── IMAGE CARD COMPONENT ─────────────────────────────────────
const FeatureCard = ({ title, desc, image, chips, chipColor = 'blue', delay = 0 }) => {
  const [imgError, setImgError] = React.useState(false);
  const imgUrl = image ? new URL(`./assets/${image}`, import.meta.url).href : null;

  return (
    <motion.div
      className="amn-feature-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
    >
      {/* Text area */}
      <div className="amn-feature-card__text">
        <h3 className="amn-feature-card__title">{title}</h3>
        <p className="amn-feature-card__desc">{desc}</p>
        {chips && chips.length > 0 && (
          <div className="amn-chips">
            {chips.map((chip, i) => (
              <span key={i} className={`amn-chip amn-chip--${chipColor}`}>{chip}</span>
            ))}
          </div>
        )}
      </div>

      {/* Visual area */}
      <div className="amn-feature-card__visual">
        {imgUrl && !imgError ? (
          <img
            src={imgUrl}
            alt={title}
            className="amn-feature-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="amn-feature-card__placeholder">
            <span className="amn-feature-card__placeholder-icon">🖼️</span>
            <p className="amn-feature-card__placeholder-label">{image || 'image.png'}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── SECTION DIVIDER ───────────────────────────────────────────
const SectionDivider = ({ label, delay = 0 }) => (
  <motion.div
    className="amn-section-divider"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <span className="amn-section-divider__label">{label}</span>
    <div className="amn-section-divider__line" />
  </motion.div>
);

// ─── MAIN PAGE ─────────────────────────────────────────────────
const AmenitiesPage = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="amn-wrapper"
    >
      {/* TOP BAR */}
      <div className="amn-topbar">
        <div className="amn-container">
          <motion.button
            onClick={onBack}
            className="amn-back-btn"
            whileHover={{ scale: 1.03, x: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <ArrowLeft size={16} /> Back to Portal
          </motion.button>
        </div>
      </div>

      {/* HERO */}
      <section className="amn-hero">
        <div className="amn-hero__glow" />
        <div className="amn-hero__glow amn-hero__glow--alt" />
        <div className="amn-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="amn-hero__inner"
          >
            {/* <div className="amn-hero__badge">
              <span className="amn-hero__badge-dot" />
              Office Perks
            </div> */}
            <h1 className="amn-hero__title">
              Perks & Amenities that<br />Make Work Enjoyable
            </h1>
            <p className="amn-hero__desc">
              Discover the benefits, facilities, and recreation options designed to enhance your comfort and productivity at iDynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <div className="amn-container">

        {/* ═══════ INSURANCE & HEALTH ═══════ */}
        <SectionDivider label="Insurance & Health" delay={0.15} />

        <div className="amn-card-row">
          <FeatureCard
            title="Health Insurance"
            desc="Comprehensive health insurance coverage for self, spouse, and children."
            chips={['Self', 'Spouse', 'Children']}
            chipColor="green"
            image="health-insurance.png"
            delay={0.2}
          />
          {/*   <FeatureCard
            title="Term Insurance"
            desc="Term life insurance for financial security and peace of mind for your family."
            image="term-insurance.png"
            delay={0.25}
          /> */}
          <FeatureCard
            title="Medical Checkup"
            desc="Annual medical health checkup facility for all employees to stay on top of wellness."
            image="medical-checkup.png"
            delay={0.3}
          />
        </div>

        <div className="amn-note">
          <p className="amn-note__label">Important Note</p>
          <p className="amn-note__text">Medical insurance includes coverage for self, spouse, and children. Parents are not covered under the current policy </p>
        </div>

        {/* ═══════ SPORTS & ACTIVITIES ═══════ */}
        <SectionDivider label="Sports & Activities" delay={0.35} />

        <div className="amn-card-row">
          <FeatureCard
            title="Annual Tour"
            desc="Annual tour for team bonding, exploration, and recreation."
            image="annual-tour.png"
            delay={0.4}
          />
          <FeatureCard
            title="Sports Events"
            desc="Sports events and competitions conducted."
            image="sports-events.png"
            delay={0.45}
          />
          <FeatureCard
            title="Weekend Practice"
            desc="Organized weekend practice sessions for sports enthusiasts across teams."
            image="weekend-practice.png"
            delay={0.5}
          />
        </div>

        {/* ═══════ CAFETERIA & RECREATION ═══════ */}
        <SectionDivider label="Cafeteria & Recreation" delay={0.55} />

        <div className="amn-card-row">
          <FeatureCard
            title="3 Cafeterias"
            desc="Fully equipped cafeterias with an extensive selection of refreshments"
            /* chips={['Tea', 'Coffee', 'Nutrition Drinks', 'Milk']} */
            chipColor="green"
            image="cafeteria.png"
            delay={0.6}
          />
          <FeatureCard
            title="Dedicated Play Area"
            desc="Refresh and recharge between tasks in a fully equipped recreation zone."
            /*  chips={['8-Ball Pool', 'Table Soccer ', 'Carrom', 'Chess', 'Darts']} */
            chipColor="purple"
            image="play-area.png"
            delay={0.65}
          />
          <FeatureCard
            title="Vending Machine"
            desc="Quick refreshment drinks and snacks available for grab-and-go convenience anytime."
            image="vending-machine.png"
            delay={0.7}
          />
        </div>

        <div className="amn-footer-space" />
      </div>
    </motion.div>
  );
};

export default AmenitiesPage;
