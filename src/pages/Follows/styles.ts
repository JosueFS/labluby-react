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

export const FollowList = styled.ul`
  list-style: none;
  margin-top: 8px;
  line-height: 24px;

  & > li {
    position: relative;
    display: flex;
    align-items: center;

    margin: 16px;

    & > strong {
      margin-left: 32px;
      font-size: 16px;
      line-height: 32px;
      box-shadow: -10px 0 0 #292929, -94px 0 0 #292929, -104px 0 0 #ffce00;
      z-index: 1;
    }

    & > svg {
      position: absolute;
      right: 16px;
    }
  }

  & > hr {
    width: 100vw;
    height: 1px;

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
