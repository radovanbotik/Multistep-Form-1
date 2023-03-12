import React from "react";

const Step = ({ active, name }) => {
  return <li className={`step ${active && "step-primary"}`}>{name}</li>;
};

export default Step;
