import React from 'react';
import { Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookFilled,
  LinkedinFilled
} from "@ant-design/icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <section id='contact' className=" py-5 bg-black text-white">
      <h1 className="text-white text-center py-5 fs-1">Contact</h1>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div>
              <h2 className="h1 mb-4 fw-bold">Get in Touch</h2>
              <p className="lead mb-4 fw-semibold">Schedule a consultation with our experienced legal team</p>
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
              <div className="d-flex align-items-center mb-3">
                <EnvironmentOutlined className="me-3 h4 mb-0" />
                <div>
                  <h3 className="h5 mb-1">Visit Us</h3>
                  <p className="mb-0">
                    123 Legal Street, Suite 100<br />New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-5">
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
        <div className=" container mt-5">
         <div className='text-center'>
          <a href="https://www.facebook.com" className="text-white me-3 fs-2"><FacebookFilled /></a>
          <a href="https://www.twitter.com" className="text-white me-3 fs-2"><TwitterOutlined /></a>
          <a href="https://www.linkedin.com" className="text-white me-3 fs-2"><LinkedinFilled/></a>
          <a href="https://www.instagram.com" className="text-white fs-2"><InstagramOutlined /></a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
