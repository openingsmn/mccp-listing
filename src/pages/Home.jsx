import React from 'react'
import SearchIcon from "../assets/SearchIcon.png";
import dropIcon from "../assets/dropIcon.png";
import location from "../assets/location.png";

const Home = () => {
  return (
    <div>
    <div className='container-fluid full-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contents'>
              <h1>
                Search for <br /><span>residential</span> <br />openings
              </h1>
              <p>MCCP provides timely assistance to address behavioral concerns in the lives of people with Intellectual Disabilities and Mental Health issues. Assessment, strategies, trainings, crisis homes and more</p>
            </div>
          </div>
        </div>
      </div>



    </div>

    <div className='container'>
      <div className='row'>
        <div className='maincontainer'>
          <div className='innerBOx'>

            <div className='placeholdersec'>
              <div className='iconhere'>
                <img src={SearchIcon} alt={''} srcset="" />
              </div>
              <div className='placeinut'>
                <input type="text" placeholder='Enter Zip Code ' />
              </div>
            </div>
            <hr />
            <div className='buttonrow'>
              <div className='twoBtn1'>

              <img src={dropIcon} alt="" />
              <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>


              </div>
              <div className='twoBtn1 twoBtn2  '>
                <button> <img src={location} alt="" srcset="" /> Search by Location</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div></div>
  );
}

export default Home