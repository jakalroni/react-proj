import React, {useState} from 'react'
import "./LoginRegister.css"
import {axios} from 'axios'

function Login() {
  const [id, setId] = useState("")
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  //typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }


  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    // page refresh를 막아준다
    event.preventDefault();
    axios.post('http://localhost:8000/user/login', JSON.stringify(
      {id: id, password: password}
    )
    // 정상 수행
    ).then((result)=>{
      console.log(result)
    }
    // 에러 발생
    ).catch((error)=>{
      console.log(error)
    })
  }

  return (
      <div className="loginregister">
        <form>
          <h2>✨로그인을 해주세요.</h2>
          <div><input name="id" type="text" placeholder="아이디" value={id} onChange={onIdHandler} className="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
          <div><button type="submit" onSubmit={onSubmit} className="loginregister__button">로그인</button></div>
        </form>
      </div>
    );
  }

export default Login;