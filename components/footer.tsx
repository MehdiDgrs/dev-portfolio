import React from "react";

let Footer: React.FC = () => {
  let date = new Date();
  return (
    <div className="bg-white text-sm bold text-center pb-2 ">
      © {date.getFullYear()} Degryse Mehdi{" "}
    </div>
  );
};

export default Footer;
