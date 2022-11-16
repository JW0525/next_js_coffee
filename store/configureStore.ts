import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "./modules";

const store =() => {
  return configureStore({ reducer: rootReducer });
}

const wrapper = createWrapper(store, {
  // middleWare 를 넣어준다.
  // debug: ''
})

export default wrapper;