import React from "react";
import Navbar from "./Navbar"
import SubClasses from "./SubClasses"
import Card from "./Card"
import { data } from './data.js'

const Home = () => {
    const displayCards = data ?
        data?.map((d, key) => (
            <Card item={d} key={key} />
        )) :
        <div>..processando</div>
    return (
        <>
            <header>
                <Navbar />
                <SubClasses />
            </header>
            <body>
                <div className="container-fluid container text-center">
                    <div className="row">

                        {displayCards}

                    </div>
                </div>

            </body>
        </>

    )
}

export default Home