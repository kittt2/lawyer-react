import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Corporate Law',
    description: 'Expert guidance for businesses of all sizes',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Family Law',
    description: 'Compassionate support for family matters',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Criminal Defense',
    description: 'Strong defense for your rights',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80'
  }
];

function Services() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-5 mt-5"
    >
      <h1 className="section-title text-center mb-5">Our Legal Services</h1>
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <motion.div
              className="card service-card h-100"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <img src={service.image} className="card-img-top" alt={service.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="h4 card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;