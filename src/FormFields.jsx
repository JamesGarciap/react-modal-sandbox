import React from "react";
import * as Styled from "./Styles";
import styled from "styled-components";

const FormFields = props => {
  const onChange = e => {
    let input = { idx: props.position, value: e.target.value };
    props.handleChange(input);
  };

  return (
    <FieldContainer>
      <Styled.Label>{props.label}</Styled.Label>
      {props.type === "input" && (
        <Styled.Input error={props.showError} type="text" onChange={onChange} />
      )}
      {props.type === "textarea" && (
        <Styled.Textarea error={props.showError} onChange={onChange} />
      )}
      {props.type === "date" && (
        <Styled.Input type="date" onChange={onChange} />
      )}
      {props.showError && <Styled.Error>{props.error}</Styled.Error>}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  margin: 20px auto;
`;

export default FormFields;
