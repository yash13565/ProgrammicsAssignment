import React from 'react'
import style from './LeftNavbar.module.css'
function LeftNavbar() {
    return (
        <div className={style.maincont}>
            <h2>Channels</h2>
            <h2>Languages</h2>
            <h2>Genres</h2>
        </div>
    )
}

export default LeftNavbar