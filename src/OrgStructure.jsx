import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Target, Briefcase, Heart, ShieldCheck, Users, Monitor, Palette, Search } from 'lucide-react';

export default function OrgStructure({ onBack }) {
    const leadership = [
        { name: "N Nagarajan", role: "Chief Executive Officer", short: "CEO", icon: <Zap size={20} /> },
        { name: "Sujan Christo", role: "Chief Operating Officer", short: "COO", icon: <Target size={20} /> },
    ];

    const deptHeads = [
        { name: "Franklin Jose", role: "HR", dept: "Human Resources", icon: <Heart size={16} /> },
        { name: "Anto Hilorian Cruz", role: "CFO", dept: "Finance", icon: <ShieldCheck size={16} /> },
        { name: "Bevis Oswin", role: "Software Head", dept: "Software", icon: <Monitor size={16} /> },
        { name: "Jim Andrew", role: "Art Dept Head", dept: "Art", icon: <Palette size={16} /> },
        { name: "Smithy Sekhar", role: "Compliance / QA Dept Head/AI research Head", dept: "Compliance & QA/AI research"icon: <Search size={16} /> },
    ];

    const artDept = [
        { name: "Stalin Mano", role: "Group Art Manager", location: "Marthandam" },
        { name: "Nithin Sasikumar", role: "Group Art Manager", location: "Technopark" },
        { name: "Jose Prakash", role: "Art Manager" },
        { name: "Anish Raja", role: "Art Manager" },
        { name: "Biju Valsalan", role: "Art Manager" },
        { name: "Prabhath Sundereshan", role: "Art Manager" },
    ];

    const otherDept = [
        { name: "Greeshma", role: "QA Manager", location: "Technopark" },
        { name: "Jeniet Varghese", role: "QA Manager", location: "Marthandam" },
        { name: "Balaji Somasundaram", role: "Digitizing" },
        { name: "Bertin Jerald Lazarus", role: "IT" },
    ];

    const departments = ["Administration", "Artwork", "Digitizing", "Finance", "Human Resources", "Quality Assurance", "Software", "IT"];

    return (
        <div style={styles.wrapper}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                body { margin: 0; padding: 0; }
            `}</style>

            {/* Top Bar */}
            <div style={styles.topBar}>
                <div style={styles.container}>
                    <button onClick={onBack} style={styles.backBtn}>
                        <ArrowLeft size={18} /> Back to Portal
                    </button>
                </div>
            </div>

            {/* Header */}
            <header style={styles.hero}>
                <div style={styles.container}>
                    <span style={styles.tag}>Organizational Flow</span>
                    <h1 style={styles.title}>Management <span style={{ color: '#00AEEF' }}>Structure</span></h1>
                    <p style={styles.subtitle}>A professional overview of our leadership and departmental synergy.</p>
                </div>
            </header>

            <div style={styles.container}>
                <div style={styles.mainGrid}>

                    {/* Left Column */}
                    <div>
                        {/* Executive Leadership */}
                        <div style={styles.sectionLabel}>Executive Leadership</div>
                        <div style={styles.stack}>
                            {leadership.map((person, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={styles.ceoCard}
                                >
                                    <div style={styles.avatarBox}>{person.icon}</div>
                                    <div>
                                        <h3 style={styles.cardName}>{person.name}</h3>
                                        <p style={styles.cardRole}>{person.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Department Heads */}
                        <div style={styles.sectionLabel}>Department Heads</div>
                        <div style={styles.mgrGrid}>
                            {deptHeads.map((person, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ translateY: -5 }}
                                    style={styles.mgrCard}
                                >
                                    <div style={styles.deptTag}>{person.icon} {person.dept}</div>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{person.name}</h4>
                                    <p style={{ margin: 0, color: '#00AEEF', fontSize: '0.85rem', fontWeight: 600 }}>{person.role}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Art Department */}
                        <div style={styles.sectionLabel}>Art Department</div>
                        <div style={styles.mgrGrid}>
                            {artDept.map((person, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ translateY: -5 }}
                                    style={styles.mgrCard}
                                >
                                    <div style={styles.deptTag}>{person.role}</div>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{person.name}</h4>
                                    {person.location && <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{person.location}</p>}
                                </motion.div>
                            ))}
                        </div>

                        {/* QA & Other */}
                        <div style={styles.sectionLabel}>QA & Other Departments</div>
                        <div style={styles.mgrGrid}>
                            {otherDept.map((person, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ translateY: -5 }}
                                    style={styles.mgrCard}
                                >
                                    <div style={styles.deptTag}>{person.role}</div>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{person.name}</h4>
                                    {person.location && <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>{person.location}</p>}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div style={styles.sidebar}>
                        <div style={styles.sideCard}>
                            <Users color="#00AEEF" size={32} />
                            <h3 style={{ fontSize: '1.4rem', margin: '15px 0 10px' }}>Operating Units</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Specialized departments collaborating for excellence.</p>
                            <div style={styles.pillContainer}>
                                {departments.map(d => (
                                    <span key={d} style={styles.pill}>{d}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// INLINE STYLES
const styles = {
    wrapper: {
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        color: '#1e293b',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 10001,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    topBar: {
        padding: '30px 0'
    },
    backBtn: {
        background: '#f1f5f9',
        border: 'none',
        color: '#1e293b',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.95rem'
    },
    hero: {
        textAlign: 'center',
        padding: '20px 0 50px'
    },
    tag: {
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '0.7rem',
        fontWeight: '800',
        color: '#00AEEF'
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '800',
        margin: '10px 0',
        letterSpacing: '-1px'
    },
    subtitle: {
        color: '#64748b',
        fontSize: '1.1rem'
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        marginTop: '20px'
    },
    sectionLabel: {
        fontSize: '0.8rem',
        fontWeight: '700',
        color: '#94a3b8',
        textTransform: 'uppercase',
        margin: '40px 0 20px',
        letterSpacing: '1px',
        borderBottom: '1px solid #f1f5f9',
        paddingBottom: '10px'
    },
    stack: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    ceoCard: {
        background: '#fff',
        border: '1px solid #f1f5f9',
        padding: '30px',
        borderRadius: '24px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
        display: 'flex',
        gap: '25px',
        alignItems: 'center'
    },
    avatarBox: {
        width: '65px',
        height: '65px',
        background: '#f0f9ff',
        color: '#00AEEF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: 'inset 0 0 0 1px rgba(0, 174, 239, 0.1)'
    },
    cardName: {
        margin: 0,
        fontSize: '1.4rem',
        fontWeight: '800',
        color: '#0f172a'
    },
    cardRole: {
        color: '#00AEEF',
        fontWeight: '700',
        fontSize: '0.95rem',
        margin: '4px 0'
    },
    mgrGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
    },
    mgrCard: {
        background: '#f8fafc',
        border: '1px solid #f1f5f9',
        padding: '25px',
        borderRadius: '22px',
        cursor: 'pointer',
        transition: '0.3s ease'
    },
    deptTag: {
        fontSize: '0.7rem',
        fontWeight: '800',
        color: '#94a3b8',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '12px'
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    sideCard: {
        background: '#ffffff',
        border: '1px solid #f1f5f9',
        padding: '40px',
        borderRadius: '32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.04)',
        position: 'sticky',
        top: '120px'
    },
    pillContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '25px'
    },
    pill: {
        background: '#f1f5f9',
        padding: '8px 16px',
        borderRadius: '50px',
        fontSize: '0.8rem',
        fontWeight: '700',
        color: '#475569'
    }
};