import React from "react";
import "./Academics.css";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpeg";

export default function Academics() {
  const programmes = [
    { name: "BA Civil Services", duration: "3 Years", intake: 60, eligibility: "12th Pass (Any Stream)", year: "2022" },
    { name: "Bachelor of Computer Application (BCA)", duration: "3 Years", intake: 60, eligibility: "12th Pass (Science/Commerce preferred)", year: "2023" },
    // { name: "B.A. (Bachelor of Arts)", duration: "3 Years", intake: 120, eligibility: "12th Pass", year: "1985" },
    // { name: "B.Sc. (Bachelor of Science)", duration: "3 Years", intake: 120, eligibility: "12th Science", year: "2000" },
    // { name: "M.A. (Master of Arts)", duration: "2 Years", intake: 60, eligibility: "Graduation", year: "2010" },
  ];

  return (
    <div className="academics-page">
      {/* ===== HERO SECTION ===== */}
      <section className="academic-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Academic Excellence</h1>
          <p className="lead">Empowering Students through Professional & Traditional Education</p>
        </div>
      </section>

      <div className="container my-5">
        {/* ===== 1. PROGRAMMES TABLE ===== */}
        <section className="mb-5">
          <div className="section-header">
            <h2 className="title-text">Academic Programmes</h2>
            <div className="underline"></div>
          </div>
          <div className="table-responsive academic-card shadow-sm mt-4">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-maroon text-white">
                <tr>
                  <th>Programme Name</th>
                  <th>Duration</th>
                  <th>Intake</th>
                  <th>Eligibility</th>
                  <th>Established</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((prog, index) => (
                  <tr key={index}>
                    <td className="fw-bold text-maroon">{prog.name}</td>
                    <td>{prog.duration}</td>
                    <td><span className="badge bg-teal">{prog.intake} Seats</span></td>
                    <td>{prog.eligibility}</td>
                    <td>{prog.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== 2. DEPARTMENTS & SYLLABUS ===== */}
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <div className="academic-card p-4">
              <h3 className="sub-title"><i className="bi bi-diagram-3-fill"></i> Departments</h3>
              <div className="row mt-3">
                <div className="col-md-6 border-end">
                  <h5 className="text-teal">Arts & Professional Studies</h5>
                  <ul className="dept-list">
                    <li>Civil Services Academy</li>
                    <li>Political Science & History</li>
                    <li>Languages (Marathi/Hindi/English)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="text-teal">Science & Technology</h5>
                  <ul className="dept-list">
                    <li>Computer Applications (BCA)</li>
                    <li>Physics & Mathematics</li>
                    <li>Life Sciences (Botany/Zoology)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="academic-card p-4 h-100 bg-light-maroon">
              <h3 className="sub-title">UGC Compliance</h3>
              <p className="small text-muted">Mandatory Disclosure for NAAC/UGC Guidelines</p>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-outline-maroon btn-sm d-flex justify-content-between align-items-center">
                   Download Syllabus <i className="bi bi-file-earmark-pdf"></i>
                </button>
                <button className="btn btn-outline-maroon btn-sm d-flex justify-content-between align-items-center">
                   Program Outcomes (PO) <i className="bi bi-journal-text"></i>
                </button>
                <button className="btn btn-outline-maroon btn-sm d-flex justify-content-between align-items-center">
                   Course Outcomes (CO) <i className="bi bi-check-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 3. FACULTY INFORMATION ===== */}
        <section>
          <div className="section-header">
            <h2 className="title-text">Academic Leadership</h2>
            <div className="underline"></div>
          </div>
          <div className="row g-4 mt-2">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item}>
                <div className="faculty-card text-center shadow-sm">
                  <div className="img-box">
                    <img src={`https://i.pravatar.cc/150?img=${item+15}`} alt="Faculty" />
                  </div>
                  <div className="p-3">
                    <h6 className="mb-1 text-maroon fw-bold">Prof. Faculty Name</h6>
                    <p className="text-muted small mb-1">M.Sc., SET/NET</p>
                    <span className="badge bg-gold text-dark mb-2">H.O.D.</span>
                    <p className="dept-label mb-0 text-uppercase">Dept. of BCA</p>
                    <a href="mailto:dept@college.edu" className="mail-link mt-2">
                      <i className="bi bi-envelope-at-fill"></i> Contact Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
