import React from "react";

const Loading = () => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div class="text-center">
        <div class="spinner-border" style={{ color: "#f36100" }} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
