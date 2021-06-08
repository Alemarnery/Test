import React from "react";

import Benefit from "./Benefit";

const BENEFITS_FROM_SERVER = [
  {
    title: "Benefit #1",
    iconName: "bi-collection",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    obcaecati consectetur molestias quibusdam voluptate. Nesciunt id
    modi itaque nam dolorem voluptates dolore quam sapiente.
    Suscipit quia praesentium harum assumenda illum?
    `,
  },
  {
    title: "Benefit #2",
    iconName: "bi-building",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    obcaecati consectetur molestias quibusdam voluptate. Nesciunt id
    modi itaque nam dolorem voluptates dolore quam sapiente.
    Suscipit quia praesentium harum assumenda illum?
    `,
  },
  {
    title: "Benefit #3",
    iconName: "bi-calendar-day",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    obcaecati consectetur molestias quibusdam voluptate. Nesciunt id
    modi itaque nam dolorem voluptates dolore quam sapiente.
    Suscipit quia praesentium harum assumenda illum?
    `,
  },
  {
    title: "Benefit #4",
    iconName: "bi-toggles2",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    obcaecati consectetur molestias quibusdam voluptate. Nesciunt id
    modi itaque nam dolorem voluptates dolore quam sapiente.
    Suscipit quia praesentium harum assumenda illum?
    `,
  },
];

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
              {BENEFITS_FROM_SERVER.map(
                ({ title, description, iconName }, i) => {
                  let className = "";

                  if (i < BENEFITS_FROM_SERVER.length - 1) {
                    className = "mb-5";
                  }

                  return (
                    <Benefit
                      key={i}
                      title={title}
                      iconName={iconName}
                      className={className}
                    >
                      {description}
                    </Benefit>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
