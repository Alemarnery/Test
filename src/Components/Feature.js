import React from "react";

const Feature = () => {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bolder mb-0">A better way to stay healtly.</h2>
          </div>
          <div className="col-lg-8">
            <div className="row gx-5 row-cols-1 row-cols-md-2">
              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-file-person-fill"></i>
                </div>
                <h2 className="h5">Title</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  obcaecati consectetur molestias quibusdam voluptate. Nesciunt
                  id modi itaque nam dolorem voluptates dolore quam sapiente.
                  Suscipit quia praesentium harum assumenda illum?
                </p>
              </div>
              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h2 className="h5">Title</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  obcaecati consectetur molestias quibusdam voluptate. Nesciunt
                  id modi itaque nam dolorem voluptates dolore quam sapiente.
                  Suscipit quia praesentium harum assumenda illum?
                </p>
              </div>
              <div className="col mb-5 mb-md-0 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-calendar-day"></i>
                </div>
                <h2 className="h5">Title</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  obcaecati consectetur molestias quibusdam voluptate. Nesciunt
                  id modi itaque nam dolorem voluptates dolore quam sapiente.
                  Suscipit quia praesentium harum assumenda illum?
                </p>
              </div>
              <div className="col h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-toggles2"></i>
                </div>
                <h2 className="h5">Title</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  obcaecati consectetur molestias quibusdam voluptate. Nesciunt
                  id modi itaque nam dolorem voluptates dolore quam sapiente.
                  Suscipit quia praesentium harum assumenda illum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
