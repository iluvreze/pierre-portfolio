import './App.css'

import {
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


const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
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
    tech: 'React · JavaScript · Node.js · UI/UX',
  },

  {
    number: '02',
    title: 'Drafters Autotech',
    type: 'Inventory Management System',
    year: '2026',
    description:
      'A clean and responsive inventory experience built around structured workflows, user-centered navigation, wireframing, and frontend implementation.',
    tech: 'Figma · HTML5 · CSS3 · JavaScript',
  },

  {
    number: '03',
    title: 'Pet Paw',
    type: 'Store & Inventory Management',
    year: '2025',
    description:
      'A web-based management system combining visual interface design with inventory functionality, database integration, and responsive frontend development.',
    tech: 'HTML · CSS · JavaScript · PHP · MySQL',
  },
]


function App() {
  const [projectHover, setProjectHover] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const smoothX = useSpring(mouseX, {
    stiffness: 220,
    damping: 26,
    mass: 0.35,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 220,
    damping: 26,
    mass: 0.35,
  })


  useEffect(() => {
    const moveMouse = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener('mousemove', moveMouse)

    return () => {
      window.removeEventListener('mousemove', moveMouse)
    }
  }, [mouseX, mouseY])


  const cursorX = useTransform(
    smoothX,
    (value) => value - 5
  )

  const cursorY = useTransform(
    smoothY,
    (value) => value - 5
  )


  const { scrollYProgress: pageScroll } = useScroll()

  const smoothPageScroll = useSpring(
    pageScroll,
    {
      stiffness: 120,
      damping: 25,
      restDelta: 0.001,
    }
  )


  const heroRef = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(
    heroScroll,
    [0, 1],
    [0, 100]
  )

  const heroOpacity = useTransform(
    heroScroll,
    [0, 0.85],
    [1, 0]
  )

  const heroScale = useTransform(
    heroScroll,
    [0, 1],
    [1, 0.975]
  )

  const heroSerifX = useTransform(
    heroScroll,
    [0, 1],
    [0, 50]
  )


  return (
    <main className="site">

      {/* SCROLL PROGRESS */}

      <motion.div
        className="scroll-progress"
        style={{
          scaleX: smoothPageScroll,
        }}
      />


      {/* CUSTOM CURSOR */}

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
          rotate: projectHover ? 45 : 0,
          scale: projectHover ? 1 : 1,
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

          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 22,
          }}
        >
          P/C<span>®</span>
        </motion.a>


        <div className="nav-meta">
          PORTFOLIO / 2026
        </div>


        <div className="nav-links">

          <a href="#work">
            Work
          </a>

          <a href="#about">
            About
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
          className="hero-inner"

          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >

          <motion.div
            className="hero-meta"

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.6,
              ease,
            }}
          >

            <div>
              <span>Frontend Developer</span>
              <span>UI/UX Designer</span>
            </div>


            <div className="hero-meta-right">

              <span>
                Manila, Philippines
              </span>

              <span>
                Available for Opportunities
              </span>

            </div>

          </motion.div>


          <div className="hero-content">

            <motion.p
              className="hero-kicker"

              initial={{
                opacity: 0,
                x: -15,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.8,
                delay: 0.5,
                ease,
              }}
            >
              Pierre Carl Tolentino
            </motion.p>


            <div className="hero-line-mask">

              <motion.h1
                initial={{
                  y: '110%',
                }}

                animate={{
                  y: 0,
                }}

                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease,
                }}
              >
                SIMPLE.
              </motion.h1>

            </div>


            <div className="hero-line-mask">

              <motion.h1
                initial={{
                  y: '110%',
                }}

                animate={{
                  y: 0,
                }}

                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease,
                }}
              >
                THOUGHTFUL.
              </motion.h1>

            </div>


            <div className="hero-line-mask serif-mask">

              <motion.h1
                className="serif-title"

                style={{
                  x: heroSerifX,
                }}

                initial={{
                  y: '110%',
                }}

                animate={{
                  y: 0,
                }}

                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease,
                }}
              >
                intentional.
              </motion.h1>

            </div>

          </div>


          <motion.div
            className="hero-bottom"

            initial={{
              opacity: 0,
              y: 22,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.9,
              delay: 0.85,
              ease,
            }}
          >

            <p>
              I design and build digital experiences
              that balance clarity, visual detail,
              and functional code.
            </p>


            <motion.a
              href="#work"

              whileHover={{
                x: 7,
              }}

              whileTap={{
                scale: 0.97,
              }}

              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              Selected Work ↓
            </motion.a>

          </motion.div>


          <motion.div
            className="hero-index"

            animate={{
              opacity: [0.35, 0.75, 0.35],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            PCT / 01
          </motion.div>

        </motion.div>

      </section>


      {/* WORK */}

      <section
        className="work"
        id="work"
      >

        <SectionTop
          left="01 / Selected Work"
          right="A selection of digital products"
        />


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


      {/* STATEMENT */}

      <section className="statement">

        <motion.div
          className="statement-inner"

          initial={{
            opacity: 0,
            y: 45,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
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

          <motion.span
            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}
          >
            PCT / PHILOSOPHY
          </motion.span>


          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.97,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.4,
            }}

            transition={{
              duration: 1,
              ease,
            }}
          >
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

          </motion.h2>


          <motion.p
            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            Clear structure. Purposeful motion.
            Thoughtful interaction.
          </motion.p>

        </motion.div>

      </section>


      {/* ABOUT */}

      <section
        className="about"
        id="about"
      >

        <SectionTop
          left="02 / About"
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

            <motion.h2 variants={reveal}>
              DESIGN WAS
            </motion.h2>

            <motion.h2 variants={reveal}>
              THE BEGINNING.
            </motion.h2>

            <motion.h2
              variants={reveal}
              className="about-serif"
            >
              Code became
            </motion.h2>

            <motion.h2
              variants={reveal}
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
              ease,
            }}
          >

            <p>
              I&apos;m Pierre, an Information Technology
              graduate specializing in Web and Mobile Development.
            </p>

            <p>
              My background in visual design influenced how
              I approach development. I think about interfaces
              not only as functional systems, but as experiences
              that should feel clear, responsive, and intentional.
            </p>

            <p>
              I enjoy transforming ideas, wireframes, and concepts
              into polished digital products through design and
              frontend development.
            </p>

          </motion.div>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="capabilities">

        <SectionTop
          left="03 / Capabilities"
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
            title="Visual Design"
            tools="Canva · After Effects · Typography"
          />

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="experience">

        <SectionTop
          left="Experience"
          right="2026"
        />


        <motion.div
          className="experience-row"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.85,
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

              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 22,
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
          left="04 / Contact"
          right="● Available for opportunities"
          accentRight
        />


        <div className="contact-content">

          <div className="contact-mask">

            <motion.h2
              initial={{
                y: '110%',
              }}

              whileInView={{
                y: 0,
              }}

              viewport={{
                once: true,
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
              }}

              whileInView={{
                y: 0,
              }}

              viewport={{
                once: true,
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
          className="contact-bottom"

          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.2,
            ease,
          }}
        >

          <motion.a
            href="mailto:carlpierre231@gmail.com"

            whileHover={{
              x: 6,
            }}

            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            carlpierre231@gmail.com ↗
          </motion.a>


          <div className="social-links">

            <motion.a
              href="#"
              whileHover={{
                y: -3,
              }}
            >
              LinkedIn ↗
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -3,
              }}
            >
              GitHub ↗
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
      }}

      whileInView={{
        opacity: 1,
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
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,

    offset: [
      'start end',
      'end start',
    ],
  })


  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [35, -35]
  )

  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.985, 1, 0.985]
  )

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [15, -15]
  )


  return (
    <motion.article
      className="project"

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

      onMouseEnter={onEnter}

      onMouseLeave={onLeave}
    >

      <div className="project-top">

        <motion.span
          className="project-number"

          initial={{
            opacity: 0,
            x: -15,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
            ease,
          }}
        >
          {project.number}
        </motion.span>


        <span className="project-type">
          {project.type}
        </span>


        <span className="project-year">
          {project.year}
        </span>

      </div>


      <motion.div
        className="project-visual"

        style={{
          y: visualY,
          scale: visualScale,
        }}

        whileHover={{
          scale: 0.994,
        }}

        transition={{
          duration: 0.45,
          ease,
        }}
      >

        <div className="visual-grid"></div>

        <div className="project-shine"></div>


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

          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 22,
          }}
        >
          {project.title}
        </motion.h2>


        <div className="visual-bottom">

          <span>
            View Case Study
          </span>

          <motion.span
            whileHover={{
              x: 4,
              y: -4,
            }}
          >
            ↗
          </motion.span>

        </div>

      </motion.div>


      <motion.div
        className="project-details"

        initial={{
          opacity: 0,
          y: 18,
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
          delay: 0.1,
          ease,
        }}
      >

        <p className="project-description">
          {project.description}
        </p>


        <p className="project-tech">
          {project.tech}
        </p>

      </motion.div>

    </motion.article>
  )
}



function Capability({
  number,
  title,
  tools,
}) {
  const [hovered, setHovered] = useState(false)


  return (
    <motion.div
      className="capability-row"

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

      onMouseEnter={() => {
        setHovered(true)
      }}

      onMouseLeave={() => {
        setHovered(false)
      }}

      animate={{
        paddingLeft: hovered
          ? 10
          : 0,
      }}

      transition={{
        duration: 0.4,
        ease,
      }}
    >

      <span className="capability-number">
        {number}
      </span>


      <motion.h3
        animate={{
          opacity: hovered
            ? 1
            : 0.92,
        }}
      >
        {title}
      </motion.h3>


      <motion.p
        animate={{
          x: hovered
            ? -5
            : 0,

          opacity: hovered
            ? 1
            : 0.7,
        }}

        transition={{
          duration: 0.35,
          ease,
        }}
      >
        {tools}
      </motion.p>


      <motion.span
        className="capability-arrow"

        animate={{
          x: hovered
            ? 4
            : 0,

          y: hovered
            ? -4
            : 0,
        }}

        transition={{
          duration: 0.35,
          ease,
        }}
      >
        ↗
      </motion.span>

    </motion.div>
  )
}


export default App