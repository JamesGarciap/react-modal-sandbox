import React from "react";
import * as Styled from "./Styles";
import styled from "styled-components";

const FormFields = props => {
  return (
    <FieldContainer>
      <Styled.Label>{props.label}</Styled.Label>
      {props.type === "input" && <Styled.Input type="text" />}
      {props.type === "textarea" && <Styled.Textarea />}
      {props.type === "date" && <Styled.Input type="date" />}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  margin: 20px auto;
`;

export default FormFields;
