import React, { useState,useEffect } from 'react'
import "./Nav.css"
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect( () =>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100) {
              handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className='nav_logo'
        src='./neti.png'
        alt="netflix logo"
        />  
        <img
        className='nav_avatar'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatEj85qnHxfq9K_g_OchP1xkYiMnjH-P-RQ&usqp=CAU'
        alt="netflix logo"
        />
    </div>
  )
}

export default Nav