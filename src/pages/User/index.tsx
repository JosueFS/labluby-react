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
  }, []);

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
            <h1>{user.followers}</h1>
            <span>Seguidores</span>
          </div>

          <div>
            <h1>{user.following}</h1>
            <span>Seguindo</span>
          </div>

          <div>
            <h1>{user.public_repos}</h1>
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
