import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const heroImage = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80';
const aboutImage = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80';

const services = [
  {
    id: 1,
    title: 'Corporate Law',
    description: 'Expert guidance for businesses of all sizes, from startups to corporations',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    icon: '⚖️'
  },
  {
    id: 2,
    title: 'Family Law',
    description: 'Compassionate support for families during challenging times',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 3,
    title: 'Criminal Defense',
    description: 'Strong defense strategies protecting your rights and freedom',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    icon: '🏛️'
  }
];

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    content: "The legal expertise provided by this firm was instrumental in our company's successful merger.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "Their dedication to understanding my business needs made all the difference in resolving our legal challenges.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Real Estate Developer",
    content: "Professional, thorough, and always available when needed. Couldn't ask for better legal representation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <Parallax bgImage={heroImage} strength={200}>
        <div className="hero-section">
          <div className="container">
            <div>
              <h1 className="display-2 mb-4 fw-bold">Justice & Excellence</h1>
              <p className="lead mb-4">Your Trusted Partner in Legal Solutions</p>
              <Button type="primary" size="large" onClick={() => navigate('/services')}>
                Explore Our Services <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </Parallax>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="lead mb-4">With over two decades of experience, we've established ourselves as leaders in providing comprehensive legal solutions.</p>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="h1 mb-0 me-3">🏆</div>
                    <h3 className="h5 mb-0">Excellence</h3>
                  </div>
                  <p>Committed to delivering exceptional results</p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="h1 mb-0 me-3">⚖️</div>
                    <h3 className="h5 mb-0">Experience</h3>
                  </div>
                  <p>20+ years of legal expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={aboutImage} alt="Legal Office" className="img-fluid rounded-3 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Legal Services</h2>
            <p className="lead">Comprehensive legal solutions tailored to your needs</p>
          </div>
          
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-4">
                <div
                  className="card service-card h-100 border-0 shadow-sm"
                  onClick={() => navigate(`/services/${service.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="position-relative">
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt={service.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ background: 'rgba(0,0,0,0.3)' }}
                    ></div>
                    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                      <div className="display-4 mb-2">{service.icon}</div>
                      <h3 className="h4">{service.title}</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{service.description}</p>
                    <Button type="link" className="p-0">
                      Learn More <ArrowRightOutlined />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="lead">What our clients say about us</p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mb-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <p className="mb-3">{testimonial.content}</p>
                    <h4 className="h5 mb-1">{testimonial.name}</h4>
                    <p className="text-muted small">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;