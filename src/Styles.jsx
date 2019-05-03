import styled from "styled-components";

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
`;

export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  width: 100%;
  min-height: 120px;
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
