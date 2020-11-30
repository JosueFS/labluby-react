import React, { useEffect, useState } from 'react';
import { MdExitToApp } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';

import {
  Container,
  Profile,
  Header,
  Logout,
  Avatar,
  UserInfo,
  ProfileInfo,
  Bio,
  ReadMe,
} from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const User: React.FC = () => {
  const { signOut, user } = useAuth();

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
      <Header>
        <strong>#josuefs</strong>

        <Logout onClick={signOut}>
          Sair
          <MdExitToApp size={24} color="#D03434" />
        </Logout>
      </Header>
      <Profile>
        <Avatar
          alt="user"
          src="https://avatars0.githubusercontent.com/u/45906601?s=460&v=4"
        />

        <UserInfo>
          <h2>JOSUÉ FERREIRA</h2>
          <span>josue.18rj@gmail.com</span>
          <span>Belford Roxo/RJ</span>
        </UserInfo>

        <ProfileInfo>
          <div>
            <h1>70</h1>
            <span>Seguidores</span>
          </div>

          <div>
            <h1>77</h1>
            <span>Seguindo</span>
          </div>

          <div>
            <h1>707</h1>
            <span>Repos</span>
          </div>
        </ProfileInfo>

        <Bio>
          <h2>BIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi
            illo pariatur porro, veritatis, accusantium ea quaerat minus a enim
            commodi, sit aliquam! Harum a voluptatibus dolorem inventore
            accusantium corporis?
          </p>
        </Bio>
      </Profile>
      <ReadMe>
        <ReactMarkdown allowDangerousHtml source={readme} />
      </ReadMe>
    </Container>
  );
};

export default User;
