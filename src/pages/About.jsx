import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const aboutImage = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Parallax bgImage={aboutImage} strength={300}>
        <div className="parallax-content">
          <div className="container">
            <h1 className="display-4 text-center">About Our Firm</h1>
            <p className="lead text-center">A Legacy of Legal Excellence</p>
          </div>
        </div>
      </Parallax>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title text-center">Our Story</h2>
              <p className="mb-4">
                Founded in 2000, our law firm has been dedicated to providing exceptional legal services to our clients.
                With a team of experienced attorneys and a commitment to excellence, we have built a reputation for
                delivering results while maintaining the highest ethical standards.
              </p>
              <p>
                Our approach combines traditional legal expertise with modern solutions, ensuring that we can meet the
                evolving needs of our clients in today's complex legal landscape.
              </p>
            </motion.div>

            <motion.div
              className="mt-5"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="h4 mb-4">Our Values</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card service-card h-100">
                    <div className="card-body">
                      <h4 className="h5">Integrity</h4>
                      <p>We maintain the highest ethical standards in all our dealings.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100">
                    <div className="card-body">
                      <h4 className="h5">Excellence</h4>
                      <p>We strive for excellence in every case we handle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;