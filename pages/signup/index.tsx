import { useRouter } from "next/router";
import { Button } from "@/components/common/btn";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthPageContainer from "../../components/layout/authPage";
import { useEffect } from "react";
import { useAuth } from "hooks/common/useAuth";
import useSignUpMutation from "hooks/queries/useSignUpMutation";

const SignUpPage = () => {
  const router = useRouter();
  const { isLogin, userInfo } = useAuth();
  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const {
    mutate: signupMutaoin,
    error: signupError,
    isError,
  } = useSignUpMutation();

  const onClickSubmit = async (data: ISignUpForm) => {
    const { confirmPassword, ...rest } = data;
    signupMutaoin(rest);
  };

  useEffect(() => {
    if (isLogin !== "true") return;
    else if (userInfo.isManager) router.push("/manager/order");
    else if (!userInfo.isManager) router.push("/employee/menu/category");
  }, [isLogin, userInfo.isManager]);

  useEffect(() => {
    if (isError) {
      alert(signupError);
    }
  }, [isError]);

  return (
    <AuthPageContainer className="page-container">
      <div className="register_title">
        <h2>회원가입</h2>
        <span>
          고객님 <br />
          환영합니다!
        </span>
        <span>회원 서비스 이용을 위해 회원가입을 해주세요.</span>
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
        <input
          placeholder="비밀번호 확인"
          type="password"
          {...register("confirmPassword")}
        />
        <span className="error">
          {formState.errors.confirmPassword?.message ?? " "}
        </span>
        <Button type="submit">회원가입</Button>
      </form>
    </AuthPageContainer>
  );
};

export default SignUpPage;

interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  email: yup
    .string()
    // .email("이메일 형식이 아닙니다")
    .matches(
      new RegExp("[a-z0-9]+@snaps+.[a-z]{2,3}"),
      "스냅스 이메일을 입력해주세요"
    )
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(6, "비밀번호 6자리 이상 입력")
    .required("비밀번호는 필수 입력입니다."),
  confirmPassword: yup
    .string()
    .min(6, "비밀번호 6자리 이상 입력")
    .required("비밀번호는 필수 입력입니다.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다"),
});
