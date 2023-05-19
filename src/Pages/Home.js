import React from 'react'
import TopNavbar from '../Components/TopNavbar/TopNavbar'
import LeftNavbar from '../Components/LeftNavbar/LeftNavbar'
import Slider from '../Components/SliderComponent/Slider'
import style from './Home.module.css'
function Home() {
    const images = [
        'https://www.pixelstalk.net/wp-content/uploads/2016/10/comedy-wallpapers-rDdwrhC.jpg',
        'https://www.watchmojo.com/uploads/thumbs720/WM-Film-Top10-Comedy-Movies-That-Bombed-At-The-Box-Office_Y2B6M4-MP.jpg',
        'https://th.bing.com/th/id/OIP.sEl11nOTQehhAQvXGq0HiAHaEK?pid=ImgDet&rs=1',
        'https://wallpaperaccess.com/full/37995.jpg',
        'https://th.bing.com/th/id/OIP.DOUyA63TeaIxulirekqucgHaEK?pid=ImgDet&rs=1',
        'https://images.hdqwalls.com/wallpapers/kin-movie-4k-ej.jpg',
        'https://th.bing.com/th/id/R.fe890f0f83671284c36877e1eda15d9d?rik=ocOKVcRiJleogg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fryan-renolds-funny.jpg&ehk=eCwN55mHmPBQwh341XeJKXa%2fBMF7a8v7x7hKaySS7To%3d&risl=&pid=ImgRaw&r=0',
        'https://c4.wallpaperflare.com/wallpaper/317/900/851/action-drama-2017-4k-wallpaper-preview.jpg',
        'https://wallpaperaccess.com/full/37943.jpg',
      ];
  return (
    <div >
    <TopNavbar/>
    <div className={style.homecont}>
    <LeftNavbar/>
    <Slider images={images}/>
    </div>
    </div>
  )
}

export default Home