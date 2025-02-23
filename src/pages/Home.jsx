import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Areas from "./Areas";
import FAQSection from "./Faq";
import About from "./About";
import Companies from "./Companies";
import Firm from "../components/Firm";
import WhyChooseUs from "../components/Why";
import TestimonialsCarousel from "../components/Testimonial";

const heroImage =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80";
const aboutImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80";

const services = [
  {
    id: 1,
    title: "Corporate Law",
    description:
      "Expert guidance for businesses of all sizes, from startups to corporations",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Family Law",
    description: "Compassionate support for families during challenging times",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: 3,
    title: "Criminal Defense",
    description: "Strong defense strategies protecting your rights and freedom",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    icon: "🏛️",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    content:
      "The legal expertise provided by this firm was instrumental in our company's successful merger.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "Their dedication to understanding my business needs made all the difference in resolving our legal challenges.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Real Estate Developer",
    content:
      "Professional, thorough, and always available when needed. Couldn't ask for better legal representation.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
     <Parallax bgImage={heroImage} strength={200} bgClassName="parallax-bg mt-5 ">
      <div className="hero-section d-flex align-items-center text-center text-lg-start ">
        <div className="container">
          <div className="row justify-content-center ">
            <div
              className="col-11 text-center  col-md-10 col-lg-8 p-4 p-md-5 glassmorphism-border "
              style={{
                background: "rgba(206, 205, 205, 0.1)", 
                backdropFilter: "blur(15px)", 
                borderRadius: "2rem", 
              }}
            >
              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 7rem)", 
                }}
              >
                Justice You Can Trust
              </h1>
              <h3 className="fs-4 text-capitalize fs-md-4 mb-4">
              Delivering exceptional legal services just for you.              </h3>

              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/services")}
                className="fs-3 fs-md-5 px-4 py-4 rounded-3 ant-btn-primary "
                style={{ color: "#f4f1eb" }}
               
              >
                Explore more  <ArrowRightOutlined/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
   
      <About/>
      <Companies/>
      <Firm/>
      <Areas/>
     <WhyChooseUs/>
     <FAQSection/>
     <TestimonialsCarousel testimonials={testimonials} />
     
     </>
  );
}

export default Home;
