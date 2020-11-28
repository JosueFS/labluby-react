import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { RiArrowRightLine } from 'react-icons/ri';

import { Container, Input, Button } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <AiFillGithub size={104} color="#FFCE00" />
      <Input placeholder="Usuário" />
      <Link to="/user">
        ENTRAR
        <RiArrowRightLine size={28} />
      </Link>
    </Container>
  );
};

export default Dashboard;
