import styled from 'styled-components';

export const HomeHeader = styled.header`
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #1f1f1f;
  margin-bottom: 12px;
  padding: 0 12px;

  & > strong {
    font-size: 16px;
    text-align: center;
  }
`;

export const Logout = styled.span`
  display: flex;
  align-items: center;
  line-height: 48px;
  & > svg {
    align-self: center;
    margin-left: 8px;
  }

  &:visited {
    color: #fff;
  }

  cursor: pointer;
`;
