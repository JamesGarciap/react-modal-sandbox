import React from "react";
import styled from "styled-components";
import FormFields from "./FormFields";

const Modal = props => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h1>{props.title}</h1>
        <hr />
        <p>{props.description}</p>
        {props.fields.map((field, idx) => (
          <FormFields {...field} key={`key-${idx}`} />
        ))}
        <button>Send</button>
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
  left: 0;
  top: 0;
`;

const ModalContainer = styled.div`
  background: #fff;
  max-width: 600px;
  width: 80%;
  padding: 15px;
  min-height: 60vh;
  margin: auto;
`;

export default Modal;
