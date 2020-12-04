import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepositoryList = styled.ul`
  position: relative;
  list-style: none;
  margin-top: 8px;
  line-height: 24px;

  & > li {
    padding-left: 10px;
    /* border-left: 8px solid #ffce00; */
    & > h3 {
      font-size: 20px;
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

    margin: 24px 0;

    background: #7070705a;
    border: none;
  }
`;
