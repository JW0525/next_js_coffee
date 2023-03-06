import styled from "@emotion/styled";

const AuthPageContainer = styled.div`
  display: block;
  padding: 0 30px;

  .register_title,
  .login_title {
    margin-top: 94px;

    > h2 {
      width: 100%;
      height: 62px;
      font-size: 26px;
      font-weight: bold;
      text-align: left;
      color: #000000;
    }

    > span {
      display: block;
      font-size: 26px;
      line-height: 30px;

      &:last-child {
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }

  form {
    width: 100%;
    display: block;
    margin-top: 50px;
    position: relative;

    .error {
      color: #f02222 !important;
      font-size: 12px;
    }
  }

  input {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #a1a1a1;
    margin-bottom: 5px;
    color: #5f5e5e;
    font-size: 13px;
  }
`;

export default AuthPageContainer;
