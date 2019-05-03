import React from "react";
import styled from "styled-components";
import * as Styled from "./Styles";
import FormFields from "./FormFields";

const Modal = props => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <Styled.Heading>{props.title}</Styled.Heading>
          <hr />
          <Styled.Paragraph>{props.description}</Styled.Paragraph>
          <Styled.LeftContainer>
            {props.fields.map((field, idx) => (
              <FormFields {...field} key={`key-${idx}`} />
            ))}
          </Styled.LeftContainer>
          <Styled.Button>Send</Styled.Button>
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
  width: 80%;
  padding: 15px;
  min-height: 60vh;
  margin: auto;
`;

const ModalContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Modal;
