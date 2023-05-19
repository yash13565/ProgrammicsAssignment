import React from 'react'
import SearchBar from '../../Pages/SearchBar'
import style from './TopNavbar.module.css'
import { BsRobot } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function TopNavbar() {
    return (
        <div className={style.maincont}>
            <Link to='/' className={style.mylink}><h3> <BsRobot /> PRO OTT</h3></Link>
            <Link to='/' className={style.mylink}><p>Home</p></Link>
            <p>Shows</p>
            <p>Movie</p>
            <p>Comedy</p>
            <p>News</p>
            <p> <SearchBar /></p>
            <p>Subscribe</p>
            <p>Login</p>
        </div>
    )
}

export default TopNavbar