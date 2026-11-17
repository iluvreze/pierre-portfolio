import './App.css'

import profileImg from './assets/profile.jpg'
import ustLogo from './assets/ust-logo.png'

import trackwise1 from './assets/trackwise-1.png'
import trackwise21 from './assets/trackwise-2.1.png'
import trackwise2 from './assets/trackwise-2.png'
import trackwise3 from './assets/trackwise-3.png'
import trackwise4 from './assets/trackwise-4.png'

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion'

import {
  useEffect,
  useRef,
  useState,
} from 'react'


const ease = [0.22, 1, 0.36, 1]


const blurReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(12px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 1,
      ease,
    },
  },
}


const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}


const projects = [
  {
    number: '01',
    title: 'TrackWise',
    type: 'AI-Assisted Academic Guidance',
    year: '2026',

    description:
      'A digital academic guidance platform designed to help students explore specialization tracks through assessments, recommendations, and personalized academic roadmaps.',

    tech:
      'React · JavaScript · Node.js · UI/UX',

    images: [
      trackwise1,
      trackwise21,
      trackwise2,
      trackwise3,
      trackwise4,
    ],
  },

  {
    number: '02',
    title: 'Drafters Autotech',
    type: 'Inventory Management System',
    year: '2026',

    description:
      'A clean and responsive inventory experience built around structured workflows, user-centered navigation, wireframing, and frontend implementation.',

    tech:
      'Figma · HTML5 · CSS3 · JavaScript',
  },

  {
    number: '03',
    title: 'Pet Paw',
    type: 'Store & Inventory Management',
    year: '2025',

    description:
      'A web-based management system combining visual interface design with inventory functionality, database integration, and responsive frontend development.',

    tech:
      'HTML · CSS · JavaScript · PHP · MySQL',
  },
]


const education = [
  {
    number: '01',
    institution: 'University of Santo Tomas',
    degree: 'Bachelor of Science in Information Technology',
    focus: 'Web & Mobile App Development',
    year: '2026',
    logo: ustLogo,
  },

  {
    number: '02',
    institution: 'University of Santo Tomas',
    degree: 'Music, Arts & Design',
    focus: 'Senior High School',
    year: '2022',
    logo: ustLogo,
  },
]


const certifications = [
  {
    number: '01',
    issuer: 'Cisco Networking Academy',
    title: 'CCNA Networking Program',

    description:
      'Introduction to Networks · Switching, Routing & Wireless Essentials · Enterprise Networking, Security & Automation',

    status: 'Completed',
  },

  {
    number: '02',
    issuer: 'Google',
    title: 'Google AI Professional Certificate',

    description:
      'Professional training in practical AI tools, workflows, prompting, and responsible AI-assisted work.',

    status: 'Completed',
  },
]


