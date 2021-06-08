import React, { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <section className="py-5" id="contact">
        <div className="container px-5">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center">
              <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h1 className="fw-bolder">Form Submitted!</h1>
              <p className="lead fw-normal text-muted mb-0">
                Thanks <b>{fullName}</b> for registering! Soon we will contact
                you by <b>{email}</b> with more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5" id="contact">
      <div className="container px-5">
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-4">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              We'd love to hear from you
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form onSubmit={onFormSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    placeholder="Enter your full name..."
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="dateOfBirth"
                    type="date"
                    placeholder="Enter your full name..."
                    required
                  />
                  <label htmlFor="name">Date of Birth</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    required
                  />
                  <label htmlFor="phone">Phone number</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Get Offer Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-chat-dots"></i>
            </div>
            <div className="h5 mb-2">Chat with us</div>
            <p className="text-muted mb-0">
              Chat live with one of our support specialists.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-people"></i>
            </div>
            <div className="h5">Ask the community</div>
            <p className="text-muted mb-0">
              Explore our community forums and communicate with other users.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-question-circle"></i>
            </div>
            <div className="h5">Support center</div>
            <p className="text-muted mb-0">
              Browse FAQ's and support articles to find solutions.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-telephone"></i>
            </div>
            <div className="h5">Call us</div>
            <p className="text-muted mb-0">
              Call us during normal business hours at (555) 555-5555.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
