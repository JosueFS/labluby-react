import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #fff;

  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 16px 16px 0 0;

  z-index: 3;

  & > a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column wrap;
  }

  & > a > svg {
    color: #a5a5a5;
  }

  & > a > span {
    color: #969696;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
  }

  .current {
    span,
    svg {
      color: #212121;
    }
  }
`;
