import styled from 'styled-components';

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

  & > a {
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
    font-size: 20px;
    text-align: center;

    &:hover {
      background: #ffce00;
      opacity: 0.85;
    }

    & > svg {
      margin-left: 8px;
    }
  }
`;

export const Input = styled.input`
  width: 304px;
  height: 56px;
  line-height: 56px;
  margin: 12px;
  padding-left: 16px;
  border: none;
  border-radius: 10px;
`;

export const Button = styled.button``;
