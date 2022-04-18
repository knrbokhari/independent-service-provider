import React from "react";
import aboutMeImg from "../../images/about-me.jpg";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-md-5 d-none d-md-block">
          <img src={aboutMeImg} alt="" width="100%" />
        </div>
        <div className="col-11 col-md-7 text-white">
          <h2
            className="mt-0 mb-5 my-md-5 text-white text-center"
            style={{ fontSize: "35px" }}
          >
            About me
          </h2>
          <div className="row mx-3">
            <div className="col-md-6">
              <p className="fs-4">Name: Kazi Naeem Rayhan</p>
            </div>
            <div className="col-md-6">
              <p className="fs-4">Profile: full stack developer</p>
            </div>
            <div className="col-md-6">
              <p className="fs-4">Email: contact@example.com</p>
            </div>
            <div className="col-md-6">
              <p className="fs-4">Phone: (617) 557-0089</p>
            </div>
            <div className="col-12">
              <p className="fs-4">
                মনোযোগ এর সাথে কাজ করা ও কাজ শেখা। course টা ভালভালে শেষ করা। সব
                এসাইনমেন্ট এ ৬০ মার্ক পাওয়া। ৩ থেকে ৪ মাসের ভিতরে কোনো জোবে
                জয়েন্ট করা। ভবিষতে নিজে নিজে নিয়মিত নতুন কোনো কিছু শেখা।প্রতিদিন
                আমি আমার লক্ষ্য অর্জনের জন্য 7 থেকে 8 ঘন্টা অনুশীলন করব।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
