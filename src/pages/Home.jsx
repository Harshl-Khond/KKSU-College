import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import collegeImg from "../assets/College.png"
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
export default function Home() {
  return (
    <div className="home-wrapper">
      {/* ================= 1. HERO SLIDER ================= */}
      <section className="hero-section">
        <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-overlay"></div>
              <img src={img1} className="d-block w-100 hero-img" alt="Campus Life" />
              <div className="carousel-caption">
                <h1 className="display-3 fw-bold animate-up">Empowering Leaders of Tomorrow</h1>
                <p className="lead animate-up-delay">Premier Institute for Administrative Services & Higher Education.</p>
                <div className="mt-4 animate-up-delay-2">
                  <button className="btn btn-gold me-3">Apply for 2026</button>
                  <button className="btn btn-outline-light">View Courses</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-overlay"></div>
              <img src={img2} className="d-block w-100 hero-img" alt="Education" />
              <div className="carousel-caption text-center">
                <h1 className="display-3 fw-bold">Excellence in Civil Services</h1>
                <p className="lead">Expert guidance for UPSC, MPSC, and Competitive Exams.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-overlay"></div>
              <img src={img3} className="d-block w-100 hero-img" alt="Library" />
              <div className="carousel-caption text-end">
                <h1 className="display-3 fw-bold">State-of-the-Art Campus</h1>
                <p className="lead">Modern infrastructure designed for focused academic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. QUICK FACTS BAR ================= */}
      <div className="stats-bar">
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-6 col-md-3 stat-box"><h3>15+</h3><p>Years Excellence</p></div>
            <div className="col-6 col-md-3 stat-box"><h3>500+</h3><p>Success Stories</p></div>
            <div className="col-6 col-md-3 stat-box"><h3>KKSU</h3><p>Affiliated</p></div>
            <div className="col-6 col-md-3 stat-box border-0"><h3>A+</h3><p>Grade Faculty</p></div>
          </div>
        </div>
      </div>

      {/* ================= 3. ABOUT COLLEGE SECTION ================= */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="subtitle">ABOUT OUR INSTITUTION</span>
                <h2 className="section-title">A Legacy of Knowledge & Discipline</h2>
                <p className="mt-4 text-secondary">
                  Subhashrao Naik Mahavidhyalay, Lohgaon, is more than just a college; it is a 
                  training ground for the next generation of administrators. We specialize in 
                  blending rigorous university curriculum with real-world competitive exam coaching.
                </p>
                <ul className="custom-list">
                  <li>Dedicated B.A. Civil Services Integrated Program</li>
                  <li>Library with 5000+ Competitive Exam Resources</li>
                  <li>Regular Seminars by IAS/IPS Officers</li>
                </ul>
                <button className="btn btn-maroon mt-3 shadow-sm">Discover More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-stack">
                <img src={collegeImg} className="img-fluid main-img shadow-lg rounded-3 h-100 w-100" alt="College Building" />
                <div className="accent-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. PRINCIPAL'S MESSAGE ================= */}
      <section className="principal-section py-5">
        <div className="container">
          <div className="message-card shadow-lg border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="principal-img-container">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" className="principal-img" alt="Principal" />
                </div>
              </div>
              <div className="col-md-8 p-4 p-lg-5 d-flex flex-column justify-content-center bg-white">
                <div className="quote-icon"><i className="bi bi-quote"></i></div>
                <h2 className="mb-3 text-maroon">Principal's Message</h2>
                <p className="fst-italic text-muted mb-4 fs-5">
                  "Our mission is to provide quality education that bridges the gap between 
                  rural potential and urban opportunity. At SNM, we focus on character building, 
                  disciplined learning, and administrative excellence to ensure every student 
                  reaches their highest potential."
                </p>
                <div className="principal-meta">
                    <h5 className="fw-bold mb-0">Dr. Rajesh G. Deshmukh</h5>
                    <span className="text-gold fw-bold text-uppercase small">Principal, SNM Mahavidhyalay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}