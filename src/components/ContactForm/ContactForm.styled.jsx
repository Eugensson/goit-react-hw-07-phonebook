import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 15px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const FormBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #ccc;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
