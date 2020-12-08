import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Container,
  ProfileInfo,
  Avatar,
  User,
  UserCounts,
  Bio,
  ReadMe,
} from './styles';

import nFormatter from '../../utils/numberFormat';
import api from '../../services/api';
import { IUser } from '../../hooks/auth';

interface IUserProps {
  user: IUser;
}

const Profile: React.FC<IUserProps> = ({ user }) => {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    api
      .get(
        `https://raw.githubusercontent.com/${user.login}/${user.login}/master/README.md`,
      )
      .then(response => {
        setReadme(response.data);
      })
      .catch(() => setReadme(''));
  }, [user]);

  return (
    <Container>
      <ProfileInfo>
        <Avatar alt="user" src={user.avatar_url} />

        <User>
          <h2>{user.name?.toUpperCase()}</h2>
          <span>{user.email}</span>
          <span>{user.location}</span>
        </User>

        <UserCounts>
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
        </UserCounts>

        <Bio>
          <h2>BIO</h2>
          <p>{user.bio}</p>
        </Bio>
      </ProfileInfo>
      <ReadMe>
        <ReactMarkdown allowDangerousHtml source={readme} />
      </ReadMe>
    </Container>
  );
};

export default Profile;
