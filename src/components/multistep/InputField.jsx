import React from "react";

const InputField = ({ resource, resourceType }) => {
  return (
    <div className="form-control">
      {/* <label className="label">
        <span className="label-text capitalize">{resource}</span>
      </label> */}
      <label className="input-group input-group-vertical">
        <span className="text-warning first-letter:capitalize">This Field needs to be at least 8 chars long.</span>
        <input
          type={resourceType}
          placeholder={`${resource.charAt(0).toUpperCase()}${resource.slice(1)}`}
          className="input-bordered input"
        />
      </label>
    </div>
  );
};

export default InputField;
