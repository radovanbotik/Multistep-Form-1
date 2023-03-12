import React from "react";

const Form = ({ children }) => {
  return <form className="flex flex-col gap-4">{children}</form>;
};

export default Form;
