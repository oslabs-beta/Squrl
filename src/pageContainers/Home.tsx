import React from 'react'
import Logo from '../../assets/SQURL-Green.svg'
import Analytic from '../../assets/activity.svg'
import Send from '../../assets/send.svg'
import Database from '../../assets/database.svg'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background-frame">

        <div className="home-heading">
          <p className="welcome">Welcome to SQURL!</p>
        </div>

        <div id="home-logo">
          <img src={Logo}></img>
        </div>

        <div id="content-placement-1" className='content-div'>
          <div className="icon-div">
            <img src={Database}></img>
          </div>
          <div className="p-div">
            <p>
              No data? Generate and download 50+ million unique rows of dummy data.
              As many tables and columns as you want. With data that makes sense!
          </p>
          </div>
        </div>

        <div id="content-placement-2" className='content-div'>
          <div className="icon-div">
            <img src={Analytic}></img>
          </div>
          <div className="p-div">
            <p>
              Database Populated? Simply connect your database with your URI to visualize
              its KPI's in the easy to understand dashboard
            </p>
          </div>
        </div>


        <div id="content-placement-3" className='content-div'>
          <div className="icon-div">
            <img src={Send}></img>
          </div>
          <div className="p-div">
            <p>
              Want to make SQURL better? Contact the team at <a href='mailto:team@squrldb.io'>team@squrldb.io</a> or contribute to the open source project on <a href='https://github.com/oslabs-beta/Squrl'>Github</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
