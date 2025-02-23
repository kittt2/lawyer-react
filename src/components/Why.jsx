import { BookFilled, FieldTimeOutlined, TrophyFilled } from "@ant-design/icons";
import React from "react";

function WhyChooseUs() {
  return (
    <section
      className="p-5"
      style={{
        background:
          "linear-gradient(to right, #3B2A1A, #4D3B2E, #2F241E, #1E120D)",
      }}
    >
      <div className="container py-5 p-md-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="text-white mb-4 fw-bold" style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}>Why Choose Us</h2>
            <p className="lead text-white-50 fw-sem mb-4" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
              With over two decades of experience, we've established ourselves
              as leaders in providing comprehensive legal solutions.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="text-white h1 mb-0 me-3"><TrophyFilled /></div>
                  <h3 className="h5 text-white mb-0" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>Excellence</h3>
                </div>
                <p className="text-white-50" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  Committed to delivering exceptional results.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="text-white h1 mb-0 me-3"><FieldTimeOutlined /></div>
                  <h3 className="h5 text-white mb-0" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>Experience</h3>
                </div>
                <p className="text-white-50" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>20+ years of legal expertise.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative rounded-3">
              <img
                src="law2.png"
                alt="Legal Office"
                className="img-fluid rounded-3 object-cover"
                style={{ position: "relative", zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
