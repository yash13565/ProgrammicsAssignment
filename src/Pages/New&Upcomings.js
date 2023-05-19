import React from 'react'
import TopNavbar from '../Components/TopNavbar/TopNavbar'
import LeftNavbar from '../Components/LeftNavbar/LeftNavbar'

function New() {
  return (
    <div>
        <TopNavbar/>
        <LeftNavbar/>
        <div>
        <img src='https://www.quirkybyte.com/wp-content/uploads/2021/05/John-wick-4.jpg' alt='upcoming.jpeg'/>
        <details>
            <summary>John Wick</summary>
            <p></p>
        </details>
        </div>
        <div>
        <img src='https://lh4.googleusercontent.com/-xcNX8ZZbd_4/U-sB2TLL3lI/AAAAAAAASvo/1SRPhQk7tJ8/s554/Upcoming%2520Hollywood%2520Movies%2520-%2520Avatar%25202.JPG' alt='upcoming.jpeg'/>
         <details>
            <summary></summary>
            <p></p>
            </details>
        </div>
        <div>
        <img src='https://th.bing.com/th/id/OIP.lmNzYoePq0-tLwpeBP_7EAAAAA?pid=ImgDet&rs=1' alt='upcoming.jpeg'/>
              <details>    
                 <summary></summary>
                 <p></p>
                 </details>
        </div>
        <div>
        <img src='https://i.pinimg.com/originals/58/fb/06/58fb066441980d60a429589f47c9f089.jpg' alt='upcoming.jpeg'/>
                <details>
                    <summary></summary>
                    <p></p>
                    </details>
         </div>
        
    </div>
  )
}

export default New