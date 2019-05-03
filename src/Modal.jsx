import React, { useState } from "react";
import styled from "styled-components";
import * as Styled from "./Styles";
import FormFields from "./FormFields";

const Modal = props => {
  const [fields, setFields] = useState(props.fields);
  const [error, setError] = useState({ show: false });
  const [success, setSuccess] = useState({ show: false });
  const handleChange = newInput => {
    let updatedFields = fields;

    updatedFields[newInput.idx].value = newInput.value;
    setFields(updatedFields);
  };

  const validateFields = () => {
    const updatedFields = fields.map(e => {
      if (e.required) {
        if ((e.value && e.value === "") || !e.value) {
          e.showError = true;
          setError({ show: true });
        } else {
          e.showError = false;
          setError({ show: false });
        }
      }
      return e;
    });
    setFields(updatedFields);
  };

  const handleSubmit = () => {
    validateFields();

    if (error.show) {
      setSuccess({ show: true });
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <Styled.Heading>{props.title}</Styled.Heading>
          <hr />
          {success.show && (
            <Styled.SuccessMessage>
              Your information was sent successfully!
            </Styled.SuccessMessage>
          )}
          <Styled.Paragraph>{props.description}</Styled.Paragraph>
          <Styled.LeftContainer>
            {fields.map((field, idx) => (
              <FormFields
                handleChange={handleChange}
                {...field}
                position={idx}
                key={`key-${idx}`}
              />
            ))}
          </Styled.LeftContainer>
          <Styled.Button onClick={handleSubmit}>Send</Styled.Button>
          {error.show && (
            <Styled.Error>Please provide the required information</Styled.Error>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.47);
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  left: 0;
  top: 0;
`;

const ModalContainer = styled.div`
  color: #333;
  background: #fff;
  max-width: 600px;
  width: 100%;
  padding: 15px;
  min-height: 60vh;
  margin: auto;

  @media screen and (min-width: 641px) {
    float: right;
  }
`;

const ModalContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Modal;
