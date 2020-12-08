import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  & > div {
    display: flex;
    flex-flow: column wrap;

    & + div {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    & > div + div {
      display: initial;
    }
  }
`;

export const Logout = styled.span`
  display: flex;
  align-items: center;
  line-height: 48px;
  & > svg {
    align-self: center;
    margin-left: 12px;
  }

  &:visited {
    color: #fff;
  }

  cursor: pointer;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    flex: 0 0 30%;
    min-width: 300px;
  }

  & h2 {
    font-size: 26px;
    box-shadow: -10px 0 0 #292929, -14px 0 0 #292929, -24px 0 0 #ffce00;
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

export const User = styled.div`
  margin-top: 24px;
  padding: 24px;

  display: flex;
  flex-direction: column;

  & span {
    line-height: 20px;
  }
`;

export const UserCounts = styled.section`
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
    flex: 0 0 55%;
  }
  margin-left: 32px;
  font-size: 16px;
`;
