import React from 'react'
import './LandingPage.css'
import Footer from '../Footer/Footer.js'
export const LandingPage = () => {
    

    return (
        <div>
            <div className="container">
                <div className="overlay">
                    <p className="screen">ChatarPatar</p>
                    <div className="intro">
                        <a className="myBtn" onclick="fadeOut()" href="/join">Let's Chat</a>
                    </div>
                    <Footer />
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage