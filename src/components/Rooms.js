import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'


const Rooms = () => {
    const location = useLocation();
    const placeInfo = location.state.info

    return (

        <div>
            <header>
                <Navbar />
            </header>
            <body>
                <div className='container mt-4'>
                    <div>
                        <h2>Central teste teste </h2>
                        <span><i className='bi bi-star-fill'> 4.34 - 202 reviews | SuperHot - {placeInfo?.city + "," + placeInfo?.country}</i></span>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-12 col-lg-7 col-xl-7'>

                        </div>
                        <div className='col-12 col-md-12 col-lg-5 col-xl-5'>

                        </div>
                    </div>
                </div>
            </body>
        </div>
    )

}

export default Rooms;