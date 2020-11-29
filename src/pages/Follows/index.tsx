import React from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

import { Container, Header, FollowList, Avatar } from './styles';

const Follows: React.FC = () => {
  return (
    <Container>
      <Header>
        <RiArrowLeftLine size={24} />
        <strong>77 seguidores</strong>
      </Header>
      <FollowList>
        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />
        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />
        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />
        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />

        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />

        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />

        <li>
          <Avatar
            alt="user"
            src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
          />
          <strong>#josuefs</strong>
          <RiArrowRightLine size={24} />
        </li>

        <hr />
      </FollowList>
    </Container>
  );
};

export default Follows;
