import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((rsc) => rsc.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2
        className="mt-50px text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Services
      </h2>
      <div className="row justify-content-center mb-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
