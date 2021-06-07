import React from "react";

const Header = () => {
  return (
    <header class="bg-light py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-xl-5 col-xxl-6 d-sm-flex justify-content-sm-center d-xl-block text-center">
            <img
              class="img-fluid rounded-3 my-5"
              src="logo-color.png"
              alt="..."
            />
          </div>
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-orange mb-2">
                Healt Insurance for people
              </h1>
              <p class="lead fw-normal text-black-50 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus ipsa, est fuga nisi magni sequi, officia consectetur
                quibusdam atque quis et facilis repellat minima, ratione veniam
                dolorum ut aut?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe repellendus ipsa, est fuga nisi magni
                sequi, officia consectetur quibusdam atque quis et facilis
                repellat minima, ratione veniam dolorum ut aut?
              </p>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
                  Get Started
                </a>
                <a class="btn btn-light btn-lg px-4" href="#!">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
