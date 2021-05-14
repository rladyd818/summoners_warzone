import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import {counter} from './counter'

export * from "./counter";

export const store = createStore(counter,composeWithDevTools());
