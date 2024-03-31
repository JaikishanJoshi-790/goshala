import React from 'react'

const shopSingle = () => {
  return (
     <>
     <section className="page-header padding-tb page-header-bg-1">
       <div className="container">
         <div className="page-header-item d-flex align-items-center justify-content-center">
           <div className="post-content">
             <h3>Gowala Products Single</h3>
             <div className="breadcamp">
               <ul className="d-flex flex-wrap justify-content-center align-items-center">
                 <li>
                   <a href="index.html">Home</a>
                 </li>
                 <li>
                   <a href="google">Pages</a>
                 </li>
                 <li>
                   <a href="google" className="active">Products</a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* page header section ending here */}
     {/* Shop Page Section start here */}
     <section className="shop-single padding-tb">
       <div className="container">
         <div className="row">
           <div className="col-lg-9 col-12 sticky-widget">
             <div className="product-details">
               <div className="row">
                 <div className="col-md-6 col-12">
                   <div className="product-thumb">
                     <div className="slider-for">
                       <div className="thumb">
                         <img
                           id="myimage"
                           src="assets/images/shop/10.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage8"
                           src="assets/images/shop/02.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage1"
                           src="assets/images/shop/03.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage2"
                           src="assets/images/shop/04.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage3"
                           src="assets/images/shop/05.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage4"
                           src="assets/images/shop/06.jpg"
                           alt="shopZoom"
                         />
                       </div>
                       <div className="thumb">
                         <img
                           id="myimage5"
                           src="assets/images/shop/07.jpg"
                           alt="shopZoom"
                         />
                       </div>
                     </div>
                     <div className="slider-nav">
                       <div className="thumb">
                         <img src="assets/images/shop/10.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/02.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/03.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/04.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/05.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/06.jpg" alt="shop" />
                       </div>
                       <div className="thumb">
                         <img src="assets/images/shop/07.jpg" alt="shop" />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 col-12">
                   <div className="post-content">
                     <h4>
                       <a href="google">Product Text here</a>
                     </h4>
                     <p className="rating">
                       <i className="far fa-star" />
                       <i className="far fa-star" />
                       <i className="far fa-star" />
                       <i className="far fa-star" />
                       <i className="far fa-star" />
                       (3 review)
                     </p>
                     <h4>$ 340.00</h4>
                     <h5>Product Description</h5>
                     <p>
                       Energistia an deliver atactica metrcs after avsionary
                       Apropria trnsition enterpris an sources applications
                       emerging psd template communities.
                     </p>
                     <form>
                       <div className="select-product size">
                         <select>
                           <option>Select Size</option>
                           <option>SM</option>
                           <option>MD</option>
                           <option>LG</option>
                           <option>XL</option>
                           <option>XXL</option>
                         </select>
                         <i className="fas fa-angle-down" />
                       </div>
                       <div className="select-product color">
                         <select>
                           <option>Select Color</option>
                           <option>Pink</option>
                           <option>Ash</option>
                           <option>Red</option>
                           <option>White</option>
                           <option>Blue</option>
                         </select>
                         <i className="fas fa-angle-down" />
                       </div>
                       <div className="cart-plus-minus">
                         <div className="dec qtybutton">-</div>
                         <input
                           className="cart-plus-minus-box"
                           type="text"
                           name="qtybutton"
                           defaultValue={1}
                         />
                         <div className="inc qtybutton">+</div>
                       </div>
                       <div className="discount-code">
                         <input type="text" placeholder="Enter Discount Code" />
                       </div>
                       <button type="submit">Add To Cart</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
             <div className="review">
               <ul className="review-nav">
                 <li className="desc" data-target="description-show">
                   Description
                 </li>
                 <li className="rev active" data-target="review-content-show">
                   Reviews 4
                 </li>
               </ul>
               <div className="review-content review-content-show">
                 <div className="review-showing">
                   <ul className="content">
                     <li>
                       <div className="post-thumb">
                         <img src="assets/images/shop/01.png" alt="shop" />
                       </div>
                       <div className="post-content">
                         <div className="entry-meta">
                           <div className="posted-on">
                             <a href="google">Britney Doe</a>
                             <p>Posted on December 25, 2017 at 6:57 am</p>
                           </div>
                           <div className="rating">
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                           </div>
                         </div>
                         <div className="entry-content">
                           <p>
                             Enthusiast build innovativ initiatives before lonterm
                             high-impact awesome theme seo psd porta monetize
                             covalent leadership after without resource.
                           </p>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div className="post-thumb">
                         <img src="assets/images/shop/02.png" alt="shop" />
                       </div>
                       <div className="post-content">
                         <div className="entry-meta">
                           <div className="posted-on">
                             <a href="google">Jonathan Doe</a>
                             <p>Posted on December 25, 2017 at 6:57 am</p>
                           </div>
                           <div className="rating">
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                           </div>
                         </div>
                         <div className="entry-content">
                           <p>
                             Enthusiast build innovativ initiatives before lonterm
                             high-impact awesome theme seo psd porta monetize
                             covalent leadership after without resource.
                           </p>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div className="post-thumb">
                         <img src="assets/images/shop/03.png" alt="shop" />
                       </div>
                       <div className="post-content">
                         <div className="entry-meta">
                           <div className="posted-on">
                             <a href="google">Mack Zucky</a>
                             <p>Posted on December 25, 2017 at 6:57 am</p>
                           </div>
                           <div className="rating">
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                           </div>
                         </div>
                         <div className="entry-content">
                           <p>
                             Enthusiast build innovativ initiatives before lonterm
                             high-impact awesome theme seo psd porta monetize
                             covalent leadership after without resource.
                           </p>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div className="post-thumb">
                         <img src="assets/images/shop/04.png" alt="shop" />
                       </div>
                       <div className="post-content">
                         <div className="entry-meta">
                           <div className="posted-on">
                             <a href="google">Jordi Albae</a>
                             <p>Posted on December 25, 2017 at 6:57 am</p>
                           </div>
                           <div className="rating">
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                             <i className="far fa-star" />
                           </div>
                         </div>
                         <div className="entry-content">
                           <p>
                             Enthusiast build innovativ initiatives before lonterm
                             high-impact awesome theme seo psd porta monetize
                             covalent leadership after without resource.
                           </p>
                         </div>
                       </div>
                     </li>
                   </ul>
                   <div className="client-review">
                     <div className="review-form">
                       <div className="review-title">
                         <h5>Add a Review</h5>
                       </div>
                       <form action="action" className="row">
                         <div className="col-md-4 col-12">
                           <input
                             type="text"
                             name="name"
                             placeholder="Full Name"
                           />
                         </div>
                         <div className="col-md-4 col-12">
                           <input
                             type="text"
                             name="email"
                             placeholder="Email Adress"
                           />
                         </div>
                         <div className="col-md-4 col-12">
                           <div className="rating">
                             <span className="rating-title">Your Rating : </span>
                             <ul>
                               <li>
                                 <i className="far fa-star" />
                               </li>
                               <li>
                                 <i className="far fa-star" />
                               </li>
                               <li>
                                 <i className="far fa-star" />
                               </li>
                               <li>
                                 <i className="far fa-star" />
                               </li>
                               <li>
                                 <i className="far fa-star" />
                               </li>
                             </ul>
                           </div>
                         </div>
                         <div className="col-md-12 col-12">
                           <textarea
                             rows={5}
                             placeholder="Type Here Message"
                             defaultValue={""}
                           />
                         </div>
                         <div className="col-12">
                           <button className="defult-btn" type="submit">
                             Submit Review
                           </button>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
                 <div className="description">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est laborum.
                   </p>
                   <div className="post-item">
                     <div className="post-thumb">
                       <img src="assets/images/shop/desc.jpg" alt="shop" />
                     </div>
                     <div className="post-content">
                       <ul>
                         <li>Donec non est at libero vulputate rutrum.</li>
                         <li>Morbi ornare lectus quis justo gravida semper.</li>
                         <li>Pellentesque aliquet, sem eget laoreet ultrices.</li>
                         <li>
                           Nulla tellus mi, vulputate adipiscing cursus eu,
                           suscipit id nulla.
                         </li>
                         <li>Donec a neque libero.</li>
                         <li>Pellentesque aliquet, sem eget laoreet ultrices.</li>
                         <li>Morbi ornare lectus quis justo gravida semper..</li>
                       </ul>
                     </div>
                   </div>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est laborum.
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-12 sticky-widget">
             <div className="sidebar-widget">
               <div className="widget-search">
                 <h4>Search Keyword</h4>
                 <form action="action">
                   <input type="text" placeholder="Search Here..." name="s" />
                   <button type="submit">
                     <i className="flaticon-magnifying-glass" />
                   </button>
                 </form>
               </div>
               <div className="shop-widget">
                 <div className="widget-title">
                   <h4>Post Category</h4>
                 </div>
                 <div className="widget-wrapper">
                   <ul className="shop-menu">
                     <li>
                       <a href="google0">Butter</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Butter 1</a>
                         </li>
                         <li>
                           <a href="google">Butter 2</a>
                         </li>
                         <li>
                           <a href="google">Butter 3</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Cheese</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Cheese 1</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Ice Cream</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Ice Cream 1</a>
                         </li>
                         <li>
                           <a href="google">Ice Cream 2</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Milk</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Milk 1</a>
                         </li>
                         <li>
                           <a href="google">Milk 2</a>
                         </li>
                         <li>
                           <a href="google">Milk 3</a>
                         </li>
                         <li>
                           <a href="google">Milk 4</a>
                         </li>
                         <li>
                           <a href="google">Milk 5</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Uncategorized</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Uncategorized 1</a>
                         </li>
                         <li>
                           <a href="google">Uncategorized 2</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Yoghurt</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Yoghurt 1</a>
                         </li>
                         <li>
                           <a href="google">Yoghurt 2</a>
                         </li>
                         <li>
                           <a href="google">Yoghurt 3</a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google0">Cream</a>
                       <ul className="shop-submenu">
                         <li>
                           <a href="google">Cream 1</a>
                         </li>
                         <li>
                           <a href="google">Cream 2</a>
                         </li>
                         <li>
                           <a href="google">Cream 3</a>
                         </li>
                         <li>
                           <a href="google">Cream 4</a>
                         </li>
                         <li>
                           <a href="google">Cream 5</a>
                         </li>
                       </ul>
                     </li>
                   </ul>
                 </div>
               </div>
               <div className="letest-product">
                 <div className="widget-title">
                   <h4>Latests Products</h4>
                 </div>
                 <div className="widget-wrapper">
                   <ul>
                     <li>
                       <div className="product-thumb">
                         <img src="assets/images/shop/01.jpg" alt="shop" />
                       </div>
                       <div className="product-content">
                         <h6>
                           <a href="google">Product Text Here</a>
                         </h6>
                         <p>
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" /> <span>(3 review)</span>
                         </p>
                         <h6>$200</h6>
                       </div>
                     </li>
                     <li>
                       <div className="product-thumb">
                         <img src="assets/images/shop/02.jpg" alt="shop" />
                       </div>
                       <div className="product-content">
                         <h6>
                           <a href="google">Product Text Here</a>
                         </h6>
                         <p>
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" /> <span>(3 review)</span>
                         </p>
                         <h6>$200</h6>
                       </div>
                     </li>
                     <li>
                       <div className="product-thumb">
                         <img src="assets/images/shop/03.jpg" alt="shop" />
                       </div>
                       <div className="product-content">
                         <h6>
                           <a href="google">Product Text Here</a>
                         </h6>
                         <p>
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" /> <span>(3 review)</span>
                         </p>
                         <h6>$200</h6>
                       </div>
                     </li>
                     <li>
                       <div className="product-thumb">
                         <img src="assets/images/shop/04.jpg" alt="shop" />
                       </div>
                       <div className="product-content">
                         <h6>
                           <a href="google">Product Text Here</a>
                         </h6>
                         <p>
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" />
                           <i className="far fa-star" /> <span>(3 review)</span>
                         </p>
                         <h6>$200</h6>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* Shop Page Section ending here */}
     {/* footer section start here */}
     <footer>
       <div className="footer-top padding-tb">
         <div className="container">
           <div className="section-wrapper row">
             <div className="col-lg-4 col-md-6">
               <div className="post-item">
                 <a href="google" className="footer-logo">
                   <img
                     src="assets/images/footer/footer-logo.png"
                     alt="footer-logo"
                   />
                 </a>
                 <p>
                   Continually productize compelling quality dome packed with all
                   Elated Themes ently utilize website and creating pages corporate{" "}
                 </p>
                 <ul className="footer-location">
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-phone-volume" />
                     </div>
                     <div className="content-part">
                       <p>+88130-589-745-6987</p>
                       <p>+1655-456-523</p>
                     </div>
                   </li>
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-clock" />
                     </div>
                     <div className="content-part">
                       <p>Mon - Fri 09:00 - 18:00</p>
                       <p>(except public holidays)</p>
                     </div>
                   </li>
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-map-marker-alt" />
                     </div>
                     <div className="content-part">
                       <p>
                         25/2 Lane2 Vokte Street Building <br />
                         Melborn City
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="post-item">
                 <div className="post-title">
                   <h3>Top Selling Product</h3>
                 </div>
                 <ul className="footer-post">
                   <li>
                     <div className="post-thumb">
                       <a href="google">
                         <img src="assets/images/footer/01.jpg" alt="footer" />
                       </a>
                     </div>
                     <div className="post-content">
                       <h5>
                         <a href="google">Gowala Cream</a>
                       </h5>
                       <div className="footer-rating">
                         <ul className="rating">
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star-half" />
                           </li>
                         </ul>
                         <p>(Review 3)</p>
                       </div>
                       <span className="price">
                         <del>$45.99</del>
                       </span>
                       <span className="price">$25.99</span>
                     </div>
                   </li>
                   <li>
                     <div className="post-thumb">
                       <a href="google">
                         <img src="assets/images/footer/02.jpg" alt="footer" />
                       </a>
                     </div>
                     <div className="post-content">
                       <h5>
                         <a href="google">Gowala Butter</a>
                       </h5>
                       <div className="footer-rating">
                         <ul className="rating">
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star-half" />
                           </li>
                         </ul>
                         <p>(Review 3)</p>
                       </div>
                       <span className="price">
                         <del>$45.99</del>
                       </span>
                       <span className="price">$25.99</span>
                     </div>
                   </li>
                   <li>
                     <div className="post-thumb">
                       <a href="google">
                         <img src="assets/images/footer/03.jpg" alt="footer" />
                       </a>
                     </div>
                     <div className="post-content">
                       <h5>
                         <a href="google">Gowala Cheese</a>
                       </h5>
                       <div className="footer-rating">
                         <ul className="rating">
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star" />
                           </li>
                           <li>
                             <i className="fas fa-star-half" />
                           </li>
                         </ul>
                         <p>(Review 3)</p>
                       </div>
                       <span className="price">
                         <del>$45.99</del>
                       </span>
                       <span className="price">$25.99</span>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="post-item">
                 <div className="post-title">
                   <h3>Farm Gallery</h3>
                 </div>
                 <ul className="footer-gellary">
                   <li>
                     <a
                       href="assets/images/footer/gellary/01.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/01.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/02.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/02.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/03.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/03.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/04.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/04.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/05.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/05.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/06.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/06.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/07.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/07.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/08.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/08.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                   <li>
                     <a
                       href="assets/images/footer/gellary/09.jpg"
                       data-rel="lightcase"
                     >
                       <img
                         src="assets/images/footer/gellary/09.jpg"
                         alt="gellary"
                       />
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="footer-bottom">
         <div className="container">
           <div className="section-wrapper">
             <p className="text-center">
               © 2021 <a href="index.html">Gowala</a>.All Rights Reserved By{" "}
               <a href="google">LabArtisan</a>
             </p>
           </div>
         </div>
       </div>
     </footer>
     {/* footer section start here */}
     {/* scrollToTop start here */}
     <a href="google" className="scrollToTop">
       <i className="flaticon-chevron-up" />
     </a>
     {/* scrollToTop ending here */}
   </>
   
  )
}

export default shopSingle
