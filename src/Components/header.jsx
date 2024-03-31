import React from 'react'


const Header = () => {
  return (
    <>
    <header className="header-section style-2 style-3 d-none d-lg-block">
       <div className="header-top">
         <div className="container">
           <div className="htop-area row">
             <div className="htop-left">
               <ul className="htop-information">
                 <li>
                   <i className="far fa-envelope" /> Gowala45@gmail.com
                 </li>
                 <li>
                   <i className="fas fa-phone-volume" /> +88 130 589 745 6987
                 </li>
                 <li>
                   <i className="far fa-clock" /> Mon - Fri 09:00 - 18:00
                 </li>
               </ul>
             </div>
             <div className="htop-right">
               <ul>
                 <li>
                   <a href="google">
                     <i className="fab fa-twitter" />
                   </a>
                 </li>
                 <li>
                   <a href="google">
                     <i className="fab fa-behance" />
                   </a>
                 </li>
                 <li>
                   <a href="google">
                     <i className="fab fa-instagram" />
                   </a>
                 </li>
                 <li>
                   <a href="google">
                     <i className="fab fa-vimeo-v" />
                   </a>
                 </li>
                 <li>
                   <a href="google">
                     <i className="fab fa-linkedin-in" />
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </header>
    </>
  )
}

export default Header
