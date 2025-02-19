import { Button } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

function Contact() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div>
              <h2 className="h1 mb-4">Get in Touch</h2>
              <p className="lead mb-4">Schedule a consultation with our experienced legal team</p>
              <div className="d-flex align-items-center mb-3">
                <PhoneOutlined className="me-3 h4 mb-0" />
                <div>
                  <h3 className="h5 mb-1">Call Us</h3>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <MailOutlined className="me-3 h4 mb-0" />
                <div>
                  <h3 className="h5 mb-1">Email Us</h3>
                  <p className="mb-0">contact@justicelaw.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <EnvironmentOutlined className="me-3 h4 mb-0" />
                <div>
                  <h3 className="h5 mb-1">Visit Us</h3>
                  <p className="mb-0">123 Legal Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded-3">
              <h3 className="text-dark mb-4">Request a Consultation</h3>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <Button type="primary" size="large" block>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;