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
    background-color: palegoldenrod;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;