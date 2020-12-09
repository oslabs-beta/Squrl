import React from 'react'
// import LogoType from '../../assets/blueSquirrel.png'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background-frame">
        {/* <img className="homeIcon" src={LogoType}></img> */}
        <div className="homeInfo">
         <p className="welcome">Welcome to SQURL!</p>
          <p className="introP">
            To get started, simply link your database URI to visualize
            your KPI's in interactive and easy to understand GUI'<s></s></p>
          <p className="introP">
            No data? No Problem! Head over to our generator page and download 100+ Million unique SQL 
          queries. As many tables as you want, as many columns as you want. With data that makes sense!
         </p>
         <p className="introP">
           Want to make SQURL better? Contact our team 
          or contribute to our open source project @squrldb.io
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
