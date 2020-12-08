import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 8px;
  line-height: 24px;

  & > li {
    position: relative;
    display: flex;
    align-items: center;

    padding-left: 10px;
    border-left: 8px solid #ffce00;

    & > strong {
      margin-left: 32px;
      font-size: 16px;
      line-height: 32px;
    }

    & > svg {
      position: absolute;
      right: 16px;
    }
  }

  & > hr {
    width: 100vw;
    height: 1px;

    margin: 24px 0;

    background: #7070705a;
    border: none;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;

  z-index: 2;

  border-radius: 50%;
  border: solid 3px #fff;
`;
