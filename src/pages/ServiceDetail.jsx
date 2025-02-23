import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const services = [
  {
    id: 1,
    title: "Commercial Litigation",
    content: [
      {
        heading: "Commercial Litigation",
        text: "Businesses often face legal conflicts that can impact their operations. Commercial litigation helps resolve these disputes through legal channels.",
      },
      {
        heading: "What is Commercial Litigation?",
        text: "This involves resolving business disputes such as contract breaches, fraud, and partnership disagreements through court proceedings or settlements.",
      },
      {
        heading: "How We Help",
        text: "We represent businesses in litigation cases, ensuring legal compliance and advocating for favorable outcomes in court.",
      },
    ],
  },
  {
    id: 2,
    title: "Alternative Dispute Resolution",
    content: [
      {
        heading: "Alternative Dispute Resolution",
        text: "Legal disputes don’t always need to go to court. Alternative dispute resolution (ADR) offers quicker and cost-effective solutions.",
      },
      {
        heading: "What is Alternative Dispute Resolution?",
        text: "ADR includes mediation, arbitration, and negotiation, helping parties resolve conflicts without lengthy trials.",
      },
      {
        heading: "How We Help",
        text: "We guide clients through ADR methods, ensuring fair settlements while avoiding the time and expense of court proceedings.",
      },
    ],
  },
  {
    id: 3,
    title: "Energy/Infrastructure Laws",
    content: [
      {
        heading: "Energy and Infrastructure Laws",
        text: "The energy and infrastructure sector is highly regulated, requiring businesses to navigate complex legal frameworks.",
      },
      {
        heading: "What is Energy and Infrastructure Law?",
        text: "This covers the legal aspects of power generation, construction, and resource management, ensuring compliance with government policies.",
      },
      {
        heading: "How We Help",
        text: "We assist businesses with regulatory compliance, contract negotiations, and legal risk assessments in the energy and infrastructure sector.",
      },
    ],
  },
  {
    id: 4,
    title: "Environmental Law",
    content: [
      {
        heading: "Environmental Law",
        text: "With increasing environmental concerns, businesses must comply with laws aimed at protecting natural resources.",
      },
      {
        heading: "What is Environmental Law?",
        text: "Environmental law governs pollution control, waste management, and sustainability regulations for businesses and industries.",
      },
      {
        heading: "How We Help",
        text: "We help businesses adhere to environmental regulations, manage compliance issues, and defend against legal claims.",
      },
    ],
  },
  {
    id: 5,
    title: "Competition Law",
    content: [
      {
        heading: "Competition Law",
        text: "Fair competition ensures that businesses operate on a level playing field and prevents monopolistic practices.",
      },
      {
        heading: "What is Competition Law?",
        text: "This law prevents anti-competitive behavior such as price-fixing, market manipulation, and monopolies.",
      },
      {
        heading: "How We Help",
        text: "We assist businesses in complying with competition regulations and provide legal representation in disputes related to unfair market practices.",
      },
    ],
  },
  {
    id: 6,
    title: "Civil Disputes",
    content: [
      {
        heading: "Civil Disputes",
        text: "Legal conflicts between individuals or organizations can range from contract issues to property disputes.",
      },
      {
        heading: "What are Civil Disputes?",
        text: "Civil disputes involve non-criminal conflicts that may be resolved through litigation, mediation, or settlement agreements.",
      },
      {
        heading: "How We Help",
        text: "We represent clients in civil disputes, providing strategic legal solutions and court representation.",
      },
    ],
  },
  {
    id: 7,
    title: "Corporate Law",
    content: [
      {
        heading: "Corporate Law",
        text: "Businesses must adhere to corporate regulations governing their formation, operations, and transactions.",
      },
      {
        heading: "What is Corporate Law?",
        text: "Corporate law includes company formation, governance, mergers, and regulatory compliance.",
      },
      {
        heading: "How We Help",
        text: "We assist businesses with structuring, contract negotiation, compliance, and resolving corporate disputes.",
      },
    ],
  },
  {
    id: 8,
    title: "Family Law",
    content: [
      {
        heading: "Family Law",
        text: "Legal matters within families can be sensitive and require careful legal guidance.",
      },
      {
        heading: "What is Family Law?",
        text: "Family law covers divorce, child custody, adoption, and domestic violence cases.",
      },
      {
        heading: "How We Help",
        text: "We provide compassionate legal assistance for individuals dealing with family law matters.",
      },
    ],
  },
  {
    id: 9,
    title: "Criminal Defense",
    content: [
      {
        heading: "Criminal Defense",
        text: "Facing criminal charges can be overwhelming, requiring strong legal representation.",
      },
      {
        heading: "What is Criminal Defense?",
        text: "Criminal defense law ensures individuals accused of crimes receive fair legal proceedings and representation.",
      },
      {
        heading: "How We Help",
        text: "We defend clients against criminal charges, ensuring their legal rights are protected.",
      },
    ],
  },
  {
    id: 10,
    title: "Legal Representation and Litigation",
    content: [
      {
        heading: "Legal Representation and Litigation",
        text: "Legal disputes require strong representation to protect clients' interests in court.",
      },
      {
        heading: "What is Legal Representation?",
        text: "Legal representation involves advocating for clients in litigation and dispute resolution proceedings.",
      },
      {
        heading: "How We Help",
        text: "We provide expert legal advocacy, ensuring the best possible outcomes for clients in litigation cases.",
      },
    ],
  },
  {
    id: 11,
    title: "Arbitration and Dispute Resolution",
    content: [
      {
        heading: "Arbitration and Dispute Resolution",
        text: "Disputes can often be resolved outside of court through arbitration or mediation.",
      },
      {
        heading: "What is Arbitration?",
        text: "Arbitration is a legal process where disputes are resolved by an impartial third party outside of court.",
      },
      {
        heading: "How We Help",
        text: "We represent clients in arbitration proceedings, ensuring their interests are protected in fair resolutions.",
      },
    ],
  },
  {
    id: 12,
    title: "Regulatory and Compliance Advisory",
    content: [
      {
        heading: "Regulatory and Compliance Advisory",
        text: "Businesses must comply with complex laws and regulations to avoid legal risks.",
      },
      {
        heading: "What is Regulatory Compliance?",
        text: "Regulatory compliance involves adhering to laws governing industries like finance, healthcare, and technology.",
      },
      {
        heading: "How We Help",
        text: "We help businesses ensure compliance with regulations, conduct audits, and provide legal advisory services.",
      },
    ],
  },
  {
    id: 13,
    title: "Intellectual Property Advisory",
    content: [
      {
        heading: "Intellectual Property Advisory",
        text: "Protecting intellectual property is essential for businesses and individuals.",
      },
      {
        heading: "What is Intellectual Property Law?",
        text: "This area of law covers trademarks, patents, copyrights, and trade secrets.",
      },
      {
        heading: "How We Help",
        text: "We assist in registering, protecting, and enforcing intellectual property rights.",
      },
    ],
  },
  {
    id: 14,
    title: "Mergers and Acquisitions Advisory",
    content: [
      {
        heading: "Mergers and Acquisitions Advisory",
        text: "Mergers and acquisitions require careful legal structuring to ensure smooth transactions.",
      },
      {
        heading: "What is M&A Law?",
        text: "M&A law governs business buyouts, mergers, and acquisitions, ensuring legal and financial compliance.",
      },
      {
        heading: "How We Help",
        text: "We provide legal support in structuring M&A deals, negotiating contracts, and ensuring compliance.",
      },
    ],
  },
  {
    id: 15,
    title: "Contract Drafting and Review",
    content: [
      {
        heading: "Contract Drafting and Review",
        text: "Contracts form the foundation of business and legal relationships, ensuring clear terms between parties.",
      },
      {
        heading: "What is Contract Drafting and Review?",
        text: "Contract drafting involves creating legally binding agreements, while contract review ensures terms are fair and legally sound.",
      },
      {
        heading: "How We Help",
        text: "We draft, review, and negotiate contracts to protect our clients’ interests and ensure compliance with legal standards.",
      },
    ],
  },
  {
    id: 16,
    title: "Taxation and Financial Advisory",
    content: [
      {
        heading: "Taxation and Financial Advisory",
        text: "Understanding tax laws and financial regulations is crucial for individuals and businesses.",
      },
      {
        heading: "What is Taxation and Financial Advisory?",
        text: "This area involves tax planning, financial structuring, and compliance with tax laws to optimize financial outcomes.",
      },
      {
        heading: "How We Help",
        text: "We provide tax advisory services, assist in financial planning, and ensure compliance with tax laws.",
      },
    ],
  },
  {
    id: 17,
    title: "Sector-Specific Legal Services",
    content: [
      {
        heading: "Sector-Specific Legal Services",
        text: "Different industries face unique legal challenges that require specialized legal expertise.",
      },
      {
        heading: "What are Sector-Specific Legal Services?",
        text: "These services focus on industry-specific regulations, including technology law, media law, and renewable energy law.",
      },
      {
        heading: "How We Help",
        text: "We offer tailored legal solutions to businesses operating in specialized sectors, ensuring compliance and risk management.",
      },
    ],
  },
  {
    id: 18,
    title: "Immigration Law",
    content: [
      {
        heading: "Immigration Law",
        text: "Navigating immigration laws is essential for individuals seeking visas, residency, or citizenship.",
      },
      {
        heading: "What is Immigration Law?",
        text: "This law governs visas, work permits, residency applications, and citizenship requirements.",
      },
      {
        heading: "How We Help",
        text: "We assist individuals and businesses with visa applications, work permits, and immigration compliance.",
      },
    ],
  },
];

function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));
  const d4 = "/d4.jpeg";
  const d2 = "/d2.jpeg";

  if (!service) {
    return (
      <div className="text-center py-5">
        <h2>Service Not Found</h2>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="service-detail-page mt-5"
    >
      <Parallax bgImage={d4} strength={300}>
        <div className="parallax-content d-flex align-items-center justify-content-center text-center">
          <div className="container">
            <h1 className="display-3 fw-bold text-light">{service.title}</h1>
          </div>
        </div>
      </Parallax>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 position-relative d-flex align-items-center">
            <img
              src="/ab2.png"
              alt="Abstract Background"
              className="position-absolute w-100 h-100"
              style={{ zIndex: 0, opacity: 0.5 }}
            />
            <img
              src="/law3.png"
              alt="Service"
              className="img-fluid rounded-5 position-relative"
              style={{ zIndex: 1 }}
            />
          </div>

          <div className="col-lg-8">
            <motion.div
              className="card border-0 rounded-3 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-body">
                {service?.content?.map((section, index) => (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="fw-bold fs-1" style={{ color: "#6d7179" }}>{section.heading}</h3>
                    <p className=" fw-medium fs-5" style={{ color: "gray" }}>{section.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceDetail;
