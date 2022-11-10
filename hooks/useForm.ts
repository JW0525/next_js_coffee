import React, {useCallback, useEffect, useState} from "react";

export interface IRegisterForm {
  email: string,
  pwd: string,
  pwdCheck?: string,
  name?: string
}

export interface ICheckTouched {
  email: boolean,
  pwd: boolean,
  pwdCheck?: boolean,
  name?: boolean
}

export const useForm = (props: {
  initialForm : IRegisterForm,
  initialError: IRegisterForm,
  initialIsTouched: ICheckTouched,
  validate: Function,
}) => {
  const { initialForm, initialError, initialIsTouched, validate } = props;
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

  const blurHandler = (e: any) => {
    let { name } = e.currentTarget;
    setTouched({
      ...isTouched,
      [name]: true,
    })
  }

  const submitHandler = useCallback(
    (e: any) => {
      e.preventDefault();

      const errors = validate(form);
      setErrors(errors);
      if (Object.values(errors).some(v => v)) return;

      alert('회원가입이 완료되었습니다.');
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

