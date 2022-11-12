import { css } from "@emotion/react";

export const global = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  
  html {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: palegoldenrod;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
  
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .link {
    color: inherit;
    text-decoration: none;
  }
`;