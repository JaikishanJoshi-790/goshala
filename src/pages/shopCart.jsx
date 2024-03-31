import React from 'react'

const shopCart = () => {
  return (
     <>
     <section className="page-header padding-tb page-header-bg-1">
       <div className="container">
         <div className="page-header-item d-flex align-items-center justify-content-center">
           <div className="post-content">
             <h3>Gowala Products</h3>
             <div className="breadcamp">
               <ul className="d-flex flex-wrap justify-content-center align-items-center">
                 <li>
                   <a href="index.html">Home</a>
                 </li>
                 <li>
                   <a href="google">Pages</a>
                 </li>
                 <li>
                   <a href='google' className="active">Products</a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* page header section ending here */}
     {/* Shop Cart Page Section start here */}
     <div className="shop-cart padding-tb">
       <div className="container">
         <div className="section-wrapper">
           <div className="cart-top">
             <table>
               <thead>
                 <tr>
                   <th>Product</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Total</th>
                   <th>Edit</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="product-item">
                     <div className="p-thumb">
                       <a href="google">
                         <img src="assets/images/shop/01.jpg" alt="product" />
                       </a>
                     </div>
                     <div className="p-content">
                       <a href="google">Product Text Here</a>
                     </div>
                   </td>
                   <td>$250</td>
                   <td>
                     <div className="cart-plus-minus">
                       <div className="dec qtybutton">-</div>
                       <input
                         className="cart-plus-minus-box"
                         type="text"
                         name="qtybutton"
                         defaultValue={3}
                       />
                       <div className="inc qtybutton">+</div>
                     </div>
                   </td>
                   <td>$750</td>
                   <td>
                     <a href="google">
                       <img src="assets/images/shop/del.png" alt="product" />
                     </a>
                   </td>
                 </tr>
                 <tr>
                   <td className="product-item">
                     <div className="p-thumb">
                       <a href="google">
                         <img src="assets/images/shop/02.jpg" alt="product" />
                       </a>
                     </div>
                     <div className="p-content">
                       <a href="google">Product Text Here</a>
                     </div>
                   </td>
                   <td>$250</td>
                   <td>
                     <div className="cart-plus-minus">
                       <div className="dec qtybutton">-</div>
                       <input
                         className="cart-plus-minus-box"
                         type="text"
                         name="qtybutton"
                         defaultValue={2}
                       />
                       <div className="inc qtybutton">+</div>
                     </div>
                   </td>
                   <td>$500</td>
                   <td>
                     <a href="google">
                       <img src="assets/images/shop/del.png" alt="product" />
                     </a>
                   </td>
                 </tr>
                 <tr>
                   <td className="product-item">
                     <div className="p-thumb">
                       <a href="google">
                         <img src="assets/images/shop/03.jpg" alt="product" />
                       </a>
                     </div>
                     <div className="p-content">
                       <a href="google">Product Text Here</a>
                     </div>
                   </td>
                   <td>$50</td>
                   <td>
                     <div className="cart-plus-minus">
                       <div className="dec qtybutton">-</div>
                       <input
                         className="cart-plus-minus-box"
                         type="text"
                         name="qtybutton"
                         defaultValue={2}
                       />
                       <div className="inc qtybutton">+</div>
                     </div>
                   </td>
                   <td>$100</td>
                   <td>
                     <a href="google">
                       <img src="assets/images/shop/del.png" alt="product" />
                     </a>
                   </td>
                 </tr>
                 <tr>
                   <td className="product-item">
                     <div className="p-thumb">
                       <a href="google">
                         <img src="assets/images/shop/04.jpg" alt="product" />
                       </a>
                     </div>
                     <div className="p-content">
                       <a href="google">Product Text Here</a>
                     </div>
                   </td>
                   <td>$100</td>
                   <td>
                     <div className="cart-plus-minus">
                       <div className="dec qtybutton">-</div>
                       <input
                         className="cart-plus-minus-box"
                         type="text"
                         name="qtybutton"
                         defaultValue={2}
                       />
                       <div className="inc qtybutton">+</div>
                     </div>
                   </td>
                   <td>$200</td>
                   <td>
                     <a href="google">
                       <img src="assets/images/shop/del.png" alt="product" />
                     </a>
                   </td>
                 </tr>
                 <tr>
                   <td className="product-item">
                     <div className="p-thumb">
                       <a href="google">
                         <img src="assets/images/shop/05.jpg" alt="product" />
                       </a>
                     </div>
                     <div className="p-content">
                       <a href="google">Product Text Here</a>
                     </div>
                   </td>
                   <td>$200</td>
                   <td>
                     <div className="cart-plus-minus">
                       <div className="dec qtybutton">-</div>
                       <input
                         className="cart-plus-minus-box"
                         type="text"
                         name="qtybutton"
                         defaultValue={2}
                       />
                       <div className="inc qtybutton">+</div>
                     </div>
                   </td>
                   <td>$400</td>
                   <td>
                     <a href="google">
                       <img src="assets/images/shop/del.png" alt="product" />
                     </a>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div className="cart-bottom">
             <div className="cart-checkout-box">
               <div className="coupon">
                 <input
                   type="text"
                   name="coupon"
                   placeholder="Coupon Code..."
                   className="cart-page-input-text"
                 />
                 <input type="submit" defaultValue="Apply Coupon" />
               </div>
               <div className="cart-checkout">
                 <input type="submit" defaultValue="Update Cart" />
                 <input type="submit" defaultValue="Proceed to Checkout" />
               </div>
             </div>
             <div className="shiping-box">
               <div className="row">
                 <div className="col-md-6 col-12">
                   <div className="calculate-shiping">
                     <h3>Calculate Shipping</h3>
                     <div className="outline-select">
                       <select>
                         <option value="volvo">United Kingdom (UK)</option>
                         <option value="saab">Bangladesh</option>
                         <option value="saab">Pakisthan</option>
                         <option value="saab">India</option>
                         <option value="saab">Nepal</option>
                       </select>
                       <span className="select-icon">
                         <i className="fa fa-angle-down" aria-hidden="true" />
                       </span>
                     </div>
                     <div className="outline-select shipping-select">
                       <select>
                         <option value="volvo">State/Country</option>
                         <option value="saab">Dhaka</option>
                         <option value="saab">Benkok</option>
                         <option value="saab">Kolkata</option>
                         <option value="saab">Kapasia</option>
                       </select>
                       <span className="select-icon">
                         <i className="fa fa-angle-down" aria-hidden="true" />
                       </span>
                     </div>
                     <input
                       type="text"
                       name="coupon"
                       placeholder="Postcode/ZIP"
                       className="cart-page-input-text"
                     />
                     <button type="submit">Update Total</button>
                   </div>
                 </div>
                 <div className="col-md-6 col-12">
                   <div className="cart-overview">
                     <h3>Cart Totals</h3>
                     <ul>
                       <li>
                         <span className="pull-left">Cart Subtotal</span>
                         <p className="pull-right">$ 0.00</p>
                       </li>
                       <li>
                         <span className="pull-left">Shipping and Handling</span>
                         <p className="pull-right">Free Shipping</p>
                       </li>
                       <li>
                         <span className="pull-left">Order Total</span>
                         <p className="pull-right">$ 2940.00</p>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Shop Cart Page Section ending here */}
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

export default shopCart
