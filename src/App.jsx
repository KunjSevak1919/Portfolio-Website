import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import SnakeBackground from "./SnakeBackground"; // animated snake bg

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" },
  };

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div><strong>Kunj Sevak</strong></div>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-btn"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </motion.nav>

      {/* Hero */}
      <section className="hero">
        <SnakeBackground /> {/* animated snake bg */}

        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          Hi, I’m Kunj Sevak
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          CS Student | Aspiring Software Engineer | iOS & Web Developer | AI Enthusiast
        </motion.p>
        <motion.div
          className="buttons"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/KunjResume.pdf"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>About Me</h2>
        <motion.p custom={1} variants={sectionVariant}>
          Hi! I’m a final-year Computer Science student at San Francisco State
          University, actively seeking software development opportunities. I
          build web and mobile apps, explore machine learning, and enjoy turning
          challenging problems into impactful solutions. Skilled in Java,
          Python, Swift, React, Flask, AWS, and SQL.
        </motion.p>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "Triumph Tracker (Accountability App)",
              desc: "Full-stack accountability app with AI-driven features, React Native UI, Flask backend on AWS, and SQL database.",
              tech: "AWS, Flask, React Native, Python, SQL",
            },
            {
              title: "Skyva iOS Weather App",
              desc: "Real-time weather updates and trip summaries with SpeechKit, Apple Maps, and calendar-based scheduling.",
              tech: "Swift, OpenWeather API, Apple Maps, SpeechKit",
            },
            {
              title: "Heart Disease Prediction (ML)",
              desc: "ML pipeline using UCI dataset with KNN preprocessing, feature scaling, and SVM (90% accuracy).",
              tech: "Python, Scikit-learn, Pandas, NumPy",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariant}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <p>
                <b>Tech:</b> {proj.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            {
              title: "Languages",
              content: "Java, Python, Swift, C++, C, SQL, JavaScript, HTML/CSS",
            },
            {
              title: "Frameworks & Tools",
              content:
                "React.js, React Native, Flask, AWS, Scikit-learn, Pandas, NumPy, Git",
            },
            {
              title: "Databases & APIs",
              content: "MongoDB, MySQL, OpenWeather API, Apple Maps, iOS SDK",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="skill-box"
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariant}
            >
              <h3>{skill.title}</h3>
              <p>{skill.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2>Let’s Connect</h2>
        <motion.p custom={1} variants={sectionVariant}>
          Feel free to reach out for opportunities, collaborations, or just to say hi!
        </motion.p>
        <motion.div
          className="contact-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.2 }}
        >
          {[
            { name: "GitHub", link: "https://github.com/KunjSevak1919" },
            { name: "LinkedIn", link: "https://linkedin.com/in/kunjsevak" },
            { name: "Email", link: "mailto:jsevak11@gmail.com" },
          ].map((icon, i) => (
            <motion.a
              key={i}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

export default App;