import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #1f1f1f;

  line-height: 64px;
  & > svg {
    position: absolute;
    left: 16px;
  }
  & > strong {
    font-size: 16px;
    text-align: center;
  }
`;

export const RepositoryList = styled.ul`
  position: relative;
  list-style: none;
  margin-top: 8px;
  line-height: 24px;

  & > li {
    margin: 28px;
    & > h3 {
      font-size: 20px;
      box-shadow: -10px 0 0 #292929, -20px 0 0 #292929, -28px 0 0 #ffce00;
    }

    & > span {
      font-size: 14px;
    }

    & > footer {
      position: relative;
      display: flex;
      align-items: center;
      & > span {
        font-size: 14px;
        line-height: 14px;
        margin-left: 4px;
      }

      & > svg:not(:first-child) {
        position: absolute;
        right: 24px;
      }

      & > svg:last-child {
        position: absolute;
        right: 0;
      }
    }
  }

  & > hr {
    width: 100vw;
    height: 1px;

    /* margin: 32px 0; */

    background: #7070705a;
    border: none;
  }
`;
