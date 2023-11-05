import React from 'react' 

const SignIn = () => {


    function ToggleCheckBox(elem) {
        var TickLine1 = elem.querySelector(".tick>.Tickline1")
        var Tickline2 = elem.querySelector(".tick>.Tickline2")
        if (elem.getAttribute("data-status") == "true") {
            TickLine1.style.opacity = 1
            Tickline2.style.opacity = 1
            elem.setAttribute("data-status", false)
    
        } else {
            TickLine1.style.opacity = 0
            Tickline2.style.opacity = 0
            elem.setAttribute("data-status", true)
        }
    }
    
    return (
        <>
            <div className='container-fluid top wtc'> 
                    <div className='row'>
                        <div className='col-12'>

                        <>


<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="practice1css.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Alkatra&display=swap" rel="stylesheet" />
<title>Sign-Up-Form</title>


<div className="container">
    <form action="" method="post" className="sign-form" id="sign-form" autoComplete="on">
        <h1 className="form-title">Sign In</h1>
        <p className="form-caption">See your growth and get consulting support!</p>
        {/* <button className="google-sign-btn"><i className="fa fa-google" /> Sign up with Google</button> */}

        <br />

        <div className="google-guide-container">
            <div className="hr-left" />
            <p className="guide-google"> Sign In with Email</p>
            <div className="hr-right" />
        </div>

        
        <label htmlFor="email">Email<span className="star-required">*</span></label>
        <input type="email" name="email" id="email" placeholder="mail@website.com" required />

        <label htmlFor="password">Password<span className="star-required">*</span></label>
        <input type="password" name="password" id="password" placeholder="Enter your password" required />
       
        <br />

        <input type="checkbox" name="terms-agree" id="terms-agree" required />
        <p className="sentence-agree">I agree to the <a href="">Terms & Conditions</a></p>

        <input type="submit" value="Sign In" id="submit" />
  
    </form>
</div>

</>
 
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn