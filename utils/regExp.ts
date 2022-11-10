export const regExp = {
  email: new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i),
  // 8자 이상 12자 이하 영문, 숫자 조합
  pwd: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
  num: new RegExp(/[0-9]/),
  eng: new RegExp(/[a-zA-Z]/),
  kor: new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/),
  spc: new RegExp(/[~!@#$%^&*()_+|<>?:{}]/)
}