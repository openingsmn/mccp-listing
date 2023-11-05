import React from 'react'
import SearchIcon from "../assets/SearchIcon.png";
import dropIcon from "../assets/dropIcon.png";
import arrowboth from "../assets/arrowboth.png";
const AllListing = () => {

    let Filter = [
        {
            name: 'Types of Home',
            num: 0,
            items: [
                { value: 'CRS/Formerly SLS' },
                { value: 'ICF' },
                { value: 'Foster Care' },

                { value: 'SILS' },
                { value: 'In-Home' },
                { value: 'Respite' },

                { value: 'Temporary Care  Covid' },
                { value: 'Out of Metro Crisis Bed' },

            ]
        },
        {
            name: 'Funding Type',
            num: 0,
            items: [
                { value: 'DD Waiver' },
                { value: 'CAC' },
                { value: 'CADI Waiver' },
                { value: 'TBI' },
                { value: 'Elderly Waiver' },
                { value: 'Private Pay' },
                { value: 'Medical Assistance' },
            ]
        },

        {
            name: 'Beds Available',
            num: 1,
            option: 1,
            items: [
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5 },
                { value: 6 + '+' },
            ]
        },

        {
            name: 'Bedroom Privacy',
            num: 0,
            option: 0,
            items: [
                { value: 'Private' },
                { value: 'Shared' },
            ]
        },

        {
            name: '# of Bathrooms',
            num: 1,
            option: 1,
            items: [
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5 },
                { value: 6 + '+' },
            ]
        },

        {
            name: 'Gender Allowed',
            num: 1,
            option: 1,
            items: [
                { value: 'Male' },
                { value: 'Female' },
            ]
        },

        {
            name: 'Age Allowed ',
            num: 1,
            option: 1,
            items: [
                { value: '17 and Under' },
                { value: '18+' },
            ]
        },


        {
            name: 'Level of Intellectual Disability ',
            num: 0,
            option: 0,
            items: [
                { value: 'Mild' },
                { value: 'Moderate' },
                { value: 'Severe' },
                { value: 'Profound' },
            ]
        },

        {
            name: 'Mental Health Diagnosis ',
            num: 1,
            option: 0,
            items: [
                { value: 'Yes' },
                { value: 'No' },
                { value: 'Will Consider' },
            ]
        },


        {
            name: 'Physical Accommodations Available ',
            num: 0,
            option: 0,
            items: [
                { value: 'Wheelchair' },
                { value: 'Hoyer Lift' },
                { value: 'Ramp' },
                { value: 'Hospital Bed' },
                { value: 'Stair Bed' },
                { value: 'Stair Lift' },
                { value: 'Bathroom Hand Rails' },
            ]
        },

        {
            name: 'Nursing Support ',
            num: 0,
            option: 0,
            items: [
                { value: 'On Site' },
                { value: 'On Call' },
                { value: 'Weekly Visit' }, ,
            ]
        },

        {
            name: 'Typical Staffing Pattern ',
            num: 1,
            option: 0,
            items: [
                { value: '1:1' },
                { value: '1:2' },
                { value: '1:3' },
                { value: '2:4' },
            ]
        },


        {
            name: 'Overnight Supervision',
            num: 0,
            option: 0,
            items: [
                { value: 'Awake' },
                { value: 'Sleep' },
                { value: 'Electronic Monitoring' },
            ]
        },

    ]

    return (
        <>
            <div className='container-fluid top'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='container maincontainer newcontaner'>
                            <div className='innerBOx newbox'>

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
                        <hr />
                    </div>
                </div>

                <div className='container listing'>
                    <div className='row'>
                        <div className='col-4'>

                            {Filter.map((e) => {
                                return (
                                    <>



                                        <div className='filerbar'>
                                            <h3>{e.name}</h3>
                                            <div className={e.num === 1 ? 'flxitmesall' : ' '}>
                                                {e.items.map((val) => {
                                                    return <div className={e.num === 1 ? 'flxInput newuu' : 'flxInput'}>
                                                        {e.option === 1 ?
                                                            <input type="radio" name="[]" id="" />
                                                            : <input type="checkbox" name="" id="" />

                                                        }
                                                        <span>{val.value}</span>
                                                    </div>
                                                })

                                                }
                                            </div>



                                        </div>
                                    </>
                                )
                            })

                            }




                        </div>
                        <div className='col-8'>
                            <div className='firstcol'>
                                <div className='boxx1 yout1'>
                                    <div className='firsttab'>
                                        <strong>Provider</strong><img src={arrowboth} alt="" />
                                    </div>

                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                      <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    <div className='divH'> 
                                    <p>Harmony Homes & Services LLC (55+)</p>
                                    </div>
                                    
                                </div>
                                <div className='boxx1 yout2'>
                                     <div className='firsttab'>
                                        <strong>Address</strong><img src={arrowboth} alt="" />
                                    </div>
                                    <div className='divH'>
                                         
                                    <p>7064 158th St W</p>
                                         </div>
                                         <div className='divH'>
                                         
                                    <p>7064 158th St W</p>
                                         </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div><div className='divH'>
                                         
                                         <p>7064 158th St W</p>
                                              </div> 
                                </div>
                                <div className='boxx1 yout3'>
                                     <div className='firsttab'>
                                        <strong>City</strong><img src={arrowboth} alt="" />
                                    </div>
                                      <div className='divH'>
                                         
                                    <p>Apple Valley</p>
                                    </div>
                                    <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div> <div className='divH'>
                                         
                                         <p>Apple Valley</p>
                                         </div>  
                                </div>
                                <div className='boxx1 yout4'>
                                     <div className='firsttab'>
                                        <strong>Updated</strong><img src={arrowboth} alt="" />
                                    </div>
                                    <div className='divH'>
                                         
                                    <p>July 25, 2023</p>
                                         </div>
                                         <div className='divH'>
                                         
                                    <p>July 25, 2023</p>
                                         </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div><div className='divH'>
                                         
                                         <p>July 25, 2023</p>
                                              </div> 
                                </div>
                                <div className='boxx1 yout5'>
                                     <div className='firsttab'>
                                        <strong>Compare</strong><img src={arrowboth} alt="" />
                                    </div>
                                    <div className='divH'>
                                         
                                    <input type="checkbox" name="" id="" />
                                         </div>
                                         <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                    <input type="checkbox" name="" id="" />
                                         </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
                                              </div>   <div className='divH'>
                                         
                                         <input type="checkbox" name="" id="" />
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

export default AllListing