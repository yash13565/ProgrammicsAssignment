import React,{useState} from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const[isOpen,setIsOpen]=useState(false)
  const[data,setData]=useState('')
  const navigate = useNavigate()
  function handlePopup(){
    setIsOpen(!isOpen)
  }
  console.log(data)
  function handleSubmit(e){
    e.preventDefault()
    setData('')
    setIsOpen(false)
    navigate('/')
  }
  return (
    <div className={style.loginpopup}>
      <button className={style.butn} onClick={handlePopup}>Login</button>
      {
        isOpen &&(
          <div className={style.popup}>
            <p  className={style.cancelbtn}onClick={handlePopup} >X</p>
              <h3>Login Here😁</h3>
              <h4>* Indicates all the required fields</h4>
            <form >
            *<input type='email' placeholder='Enter your Email' onChange={(e)=>setData(e.target.value)} required/>
            *<input type='password' placeholder='Enter your Email' onChange={(e)=>setData(e.target.value)} required/>
            <button onClick={handleSubmit} className={style.login}>Login</button>      
                  </form>
            </div>
        )
      }
    </div>
  )
    }

export default Login