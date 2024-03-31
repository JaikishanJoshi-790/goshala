import React from 'react'

const profilePage = () => {
  return (
     <>
     <section className="page-header padding-tb page-header-bg-1">
       <div className="container">
         <div className="page-header-item d-flex align-items-center justify-content-center">
           <div className="post-content">
             <h3>Profile</h3>
             <div className="breadcamp">
               <ul className="d-flex flex-wrap justify-content-center align-items-center">
                 <li>
                   <a href="index.html">Home</a>{" "}
                 </li>
                 <li>
                   <a href="profile.html" className="active">Profile </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* page header section ending here */}
     {/* contact us section start here */}
     <div className="contact padding-tb">
       <div className="profile-container">
         <div className="leftContainer">
           <div className="profile-photo">
             <img src="profile.jpg" alt="Profile Photos" />
           </div>
           <p className="userName">John Doe</p>
           <p className="mobileNumber">0909090909</p>
         </div>
         <div className="rightContainer">
           <div className="profile-details">
             <div>
               <h2 style={{ textAlign: "center" }}>Profile</h2>
             </div>
             <p id="username">
               {" "}
               <span htmlFor="username" className="dtq">
                 Username:
               </span>
               JohnDoe
             </p>
             <p id="fatherName">
               <span htmlFor="fatherName" className="dtq">
                 Father Name:
               </span>
               John Doe Sr.
             </p>
             <p id="dateOfBirth">
               <span htmlFor="dateOfBirth" className="dtq">
                 Date of Birth:
               </span>
               January 1, 1990
             </p>
             <p id="weddingAnniversary">
               <span htmlFor="weddingAnniversary" className="dtq">
                 Wedding Anniversary:
               </span>
               June 15
             </p>
           </div>
           <a href="/addMember.html">
             <button className="btn" style={{ color: "white", marginTop: 40 }}>
               Add Member
             </button>
           </a>
         </div>
       </div>
     </div>
     {/* contact us section ending here */}
     {/* gmap section start here */}
     <div className="gmaps padding-tb">
       <div className="container">
         <div id="map" />
       </div>
     </div>
     {/* gmap section ending here */}
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

export default profilePage
