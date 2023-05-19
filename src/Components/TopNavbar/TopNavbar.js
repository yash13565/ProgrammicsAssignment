import React, { useState } from 'react'
import SearchBar from '../../Pages/SearchBar'
import style from './TopNavbar.module.css'
import { BsRobot } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../../Pages/Login'
function TopNavbar() {
    const [input,SetInput] = useState()
    const navigate = useNavigate()
    function handleRecom(){
        navigate('/recomended')
    }
    return (
        <div className={style.maincont}>
            <Link to='/' className={style.mylink}><h3> <BsRobot /> PRO OTT</h3></Link>
            <Link to='/' className={style.mylink}><p>Home</p></Link>
           <p><select className={style.dropdown}>
               <option><p>Shows</p></option> 
                <option onClick={handleRecom}><Link to='/recomended'>Recommended for you</Link></option>
                <option><Link to='/Popularshows'>Animated Adventures</Link></option>
                <option><Link to='/newupcoming'>Popular Shows/Drama</Link></option>
                <option><Link to='/animated'>New & Upcoming</Link></option>
                </select></p> 
            <p>Movie</p>
            <p>Comedy</p>
            <p>News</p>
            <p> <SearchBar /></p>
            <p>Subscribe</p>
            <p><Login/></p>
        </div>
    )
}

export default TopNavbar