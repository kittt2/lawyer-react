import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const services = {
  1: {
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    details: [
      'Business Formation',
      'Contract Negotiations',
      'Mergers & Acquisitions',
      'Corporate Compliance',
      'Intellectual Property'
    ]
  },
  2: {
    title: 'Family Law',
    description: 'Supporting families through legal challenges',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80',
    details: [
      'Divorce Proceedings',
      'Child Custody',
      'Spousal Support',
      'Property Division',
      'Adoption Services'
    ]
  },
  3: {
    title: 'Criminal Defense',
    description: 'Protecting your rights in criminal cases',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    details: [
      'Criminal Trials',
      'DUI Defense',
      'White Collar Crime',
      'Appeals',
      'Federal Cases'
    ]
  }
};

function ServiceDetail() {
  const { id } = useParams();
  const service = services[id];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Parallax bgImage={service.image} strength={300}>
        <div className="parallax-content">
          <div className="container">
            <h1 className="display-4 text-center">{service.title}</h1>
            <p className="lead text-center">{service.description}</p>
          </div>
        </div>
      </Parallax>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Our Expertise</h2>
            <div className="card service-card">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {service.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="list-group-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceDetail;