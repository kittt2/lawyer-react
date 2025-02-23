import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsCarousel = ({ testimonials }) => {
  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunkedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <section className="py-5" style={{ background: "#f4f1eb" }}>
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h2 className="section-title fs-3" style={{ color: "#6d7174" }}>Client Testimonials</h2>
          <p className="fs-1 fw-bolder" style={{ color: "#6d7174" }}>What our clients say about us</p>
        </div>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {chunkedTestimonials.map((group, groupIndex) => (
              <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}>
                <div className="row g-4">
                  {group.map((testimonial, index) => (
                    <div key={index} className="col-md-4">
                      <div className="card h-100 border-0 shadow-sm rounded-5  testimonial-card">
                        <div className="card-body text-center " style={{cursor:"pointer"}}>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle mb-3"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                          />
                          <p className=" mb-3 fw-semibold"  >{testimonial.content}</p>
                          <h4 className="h5 mb-1 fw-bold">{testimonial.name}</h4>
                          <p className=" small fw-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
