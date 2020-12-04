import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;

  & > svg {
    margin-bottom: 24px;
  }

  input::placeholder {
    color: #535353;
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const Button = styled.button`
  width: 304px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffce00;
  color: #030202;

  margin: 12px;
  border: none;
  border-radius: 10px;

  line-height: 56px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;

  &:hover {
    background: #ffce00;
    opacity: 0.85;
  }

  & > svg {
    margin-left: 8px;
  }
`;

export const InputContainer = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 304px;
  height: 56px;
  margin: 12px;
  padding-left: 8px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: #fff;

  ${props =>
    props.hasError &&
    css`
      border: 2px solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ffce00;
    `}
`;

export const Input = styled.input`
  width: 160px;
  border: 0;
  line-height: 56px;
  background: transparent;
  border: none;
`;

export const Error = styled.span`
  position: absolute;
  right: 10px;
  width: 116px;
  white-space: nowrap;
  color: #c53030;
  font-size: 14px;
`;
