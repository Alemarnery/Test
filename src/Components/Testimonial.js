import React from "react";

const Testimonial = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-10 col-xl-7">
            <div className="text-center">
              <div className="fs-4 mb-4 fst-italic">
                " Our customizable group life & long-term disability solutions
                offer income protection to employees and their loved ones in the
                event of illness or death"
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="rounded-circle me-3"
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                />
                <div className="fw-bold">
                  Tom Ato
                  <span className="fw-bold text-primary mx-1">/</span>
                  CEO, HealthMax
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
