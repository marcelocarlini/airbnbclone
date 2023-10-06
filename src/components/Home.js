import React from "react";
import Navbar from "./Navbar"
import SubClasses from "./SubClasses"
import Card from "./Card"

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
                <SubClasses />
            </header>
            <body>
                <div className="container_fluid">
                    <Card />
                </div>

            </body>
        </>

    )
}

export default Home