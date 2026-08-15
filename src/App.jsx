import { useState } from "react";
import "./App.css";

import profilePhoto from "./assets/profile.jpg";

// COMBAT COMBO
import combat1 from "./assets/combat-1.png";
import combat2 from "./assets/combat-2.png";
import combat3 from "./assets/combat-3.png";
import combat4 from "./assets/combat-4.png";
import combat5 from "./assets/combat-5.png";

// TOP UP ROBLOX
import topup1 from "./assets/topup-roblox-1.png";
import topup2 from "./assets/topup-roblox-2.png";

// KALA ANANTA
import kala1 from "./assets/kala-1.png";
import kala2 from "./assets/kala-2.png";
import kala3 from "./assets/kala-3.png";

// STUDENT CATALOG
import catalog1 from "./assets/catalog-1.png";
import catalog2 from "./assets/catalog-2.png";

// OTHER PROJECTS
import scratchGame from "./assets/scratch-game.png";
import weatherApp from "./assets/weather-app.png";


// =========================
// SKILLS
// =========================

const skills = [
  {
    name: "HTML",
    level: "Advanced",
    percent: "90%",
  },
  {
    name: "CSS",
    level: "Advanced",
    percent: "85%",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    percent: "80%",
  },
  {
    name: "Python",
    level: "Intermediate",
    percent: "70%",
  },
];


// =========================
// PROJECTS
// =========================

const projects = [
  {
    number: "01",
    title: "Combat Combo",
    category: "Game Development",

    description:
      "Game yang sedang saya kembangkan untuk platform mobile dan PC. Project ini berfokus pada gameplay, desain, dan pengembangan pengalaman bermain.",

    tech: ["Game Development", "Mobile", "PC"],

    status: "In Development",

    images: [
      combat1,
      combat2,
      combat3,
      combat4,
      combat5,
    ],
  },

  {
    number: "02",
    title: "Top Up Roblox — Ailochia",
    category: "Web Development",

    description:
      "Website top up Roblox yang dibuat untuk menampilkan pilihan produk, nominal Robux, harga, dan form pembelian secara sederhana.",

    tech: ["HTML", "CSS", "JavaScript"],

    status: "Localhost",

    images: [
      topup1,
      topup2,
    ],
  },

  {
    number: "03",
    title: "Kala Ananta",
    category: "Game / Visual Novel",

    description:
      "Project game dengan konsep visual novel yang berfokus pada desain tampilan, visual, cerita, dan pengalaman pengguna.",

    tech: ["Game Design", "UI Design"],

    status: "Project",

    images: [
      kala1,
      kala2,
      kala3,
    ],
  },

  {
    number: "04",
    title: "Student Catalog Website",
    category: "Web Development",

    description:
      "Website katalog yang dibuat untuk menampilkan dan memperkenalkan produk atau karya siswa melalui tampilan web yang terstruktur.",

    tech: ["HTML", "CSS", "JavaScript"],

    status: "Localhost",

    images: [
      catalog1,
      catalog2,
    ],
  },

  {
    number: "05",
    title: "Scratch Game",
    category: "Game Development",

    description:
      "Project game yang dibuat menggunakan Scratch sebagai bagian dari proses belajar dasar game development dan interactive programming.",

    tech: ["Scratch", "Game Design"],

    status: "Completed",

    images: [
      scratchGame,
    ],
  },

  {
    number: "06",
    title: "Weather App",
    category: "Application",

    description:
      "Aplikasi untuk mencari informasi cuaca berdasarkan kota menggunakan API dan tampilan GUI.",

    tech: ["Java", "API", "GUI"],

    status: "Completed",

    images: [
      weatherApp,
    ],
  },
];


// =========================
// APP
// =========================

