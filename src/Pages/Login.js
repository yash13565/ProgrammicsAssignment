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
  function handleSubmit(e){
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className={style.loginpopup}>
      <button className={style.butn} onClick={handlePopup}>Login</button>
      {
        isOpen &&(
          <div className={style.popup}>
            <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter your Email' onChange={(e)=>setData(e.target.value)} required/>
            <input type='password' placeholder='Enter your Email' onChange={(e)=>setData(e.target.value)} required/>
            <input type='submit'/>      
                  </form>
            <button onClick={handlePopup} >X</button>
            </div>
        )
      }
    </div>
  )
    }

export default Login