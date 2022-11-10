import React, {useCallback, useEffect, useState} from "react";


export const useForm = (props: {
  initialForm : any,
  validate: any
}) => {
  const { initialForm, validate } = props;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isTouched, setTouched] = useState({});

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
      if (Object.values(errors).some(v => v)) {
        return
      }
    }, [form]
  );

  // 입력값에 따라 검증 함수를 실행하는 함수를 정의한다
  const runValidator = useCallback(() => validate(form), [form]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors)
  }, [runValidator]);


  return {
    form,
    errors,
    isTouched,
    changeHandler,
    blurHandler,
    submitHandler
  }
}

