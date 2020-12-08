import React from 'react'
// import LogoType from '../../assets/insidelogo.png'

const Home: React.FC =() =>{
    return (
        <div className="home">
        <div className="squrl">
            {/* <img className="homeLogo" src={LogoType} alt='LogoType' /> */}
        </div>
        <h1 className="welcome">Welcome To SQURL!</h1>
        <div className="info">
            <p className="aboutsqurl">Designed for your Postgres database, simply connect your URI on our visualization page and interact with
            your data in helpful GUI's to monitor the health of your database </p>
            <p className="aboutsqurl">Unlike many other dummy data generators on the market, Squrl allows you to render as many tables as you want,
             as many columns as you want up to 100+ million rows of SQL data you can export and impor directly into your db"
            </p>
            <p className="aboutsqurl">We're currently in Beta, always looking to improve our product. Feel free to contact us with
            improvements or contribute to our open source project.</p>
        </div>
        </div>
    )
}

export default Home;
