import React from "react";

const Testimonial = () => {
  return (
    <div class="py-5 bg-light">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <div class="fs-4 mb-4 fst-italic">
                " Our customizable group life & long-term disability solutions
                offer income protection to employees and their loved ones in the
                event of illness or death"
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <img
                  class="rounded-circle me-3"
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                />
                <div class="fw-bold">
                  Tom Ato
                  <span class="fw-bold text-primary mx-1">/</span>
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
