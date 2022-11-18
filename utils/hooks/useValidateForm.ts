import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import CreateUser from '../hooks/useCreateUser'

export interface IRegisterForm {
  email: string,
  pwd: string,
  pwdCheck?: string,
  name?: string,
  birthDate?: string
}

export interface ICheckTouched {
  email: boolean,
  pwd: boolean,
  pwdCheck?: boolean,
  name?: boolean,
  birthDate?: boolean
}

export const useValidateForm = (props: {
  initialForm : IRegisterForm,
  initialError: IRegisterForm,
  initialIsTouched: ICheckTouched,
  validate: Function,
  type: string
}) => {
  const { initialForm, initialError, initialIsTouched, validate, type } = props;
  const router = useRouter();
  const [form, setForm] = useState<IRegisterForm>(initialForm);
  const [errors, setErrors] = useState<IRegisterForm>(initialError);
  const [isTouched, setTouched] = useState<ICheckTouched>(initialIsTouched);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let { value, name } = e.currentTarget;
    setForm({
      ...form,
      [name]: value
    });
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    let { name } = e.currentTarget;
    setTouched({
      ...isTouched,
      [name]: true,
    })
  }

  const submitHandler = useCallback(
    async (e: any) => {
      e.preventDefault();

      const errors = validate(form);
      setErrors(errors);

      if (Object.values(errors).some(v => v)) return;

      switch (type) {
        case 'logIn': // 로그인 로직
          const logInResponse = await signIn("email-password-credential", {
            email: form.email,
            password: form.pwd,
            callbackUrl: "/home"
          });
          break;
        case 'register': // 회원가입 로직
          const registerResponse = await CreateUser(form.name as string, form.email, form.pwd, form.birthDate as string, 0, 0);

          if (registerResponse) {
            router.push('/login').then();
          }
          break;
      }
    }, [form]
  );

  // 입력값에 따라 검증 함수를 실행하는 함수
  const runValidator = useCallback(() => validate(form), [form]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors)
  }, [runValidator]);

  const getFieldProps = (name: string) => {
    // @ts-ignore
    const value = form[name];

    return {
      value,
      blurHandler,
      changeHandler,
    }
  }

  return {
    form,
    errors,
    isTouched,
    submitHandler,
    getFieldProps
  }
}

