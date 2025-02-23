import { useState } from "react";
import { Collapse } from "antd";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const faqData = [
  {
    question: "How does Lawfor handle billing and fees?",
    answer:
      "Our billing and fee structure vary depending on the nature of the case. During your initial consultation, we will discuss our fee arrangements, including whether we work on an hourly basis, a flat fee, or a contingency fee basis. We believe in transparency, and there are no hidden costs.",
  },
  {
    question: "How can I submit an application to the court of protection?",
    answer:
      "Submitting an application to the court of protection involves preparing necessary legal documents, ensuring eligibility, and following the legal process with the guidance of a lawyer.",
  },
  {
    question: "What kind of LPAs are there?",
    answer:
      "There are two main types of Lasting Power of Attorneys (LPAs): Property & Financial Affairs LPA and Health & Welfare LPA. Each serves a specific legal purpose.",
  },
  {
    question: "What is the right time to file for divorce?",
    answer:
      "Filing for divorce depends on legal and personal factors, such as separation duration, mutual consent, and legal requirements in your jurisdiction.",
  },
];

const FAQSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="fw-bold fs-2 pt-5 ">Frequently Asked Questions</h1>
        <h2 style={{ color: "#6d7174" }} className="fw-bold display-3">
          Our <span style={{ color: "#2F2E41" }}>Expert</span> Answers
        </h2>
      </div>

      <div className="row align-items-center py-5">
        <div className="col-md-7 mb-4 mb-md-0">
          <Collapse
            accordion
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <UpCircleOutlined className="fs-2" />
              ) : (
                <DownCircleOutlined className="fs-2" />
              )
            }
            style={{ background: "white", border: "none" }}
          >
            {faqData.map((faq, index) => (
              <Panel
              className="rounded-5"
                header={
                  <span className="fs-5 fw-semibold">{faq.question}</span>
                }
                key={index}
                style={{
                  background: hoveredIndex === index ? "#FDF7F0" : "#fff",
                  borderRadius: "20px",
                  padding: "10px",
                  marginBottom: "14px",
                  border: hoveredIndex === index ? "1px solid #D4A373" : "1px solid #ddd",
                  transition: "background 0.3s ease, border 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="fs-5 m-0" style={{ color: "#6d7174" }}>
                  {faq.answer}
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>

        <div className="col-md-5 text-center ">
          <img
            src="new.jpg"
            alt="Legal Expert"
            className="img-fluid rounded-5 object-fit-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
