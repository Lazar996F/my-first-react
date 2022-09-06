import React, { useState } from 'react'; 
import './navbar.css'; 
import Menuicons1 from './Menuicons'; 
import Menuicons2 from './Menuicons2'; 
import {FaGamepad, FaSearch, FaShoppingCart, FaBars,FaPlayCircle, FaInternetExplorer, FaEdit, FaPaw, FaStopCircle} from 'react-icons/fa'; 
import Dropdown from './Dropdown';





function Navbar() {
  

  const [dropOnlyForGames, setDropdownOnlyForGames]= useState(false);  


  return ( 
    <div className='Navbar'>
     <div className="nav-bar-1">
      <ul className="list-1"> 
        <li><a href="#"><Menuicons1 icon={<FaSearch /> }name="SEARCH" /></a></li>
        <li><a href="#"><Menuicons1 icon={<FaShoppingCart/>} name="SHOP"/></a></li>
      </ul>

     </div>
     <div className="nav-bar-2">
       <div className="logo">
        <img className="logo" src="images/logo2.PNG"></img>
       </div>
       <ul className="list-2"> 
         <li onMouseEnter={() => setDropdownOnlyForGames(true)} onMouseLeave={() => setDropdownOnlyForGames(false)}><a href="#">
          <Menuicons2 isHovered={dropOnlyForGames}  name="GAMES"  icon={<FaGamepad/>}/></a></li>
         <li><a href="#"><Menuicons2   name="VIDEOS"   icon={<FaPlayCircle />} /></a></li>
         <li><a href="#"><Menuicons2 name="ANIMALS"  icon={<FaPaw />} /></a></li>
         <li><a href="#"><Menuicons2 name="EXPLORE MORE"    icon={<FaStopCircle />} /></a></li>
         <li><a href="#"><Menuicons2 name="SUBSCRIBE"  icon={<FaEdit />} /></a></li>
       </ul>

       <div className="hamburger">
        {<FaBars size="3m"/>}
       </div>
     </div>
       {dropOnlyForGames && <Dropdown/>}
    </div>
  ); 

}


export default Navbar; 