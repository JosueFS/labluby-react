import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Container,
  Profile,
  Avatar,
  UserInfo,
  ProfileInfo,
  Bio,
  ReadMe,
} from './styles';

import nFormatter from '../../utils/numberFormat';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const User: React.FC = () => {
  const { user } = useAuth();

  const [readme, setReadme] = useState('');

  useEffect(() => {
    api
      .get<string>(
        `https://raw.githubusercontent.com/${user.login}/${user.login}/master/README.md`,
      )
      .then(response => {
        setReadme(response.data);
      });
  }, [user.login]);

  return (
    <Container>
      <Profile>
        <Avatar alt="user" src={user.avatar_url} />

        <UserInfo>
          <h2>{user.name.toUpperCase()}</h2>
          <span>{user.email}</span>
          <span>{user.location}</span>
        </UserInfo>

        <ProfileInfo>
          <div>
            <h1>{nFormatter(user.followers, 1)}</h1>
            <span>Seguidores</span>
          </div>

          <div>
            <h1>{nFormatter(user.following, 1)}</h1>
            <span>Seguindo</span>
          </div>

          <div>
            <h1>{nFormatter(user.public_repos, 1)}</h1>
            <span>Repos</span>
          </div>
        </ProfileInfo>

        <Bio>
          <h2>BIO</h2>
          <p>{user.bio}</p>
        </Bio>
      </Profile>
      <ReadMe>
        <ReactMarkdown allowDangerousHtml source={readme} />
      </ReadMe>
    </Container>
  );
};

export default User;
