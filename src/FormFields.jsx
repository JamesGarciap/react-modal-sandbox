import React from "react";
import styled from "styled-components";

const FormFields = props => {
  return (
    <div>
      <label>{props.label}</label>
      {props.type === "input" && <input type="text" />}
      {props.type === "textarea" && <textarea />}
      {props.type === "date" && <input type="date" />}
    </div>
  );
};

export default FormFields;
