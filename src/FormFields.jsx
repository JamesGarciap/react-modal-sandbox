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
      {props.tag === "input" && (
        <Styled.Input
          error={props.showError}
          type={props.type}
          onChange={onChange}
        />
      )}
      {props.description && <Styled.Label>{props.description}</Styled.Label>}
      {props.tag === "textarea" && (
        <Styled.Textarea error={props.showError} onChange={onChange} />
      )}
      {props.showError && <Styled.Error>{props.error}</Styled.Error>}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  margin: 20px auto;
`;

export default FormFields;
