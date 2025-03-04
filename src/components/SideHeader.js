import React, { useState } from 'react'
import profile from '../assests/images/profile.png'
import '../assests/css/header.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuBoxed } from "react-icons/cg";
import MainCard from './MainCard';
import SecondCard from './SecondCard';
import SideModal from './SideModal';
function Sideheader() {
    const [activeMenu, setActiveMenu] = useState("menu1");
    const [activebutton, setActivebutton] = useState("");
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    
    };
    const handleButton= (btn) => {
      setActivebutton(btn);
    
    };
  return (
    <>
  <SideModal setActivebutton={setActivebutton} activebutton={activebutton}/> 

    <div className='container-fluid  header-bg'   >
     <div className="row">
      <div className="col-lg-3 header-content ">
        <div className="p-5">
            <div className="card py-3  border-0 shadow">
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

          <div className="card py-3  my-5 border-0 shadow">
                <div className="text-center " >

                <div className="image">
                    <h4 className='fw-bold'>View Toggle</h4>
                </div>
                <div className="d-flex justify-content-center ">
                <div className="icon-box">
         <span
          className={`menu1 rounded-start ${activeMenu === "menu1" ? "active shadow" : ""}`}
          onClick={() => handleMenuClick("menu1")}
        >
          <CgMenuBoxed size={"45px"} color='#9C9C9C' />
        </span>
        <span
          className={`menu2 rounded-end ${activeMenu === "menu2" ? "active shadow" : ""}`}
          onClick={() => handleMenuClick("menu2")}
        >
          <TfiMenuAlt size={"45px"} color='#272727' />
        </span>
      </div>
                </div>
                </div>
            </div>

            <div className="card py-3  border-0 shadow">
                <div className=" " >

                <div className="image text-center pb-2">
                   <h4 className='fw-bold'> Have a Feedback?</h4>
                </div>
                <div className="d-flex justify-content-center ">
           
                 <button class={`button-19  ${activebutton === "Active" && 'active'}`} role="button" onClick={()=>handleButton("Active")}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">We’re Listening!</button>

                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-9">
    {  activeMenu === "menu2" &&  <MainCard/>}
    {    activeMenu === "menu1" &&  <SecondCard/>}
    </div>


   </div>

        
    </div>
    </>
  )
}

export default Sideheader
