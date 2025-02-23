import {
  SolutionOutlined,
  SyncOutlined,
  ThunderboltOutlined,
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
    description: "Efficient resolution through mediation and arbitration.",
  },
  {
    id: 3,
    title: "Energy/Infrastructure Laws",
    icon: <ThunderboltOutlined />,
    description:
      "Legal support for energy and infrastructure projects, compliance, and regulations.",
  },
];

function Areas() {
  const navigate = useNavigate();

  return (
    <section className="py-5 text-center" style={{ color: "#f4f1eb" }}>
      <div className="container py-5">
        <h2 className="text-capitalize fs-1" style={{ color: "#6d7174" }}>
          services
        </h2>
        <h2
          className="text-capitalize text-dark fw-bold"
          style={{ fontSize: "4rem" }}
        >
          We <strong style={{ color: "#6d7174" }}>Expertise</strong> in Finding{" "}
          <strong style={{ color: "#6d7174" }}>Solutions</strong> <br /> For{" "}
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
                <h4 className="fw-bold">{service.title}</h4>
                <p className="flex-grow-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
