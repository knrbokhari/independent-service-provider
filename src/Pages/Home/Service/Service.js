import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const {
    name,
    price,
    image,
    duration,
    description,
    clients,
    classes,
    access,
  } = props.service;

  return (
    <div className="col-11 col-lg-4 col-md-8 mt-50px">
      <div className="cards">
        <div className="card-body">
          <h2 className="card-tital" style={{ fontSize: "30px" }}>
            {name}
          </h2>
          <img src={image} alt="" width="100%" className="my-4" />
          <p className="card-info">{description}</p>
        </div>
        <div className="list-group-flush List-group">
          <p>{duration}</p>
          <p>{clients}</p>
          <p>{classes}</p>
          <p>{access}</p>
          <p className="price">${price}</p>
        </div>
        <div className="card-body">
          <Link className="buttons btns" to="/checkout">
            Enroll now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
