import React from "react";

function Firm() {
  return (
    <div
      className="firm-overview px-5 py-4"
      style={{
        background: "linear-gradient(to left,rgb(118, 88, 71), #2F241E)",
      }}
    >
      <div className="row align-items-center py-5">
        <div className="col-md-8 ">
          <h2 className="text-white fw-bolder fs-1 mb-4">RK Legal Associates</h2>
          <p className="lead text-white mb-4 ">
            A premier law firm delivering exceptional legal solutions with a
            commitment to excellence and innovation in legal practice.
          </p>

          <div className="row g-4">
            {[
              { number: "2021", label: "Established" },
              { number: "100+", label: "Cases Won" },
              { number: "95%", label: "win rates" },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="stat-box p-3 text-center rounded-4 shadow-lg"
                  style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 15px rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h4 className="h2 text-white mb-2">{item.number}</h4>
                  <p className="text-white-50 mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4" style={{ position: 'relative' }}>
          <div
            style={{
              backgroundImage: "url('ab2.png')", 
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
              zIndex: 1
            }}
          ></div>
          <img
            src="s2.png"
            alt="RK Legal Associates Office"
            className="img-fluid"
            style={{ position: 'relative', zIndex: 2 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Firm;
