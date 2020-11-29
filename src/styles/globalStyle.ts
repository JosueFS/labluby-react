import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #292929;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        @media screen and (max-width: 768px) {
          padding-bottom: 80px;
        }
    }

    body, input, button {
    font: 20px Helvetica, Arial, sans-serif;
    }

    #root {
      height: 100%;
      min-width: 360px;
      /* max-width: 100vw; */

      margin: 0 auto;
    }

    button {
      cursor: pointer;
    }


    pre, code{
      max-width: 100vw;
      white-space: pre-wrap;
      word-wrap: break-word;
      text-align: justify;
    }


    a {
      text-decoration: none;
      color: inherit;
    }
`;
