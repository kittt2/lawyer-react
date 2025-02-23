import {
  SolutionOutlined,
  SyncOutlined,
  ThunderboltOutlined,
  EnvironmentOutlined,
  TrophyOutlined,
  FileTextOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  SafetyOutlined,
  FileProtectOutlined,
  TrademarkOutlined,
  TransactionOutlined,
  DollarCircleOutlined,
  AppstoreOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Commercial Litigation",
    icon: <SolutionOutlined />,
    description:
      "Expert legal representation in commercial disputes and litigation.",
  },
  {
    id: 2,
    title: "Dispute Resolution",
    icon: <SyncOutlined />,
    description:
      "Efficient resolution through mediation, arbitration, and negotiation.",
  },
  {
    id: 3,
    title: "Energy/Infrastructure Laws",
    icon: <ThunderboltOutlined />,
    description:
      "Legal support for energy and infrastructure projects, compliance, and regulations.",
  },
  {
    id: 4,
    title: "Environmental Law",
    icon: <EnvironmentOutlined />,
    description:
      "Guidance on environmental compliance, sustainability, and legal disputes.",
  },
  {
    id: 5,
    title: "Competition Law",
    icon: <TrophyOutlined />,
    description:
      "Ensuring fair competition and compliance with antitrust regulations.",
  },
  {
    id: 6,
    title: "Civil Disputes",
    icon: <FileTextOutlined />,
    description:
      "Handling a wide range of civil disputes with expertise and diligence.",
  },
  {
    id: 7,
    title: "Corporate Law",
    icon: <BankOutlined />,
    description: "Comprehensive legal solutions for businesses.",
  },
  {
    id: 8,
    title: "Family Law",
    icon: <UsergroupAddOutlined />,
    description: "Supporting families through legal challenges.",
  },
  {
    id: 9,
    title: "Criminal Defense",
    icon: <SafetyOutlined />,
    description: "Protecting your rights in criminal cases.",
  },
  {
    id: 10,
    title: "Legal Representation and Litigation",
    icon: <FileProtectOutlined />,
    description:
      "Effective legal representation in various courts and arbitration tribunals.",
  },
  {
    id: 11,
    title: "Arbitration and Dispute Resolution",
    icon: <SolutionOutlined />,
    description:
      "Professional arbitration, mediation, and negotiation services.",
  },
  {
    id: 12,
    title: "Regulatory and Compliance Advisory",
    icon: <FileProtectOutlined />,
    description:
      "Expert advice on regulatory compliance and insolvency proceedings.",
  },
  {
    id: 13,
    title: "Intellectual Property Advisory",
    icon: <TrademarkOutlined />,
    description: "Comprehensive trademark and patent advisory services.",
  },
  {
    id: 14,
    title: "Mergers /Acquisitions Advisory",
    icon: <TransactionOutlined />,
    description:
      "Professional advisory for mergers, acquisitions, and corporate restructuring.",
  },
  {
    id: 15,
    title: "Comprehensive Contract Drafting and  Review Services",
    icon: <FileTextOutlined />,
    description:
      "Expert drafting and review of various contractual agreements.",
  },
  {
    id: 16,
    title: "Taxation /Financial Advisory",
    icon: <DollarCircleOutlined />,
    description: "Comprehensive advice on taxation and financial matters.",
  },
  {
    id: 17,
    title: "Sector-Specific Legal Services",
    icon: <AppstoreOutlined />,
    description:
      "Specialized legal services for the energy, renewable, and media sectors.",
  },
  {
    id: 18,
    title: "Immigration Law",
    icon: <GlobalOutlined />,
    description:
      "Expert immigration legal services for businesses and individuals.",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div className="position-relative">
        <img
          src="bn3.jpg"
          alt="Services Banner"
          className="img-fluid mt-5 object-cover"
          style={{ width: "100%", height: "40vh", filter: "brightness(50%)" }}
        />
        <h1
          className="position-absolute top-50 start-50 fs-1 translate-middle text-center"
          style={{ fontSize: "3rem", color: "white" }}
        >
          Services or Practice Area
        </h1>
      </div>

      <section className="py-5 text-center" style={{ color: "#f4f1eb" }}>
        <div className="container py-5">
          <h2
            className="text-capitalize text-dark fw-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            We <strong style={{ color: "#6d7174" }}>Expertise</strong> in
            Finding <strong style={{ color: "#6d7174" }}>Solutions</strong> <br /> For{" "}
            <span style={{ color: "#6d7174" }}>Legal Cases</span>
          </h2>
          <div className="row mt-4 p-lg-5 gx-4 gy-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-6 mb-4"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="p-4 rounded-3 shadow-sm text-start service-card h-100 d-flex flex-column">
                  <div className="fs-1 mb-3 text-center">{service.icon}</div>
                  <h4 className="fw-bold" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                    {service.title}
                  </h4>
                  <p className="flex-grow-1" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
