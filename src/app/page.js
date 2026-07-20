import Image from 'next/image';
import styles from './page.module.css';
import icon from './icon.png';

const services = [
  {
    title: 'Managed IT Services',
    description: 'Ongoing system deployment and hands-on administration — including backup & disaster recovery — so your infrastructure stays protected, not just installed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="7" cy="17" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Custom Software Development',
    description: 'Purpose-built applications and internal tools designed around how your team actually works, not the other way around.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 7-5 5 5 5" />
        <path d="m15 7 5 5-5 5" />
      </svg>
    ),
  },
  {
    title: 'Helpdesk & Troubleshooting',
    description: 'Fast, reliable support for your team. We resolve technical issues quickly to minimize downtime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M20 19a4 4 0 0 1-4 4h-2" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity & Network Protection',
    description: 'Firewalls, endpoint protection, and proactive monitoring that keep threats out before they become an incident.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud migration, storage, and collaboration tools that let your team work securely from anywhere.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19h-11a4.5 4.5 0 0 1-.4-8.98 5.5 5.5 0 0 1 10.6-2.26A4.5 4.5 0 0 1 17.5 19z" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting & Planning',
    description: 'Strategic technology roadmaps and budget-conscious recommendations so every IT dollar moves your business forward.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m14.5 9.5-1.5 5-5 1.5 1.5-5 5-1.5z" />
      </svg>
    ),
  },
  {
    title: 'Network & Cabling',
    description: 'Professional network setup and low-voltage cabling installations for seamless connectivity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M5 8v3a2 2 0 0 0 2 2h2M19 8v3a2 2 0 0 1-2 2h-2M12 13v3" />
      </svg>
    ),
  },
  {
    title: 'CCTV & Security',
    description: 'High-definition CCTV installations to monitor your premises and ensure a secure environment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l6 2v4l-6 2z" />
        <rect x="9" y="9" width="10" height="6" rx="1.5" />
        <path d="M19 10.5h2v3h-2" />
      </svg>
    ),
  },
  {
    title: 'Access Control',
    description: 'Advanced access control systems to manage and restrict physical entry to your facilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
];

const process = [
  {
    step: '01',
    title: 'Assess',
    description: 'We review your current systems, workflows, and pain points to understand what your business actually needs.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'We design a solution and timeline that fits your budget — no unnecessary upsells, no guesswork.',
  },
  {
    step: '03',
    title: 'Deploy',
    description: 'Our technicians install, configure, and test everything with minimal disruption to your operations.',
  },
  {
    step: '04',
    title: 'Support',
    description: 'We stay on as your ongoing IT department — monitoring, maintaining, and troubleshooting as you grow.',
  },
];

const highlights = [
  'Dedicated point of contact for every account',
  'Transparent, upfront pricing with no hidden fees',
  'Certified technicians for networking & security',
  'Rapid response helpdesk support',
];

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logo}>
            <Image src={icon} alt="" height={34} width={34} priority />
            <span>MULTIZER <em>LLC</em></span>
          </a>

          <input type="checkbox" id="navToggle" className={styles.navToggle} />

          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">How We Work</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
          </nav>

          <label htmlFor="navToggle" className={styles.hamburger} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Established 2015 &middot; Small Business IT Partner</span>
          <h1 className={styles.heroTitle}>The IT department your business doesn&apos;t have to hire.</h1>
          <p className={styles.heroSubtitle}>
            MULTIZER LLC delivers end-to-end system deployment, custom software, network infrastructure,
            and physical security for small businesses — so you can stay focused on running yours.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip}>
        <div className={styles.trustStripInner}>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>2015</span>
            <span className={styles.trustLabel}>Founded</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>End-to-End</span>
            <span className={styles.trustLabel}>IT & Security Coverage</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>Direct</span>
            <span className={styles.trustLabel}>Access to Your Technician</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustValue}>Fast</span>
            <span className={styles.trustLabel}>Helpdesk Response</span>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>Who We Are</span>
            <h2>Your Dedicated IT Partner</h2>
            <p>
              Since 2015, MULTIZER LLC has been the trusted technology backbone for small businesses.
              We understand that not every company has the resources for an in-house IT department —
              that&apos;s where we step in.
            </p>
            <p>
              From custom software development to complex network deployments and physical security,
              we handle all your technological needs so you can focus on growing your business.
            </p>
            <ul className={styles.checklist}>
              {highlights.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
        </div>
      </section>

      <section id="services" className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ textAlign: 'center', display: 'block' }}>What We Offer</span>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>End-to-end technology solutions to keep your business running securely and efficiently.</p>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={styles.section}>
        <span className={styles.eyebrow} style={{ textAlign: 'center', display: 'block' }}>Our Process</span>
        <h2 className={styles.sectionTitle}>How We Work</h2>
        <p className={styles.sectionSubtitle}>A straightforward process built for businesses that need results, not IT jargon.</p>

        <div className={styles.processGrid}>
          {process.map((item) => (
            <div className={styles.processCard} key={item.step}>
              <span className={styles.processStep}>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <span className={styles.eyebrow} style={{ color: 'var(--accent)' }}>Get In Touch</span>
          <h2 className={styles.contactTitle}>Ready to Upgrade Your IT?</h2>
          <p>Contact us today. We act as your very own IT department.</p>

          <div className={styles.contactInfo}>
            <a href="tel:12015005317" className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoText}>201-500-5317</div>
            </a>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div className={styles.infoText}>KENNY@MULTIZER.COM</div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image src={icon} alt="" height={30} width={30} />
              <span>MULTIZER <em>LLC</em></span>
            </div>
            <p>Managed IT services and physical security for small businesses, since 2015.</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">How We Work</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Services</h4>
            <a href="#services">Managed IT Services</a>
            <a href="#services">Cybersecurity</a>
            <a href="#services">Network & Cabling</a>
            <a href="#services">CCTV & Access Control</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <a href="tel:12015005317">201-500-5317</a>
            <a href="mailto:KENNY@MULTIZER.COM">KENNY@MULTIZER.COM</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} MULTIZER LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
