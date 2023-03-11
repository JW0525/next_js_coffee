import { useRouter } from "next/router";
import { Button } from "@/components/common/btn";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthPageContainer from "../../components/layout/authPage";
import useSignIn from "hooks/api/useSignIn";
import { useEffect } from "react";
import { useAuth } from "hooks/common/useAuth";

const SignInPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { mutation: signinMutaoin, error: signinError } = useSignIn();
  const { isLogin, userInfo } = useAuth();

  const onClickSubmit = (data: ISignInForm) => {
    signinMutaoin(data);
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  useEffect(() => {
    if (isLogin !== "true") return;
    else if (userInfo.isManager) {
      router.push("/manager/order");
    } else if (!userInfo.isManager) {
      router.push("/employee/menu/category");
    }
  }, [isLogin, userInfo.isManager]);

  useEffect(() => {
    if (signinError) {
      alert(signinError);
    }
  }, [signinError]);

  return (
    <AuthPageContainer className="page-container">
      <div className="login_title">
        <h2>로그인</h2>
        <span>
          안녕하세요 <br />
          아미벅스 입니다.{" "}
        </span>
        <span>회원 서비스 이용을 위해 로그인 해주세요.</span>
      </div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input placeholder="스냅스 이메일" {...register("email")} />
        <span className="error">{formState.errors.email?.message ?? " "}</span>
        <input
          placeholder="비밀번호"
          type="password"
          {...register("password")}
        />
        <span className="error">
          {formState.errors.password?.message ?? " "}
        </span>
        <Button type="submit">로그인</Button>
        <Button type="button" onClick={onClickSignUp}>
          회원가입
        </Button>
      </form>
    </AuthPageContainer>
  );
};

export default SignInPage;

interface ISignInForm {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호 4자리 이상 입력")
    .required("비밀번호는 필수 입력입니다."),
});