function App() {

  const [selectedProject, setSelectedProject] = useState(null);

  const [currentImage, setCurrentImage] = useState(0);


  // =========================
  // OPEN PROJECT
  // =========================

  const openProject = (project) => {

    setSelectedProject(project);

    setCurrentImage(0);

  };


  // =========================
  // CLOSE PROJECT
  // =========================

  const closeProject = () => {

    setSelectedProject(null);

    setCurrentImage(0);

  };


  // =========================
  // NEXT IMAGE
  // =========================

  const nextImage = () => {

    if (!selectedProject) return;

    setCurrentImage((prev) =>

      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1

    );

  };


  // =========================
  // PREVIOUS IMAGE
  // =========================

  const previousImage = () => {

    if (!selectedProject) return;

    setCurrentImage((prev) =>

      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1

    );

  };


  return (

    <div className="app">


      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="logo">

          <span>&lt;/&gt;</span>

          Aquilla.dev

        </div>


        <nav>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        <a
          href="#contact"
          className="nav-button"
        >
          Contact Me
        </a>

      </header>



      {/* =========================
          HERO
      ========================= */}

      <section
        id="home"
        className="hero"
      >


        <div className="hero-text">


          <div className="hello-badge">

            👋 Hi, I'm

          </div>


          <h1>

            Aquilla

            <br />

            <span>
              Ramadhani
            </span>

            <span>
              Syacdhan.
            </span>

          </h1>


          <h2>

            Web Developer

            <b>
              |
            </b>

            RPL Student

          </h2>


          <p>

            Saya adalah siswa jurusan Pengembangan Perangkat Lunak
            yang memiliki ketertarikan pada web development dan
            programming. Saya senang mempelajari hal baru dan
            membangun berbagai project untuk mengembangkan
            kemampuan saya.

          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              Lihat Project Saya ↗
            </a>


            <a
              href="#contact"
              className="secondary-button"
            >
              Hubungi Saya
            </a>

          </div>

        </div>



        {/* FOTO */}

        <div className="photo-area">


          <div className="blue-circle"></div>


          <div className="photo-card">

            <img
              src={profilePhoto}
              alt="Foto Aquilla Ramadhani"
            />

          </div>


          <div className="floating-card">

            <span>
              💻
            </span>


            <div>

              <strong>
                Web Development
              </strong>

              <small>
                My main interest
              </small>

            </div>

          </div>

        </div>



        {/* DATA PRIBADI */}

        <div className="personal-card">


          <div className="card-title">


            <div className="title-icon">
              👤
            </div>


            <div>

              <span>
                PROFILE
              </span>

              <h3>
                Data Pribadi
              </h3>

            </div>

          </div>



          <div className="personal-list">


            <div className="personal-item">

              <span>
                Nama
              </span>

              <strong>
                Aquilla Ramadhani Syacdhan
              </strong>

            </div>


            <div className="personal-item">

              <span>
                Domisili
              </span>

              <strong>
                Bandung, Indonesia
              </strong>

            </div>


            <div className="personal-item">

              <span>
                Email
              </span>

              <strong className="blue-text">
                aquillaramadhani8@gmail.com
              </strong>

            </div>


            <div className="personal-item">

              <span>
                Status
              </span>

              <strong>
                Student
              </strong>

            </div>


            <div className="personal-item">

              <span>
                Jurusan
              </span>

              <strong>
                RPL
              </strong>

            </div>


          </div>

        </div>


      </section>



      {/* =========================
          ABOUT + SKILLS
      ========================= */}

      <section
        id="about"
        className="about-section"
      >


        {/* ABOUT */}

        <div className="about-card">


          <div className="section-label">
            01 / ABOUT ME
          </div>


          <h2>

            Saya suka membuat

            <span>
              sesuatu dengan kode.
            </span>

          </h2>


          <p>

            Saya merupakan siswa SMK jurusan Pengembangan
            Perangkat Lunak. Saya memiliki minat yang besar
            dalam pengembangan website dan selalu bersemangat
            untuk mempelajari teknologi baru.

          </p>


          <p>

            Melalui berbagai project sekolah dan personal,
            saya terus mengembangkan kemampuan dalam membuat
            website, aplikasi, dan game yang menarik,
            fungsional, dan mudah digunakan.

          </p>


          <div className="about-features">


            <div>

              <span>
                01
              </span>

              <h4>
                Web Development
              </h4>

              <p>
                Membangun website yang responsif dan interaktif.
              </p>

            </div>


            <div>

              <span>
                02
              </span>

              <h4>
                Game Development
              </h4>

              <p>
                Membuat dan mengembangkan project game.
              </p>

            </div>


            <div>

              <span>
                03
              </span>

              <h4>
                Problem Solving
              </h4>

              <p>
                Mencari solusi untuk setiap masalah dalam project.
              </p>

            </div>


          </div>


        </div>



        {/* SKILLS */}

        <div
          id="skills"
          className="skills-card"
        >


          <div className="section-label">
            02 / SKILLS
          </div>


          <h2>
            Keahlian saya.
          </h2>


          <p className="skills-description">

            Teknologi yang sedang saya pelajari
            dan gunakan dalam project.

          </p>


          <div className="skills-list">


            {skills.map((skill) => (

              <div
                className="skill"
                key={skill.name}
              >


                <div className="skill-info">

                  <strong>
                    {skill.name}
                  </strong>

                  <span>
                    {skill.level}
                  </span>

                </div>


                <div className="progress">

                  <div
                    className="progress-fill"
                    style={{
                      width: skill.percent,
                    }}
                  />

                </div>


              </div>

            ))}


          </div>


          <div className="main-skill">

            <span>
              FOCUS
            </span>

            <strong>
              🌐 Web Development
            </strong>

          </div>


        </div>


      </section>



      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="projects-section"
      >


        <div className="projects-heading">


          <div>

            <div className="section-label">
              03 / PROJECTS
            </div>


            <h2>
              Project yang pernah saya buat.
            </h2>

          </div>


          <p>

            Beberapa project yang saya kerjakan
            selama proses belajar programming,
            web development, dan game development.

          </p>


        </div>



        <div className="projects-grid">


          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
              onClick={() => openProject(project)}
            >


              <div className="project-top">

                <span>
                  {project.number}
                </span>


                <span className="project-status">
                  {project.status}
                </span>

              </div>



              {/* PROJECT IMAGE */}

              <div className="project-preview">

                <img
                  src={project.images[0]}
                  alt={project.title}
                />

              </div>



              <span className="project-category">
                {project.category}
              </span>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>



              <div className="tech-tags">


                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}


              </div>



              <div className="project-view">

                Lihat detail project ↗

              </div>


            </article>

          ))}


        </div>


      </section>



      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="contact-section"
      >


        <div className="contact-box">


          <div className="section-label">
            04 / CONTACT
          </div>


          <h2>

            Let's connect

            <br />

            <span>
              and build something.
            </span>

          </h2>


          <p>

            Saya terbuka untuk kesempatan belajar,
            berkolaborasi, dan mendapatkan pengalaman
            melalui PKL.

          </p>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aquillaramadhani8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >

            Email Me ↗

          </a>


        </div>


      </section>



      {/* =========================
          FOOTER
      ========================= */}

      <footer>


        <div>
          © 2026 Aquilla Ramadhani
        </div>


        <div>
          Built with React & ❤️
        </div>


      </footer>



      {/* =================================================
          PROJECT DETAIL MODAL
      ================================================= */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={(event) => {

            if (
              event.target.classList.contains(
                "project-modal-overlay"
              )
            ) {

              closeProject();

            }

          }}
        >


          <div className="project-modal">


            {/* CLOSE */}

            <button
              className="modal-close"
              onClick={closeProject}
            >
              ×
            </button>



            {/* HEADER */}

            <div className="modal-header">

              <span>
                {selectedProject.number}
              </span>

              <span>
                {selectedProject.status}
              </span>

            </div>



            {/* TITLE */}

            <h2>
              {selectedProject.title}
            </h2>



            {/* IMAGE SLIDER */}

            <div className="modal-image-container">


              <img
                className="modal-project-image"
                src={
                  selectedProject.images[currentImage]
                }
                alt={
                  selectedProject.title
                }
              />



              {/* PREVIOUS */}

              {selectedProject.images.length > 1 && (

                <button
                  className="slider-button slider-prev"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>

              )}



              {/* NEXT */}

              {selectedProject.images.length > 1 && (

                <button
                  className="slider-button slider-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>

              )}


            </div>



            {/* IMAGE COUNTER */}

            {selectedProject.images.length > 1 && (

              <div className="image-counter">

                {currentImage + 1}

                {" / "}

                {selectedProject.images.length}

              </div>

            )}



            {/* DOTS */}

            {selectedProject.images.length > 1 && (

              <div className="image-dots">


                {selectedProject.images.map(
                  (_, index) => (

                    <button
                      key={index}
                      className={
                        index === currentImage
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setCurrentImage(index)
                      }
                    />

                  )
                )}


              </div>

            )}



            {/* PROJECT INFORMATION */}

            <div className="modal-content">


              <span className="project-category">
                {selectedProject.category}
              </span>


              <h3>
                Tentang Project
              </h3>


              <p>
                {selectedProject.description}
              </p>



              <div className="modal-tags">


                {selectedProject.tech.map(
                  (tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  )
                )}


              </div>


            </div>


          </div>

        </div>

      )}


    </div>

  );

}


export default App;