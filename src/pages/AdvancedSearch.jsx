import React from 'react'
import SearchIcon from "../assets/SearchIcon.png";
import dropIcon from "../assets/dropIcon.png";
import arrowDown from "../assets/arrowDown.png";
const AdvancedSearch = () => {



    return (
        <>
            <div className='container-fluid top'>


                <div className='container listing'>
                    <div className='row'>
                        <div className='col-12'>




                            <div className='filerbar bbb'>
                                <div className='confullTab'>
                                    <h2>Filter Search by </h2>
                                </div>



                                <div className='topZeroT'>

                                    <div className='NormalDrop'>
                                        <div className='rowdrop'>
                                            <span>Provider</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </div>

                                    <div className='topZero'>
                                        <h3>Types of Home</h3>
                                        <div className='flxitmesall'>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>CRS/Formerly SLS</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>ICF</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Foster Care</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>SILS</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Respite</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>In-Home</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Temporary Care  Covid</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Out of Metro Crisis Bed</span>
                                            </div>


                                        </div>
                                    </div>

                                    <div className='topZero'>
                                        <h3>Funding Type</h3>
                                        <div className='flxitmesall'>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>DD Waiver</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>CAC</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>CADI Waiver</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>TBI</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Elderly Waiver</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Private Pay</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Medical Assistance</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Beds Available</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Bedroom Privacy</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Age Allowed</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>


                                    <div className='topZero'>
                                        <h3>Funding Type</h3>
                                        <div className='flxitmesall'>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Main Floor</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Basement</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Upstairs</span>
                                            </div>
                                             
                                        </div>
                                    </div>



                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Level of Intellectual Disability</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Mental Health Diagnosis</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Age Allowed</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Gender Allowed</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>


                                    <div className='topZero'>
                                        <h3>Physical Accommodations Available</h3>
                                        <div className='flxitmesall'>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Wheelchair</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Hoyer Lift</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Ramp</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Hospital Bed</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Stair Lift</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Bathroom Hand Rails</span>
                                            </div>
                                            
                                             
                                        </div>
                                    </div>



                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Nursing Support</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>



                                    <div className='topZero'>
                                        <h3>Challenging Behaviors</h3>
                                        <div className='flxitmesall'>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Self Injurious</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Verbal Aggression</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Physical Aggression</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Property Destruction</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Elopement</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Undesirable Sexual Behaviors</span>
                                            </div>
                                            
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Alcohol / Chemical Dependency</span>
                                            </div>
                                             <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Emergency Use of Controlled Procedure</span>
                                            </div>
                                            <div className='flxInput newuu'>
                                                <input type="checkbox" name="" id="" />
                                                <span>Positive Support Transition Plan</span>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Typical Staffing Pattern</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className='col-4'>
                                            <div className='NormalDrop'>
                                                <div className='rowdrop'>
                                                    <span>Overnight Supervision</span>
                                                    <img src={arrowDown} alt="" />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>



                                    <div className='row'>
                    <div className='col-12'>
                        <div className='container maincontainer newcontaner bwq'>
                            <div className='innerBOx newbox zxww'>

                                <div className='placeholdersec'>
                                    <div className='iconhere newmoe'>
                                        <img src={SearchIcon} alt={''} srcset="" />
                                    </div>
                                    <div className='placeinut'>
                                        <input type="text" placeholder='Enter Zip Code ' />
                                    </div>
                                    <div className='twoBtn1 twoBtn2Z'>

                                        {/* <img src={dropIcon} alt="" /> */}
                                        <select name="cars" id="cars">
                                            <option value="volvo">Distance</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>


                                    </div>
                                    <div className='twoBtn1 twoBtn2 twoBtn3 '>
                                        <button>Search</button>
                                    </div>
                                </div>


                            </div>
                        </div> 
                    </div>
                </div>


                                </div>





                            </div>






                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvancedSearch