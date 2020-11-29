import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }

  & > div {
    display: flex;
    flex-flow: column wrap;

    & + div {
      display: none;
      @media screen and (min-width: 768px) {
        display: initial;
      }
    }
  }
`;

export const Header = styled.header`
  height: 48px;
  flex: 0 0 90%;

  margin: 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    display: flex;
    line-height: 48px;
    & > svg {
      align-self: center;
      margin-left: 12px;
    }

    &:visited {
      color: #fff;
    }
  }
`;

export const Profile = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 35%;
    max-width: 300px;
  }

  display: flex;
  justify-content: start;
  flex-direction: column;

  font-size: 16px;

  & h2 {
    font-size: 26px;
    box-shadow: -10px 0 0 #292929, -10px 0 0 #292929, -20px 0 0 #ffce00;
  }

  & h1 {
    font-size: 40px;
  }
`;

export const Avatar = styled.img`
  width: 112px;
  height: 112px;

  align-self: center;

  border-radius: 50%;
  border: solid 3px #fff;
`;

export const UserInfo = styled.div`
  margin-top: 24px;
  padding: 24px;

  display: flex;
  flex-direction: column;

  & span {
    line-height: 20px;
  }
`;

export const ProfileInfo = styled.section`
  height: 96px;
  margin-top: 24px;
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  background-color: #5252525d;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Bio = styled.div`
  margin-top: 24px;
  padding: 24px;

  & p {
    margin-top: 8px;
    line-height: 24px;
  }
`;

export const ReadMe = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
  }

  font-size: 16px;
`;
