import Image from 'next/image';
import styles from './page.module.css';
import icon from './icon.png';
import heroImage from '../../public/images/multizer-hero-infrastructure.png';

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

const coreSolutions = [
  {
    label: 'Operate',
    title: 'Managed IT Operations',
    outcome: 'Keep your team productive.',
    description: 'We manage the systems behind your business with proactive support, resilient backups, and one accountable technical partner.',
    features: ['System administration', 'Backup & disaster recovery', 'Rapid-response helpdesk'],
    icon: services[0].icon,
    tone: 'solutionOperate',
  },
  {
    label: 'Build',
    title: 'Digital Solutions',
    outcome: 'Build around your workflow.',
    description: 'Purpose-built software, cloud tools, and technology roadmaps designed around how your organization actually operates.',
    features: ['Custom applications', 'Cloud collaboration', 'Technology planning'],
    icon: services[1].icon,
    tone: 'solutionBuild',
  },
  {
    label: 'Secure',
    title: 'Infrastructure & Security',
    outcome: 'Protect every point of access.',
    description: 'A coordinated security layer spanning your network, endpoints, premises, cameras, and physical access systems.',
    features: ['Cybersecurity monitoring', 'Network & low-voltage cabling', 'CCTV & access control'],
    icon: services[3].icon,
    tone: 'solutionProtect',
  },
];

const supportingServices = [services[2], services[4], services[5], services[6], services[7], services[8]];

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
      <input type="checkbox" id="businessNotice" className={styles.noticeToggle} defaultChecked aria-hidden="true" />
      <div className={styles.noticeOverlay} role="dialog" aria-modal="true" aria-labelledby="businessNoticeTitle">
        <section className={styles.noticeDialog}>
          <span className={styles.noticeBadge}>Notice</span>
          <h2 id="businessNoticeTitle">Business operations are currently paused.</h2>
          <p>We are temporarily not accepting new service requests or responding to inquiries.</p>
          <label htmlFor="businessNotice" className={styles.noticeClose} aria-label="Close notice">OK</label>
        </section>
      </div>

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
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.badge}><span></span> Established 2015 &middot; Small Business IT Partner</span>
            <h1 className={styles.heroTitle}>Your business,<br /><em>securely connected.</em></h1>
            <p className={styles.heroSubtitle}>
              One accountable technology partner for managed IT, custom software, network infrastructure,
              and physical security — so your team can keep moving forward.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className="btn btn-primary">Get a Free Consultation <span aria-hidden="true">→</span></a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
            <div className={styles.heroProof} aria-label="Service benefits">
              <span>Proactive monitoring</span>
              <span>Direct technician access</span>
              <span>End-to-end coverage</span>
            </div>
          </div>

          <aside className={styles.statusPanel} aria-label="Managed systems status">
            <div className={styles.statusHeader}>
              <div>
                <span className={styles.statusEyebrow}>MULTIZER CONTROL</span>
                <strong>Systems overview</strong>
              </div>
              <span className={styles.liveStatus}><i></i> Operational</span>
            </div>
            <div className={styles.statusRows}>
              <div><span>Network infrastructure</span><b>Protected</b></div>
              <div><span>Cloud &amp; backups</span><b>Synced</b></div>
              <div><span>Endpoint security</span><b>Monitored</b></div>
              <div><span>Physical access</span><b>Online</b></div>
            </div>
            <div className={styles.signal} aria-hidden="true">
              {[34, 54, 43, 70, 58, 82, 64, 88, 76, 94, 84, 100].map((height, index) => (
                <span key={index} style={{ '--signal-height': `${height}%` }} />
              ))}
            </div>
          </aside>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span>Explore</span>
          <i></i>
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
            <div className={styles.aboutGlow} />
            <span className={`${styles.archNode} ${styles.archCloud}`}>Cloud</span>
            <span className={`${styles.archNode} ${styles.archNetwork}`}>Network</span>
            <span className={`${styles.archNode} ${styles.archSecurity}`}>Security</span>
            <span className={`${styles.archNode} ${styles.archSupport}`}>Support</span>
            <div className={styles.archLines} aria-hidden="true" />
            <div className={styles.archCore}>
              <Image src={icon} alt="" height={54} width={54} />
              <strong>One IT Partner</strong>
              <span>Managed as one system</span>
            </div>
            <div className={styles.aboutCaption}>
              <span>Connected operations</span>
              <strong>Technology that works together.</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.servicesIntro}>
            <div>
              <span className={styles.eyebrow}>What We Offer</span>
              <h2>One partner for every layer of your technology.</h2>
            </div>
            <div className={styles.servicesIntroCopy}>
              <span>9 capabilities &middot; 1 accountable team</span>
              <p>From everyday support to critical infrastructure, we plan, build, protect, and manage your technology as one connected system.</p>
            </div>
          </div>

          <div className={styles.solutionGrid}>
            {coreSolutions.map((solution, index) => (
              <article className={`${styles.solutionCard} ${styles[solution.tone]}`} key={solution.title}>
                <div className={styles.solutionTopline}>
                  <span className={styles.solutionLabel}>{solution.label}</span>
                  <span className={styles.solutionNumber}>0{index + 1}</span>
                </div>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <p className={styles.solutionOutcome}>{solution.outcome}</p>
                <h3>{solution.title}</h3>
                <p className={styles.solutionDescription}>{solution.description}</p>
                <ul className={styles.solutionFeatures}>
                  {solution.features.map((feature) => (
                    <li key={feature}><span>✓</span>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.capabilitiesHeader}>
            <span>Specialized capabilities</span>
            <p>Focused expertise, coordinated under one technology strategy.</p>
          </div>

          <div className={styles.servicesGrid}>
            {supportingServices.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className={styles.serviceArrow} aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <div className={styles.serviceFlow} aria-label="Integrated service lifecycle">
              {['Plan', 'Build', 'Protect', 'Support'].map((step, index) => (
                <div className={styles.flowStep} key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className={styles.servicesCta}>
              <div>
                <span>Not sure what your business needs?</span>
                <strong>We&apos;ll help you build the right service plan.</strong>
              </div>
              <a href="#contact" className="btn btn-primary">Discuss Your IT Needs <span aria-hidden="true">→</span></a>
            </div>
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
          <p>&copy; 2024 MULTIZER LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
