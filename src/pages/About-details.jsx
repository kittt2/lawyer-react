import React from "react";
import {
  TrophyOutlined,
  BookOutlined,
  BankOutlined,
  GlobalOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

function Aboutd() {
  return (
    <>
      <div className="position-relative mt-lg-3">
        <img
          src="baner-2.jpg"
          alt="Services Banner"
          className="img-fluid mt-5 object-cover"
          style={{ width: "100%", height: "30vh", filter: "brightness(50%)" }}
        />
        <h1
          className="position-absolute top-50 start-50 translate-middle text-center"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
        >
          About Me
        </h1>
      </div>

      <div style={{ background: "#f4f1eb" }}>
        <div className="container py-5">
          <div className="row mb-5 py-lg-5 animate-fadeInUp">
            <div className="col-md-6">
              <h1 className="fw-bolder" style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}>Rishub Kapoor</h1>
              <div className="d-flex align-items-center mb-4">
                <BankOutlined className="me-3 fs-3" />
                <div>
                  <p className="h4 mb-1 fw-bold" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#6d7174" }}>
                    Advocate & Company Secretary
                  </p>
                  <p className="text-muted fs-5 mb-0" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                    Supreme Court & Delhi High Court Bar Association
                  </p>
                </div>
              </div>
              <p className="lead mb-4 fw-normal" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#6d7174" }}>
                Founding Partner at RK Legal Associates, established in 2021,
                leading the Dispute and Regulatory Practice with distinction and
                expertise.
              </p>
              <div className="d-flex gap-3 mb-4">
                <div className="expertise-badge">
                  <GlobalOutlined className="me-2 fs-3" />
                  <span className="fs-5" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>International Law</span>
                </div>
                <div className="expertise-badge">
                  <FileProtectOutlined className="me-2 fs-3" />
                  <span className="fs-5" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>Corporate Law</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="rounded-bottom-5 position-relative" style={{ padding: "10px" }}>
                <div style={{
                  backgroundImage: "url('ab.png')",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.5
                }}></div>
                <img
                  src="photo2.png"
                  alt="Rishub Kapoor"
                  className="img-fluid rounded-bottom-5 rounded-start-4"
                  style={{ maxWidth: "100%", borderRadius: "10px", position: "relative" }}
                />
              </div>
            </div>
          </div>

          <div
            className="mb-5 p-5 rounded-5"
            style={{
              background: "linear-gradient(to left, #4D3B2E, #2F241E)",
            }}
          >
            <h2 className="text-white mb-4 fs-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Areas of Expertise</h2>
            <div className="row p-3 gx-4 gy-4">
              {[
                {
                  title: "Commercial Litigation",
                  description:
                    "Expert handling of complex commercial disputes with a proven track record of success.",
                  icon: <BankOutlined />,
                },
                {
                  title: "Alternative Dispute Resolution",
                  description:
                    "Skilled negotiator and arbitrator with extensive experience in mediation.",
                  icon: <BankOutlined />,
                },
                {
                  title: "Energy and Infrastructure Services and Solutions ",
                  description:
                    "Specialized in regulatory compliance and infrastructure development law.",
                  icon: <BookOutlined />,
                },
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div
                    className="p-4 text-white border rounded-4 h-100 d-flex flex-column"
                    style={{
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="fs-3 mb-3">{item.icon}</div>
                    <h3 className="h4 mb-3 fs-4" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>{item.title}</h3>
                    <p className="mb-0 flex-grow-1" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="section-title fs-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Notable Cases & Achievements</h2>
            <div className="row g-4">
              {[
                {
                  title: "Pavillion Capital Investment",
                  description:
                    "Led the legal team in a USD 100 Million investment deal with Waaree Energies Limited.",
                  icon: <TrophyOutlined />,
                },
                {
                  title: "Trademark Protection",
                  description:
                    "Successfully defended Adeshwar Electricals in high-stakes trademark litigation.",
                  icon: <FileProtectOutlined />,
                },
                {
                  title: "Energy Sector Leadership",
                  description:
                    "Represented NTPC in strategic merger and acquisition proceedings.",
                  icon: <GlobalOutlined />,
                },
                {
                  title: "Infrastructure Development",
                  description:
                    "Facilitated USD 300 Million highway infrastructure deal for Shapoorji Paloonji.",
                  icon: <BankOutlined />,
                },
              ].map((item, index) => (
                <div key={index} className="col-lg-6">
                  <div
                    className="testimonial-card rounded-5 h-100 p-5"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div className="fs-3 me-3">
                        {React.cloneElement(item.icon, { size: 24 })}
                      </div>
                      <h3 className="fs-4 mb-0" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>{item.title}</h3>
                    </div>
                    <p className="mb-0 fw-medium" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutd;
