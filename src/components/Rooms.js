import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import './Rooms.css'
import parse from 'html-react-parser'
import OpenAI from "openai";

const { Configuration, OpenAIApi } = require('openai')
const Rooms = () => {
    const [tableVal, setTableVal] = useState(null)
    const [tableProcessing, setTableProcessing] = useState(false)
    const location = useLocation();
    const placeInfo = location.state.info

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const GenerateTravelPlan = async (targetPlace) => {
        setTableProcessing(true)
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0301",
            prompt: "Qual capital do Brasil?",
            temperature: 0.7,
            max_tokens: 256,
        });
        setTableVal(response.data.choices[0].text)
        setTableProcessing(false)
        console.log(response.data.choices[0].text);
    }
    GenerateTravelPlan();

    const imageGallery = placeInfo?.images.slice(1, placeInfo?.images.lenght).map((i, k) => (
        <div className='col-12 col-md-6 px-1 my-1' key={k}>
            <img src={i} className='rounded smallImg' />

        </div>
    ))

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
                <div className='container my-5'>
                    <div className='text-center'>
                        <button className='btn btn-lg btn-primary w-50 text-center' onClick={() => { GenerateTravelPlan(placeInfo.city) }}>
                            Crie plano de viagem para {placeInfo.city} <i className='bi bi-magic'></i>
                        </button><br />
                        <small className='fst-italic'>powered by <b>OpenAI GPT-3</b></small>
                    </div>
                    <div className='mt-4 pb-5'>
                        {
                            tableProcessing && !tableVal ?
                                <div className='d-flex justify-content-center'>
                                    <div className='spinner-border' role="status">
                                        <span className='visually-hidden'>processar...</span>
                                    </div>
                                </div>
                                : !tableProcessing && tableVal ? parse(tableVal) : ""
                        }
                        <table className='myTable'>
                            <tr>
                                <th>Atividade</th>
                                <th>Hora</th>
                                <th>Comentario</th>
                            </tr>
                            <tr>
                                <td>
                                    Dia 1
                                </td>
                                <td>
                                    9 AM
                                </td>
                                <td>
                                    Escreva alguma coisa!
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </body>
        </div>
    )

}

export default Rooms;