function App() {
  const [projectHover, setProjectHover] =
    useState(false)


  const mouseX =
    useMotionValue(-100)

  const mouseY =
    useMotionValue(-100)


  const smoothX =
    useSpring(
      mouseX,
      {
        stiffness: 220,
        damping: 26,
        mass: 0.35,
      }
    )


  const smoothY =
    useSpring(
      mouseY,
      {
        stiffness: 220,
        damping: 26,
        mass: 0.35,
      }
    )


  useEffect(() => {
    const moveMouse = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener(
      'mousemove',
      moveMouse
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moveMouse
      )
    }
  }, [mouseX, mouseY])


  const cursorX =
    useTransform(
      smoothX,
      (value) => value - 5
    )


  const cursorY =
    useTransform(
      smoothY,
      (value) => value - 5
    )


  const {
    scrollYProgress: pageScroll,
  } = useScroll()


  const smoothPageScroll =
    useSpring(
      pageScroll,
      {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
      }
    )


  const heroRef =
    useRef(null)


  const {
    scrollYProgress: heroScroll,
  } = useScroll({
    target: heroRef,

    offset: [
      'start start',
      'end start',
    ],
  })


  const heroY =
    useTransform(
      heroScroll,
      [0, 1],
      [0, 100]
    )


  const heroOpacity =
    useTransform(
      heroScroll,
      [0, 0.85],
      [1, 0]
    )


  const heroScale =
    useTransform(
      heroScroll,
      [0, 1],
      [1, 0.975]
    )


  const heroSerifX =
    useTransform(
      heroScroll,
      [0, 1],
      [0, 45]
    )


  const heroOrbitY =
    useTransform(
      heroScroll,
      [0, 1],
      [0, -45]
    )


  return (
    <main className="site">

      {/* SCROLL */}

      <motion.div
        className="scroll-progress"

        style={{
          scaleX: smoothPageScroll,
        }}
      />


      {/* CURSOR */}

      <motion.div
        className={`cursor ${
          projectHover
            ? 'cursor-project'
            : ''
        }`}

        style={{
          x: cursorX,
          y: cursorY,
        }}

        animate={{
          rotate:
            projectHover
              ? 45
              : 0,
        }}

        transition={{
          duration: 0.3,
          ease,
        }}
      />


      {/* NAVIGATION */}

      <motion.nav
        className="navbar"

        initial={{
          opacity: 0,
          y: -16,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
          delay: 0.2,
          ease,
        }}
      >

        <motion.a
          href="#top"
          className="brand"

          whileHover={{
            x: 3,
          }}
        >
          P/C<span>®</span>
        </motion.a>


        <div className="nav-meta">
          PORTFOLIO / 2026
        </div>


        <div className="nav-links">

          <a href="#profile">
            Profile
          </a>

          <a href="#work">
            Work
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </motion.nav>


      {/* HERO */}

      <section
        className="hero"
        id="top"
        ref={heroRef}
      >

        <motion.div
          className="hero-grid-motion"

          animate={{
            x: [0, -22, 0],
            y: [0, -12, 0],
          }}

          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        <motion.div
          className="hero-orbit"

          style={{
            y: heroOrbitY,
          }}

          initial={{
            opacity: 0,
            scale: 0.82,
            rotate: -8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}

          transition={{
            duration: 1.5,
            delay: 0.45,
            ease,
          }}
        >

          <motion.div
            className="hero-orbit-ring"

            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 34,
              repeat: Infinity,
              ease: 'linear',
            }}
          >

            <span className="orbit-point orbit-point-one" />

            <span className="orbit-point orbit-point-two" />

          </motion.div>


          <motion.div
            className="hero-orbit-center"

            animate={{
              rotate: -360,
            }}

            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            P/C
          </motion.div>


          <span className="orbit-label orbit-label-top">
            DESIGN
          </span>


          <span className="orbit-label orbit-label-bottom">
            DEVELOPMENT
          </span>

        </motion.div>


        <motion.div
          className="hero-inner"

          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >

          <div className="hero-meta">

            <motion.div
              className="hero-meta-left"

              initial={{
                opacity: 0,
                y: 16,
                filter: 'blur(8px)',
              }}

              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}

              transition={{
                duration: 0.9,
                delay: 0.35,
                ease,
              }}
            >

              <span>
                Frontend Developer
              </span>

              <span>
                UI / UX Designer
              </span>

            </motion.div>


            <motion.div
              className="hero-meta-right"

              initial={{
                opacity: 0,
                y: 16,
                filter: 'blur(8px)',
              }}

              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}

              transition={{
                duration: 0.9,
                delay: 0.5,
                ease,
              }}
            >

              <span>
                Manila, Philippines
              </span>


              <span className="hero-available">

                <i />

                Open for opportunities & freelance

              </span>

            </motion.div>

          </div>


          <div className="hero-content">

            <motion.div
              className="hero-identity"

              initial={{
                opacity: 0,
                x: -20,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.85,
                delay: 0.45,
                ease,
              }}
            >

              <span>
                PIERRE CARL TOLENTINO
              </span>


              <span className="hero-identity-line" />


              <span>
                PORTFOLIO / 2026
              </span>

            </motion.div>


            <div className="hero-title">

              <div className="hero-line-mask">

                <motion.h1
                  initial={{
                    y: '115%',
                    rotate: 1.5,
                    filter: 'blur(8px)',
                  }}

                  animate={{
                    y: 0,
                    rotate: 0,
                    filter: 'blur(0px)',
                  }}

                  transition={{
                    duration: 1.15,
                    delay: 0.15,
                    ease,
                  }}
                >
                  I DESIGN
                </motion.h1>

              </div>


              <div className="hero-line-mask">

                <motion.h1
                  initial={{
                    y: '115%',
                    rotate: -1,
                    filter: 'blur(8px)',
                  }}

                  animate={{
                    y: 0,
                    rotate: 0,
                    filter: 'blur(0px)',
                  }}

                  transition={{
                    duration: 1.15,
                    delay: 0.27,
                    ease,
                  }}
                >
                  WHAT I BUILD.
                </motion.h1>

              </div>


              <div className="hero-line-mask hero-serif-mask">

                <motion.h1
                  className="serif-title"

                  style={{
                    x: heroSerifX,
                  }}

                  initial={{
                    y: '120%',
                    opacity: 0,
                    filter: 'blur(10px)',
                  }}

                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}

                  transition={{
                    duration: 1.2,
                    delay: 0.4,
                    ease,
                  }}
                >
                  from idea to interface.
                </motion.h1>

              </div>

            </div>

          </div>


          <motion.div
            className="hero-bottom"

            initial={{
              opacity: 0,
              y: 20,
              filter: 'blur(8px)',
            }}

            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}

            transition={{
              duration: 0.9,
              delay: 0.85,
              ease,
            }}
          >

            <div className="hero-description-wrap">

              <span className="hero-description-index">
                01
              </span>


              <p>
                Frontend development and interface
                design — taking ideas from early
                concepts to working digital products.
              </p>

            </div>


            <motion.a
              href="#profile"
              className="hero-scroll-link"

              whileHover={{
                x: 6,
              }}
            >

              <span>
                Explore
              </span>

              <span>
                ↓
              </span>

            </motion.a>

          </motion.div>

        </motion.div>

      </section>


      {/* PROFILE */}

      <section
        className="profile"
        id="profile"
      >

        <SectionTop
          left="01 / Profile"
          right="Developer × Designer"
        />


        <div className="profile-layout">

          <motion.div
            className="profile-visual"

            initial={{
              opacity: 0,
              scale: 0.96,
              filter: 'blur(16px)',
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}

            transition={{
              duration: 1.1,
              ease,
            }}
          >

            <div className="profile-grid" />


            <motion.div
              className="profile-image-wrap"

              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
                filter: 'blur(12px)',
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 1,
                delay: 0.15,
                ease,
              }}
            >

              <img
                src={profileImg}
                alt="Pierre Carl Tolentino"
                className="profile-image"
              />


              <div className="profile-image-overlay" />

            </motion.div>

          </motion.div>


          <motion.div
            className="profile-content"

            variants={stagger}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.25,
            }}
          >

            <motion.p
              className="profile-label"
              variants={blurReveal}
            >
              A little about me
            </motion.p>


            <motion.h2
              variants={blurReveal}
            >
              I build with
              <span> curiosity,</span>
              <em> intention,</em>
              and detail.
            </motion.h2>


            <motion.p
              className="profile-description"
              variants={blurReveal}
            >
              I&apos;m Pierre, an Information Technology
              graduate focused on frontend development,
              interface design, and building digital
              products that are both functional and
              thoughtfully designed.
            </motion.p>


            <motion.div
              className="profile-availability"
              variants={blurReveal}
            >

              <div className="availability-status">

                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.65, 1, 0.65],
                  }}

                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />


                <p>
                  Currently available
                </p>

              </div>


              <h3>
                Open to full-time roles,
                <em> freelance projects,</em>
                and creative collaborations.
              </h3>

            </motion.div>


            <motion.div
              className="profile-facts"
              variants={blurReveal}
            >

              <div>
                <span>01</span>
                <p>Frontend Development</p>
              </div>

              <div>
                <span>02</span>
                <p>UI / UX Design</p>
              </div>

              <div>
                <span>03</span>
                <p>Visual Design</p>
              </div>

              <div>
                <span>04</span>
                <p>Freelance Projects</p>
              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* WORK */}

      <section
        className="work"
        id="work"
      >

        <SectionTop
          left="02 / Selected Work"
          right="Digital products & systems"
        />


        <motion.div
          className="work-intro"

          initial={{
            opacity: 0,
            y: 24,
            filter: 'blur(10px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.9,
            ease,
          }}
        >

          <p>
            Selected projects across development,
            interface design, and digital product work.
          </p>

        </motion.div>


        <div className="projects">

          {projects.map(
            (project) => (

              <Project
                key={project.number}
                project={project}

                onEnter={() => {
                  setProjectHover(true)
                }}

                onLeave={() => {
                  setProjectHover(false)
                }}
              />

            )
          )}

        </div>

      </section>


      {/* EDUCATION */}

      <section
        className="education"
        id="education"
      >

        <SectionTop
          left="03 / Education"
          right="Academic Background"
        />


        <motion.div
          className="education-intro"

          initial={{
            opacity: 0,
            y: 30,
            filter: 'blur(12px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 1,
            ease,
          }}
        >

          <h2>
            Technology shaped
            <span> the craft.</span>
          </h2>


          <p>
            A technical education supported by a
            creative foundation gives me a perspective
            that combines structure, technology,
            and visual thinking.
          </p>

        </motion.div>


        <div className="education-list">

          {education.map(
            (item, index) => (

              <motion.article
                className="education-row"

                key={item.number}

                initial={{
                  opacity: 0,
                  y: 28,
                  filter: 'blur(10px)',
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}

                viewport={{
                  once: true,
                  amount: 0.4,
                }}

                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease,
                }}

                whileHover={{
                  x: 6,
                }}
              >

                <span className="education-number">
                  {item.number}
                </span>


                <div className="education-logo-wrap">

                  <img
                    src={item.logo}
                    alt="University of Santo Tomas"
                    className="education-logo"
                  />

                </div>


                <div className="education-main">

                  <p>
                    {item.institution}
                  </p>

                  <h3>
                    {item.degree}
                  </h3>

                </div>


                <div className="education-focus">

                  <p>
                    {item.focus}
                  </p>

                </div>


                <span className="education-year">
                  {item.year}
                </span>

              </motion.article>

            )
          )}

        </div>

      </section>


      {/* CERTIFICATIONS */}

      <section
        className="certifications"
        id="certifications"
      >

        <SectionTop
          left="04 / Certifications"
          right="Professional Learning"
        />


        <motion.div
          className="certifications-intro"

          initial={{
            opacity: 0,
            y: 30,
            filter: 'blur(10px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.9,
            ease,
          }}
        >

          <h2>
            Learning beyond
            <span> the classroom.</span>
          </h2>


          <p>
            Continuing to strengthen my technical
            foundation through professional learning
            in networking, emerging technology,
            and modern digital workflows.
          </p>

        </motion.div>


        <div className="certification-list">

          {certifications.map(
            (certificate, index) => (

              <motion.article
                className="certification-row"

                key={certificate.number}

                initial={{
                  opacity: 0,
                  y: 24,
                  filter: 'blur(9px)',
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}

                viewport={{
                  once: true,
                  amount: 0.35,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease,
                }}

                whileHover={{
                  x: 7,
                }}
              >

                <span className="certification-number">
                  {certificate.number}
                </span>


                <div className="certification-main">

                  <p>
                    {certificate.issuer}
                  </p>

                  <h3>
                    {certificate.title}
                  </h3>

                  <span className="certification-description">
                    {certificate.description}
                  </span>

                </div>


                <span className="certification-status">
                  {certificate.status}
                </span>

              </motion.article>

            )
          )}

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="statement">

        <motion.div
          className="statement-inner"

          initial={{
            opacity: 0,
            y: 45,
            filter: 'blur(12px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
            amount: 0.35,
          }}

          transition={{
            duration: 1,
            ease,
          }}
        >

          <span>
            PCT / PHILOSOPHY
          </span>


          <h2>
            Good design should feel

            <motion.em
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.9,
                delay: 0.15,
                ease,
              }}
            >
              effortless.
            </motion.em>

          </h2>


          <p>
            Clear structure. Purposeful motion.
            Thoughtful interaction.
          </p>

        </motion.div>

      </section>


      {/* APPROACH */}

      <section
        className="about"
        id="about"
      >

        <SectionTop
          left="05 / Approach"
          right="Design × Development"
        />


        <div className="about-grid">

          <motion.div
            className="about-heading"

            variants={stagger}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.3,
            }}
          >

            <motion.h2 variants={blurReveal}>
              DESIGN WAS
            </motion.h2>


            <motion.h2 variants={blurReveal}>
              THE BEGINNING.
            </motion.h2>


            <motion.h2
              variants={blurReveal}
              className="about-serif"
            >
              Code became
            </motion.h2>


            <motion.h2
              variants={blurReveal}
              className="about-serif"
            >
              the medium.
            </motion.h2>

          </motion.div>


          <motion.div
            className="about-copy"

            initial={{
              opacity: 0,
              y: 30,
              filter: 'blur(10px)',
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1,
              ease,
            }}
          >

            <p>
              My background in visual design influenced
              how I approach development.
            </p>


            <p>
              I think about interfaces not only as
              functional systems, but as experiences
              that should feel clear, responsive,
              and intentional.
            </p>


            <p>
              I enjoy transforming ideas, wireframes,
              and concepts into polished digital
              products through design and development.
            </p>

          </motion.div>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="capabilities">

        <SectionTop
          left="06 / Capabilities"
          right="What I Do"
        />


        <div className="capability-list">

          <Capability
            number="01"
            title="Frontend Development"
            tools="React · JavaScript · HTML5 · CSS3"
          />


          <Capability
            number="02"
            title="UI / UX Design"
            tools="Figma · Wireframes · Prototypes"
          />


          <Capability
            number="03"
            title="Backend & Database"
            tools="Node.js · PHP · MySQL"
          />


          <Capability
            number="04"
            title="AI-Assisted Development"
            tools="ChatGPT · Claude · Gemini · Prompting · Review & Validation"
          />


          <Capability
            number="05"
            title="Networking"
            tools="Routing · Switching · Wireless · Network Security"
          />


          <Capability
            number="06"
            title="Visual Design"
            tools="Canva · After Effects · Typography"
          />

        </div>


        <motion.p
          className="ai-practice-note"

          initial={{
            opacity: 0,
            y: 15,
            filter: 'blur(8px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
            ease,
          }}
        >
          I use AI as a supporting tool for
          research, ideation, development,
          and repetitive workflows while
          reviewing and validating the final
          output myself.
        </motion.p>

      </section>


      {/* EXPERIENCE */}

      <section className="experience">

        <SectionTop
          left="07 / Experience"
          right="2026"
        />


        <motion.div
          className="experience-row"

          initial={{
            opacity: 0,
            y: 30,
            filter: 'blur(10px)',
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.9,
            ease,
          }}
        >

          <div className="experience-main">

            <span>
              ACCENTURE
            </span>


            <motion.h3
              whileHover={{
                x: 5,
              }}
            >
              Academy Delegate
            </motion.h3>

          </div>


          <div className="experience-side">

            <p>SAP BTP</p>

            <p>SAP ABAP</p>

            <p>SAP PI/PO</p>

            <p>Integration Suite</p>

            <p>500 Hours</p>

          </div>

        </motion.div>

      </section>


      {/* CONTACT */}

      <section
        className="contact"
        id="contact"
      >

        <SectionTop
          left="08 / Contact"
          right="● Open for work & freelance"
          accentRight
        />


        <div className="contact-layout">

          <div className="contact-heading">

            <div className="contact-mask">

              <motion.h2
                initial={{
                  y: '110%',
                  opacity: 0,
                  filter: 'blur(10px)',
                }}

                whileInView={{
                  y: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}

                viewport={{
                  once: true,
                  amount: 0.5,
                }}

                transition={{
                  duration: 1,
                  ease,
                }}
              >
                LET&apos;S BUILD
              </motion.h2>

            </div>


            <div className="contact-mask">

              <motion.h2
                className="contact-serif"

                initial={{
                  y: '110%',
                  opacity: 0,
                  filter: 'blur(10px)',
                }}

                whileInView={{
                  y: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}

                viewport={{
                  once: true,
                  amount: 0.5,
                }}

                transition={{
                  duration: 1,
                  delay: 0.08,
                  ease,
                }}
              >
                something meaningful.
              </motion.h2>

            </div>

          </div>


          <motion.div
            className="contact-side"

            initial={{
              opacity: 0,
              y: 24,
              filter: 'blur(8px)',
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}

            viewport={{
              once: true,
              amount: 0.4,
            }}

            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
          >

            <p className="contact-eyebrow">
              HAVE SOMETHING IN MIND?
            </p>


            <p className="contact-description">
              Whether it&apos;s a full-time
              opportunity, freelance project,
              website, interface, or creative
              idea, I&apos;m open to building
              something thoughtful together.
            </p>


            <motion.a
              href="mailto:carlpierre231@gmail.com"
              className="contact-email"

              whileHover={{
                x: 5,
              }}
            >
              Start a conversation ↗
            </motion.a>

          </motion.div>

        </div>


        <motion.div
          className="contact-bottom"

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
            delay: 0.25,
            ease,
          }}
        >

          <a
            href="mailto:carlpierre231@gmail.com"
            className="contact-address"
          >
            carlpierre231@gmail.com ↗
          </a>


          <div className="social-links">

            <motion.a
              href="https://github.com/iluvreze"
              target="_blank"
              rel="noreferrer"

              whileHover={{
                y: -3,
              }}
            >
              GitHub ↗
            </motion.a>


            <motion.a
              href="https://www.linkedin.com/in/pierre-carl-tolentino/"
              target="_blank"
              rel="noreferrer"

              whileHover={{
                y: -3,
              }}
            >
              LinkedIn ↗
            </motion.a>

          </div>

        </motion.div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <p>
          P/C® — 2026
        </p>


        <p>
          Pierre Carl Tolentino
        </p>


        <motion.a
          href="#top"

          whileHover={{
            y: -3,
          }}
        >
          Back to top ↑
        </motion.a>

      </footer>

    </main>
  )
}



