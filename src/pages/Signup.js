import axios from 'axios';
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import "./LoginRegister.css"

function Signup() {
  // const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [email, setEmail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onIdHandler = (event) => {
      setId(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onPhoneNumberHandler = (event) => {
      setPhoneNumber(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    // page refresh를 막아준다
    event.preventDefault()
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
    axios.post('http://localhost:8000/user/signup', JSON.stringify(
      {name: name, id: id, email: email, phonenumber: phonenumber ,password: password })
    )
    // 정상 수행
    .then((result)=>{
      // 로그인되면 /(index페이지)로 이동
      console.log(result)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="loginregister">
      <form>
        <h2>✨회원가입을 해주세요.</h2>
        <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="loginregister__input"/></div>
        <div><input name="id" type="text" placeholder="아이디" value={id} onChange={onIdHandler} className="loginregister__input"/></div>
        <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
        <div><input name="phonenumber" type="text" placeholder="전화번호" value={phonenumber} onChange={onPhoneNumberHandler} className="loginregister__input"/></div>
        <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
        <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="loginregister__input"/></div>
        <div><button type="submit" onSubmit={onSubmit} className="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
  );
}
export default Signup;
