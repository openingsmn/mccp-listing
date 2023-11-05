import React from 'react'
import SearchIcon from "../assets/SearchIcon.png";
import dropIcon from "../assets/dropIcon.png";
import arrowDown from "../assets/arrowDown.png";
import logo2 from "../assets/logo2.png";
const UserProfile = () => {
 
    
    return (
        <>
            <div className='container-fluid top okayss'> 
                    <div className='row'>
                        <div className='col-12'>

                       <>
                       <div className='container'>
                       <div className="navbar-top">
        <div className="title">
            <h1>Profile</h1>
        </div>

        { /* Navbar */ }
        <ul>
            <li>
                <a href="#message">
                    <span className="icon-count">29</span>
                    <i className="fa fa-envelope fa-2x" />
                </a>
            </li>
            <li>
                <a href="#notification">
                    <span className="icon-count">59</span>
                    <i className="fa fa-bell fa-2x" />
                </a>
            </li>
            <li>
                <a href="#sign-out">
                    <i className="fa fa-sign-out-alt fa-2x" />
                </a>
            </li>
        </ul>
        { /* End */ }
    </div>
    { /* End */ }

    { /* Sidenav */ }
    <div className="sidenav">
        <div className="profile">
            <img src={logo2} alt="" width="100" height="100" />

            <div className="name">
                ImDezCode
            </div>
            <div className="job">
                Web Developer
            </div>
        </div>

        <div className="sidenav-url">
            <div className="url">
                <a href="#profile" className="active">Profile</a>
                <hr align="center" />
            </div>
            <div className="url">
                <a href="#settings">All Listings</a>
                <hr align="center" />
            </div>
            <div className="url">
                <a href="#settings">Add Listings</a>
                <hr align="center" />
            </div>
        </div>
    </div>
    { /* End */ }

    { /* Main */ }
    <div className="main"> 
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit" />
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>ImDezCode</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>imdezcode@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>Bali, Indonesia</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
 
    </div>
    </div>
    </>
 
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile