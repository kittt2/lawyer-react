import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="fw-semibold text-center my-5 pb-4" style={{ color: "#6d7174" }}>About Me</h1>

      <div className="container my-5 p-md-5">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="text-uppercase fw-bolder" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "black" }}>RISHUB KAPOOR</h2>
            <h5 className="text-muted fw-bold" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#6d7174" }}>Advocate, Company Secretary</h5>
            <p className="fs-4 fw-semibold" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: "#6d7174" }}>
              Registered with Supreme Court Bar Association and Delhi High Court Bar Association
            </p>
            <p className="fs-5" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "#6d7174" }}>
              Rishub founded <strong>RK Legal Associates</strong> in 2021 and
              leads the Dispute and Regulatory Practice at the Firm. His expertise
              spans Commercial Litigation, Alternative Dispute Resolution,
              Energy/Infrastructure Laws, and more.
            </p>
            <button className="rounded-5 border-0 px-5 py-2 fs-4 text-white" style={{ background: "#daae72" }} onClick={() => navigate("/about")}>Read more</button>
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
      </div>
    </>
  );
};

export default About;
