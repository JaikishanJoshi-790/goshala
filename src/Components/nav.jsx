import React from 'react'


const Nav = () => {
  return (
    <div>
      <div className="search-area">
       <div className="search-input">
         <div className="search-close">
           <span />
           <span />
         </div>
         <form>
           <input type="text" name="text" placeholder="*Search Here" />
         </form>
       </div>
     </div>
     {/* mobile-nav section start here */}
     <div className="mobile-menu">
       <nav className="mobile-header primary-menu d-lg-none">
         <div className="header-logo">
           <a href="index.html" className="logo">
             <img src="assets/images/logo/01.png" alt="logo" />
           </a>
         </div>
         <div className="header-bar" id="open-button">
           <span />
           <span />
           <span />
         </div>
       </nav>
       <nav className="menu">
         <div className="mobile-menu-area d-lg-none">
           <div className="mobile-menu-area-inner" id="scrollbar">
             <ul className="m-menu">
               <li>
                 <a href="google0">Home</a>
                 <ul className="m-submenu">
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
                 <a href="google0">Pages</a>
                 <ul className="m-submenu">
                   <li>
                     <a href="about.html">about</a>
                   </li>
                   <li>
                     <a href="team.html">Team Members</a>
                   </li>
                   <li>
                     <a href="google0">Gallery</a>
                     <ul className="m-submenu">
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
                 <a className="active" href="google0">
                   Products
                 </a>
                 <ul className="m-submenu">
                   <li>
                     <a href="shope-page.html">Shop Page</a>
                   </li>
                   <li>
                     <a href="shope-single.html">Shope Single Page</a>
                   </li>
                   <li>
                     <a className="active" href="shope-cart.html">
                       Cart Page
                     </a>
                   </li>
                 </ul>
               </li>
               <li>
                 <a href="service.html">Services</a>
               </li>
               <li>
                 <a href="google0">Blog</a>
                 <ul className="m-submenu">
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
             <ul className="social-link-list d-flex flex-wrap">
               <li>
                 <a href="google" className="facebook">
                   <i className=" fab fa-facebook-f" />
                 </a>
               </li>
               <li>
                 <a href="google" className="twitter-sm">
                   <i className="fab fa-twitter" />
                 </a>
               </li>
               <li>
                 <a href="google" className="linkedin">
                   <i className="fab fa-linkedin-in" />
                 </a>
               </li>
               <li>
                 <a href="google" className="google">
                   <i className="fab fa-google-plus-g" />
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </nav>
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
                         <a href="home">Home</a>
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
                         <a className="active" href="google">
                           Pages
                         </a>
                         <ul className="submenu">
                           <li>
                             <a href="about.html">about</a>
                           </li>
                           <li>
                             <a href="team.html">Team Members</a>
                           </li>
                           <li>
                             <a className="active" href="google">
                               Gallery
                             </a>
                             <ul className="submenu">
                               <li>
                                 <a href="gallery.html">Gallery</a>
                               </li>
                               <li>
                                 <a className="active" href="gallery-2.html">
                                   Gallery Full Width
                                 </a>
                               </li>
                             </ul>
                           </li>
                           <li>
                             <a href="404.html">404</a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a href="google">Product</a>
                         <ul className="submenu">
                           <li>
                             <a href="shope-page.html">Shop Page</a>
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
    </div>
  )
}

export default Nav