function SectionTop({
  left,
  right,
  accentRight = false,
}) {
  return (
    <motion.div
      className="section-top"

      initial={{
        opacity: 0,
        filter: 'blur(8px)',
      }}

      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.8,
      }}
    >

      <motion.p
        initial={{
          x: -18,
          opacity: 0,
        }}

        whileInView={{
          x: 0,
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
          ease,
        }}
      >
        {left}
      </motion.p>


      <motion.p
        className={
          accentRight
            ? 'availability'
            : ''
        }

        initial={{
          x: 18,
          opacity: 0,
        }}

        whileInView={{
          x: 0,
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
          ease,
        }}
      >
        {right}
      </motion.p>

    </motion.div>
  )
}



function Project({
  project,
  onEnter,
  onLeave,
}) {
  const ref =
    useRef(null)

  const [activeImage, setActiveImage] =
    useState(0)

  const [isHovered, setIsHovered] =
    useState(false)

  const hasImages =
    Array.isArray(project.images) &&
    project.images.length > 0


  useEffect(() => {
    if (
      !hasImages ||
      isHovered
    ) {
      return undefined
    }

    const timer =
      window.setInterval(() => {
        setActiveImage(
          (current) =>
            (
              current + 1
            ) %
            project.images.length
        )
      }, 2500)

    return () => {
      window.clearInterval(timer)
    }
  }, [
    hasImages,
    isHovered,
    project.images,
  ])


  const {
    scrollYProgress,
  } = useScroll({
    target: ref,

    offset: [
      'start end',
      'end start',
    ],
  })


  const visualY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [35, -35]
    )


  const visualScale =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [
        0.985,
        1,
        0.985,
      ]
    )


  const titleY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [15, -15]
    )


  const handleMouseEnter = () => {
    setIsHovered(true)

    if (onEnter) {
      onEnter()
    }
  }


  const handleMouseLeave = () => {
    setIsHovered(false)

    if (onLeave) {
      onLeave()
    }
  }


  return (
    <motion.article
      className={`project ${
        hasImages
          ? 'project-has-media'
          : ''
      }`}

      ref={ref}

      initial={{
        opacity: 0,
        y: 35,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.12,
      }}

      transition={{
        duration: 0.85,
        ease,
      }}

      onMouseEnter={
        handleMouseEnter
      }

      onMouseLeave={
        handleMouseLeave
      }
    >

      <div className="project-top">

        <span className="project-number">
          {project.number}
        </span>


        <span className="project-type">
          {project.type}
        </span>


        <span className="project-year">
          {project.year}
        </span>

      </div>


      <motion.div
        className={`project-visual ${
          hasImages
            ? 'project-visual-media'
            : ''
        }`}

        style={{
          y: visualY,
          scale: visualScale,
        }}

        whileHover={{
          scale: 0.994,
        }}
      >

        {hasImages ? (
          <>
            <div className="project-slideshow">

              <AnimatePresence
                initial={false}
                mode="sync"
              >

                <motion.img
                  key={
                    project.images[
                      activeImage
                    ]
                  }

                  src={
                    project.images[
                      activeImage
                    ]
                  }

                  alt={`${project.title} screenshot ${
                    activeImage + 1
                  }`}

                  className="project-image"

                  initial={{
                    opacity: 0,
                    scale: 1.035,
                    filter:
                      'blur(8px)',
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter:
                      'blur(0px)',
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.985,
                    filter:
                      'blur(5px)',
                  }}

                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                />

              </AnimatePresence>

            </div>


            <div className="project-media-vignette" />


            <div className="project-overlay">

              <div className="project-overlay-top">

                <span>
                  P/C PROJECT
                </span>

                <span>
                  {project.number}
                </span>

              </div>


              <div className="project-overlay-main">

                <p className="project-overlay-kicker">
                  {project.type}
                </p>


                <h2>
                  {project.title}
                </h2>


                <p className="project-overlay-description">
                  {project.description}
                </p>


                <p className="project-overlay-tech">
                  {project.tech}
                </p>

              </div>


              <div className="project-overlay-bottom">

                <span>
                  Project Preview
                </span>

                <span>
                  View Case Study ↗
                </span>

              </div>

            </div>


            <div className="project-slide-status">

              <span className="project-slide-count">
                {String(
                  activeImage + 1
                ).padStart(
                  2,
                  '0'
                )}
                {' / '}
                {String(
                  project.images.length
                ).padStart(
                  2,
                  '0'
                )}
              </span>


              <div className="project-slide-bars">

                {project.images.map(
                  (
                    image,
                    index
                  ) => (

                    <span
                      key={image}

                      className={
                        index ===
                        activeImage
                          ? 'active'
                          : ''
                      }
                    />

                  )
                )}

              </div>

            </div>
          </>
        ) : (
          <>
            <div className="visual-grid" />

            <div className="project-shine" />


            <div className="visual-top">

              <span>
                P/C PROJECT
              </span>


              <span>
                {project.number}
              </span>

            </div>


            <motion.h2
              style={{
                y: titleY,
              }}

              whileHover={{
                x: 10,
              }}
            >
              {project.title}
            </motion.h2>


            <div className="visual-bottom">

              <span>
                View Case Study
              </span>


              <span>
                ↗
              </span>

            </div>
          </>
        )}

      </motion.div>


      <div className="project-details">

        <p className="project-description">
          {project.description}
        </p>


        <p className="project-tech">
          {project.tech}
        </p>

      </div>

    </motion.article>
  )
}




function Capability({
  number,
  title,
  tools,
}) {
  const [
    hovered,
    setHovered,
  ] = useState(false)


  return (
    <motion.div
      className="capability-row"

      initial={{
        opacity: 0,
        y: 20,
        filter: 'blur(8px)',
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}

      viewport={{
        once: true,
      }}

      onMouseEnter={() => {
        setHovered(true)
      }}

      onMouseLeave={() => {
        setHovered(false)
      }}

      animate={{
        paddingLeft:
          hovered
            ? 10
            : 0,
      }}
    >

      <span className="capability-number">
        {number}
      </span>


      <h3>
        {title}
      </h3>


      <motion.p
        animate={{
          x:
            hovered
              ? -5
              : 0,

          opacity:
            hovered
              ? 1
              : 0.7,
        }}
      >
        {tools}
      </motion.p>


      <motion.span
        className="capability-arrow"

        animate={{
          x:
            hovered
              ? 4
              : 0,

          y:
            hovered
              ? -4
              : 0,
        }}
      >
        ↗
      </motion.span>

    </motion.div>
  )
}


export default App