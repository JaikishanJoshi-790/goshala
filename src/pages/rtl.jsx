import React from 'react'

const rtl = () => {
  return (
     <>
     <section className="slider-section banner style-1">
       <div id="myCarousel" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner" role="listbox">
           <div className="carousel-item active">
             <img src="assets/images/banner/01.jpg" alt="Slider One Imagess" />
             <div className="container">
               <div className="slider-content">
                 <div className="slider-content-inner">
                   <img src="assets/images/banner/content/01.png" alt="banner" />
                   <h2 className="delay1">مکمل دودھ!</h2>
                   <p className="delay3">غذائیت سے بھرا ایک گلاس کے لئے</p>
                   <a href="google" className="btn delay4">
                     پروڈکٹ دیکھیں۔
                   </a>
                 </div>
               </div>
             </div>
             <div className="shape">
               <img src="assets/images/banner/shape/01.png" alt="shape" />
             </div>
             <div className="shape1">
               <img src="assets/images/banner/shape/02.png" alt="shape1" />
             </div>
             <div className="shape2">
               <img src="assets/images/banner/shape/03.png" alt="shape2" />
             </div>
           </div>
           <div className="carousel-item">
             <img src="assets/images/banner/02.jpg" alt="Slider One Imagess" />
             <div className="container">
               <div className="slider-content center">
                 <div className="slider-content-inner">
                   <img src="assets/images/banner/content/01.png" alt="banner" />
                   <h2 className="delay1">مکمل دودھ!</h2>
                   <p className="delay3">غذائیت سے بھرا ایک گلاس کے لئے</p>
                   <a href="google" className="btn delay4">
                     پروڈکٹ دیکھیں۔
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <a
             className="left carousel-control"
             href="googlemyCarousel"
             role="button"
             data-slide="prev"
           >
             <i className="fa fa-angle-left" aria-hidden="true" />
           </a>
           <a
             className="right carousel-control"
             href="googlemyCarousel"
             role="button"
             data-slide="next"
           >
             <i className="fa fa-angle-right" aria-hidden="true" />
           </a>
         </div>
       </div>
     </section>
     {/* banner section ending here */}
     {/* about section start here */}
     <section className="about padding-tb">
       <div className="container p-xl-0">
         <div
           className="section-header wow fadeInDown"
           data-wow-duration="1s"
           data-wow-delay=".1s"
         >
           <h2>
             <span>تمام دودھ کا قائد۔</span>
           </h2>
           <h2>محفوظ اور صحت مند دودھ 1975 کے بعد سے۔</h2>
         </div>
         <div className="section-wrapper row justify-content-center">
           <div
             className="col-xl-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".1s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/about/01.png" alt="about" />
               </div>
               <div className="post-content">
                 <div className="title">
                   <h5>فارم</h5>
                   <h5>تکنیکی لیڈر</h5>
                 </div>
                 <p>
                   تمام الیٹڈ تھیمز سے بھرے ہوئے کے لئے مجبور معیار کو مستقل طور پر
                   تیار کریں۔ ویب سائٹ پر ترتیب دینا اور صفحات تیار کرنا۔
                 </p>
               </div>
             </div>
           </div>
           <div
             className="col-xl-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".2s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/about/02.png" alt="about" />
               </div>
               <div className="post-content">
                 <div className="title">
                   <h5 className="m-0">فطرت</h5>
                   <h5 className="m-0">دودھ گھی بنانے کے لئے۔</h5>
                 </div>
                 <p>
                   تمام الیٹڈ تھیمز سے بھرے ہوئے کے لئے مجبور معیار کو مستقل طور پر
                   تیار کریں۔ ویب سائٹ پر ترتیب دینا اور صفحات تیار کرنا۔
                 </p>
               </div>
             </div>
           </div>
           <div
             className="col-xl-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".3s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/about/03.png" alt="about" />
               </div>
               <div className="post-content">
                 <div className="title">
                   <h5>3 دن</h5>
                   <h5>آسان ترسیل کا نظام۔</h5>
                 </div>
                 <p>
                   تمام الیٹڈ تھیمز سے بھرے ہوئے کے لئے مجبور معیار کو مستقل طور پر
                   تیار کریں۔ ویب سائٹ پر ترتیب دینا اور صفحات تیار کرنا۔
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* about section ending here */}
     {/* portfolio section start here */}
     <section className="portfolio padding-tb bg-image-1">
       <div className="container">
         <div className="section-wrapper row justify-content-center">
           <div className="col-lg-6 p-md-0 left">
             <div className="section-header">
               <div
                 className="title wow fadeInDown"
                 data-wow-duration="1s"
                 data-wow-delay=".1s"
               >
                 <h2>ہماری گیلری۔</h2>
                 <h2>
                   <span>ہمارا دودھ شیک فارم دیکھیں۔ </span>
                 </h2>
                 <p>
                   ویب سائٹ پر سیٹ ہونے والے الیٹڈ تھیمس سے بھرے اور اس کے صفحات کو
                   تراشنے والے کے لئے مسلسل معیار تیار کریں۔
                 </p>
               </div>
             </div>
             <div className="portfolio-wrapper">
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".1s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/01.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/01.jpg" alt="portfolio" />
                 </div>
               </div>
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".2s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/02.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/02.jpg" alt="portfolio" />
                 </div>
               </div>
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".3s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/03.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/03.jpg" alt="portfolio" />
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-6 p-md-0">
             <div className="portfolio-wrapper">
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".4s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/04.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/04.jpg" alt="portfolio" />
                 </div>
               </div>
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".5s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/05.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/05.jpg" alt="portfolio" />
                 </div>
               </div>
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".6s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/06.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/06.jpg" alt="portfolio" />
                 </div>
               </div>
               <div
                 className="post-thumb wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".7s"
               >
                 <div className="post-thumb-inner">
                   <a
                     className="gallery-icon"
                     href="assets/images/portfolio/07.jpg"
                     data-rel="lightcase"
                   >
                     <i className="fas fa-link" />
                   </a>
                   <img src="assets/images/portfolio/07.jpg" alt="portfolio" />
                 </div>
               </div>
             </div>
           </div>
           <a
             href="google"
             className="btn wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".8s"
           >
             گیلری ، نگارخانہ دیکھیں
           </a>
         </div>
       </div>
     </section>
     {/* portfolio section ending here */}
     {/* product section start here */}
     <section className="product padding-tb">
       <div className="container">
         <div
           className="section-header wow fadeInDown"
           data-wow-duration="1s"
           data-wow-delay=".1s"
         >
           <h2>ہماری مصنوعات</h2>
           <h2>
             <span>ہم نے بہترین پروڈکٹ فراہم کی۔ </span>
           </h2>
           <p>
             ویب سائٹ پر سیٹ ہونے والے الیٹڈ تھیمس سے بھرے اور اس کے صفحات کو
             تراشنے والے کے لئے مسلسل معیار تیار کریں۔
           </p>
         </div>
         <div className="section-wrapper row justify-content-center">
           <div className="col-md-7">
             <div className="our-product row justify-content-center">
               <div
                 className="col-md-6 wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".1s"
               >
                 <div className="post-item-inner text-center">
                   <div className="post-thumb">
                     <a href="assets/images/product/01.png" data-rel="lightcase">
                       <img src="assets/images/product/01.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا گھی۔</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 45.99</span>
                   </div>
                   <a href="google" className="offer">
                     -50٪
                   </a>
                 </div>
               </div>
               <div
                 className="col-md-6 wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".2s"
               >
                 <div className="post-item-inner text-center">
                   <div className="post-thumb">
                     <a href="assets/images/product/02.png" data-rel="lightcase">
                       <img src="assets/images/product/02.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا پنیر</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 45.99</span>
                   </div>
                 </div>
               </div>
               <div
                 className="col-md-6 wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".3s"
               >
                 <div className="post-item-inner text-center">
                   <div className="post-thumb">
                     <a href="assets/images/product/03.png" data-rel="lightcase">
                       <img src="assets/images/product/03.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا مکھن</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 45.99</span>
                   </div>
                 </div>
               </div>
               <div
                 className="col-md-6 wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".4s"
               >
                 <div className="post-item-inner text-center">
                   <div className="post-thumb">
                     <a href="assets/images/product/04.png" data-rel="lightcase">
                       <img src="assets/images/product/04.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا کریم۔</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 45.99</span>
                   </div>
                   <a href="google" className="offer">
                     -30٪
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-5">
             <div className="post-item-inner text-center product-slider">
               <div
                 className="swiper-wrapper wow fadeInUp"
                 data-wow-duration="1s"
                 data-wow-delay=".6s"
               >
                 <div className="swiper-slide">
                   <div className="post-thumb">
                     <a href="assets/images/product/05.png" data-rel="lightcase">
                       <img src="assets/images/product/05.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا گھی۔</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 99.99</span>
                   </div>
                   <a href="google" className="offer">
                     -50٪
                   </a>
                 </div>
                 <div className="swiper-slide">
                   <div className="post-thumb">
                     <a href="assets/images/product/05.png" data-rel="lightcase">
                       <img src="assets/images/product/05.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گو والا دودھ۔</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 59.99</span>
                   </div>
                 </div>
                 <div className="swiper-slide">
                   <div className="post-thumb">
                     <a href="assets/images/product/05.png" data-rel="lightcase">
                       <img src="assets/images/product/05.png" alt="product" />
                     </a>
                   </div>
                   <div className="post-content">
                     <h4>
                       <a href="google">گوالا گھی۔</a>
                     </h4>
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
                     <p>(جائزہ 3)</p>
                     <span className="price">. 79.99</span>
                   </div>
                   <a href="google" className="offer">
                     -20٪
                   </a>
                 </div>
               </div>
               <div className="product-pagination" />
             </div>
           </div>
           <a href="shope-page.html" className="btn btn-m-t">
             تمام پروڈکٹ دیکھیں۔
           </a>
         </div>
       </div>
     </section>
     {/* product section ending here */}
     {/* video post start here */}
     <div className="youtube-video padding-tb bg-image-2">
       <div className="container">
         <div className="section-wrapper">
           <div
             className="video-post text-center wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".1s"
           >
             <div className="video-thumb">
               <img src="assets/images/video/01.jpg" alt="video-post" />
               <a
                 href="https://www.youtube.com/embed/cZh0nsrkHh8"
                 className="video-icon"
                 data-rel="lightcase"
               >
                 <i className="fab fa-youtube" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* video post start here */}
     {/* our team member section start here */}
     <section className="team-member padding-tb">
       <div className="container">
         <div
           className="section-header wow fadeInDown"
           data-wow-duration="1s"
           data-wow-delay=".1s"
         >
           <h2>ہماری ٹیم</h2>
           <h2>
             <span>2000+ لوگ 1975 سے کام کرتے ہیں۔ </span>
           </h2>
           <p>
             ویب سائٹ پر سیٹ ہونے والے الیٹڈ تھیمس سے بھرے اور اس کے صفحات کو
             تراشنے والے کے لئے مسلسل معیار تیار کریں۔
           </p>
         </div>
         <div className="section-wrapper row justify-content-center">
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".1s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/01.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".2s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/02.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".3s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/03.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".4s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/04.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".5s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/05.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".6s"
           >
             <div className="post-item-inner text-center">
               <div className="post-thumb">
                 <img src="assets/images/team/06.png" alt="team-member" />
                 <div className="post-content">
                   <h4>
                     <a href="google">لورا سمتھ</a>
                   </h4>
                   <p>شریک بانی۔</p>
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
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* our team member section ending here */}
     {/* pricing section start here */}
     <section className="pricing padding-tb bg-image-1">
       <div className="container">
         <div className="section-wrapper row justify-content-center">
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".1s"
           >
             <div className="post-item-inner text-center">
               <div className="price-thumb">
                 <img src="assets/images/price/01.jpg" alt="pricing" />
               </div>
               <div className="price-title">
                 <h3>انفرادی</h3>
                 <p>کوئز ویوآررا سیٹ ایمٹ ہینڈرریٹ سیڈ لبررو ویٹا میٹس۔</p>
               </div>
               <div className="price-body">
                 <ul>
                   <li>انٹیجر کوموڈو ماس۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                   <li>وقاریت ایلیٹ ای یو ویوررا ایلیٹ۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                 </ul>
               </div>
               <div className="price-footer">
                 <h5>
                   <del>19.00 امریکی ڈالر۔</del>
                 </h5>
                 <h3>10.00 امریکی ڈالر۔</h3>
                 <a href="google" className="btn">
                   ابھی خریدیں
                 </a>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".2s"
           >
             <div className="post-item-inner text-center">
               <div className="price-thumb">
                 <img src="assets/images/price/01.jpg" alt="pricing" />
               </div>
               <div className="price-title">
                 <h3>ماہانہ</h3>
                 <p>کوئز ویوآررا سیٹ ایمٹ ہینڈرریٹ سیڈ لبررو ویٹا میٹس۔</p>
               </div>
               <div className="price-body">
                 <ul>
                   <li>انٹیجر کوموڈو ماس۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                   <li>وقاریت ایلیٹ ای یو ویوررا ایلیٹ۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                 </ul>
               </div>
               <div className="price-footer">
                 <h5>
                   <del>49.00 امریکی ڈالر۔</del>
                 </h5>
                 <h3>29.00 امریکی ڈالر۔</h3>
                 <a href="google" className="btn">
                   ابھی خریدیں
                 </a>
               </div>
             </div>
           </div>
           <div
             className="col-lg-4 col-sm-6 wow fadeInUp"
             data-wow-duration="1s"
             data-wow-delay=".3s"
           >
             <div className="post-item-inner text-center">
               <div className="price-thumb">
                 <img src="assets/images/price/01.jpg" alt="pricing" />
               </div>
               <div className="price-title">
                 <h3>دو ہفتہ وار</h3>
                 <p>کوئز ویوآررا سیٹ ایمٹ ہینڈرریٹ سیڈ لبررو ویٹا میٹس۔</p>
               </div>
               <div className="price-body">
                 <ul>
                   <li>انٹیجر کوموڈو ماس۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                   <li>وقاریت ایلیٹ ای یو ویوررا ایلیٹ۔</li>
                   <li>نام سیورٹ امیٹ میکسمس کی تلاش میں ہے۔</li>
                 </ul>
               </div>
               <div className="price-footer">
                 <h5>
                   <del>29.00 امریکی ڈالر۔</del>
                 </h5>
                 <h3>19.00 امریکی ڈالر۔</h3>
                 <a href="google" className="btn">
                   ابھی خریدیں
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* pricing section start here */}
     {/* blog section start here */}
     <section className="blog padding-tb" id="Blog">
       <div className="container">
         <div className="">
           <div
             className="section-header wow fadeInDown"
             data-wow-duration="1s"
             data-wow-delay=".1s"
           >
             <h2>حالیہ خبریں۔</h2>
             <h2>
               <span>دودھ کا بہترین نسخہ جو آپ نے کبھی دیکھا ہوگا۔ </span>
             </h2>
             <p>
               ویب سائٹ پر سیٹ ہونے والے الیٹڈ تھیمس سے بھرے اور اس کے صفحات کو
               تراشنے والے کے لئے مسلسل معیار تیار کریں۔
             </p>
           </div>
           <div className="section-wrapper">
             <div
               className="post-item wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".1s"
             >
               <div className="post-inner">
                 <div className="post-thumb">
                   <a href="blog-single.html">
                     <img src="assets/images/blog/01.jpg" alt="blog" />
                   </a>
                 </div>
                 <div className="post-content">
                   <ul className="content-left">
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/01.png" alt="blog" />
                       </a>
                       <p>04</p>
                       <ul className="social-media-list">
                         <li>
                           <a href="google" className="facebook">
                             <i className="fab fa-facebook-f" />
                           </a>
                         </li>
                         <li>
                           <a href="google" className="twitter">
                             <i className="fab fa-twitter" />
                           </a>
                         </li>
                         <li>
                           <a href="google" className="linkedin">
                             <i className="fab fa-linkedin-in" />
                           </a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/02.png" alt="icon" />
                       </a>
                       <p>15</p>
                     </li>
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/03.png" alt="icon" />
                       </a>
                       <p>12</p>
                     </li>
                   </ul>
                   <div className="content-part">
                     <div className="entry-header">
                       <div className="entry-meta">
                         <p className="byline">
                           ایڈمن۔ :<a href="google">ایما گرانٹ</a>
                         </p>
                         <p className="posted-on">
                           تاریخ :<a href="google">24 دسمبر 2021۔</a>
                         </p>
                       </div>
                       <h4>
                         <a href="blog-single.html">
                           آپ کو صرف آئس کریم کی ترکیب کی ضرورت ہوگی۔
                         </a>
                       </h4>
                     </div>
                     <div className="entry-content">
                       <p>
                         کینٹیٹیٹ کوپل چین اگرچہ مارکے پوسٹن بیسٹینگ پریکسیسی مارک
                         کوپیل چن اگرچہ مارکے پوسٹن بیسٹینگ پریکٹسس چین تھروہ
                         پریکٹس ایریکٹ فیشن فیشن فیشن اینڈ ساؤنڈ۔
                       </p>
                       <a href="blog-single.html" className="btn">
                         مزید پڑھ
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div
               className="post-item wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".2s"
             >
               <div className="post-inner">
                 <div className="post-thumb">
                   <a href="blog-single.html">
                     <img src="assets/images/blog/02.jpg" alt="blog" />
                   </a>
                 </div>
                 <div className="post-content">
                   <ul className="content-left">
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/01.png" alt="blog" />
                       </a>
                       <p>04</p>
                       <ul className="social-media-list">
                         <li>
                           <a href="google" className="facebook">
                             <i className="fab fa-facebook-f" />
                           </a>
                         </li>
                         <li>
                           <a href="google" className="twitter">
                             <i className="fab fa-twitter" />
                           </a>
                         </li>
                         <li>
                           <a href="google" className="linkedin">
                             <i className="fab fa-linkedin-in" />
                           </a>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/02.png" alt="icon" />
                       </a>
                       <p>15</p>
                     </li>
                     <li>
                       <a href="google">
                         <img src="assets/images/blog/icon/03.png" alt="icon" />
                       </a>
                       <p>12</p>
                     </li>
                   </ul>
                   <div className="content-part">
                     <div className="entry-header">
                       <div className="entry-meta">
                         <p className="byline">
                           ایڈمن۔ :<a href="google">ایما گرانٹ</a>
                         </p>
                         <p className="posted-on">
                           تاریخ :<a href="google">24 دسمبر 2021۔</a>
                         </p>
                       </div>
                       <h4>
                         <a href="blog-single.html">
                           گھر میں ڈیری فری دودھ بنانے کے لئے نکات۔
                         </a>
                       </h4>
                     </div>
                     <div className="entry-content">
                       <p>
                         کینٹیٹیٹ کوپل چین اگرچہ مارکے پوسٹن بیسٹینگ پریکسیسی مارک
                         کوپیل چن اگرچہ مارکے پوسٹن بیسٹینگ پریکٹسس چین تھروہ
                         پریکٹس ایریکٹ فیشن فیشن فیشن اینڈ ساؤنڈ۔
                       </p>
                       <a href="blog-single.html" className="btn">
                         مزید پڑھ
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* blog section ending here */}
     {/* sponsor section start here */}
     <div className="sponsor padding-tb">
       <div className="container">
         <div className="section-wrapper">
           <div className="sponsor-slider">
             <div
               className="swiper-wrapper wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".1s"
             >
               <div className="swiper-slide">
                 <div className="sponsor-thumb">
                   <a href="google">
                     <img src="assets/images/sponsor/01.png" alt="sponsor" />
                   </a>
                 </div>
               </div>
               <div className="swiper-slide">
                 <div className="sponsor-thumb">
                   <a href="google">
                     <img src="assets/images/sponsor/02.png" alt="sponsor" />
                   </a>
                 </div>
               </div>
               <div className="swiper-slide">
                 <div className="sponsor-thumb">
                   <a href="google">
                     <img src="assets/images/sponsor/03.png" alt="sponsor" />
                   </a>
                 </div>
               </div>
               <div className="swiper-slide">
                 <div className="sponsor-thumb">
                   <a href="google">
                     <img src="assets/images/sponsor/04.png" alt="sponsor" />
                   </a>
                 </div>
               </div>
               <div className="swiper-slide">
                 <div className="sponsor-thumb">
                   <a href="google">
                     <img src="assets/images/sponsor/05.png" alt="sponsor" />
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* sponsor section ending here */}
     {/* footer section start here */}
     <footer>
       <div className="footer-top padding-tb">
         <div className="container">
           <div className="section-wrapper row">
             <div
               className="col-lg-4 col-md-6 wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".1s"
             >
               <div className="post-item">
                 <a href="google" className="footer-logo">
                   <img
                     src="assets/images/footer/footer-logo.png"
                     alt="footer-logo"
                   />
                 </a>
                 <p>
                   ویب سائٹ اور صفحات کارپوریٹ کو تخلیق کرنے کے لئے تمام الیٹڈ
                   تھیمز سے بھرے ہوئے زبردست معیار کے گنبد کو مستقل طور پر تیار
                   کریں۔{" "}
                 </p>
                 <ul className="footer-location">
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-phone-volume" />
                     </div>
                     <div className="content-part">
                       <p>+ 88130-589-745-6987۔</p>
                       <p>+ 1655-456-523۔</p>
                     </div>
                   </li>
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-clock" />
                     </div>
                     <div className="content-part">
                       <p>سوموار - جمعہ 09:00 - 18:00</p>
                       <p>(عوامی تعطیلات کے علاوہ)</p>
                     </div>
                   </li>
                   <li>
                     <div className="icon-part">
                       <i className="fas fa-map-marker-alt" />
                     </div>
                     <div className="content-part">
                       <p>
                         25/2 لین 2 ووکٹ اسٹریٹ بلڈنگ۔ <br />
                         میلبورن سٹی۔
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div
               className="col-lg-4 col-md-6 wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".2s"
             >
               <div className="post-item">
                 <div className="post-title">
                   <h3>اوپر فروخت ہونے والا مصنوع۔</h3>
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
                         <a href="google">گوالا کریم۔</a>
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
                         <p>(جائزہ 3)</p>
                       </div>
                       <span className="price">
                         <del>. 45.99</del>
                       </span>
                       <span className="price">. 25.99</span>
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
                         <a href="google">گوالا مکھن</a>
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
                         <p>(جائزہ 3)</p>
                       </div>
                       <span className="price">
                         <del>. 45.99</del>
                       </span>
                       <span className="price">. 25.99</span>
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
                         <a href="google">گوالا پنیر</a>
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
                         <p>(جائزہ 3)</p>
                       </div>
                       <span className="price">
                         <del>. 45.99</del>
                       </span>
                       <span className="price">. 25.99</span>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div
               className="col-lg-4 col-md-6 wow fadeInUp"
               data-wow-duration="1s"
               data-wow-delay=".3s"
             >
               <div className="post-item">
                 <div className="post-title">
                   <h3>فارم گیلری۔</h3>
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
       <div
         className="footer-bottom wow fadeInUp"
         data-wow-duration="1s"
         data-wow-delay=".1s"
       >
         <div className="container">
           <div className="section-wrapper">
             <p className="text-center">
               © 2021۔ <a href="index.html">گوالا۔</a>.جملہ حقوق محفوظ ہیں بذریعہ۔{" "}
               <a href="google">لیب آرٹن</a>
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

export default rtl
