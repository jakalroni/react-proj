//client/src/_actions/user_action.js

import axios from 'axios';
import {LOGIN_USER} from './Types.js';
export function loginUser(dataTosubmit) {
  const request = axios.post('http://localhost:8000/user/login', dataTosubmit)   //서버에 리퀘스트 날리고 
  .then(response => response.data)    //받은 데이터를 request에 저장

  return {                    //Action 했으니까 이제 Reducer로 보냄
      type: LOGIN_USER,
      payload: request
  }
}