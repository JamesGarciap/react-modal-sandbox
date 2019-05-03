import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  margin: 20px auto;
  text-align: left;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const LeftContainer = styled.div`
  margin: 30px auto;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  height: 32px;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;

  ${props =>
    props.error &&
    css`
      border-color: red;
    `}
`;

export const Textarea = styled.textarea`
  border: 1px solid;
  border-color: ${props => (props.error ? "red" : "#ccc")};
  width: 100%;
  min-height: 120px;
  padding: 16px 10px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  background: #5bc0de;
  border: #46b8da;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 20px;

  &:hover {
    background: #46b8da;
  }
`;

export const Error = styled.span`
  color: red;
  display: block;
  font-size: 12px;
  margin-top: 5px;
`;

export const SuccessMessage = styled.h3`
  color: #fff;
  border: 2px solid green;
  background: #7fb77f;
  padding: 15px 10px;
  font-size: 14px;
`;
