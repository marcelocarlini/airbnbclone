import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import './Rooms.css'
import parse from 'html-react-parser'
import OpenAI from "openai";

const { Configuration, OpenAIApi } = require('openai')
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
                            <img src={placeInfo.images[0]} className='rounded-start mainImg' alt='' />
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 col-xl-5'>
                            <div className='row'>
                                {imageGallery}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )

}

export default Rooms;