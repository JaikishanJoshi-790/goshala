import React from 'react'

const shopPage = () => {
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
       <div className="header-bottom">
         <div className="container">
           <div className="row">
             <nav className="primary-menu">
               <div className="menu-area">
                 <div className="row justify-content-between align-items-center">
                   <a href="index.html" className="logo">
                     <img src="assets/images/logo/01.png" alt="logo" />
                   </a>
                   <div className="main-menu-area d-flex align-items-center">
                     <ul className="main-menu d-flex align-items-center">
                       <li>
                         <a href="google">Home</a>
                         <ul className="submenu">
                           <li>
                             <a href="index.html">Home page one</a>
                           </li>
                           <li>
                             <a href="index-2.html">Home page two</a>
                           </li>
                           <li>
                             <a href="index-3.html">Home page three</a>
                           </li>
                           <li>
                             <a href="index-4.html">Home page four</a>
                           </li>
                           <li>
                             <a href="index-5.html">Home page five</a>
                           </li>
                           <li>
                             <a href="onepage.html">OnePage Style</a>
                           </li>
                           <li>
                             <a href="home-layout.html">Home Box Layout</a>
                           </li>
                           <li>
                             <a href="http://labartisan.net/demo/gowala-rtl/rtl.html">
                               RTL Layout
                             </a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a href="google">Pages</a>
                         <ul className="submenu">
                           <li>
                             <a href="about.html">about</a>
                           </li>
                           <li>
                             <a href="team.html">Team Members</a>
                           </li>
                           <li>
                             <a href="google">Gallery</a>
                             <ul className="submenu">
                               <li>
                                 <a href="gallery.html">Gallery</a>
                               </li>
                               <li>
                                 <a href="gallery-2.html">Gallery Full Width</a>
                               </li>
                             </ul>
                           </li>
                           <li>
                             <a href="404.html">404</a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a className="active" href="google">
                           Product
                         </a>
                         <ul className="submenu">
                           <li>
                             <a className="active" href="shope-page.html">
                               Shop Page
                             </a>
                           </li>
                           <li>
                             <a href="shope-single.html">Shope Single Page</a>
                           </li>
                           <li>
                             <a href="shope-cart.html">Cart Page</a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a href="service.html">Services</a>
                       </li>
                       <li>
                         <a href="google">blog</a>
                         <ul className="submenu">
                           <li>
                             <a href="blog.html">Blog Page</a>
                           </li>
                           <li>
                             <a href="blog-single.html">Blog Single Page</a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a href="contact-us.html">Contact us</a>
                       </li>
                     </ul>
                     <div className="d-none d-lg-block">
                       <ul className="search-cart">
                         <li className="search">
                           <i className="flaticon-magnifying-glass" />
                         </li>
                         <li className="cart">
                           <i className="flaticon-shopping-bag" />
                           <span>2</span>
                           <div className="cart-content">
                             <div className="cart-item">
                               <div className="cart-img">
                                 <a href="google">
                                   <img
                                     src="assets/images/buycart/01.jpg"
                                     alt=""
                                   />
                                 </a>
                               </div>
                               <div className="cart-des">
                                 <a href="google">Product Title Hore</a>
                                 <p>$20.00</p>
                               </div>
                               <div className="cart-btn">
                                 <a href="google">
                                   <i className="flaticon-close" />
                                 </a>
                               </div>
                             </div>
                             <div className="cart-item">
                               <div className="cart-img">
                                 <a href="google">
                                   <img
                                     src="assets/images/buycart/02.jpg"
                                     alt=""
                                   />
                                 </a>
                               </div>
                               <div className="cart-des">
                                 <a href="google">Product Title Hore</a>
                                 <p>$20.00</p>
                               </div>
                               <div className="cart-btn">
                                 <a href="google">
                                   <i className="flaticon-close" />
                                 </a>
                               </div>
                             </div>
                             <div className="cart-bottom">
                               <div className="cart-subtotal">
                                 <p>
                                   Total: <b className="float-right">$40.00</b>
                                 </p>
                               </div>
                               <div className="cart-action">
                                 <button type="submit" className="button d-btn2">
                                   View cart
                                 </button>
                                 <button type="submit" className="button d-btn2">
                                   Checkout
                                 </button>
                               </div>
                             </div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </nav>
           </div>
         </div>
       </div>
     </header>
   </>
   
  )
}

export default shopPage
