import React from "react";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className=" g-3 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
