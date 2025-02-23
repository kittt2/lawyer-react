import React, { useEffect } from "react";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const Companies = () => {
  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Carousel) {
      const carouselElement = document.querySelector("#companyCarousel");
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 5000, 
          ride: "carousel",
        });
      }
    } else {
      console.error("Bootstrap is not loaded correctly");
    }
  }, []);

  return (
    <div className="container my-5 p-md-5"  style={{ color: "#f4f1eb" }}>
      <h2 className="text-center  fw-bold mb-4"  style={{ color:"#6d7174",fontSize:"2rem" }}>Trusted by Leading Corporations</h2>

      <div
        id="companyCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunkArray(companies, 4)?.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row text-center">
                {group?.map((company, idx) => (
                  <div key={idx} className="col-6 col-md-3 my-3">
                    <Card hoverable className="p-3 ">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="img-fluid"
                        style={{ maxHeight: "70px", objectFit: "cover" }}
                      />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
  className="carousel-control-prev btn btn-dark"
  type="button"
  data-bs-target="#companyCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
</button>
<button
  className="carousel-control-next btn btn-dark"
  type="button"
  data-bs-target="#companyCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
</button>

      </div>
    </div>
  );
};

const companies = [
  { name: "Tata Power", logo: "tatapower.jpeg" },
  { name: "Waaree Energies", logo: "waaree.jpeg" },
  { name: "Castrol", logo: "castrol.jpeg" },
  { name: "Delhi International Airport", logo: "airport.jpeg" },
  { name: "NTPC", logo: "ntpc.jpeg" },
  { name: "Shapoorji Pallonji", logo: "shapoori.jpeg" },
  { name: "Luminous", logo: "luminous.jpeg" },
  { name: "Jaiprakash Power Ventures", logo: "jv.jpeg" },
];

const chunkArray = (arr, size) => {
  return arr?.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

export default Companies;
