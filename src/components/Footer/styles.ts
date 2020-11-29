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

  & > figure {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
  }

  & > figure > svg {
    color: #a5a5a5;
  }

  & > figure > figcaption {
    color: #969696;
    font-size: 16px;
    line-height: 24px;
  }
`;
