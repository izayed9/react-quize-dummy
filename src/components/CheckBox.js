import React from "react";

export const CheckBox = ({ text, className, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
};
