import React, { useState } from 'react'
import profile from '../assests/images/profile.png'
import '../assests/css/header.css'
const SideModal = ({setActivebutton, activebutton}) => {


  return (




<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

  <div className="offcanvas-body header-bg  ">

  <div className='container-fluid p-0 m-0  header-bg '   >
     <div className="row ">
       
      <div  className={`col-lg-4  `}>
        <div className="p-5">
            <div className="card py-3  mb-5 border-0 shadow">
                <div className="d-flex " >

                <div className="image">
                    <img src={profile} alt="" className='img-fluid'  />
                </div>
                <div className="image-content">
                    <h5>Hi Reader,</h5>
                    <span>Here’s your News!</span>
                </div>
                </div>
            </div>
            <div className="card py-3  border-0 shadow">
                <div className=" " >

                <div className="image text-center pb-2">
                   <h4 className='fw-bold'> Have a Feedback?</h4>
                </div>
                <div className="d-flex justify-content-center ">
           
                 <button class="button-19 active" role="button" onClick={()=>setActivebutton("")} data-bs-dismiss="offcanvas" aria-label="Close">We’re Listening!</button>

                </div>
                </div>
            </div>
        </div>
    </div>
    <div  className={`col-lg-8  `}>
        <div className='p-5 ps-0'>

    <h3>Thank you so much for taking the time!</h3>
    <span className='fs-6'> Please provie the below details!</span>
        </div>
    <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">First Name:</label>
    <input type="email" className="form-control shadow border-0" id="inputEmail4"/>
  </div>
  <div className="col-md-6"></div>
  <div className="col-md-6">
    <label for="inputAddress" className="form-label">Last Name:</label>
    <input type="text" className="form-control shadow border-0" id="inputAddress" placeholder=""/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address:</label>
    <input type="text" className="form-control shadow border-0" style={{height:"100px"}} id="inputAddress2" />
  </div>
  <div className="col-md-8">
    <label for="inputCity" className="form-label">Country:</label>
    <input type="text" className="form-control shadow border-0" id="inputCity"/>
  </div>
  <div className="col-md-10">
  <label for="inputCity" className="form-label">Email:</label>
  <div className="d-flex text-nowrap">

  <input type="email" className="form-control shadow border-0" id="inputCity"/> 
  <span className='text-danger fs-5 ms-3'> Please enter a Valid Email</span>
  </div>
  </div>
  <div className="col-md-12">
    <label for="inputZip" className="form-label">Phone Number</label>
    <div className="d-flex">

    <input type="text" className="form-control me-3 shadow border-0 " style={{width:"50px"}} id="inputZip" placeholder=""/>
    <input type="number" className="form-control shadow border-0" id="inputCity"  style={{width:"320px"}} placeholder=""/>
    <span className='text-danger fs-5 ms-3'> Please enter a Valid Number</span>



    </div>
  </div>
  <div className="col-md-6">
    
  </div>
 
  
  <div className="col-12">
    <button type="submit" className="btn btn-success px-5 text-white fw-bold">Submit Feedback</button>
  </div>
</form>
    </div>
   </div> 
    </div>
  </div>
</div>

   
  )
}

export default SideModal