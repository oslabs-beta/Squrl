import React from 'react'
//squrl logo
import LogoType from '../../assets/SQURL-Green.svg'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background-frame">
        <div id="homeIcon">
        <img className="homeIcon" src={LogoType}></img>
        </div>
        <div id="welcome">
        <p className="welcome">Welcome to SQURL!</p>
        </div>
        <div id="introP2">
        <p className="introP">
            Database Populated? Simply connect your database with your URI to visualize
            its KPI's in the easy to understand dashboard</p>
        </div>  
        <div id="introP1">
        <p className="introP">
            No data? No Problem! Generate and download 50+ million unique rows of dummy data.
            As many tables and columns as you want. With data that makes sense!
         </p>
        </div>
        <div id="introP3">
        <p className="introP">
           Want to make SQURL better? Contact the team at <a className="aTag" href="mailto:team@squrldb.io">team@squrldb.io</a>
           or contribute to the open source project on <a className="aTag" href="https://github.com/oslabs-beta/Squrl">Github</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
