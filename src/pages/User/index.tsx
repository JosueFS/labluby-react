import React from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';

import {
  Container,
  Profile,
  Header,
  Avatar,
  UserInfo,
  ProfileInfo,
  Bio,
  ReadMe,
} from './styles';

const User: React.FC = () => {
  const readme = `

  <section>
  <strong>Minha apresentação em JSON 😉️:</strong>
  <code>

  <pre>
  {
    "ThadeuCesario": {
      "Formação": "Engenheiro de Computação",
      "Profissão": "Desenvolvedor Front-End Pleno",
      "Idade": 26,
      "Tecnologias": [
        "Javascript",
        "CSS3",
        "HTML5",
        "jQuery",
        "KnockoutJS",
        "Bootstrap",
        "React Native",
        "ReactJS",
        "Oracle Commerce Cloud",
        "Magento",
        "Grunt",
        "Gulp",
        "Webpack",
        "SASS",
        "LESS",
        "SQL",
        "Node",
        "Typescript",
        "Kotlin",
      ]
    }
  }
  </pre>
  </code>
  <br/>
  <hr/>
  <br/>
  <strong>
  🤣️🤣️
    <strong>CodeWars Points:</strong>
  </strong>
  <br/><br/>
  <a href="https://www.codewars.com/users/ThadeuMunhoz">
  <img src="https://www.codewars.com/users/ThadeuMunhoz/badges/large" />
  </a>
  <br/>
  <hr/>
  <br/>
  <strong style="color: #000">🤓️🤓️ W3Schools Certifications:</strong>
  <br/><br/>
  <a href="https://certification.w3schools.com/w3certified.asp?id=10724117">
  <img src="https://www.w3schools.com/images/w3certified_logo.png" alt="W3Schools Certified - Thadeu Munhóz Cesário"/>
  </a>
  <br/>
  <hr/>
  <br/>
  <strong style="color: #000">🤓️🤓️ Microsoft Certifications:</strong>
  <br/><br/>
  <table>
    <tbody>
      <tr>
        <td style="text-align:center">
          <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_100_100/0?e=1611792000&v=beta&t=rugMLzCX0ja25UyrQ6QHgzrI2z-oNu_2_slYIW-E5oM"/>
        </td>
        <td>
          <a href="https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=397&cvid=q3bJco/tuE0rtuxcej8P1Q==">
              Exam 98-383: Introduction to Programming Using HTML and CSS
          </a>
        </td>
      <tr>
    </tbody>
  </table>
  </section>
`;

  return (
    <Container>
      <Header>
        <strong>#josuefs</strong>

        <Link to="/">
          Sair
          <MdExitToApp size={24} color="#D03434" />
        </Link>
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
