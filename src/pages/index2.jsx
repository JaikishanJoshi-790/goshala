import React from 'react'
import sliderImage03 from '../assets/images/banner/03.jpg'
import sliderImage04 from '../assets/images/banner/04.jpg'

const index2 = () => {
  return (
    <>
        <section className="slider-section banner style-1">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src={sliderImage03} alt="Slider One Imagess" />
                <div className="container">
                  <div className="slider-content">
                    <div className="slider-content-inner">
                      <img src="assets/images/banner/content/01.png" alt="banner" />
                      <h2 className="delay1">The Complete Milk !</h2>
                      <p className="delay3">For a glass full of nutrition</p>
                      <a href="google" className="btn delay4">View Product</a>
                    </div>
                  </div>
                </div>
                <div className="shape">
                  <img src="assets/images/banner/shape/01.png" alt="shape" />
                </div>
              </div>
              <div className="carousel-item">
                <img src={sliderImage04} alt="Slider One Imagess" />
                <div className="container">
                  <div className="slider-content">
                    <div className="slider-content-inner">
                      <img src="assets/images/banner/content/01.png" alt="banner" />
                      <h2 className="delay1">The Complete Milk !</h2>
                      <p className="delay3">For a glass full of nutrition</p>
                      <a href="google" className="btn delay4">View Product</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="googlemyCarousel" role="button" data-slide="prev">
                <i className="fa fa-angle-left" aria-hidden="true" />
              </a>
              <a className="right carousel-control" href="googlemyCarousel" role="button" data-slide="next">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>			
          </div>			
        </section>
        {/* banner section ending here */}
        {/* about section start here */}
        <section className="about style-2 padding-tb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <h2>About us</h2>
                    <h2><span>Welcome to Our Gowala Dairy Farm</span></h2>
                    <p>Continually productize compelling quality for packed with  Elated 
                      productize compelling quality for packed with all Elated Them
                      Setting up to website and creating pages.</p>
                  </div>
                  <div className="section-wrapper wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                    <ul>
                      <li><i className="far fa-check-square" />We are providing different services</li>
                      <li><i className="far fa-check-square" />We are one of leading company</li>
                      <li><i className="far fa-check-square" />Profitability is the primary goal of all business</li>
                      <li><i className="far fa-check-square" />Learn how to grow your Business</li>
                      <li><i className="far fa-check-square" />Professional solutions for your business</li>
                    </ul>
                    <a href="about.html" className="btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-right wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="video-post text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="video-thumb">
                      <img src="assets/images/video/01.jpg" alt="video-post" />
                      <a href="https://www.youtube.com/embed/cZh0nsrkHh8" className="video-icon" data-rel="lightcase">
                        <i className="far fa-play-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="experience-part">
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <img src="assets/images/about/exp/01.png" alt="about-exp" />
                        </div>
                        <div className="post-content">
                          <h5>20 Years of Experience</h5>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <img src="assets/images/about/exp/02.png" alt="about-exp" />
                        </div>
                        <div className="post-content">
                          <h5>Natural &amp; Organic</h5>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <img src="assets/images/about/exp/03.png" alt="about-exp" />
                        </div>
                        <div className="post-content">
                          <h5>Modern Technique</h5>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <img src="assets/images/about/exp/04.png" alt="about-exp" />
                        </div>
                        <div className="post-content">
                          <h5>Milk Farm Factory</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section ending here */}
        {/* product section start here */}
        <section className="product padding-tb bg-image-3">
          <div className="container">
            <div className="section-header wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
              <h2>Our Product</h2>
              <h2><span>We Provided the Best Product </span></h2>
              <p>Continually productize compelling quality for packed with  Elated 
                Themes Setting up to website and it crating pages .</p>
            </div>
            <div className="section-wrapper row justify-content-center">
              <div className="col-md-7">
                <div className="our-product row justify-content-center">
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="post-item-inner text-center">
                      <div className="post-thumb">
                        <a href="assets/images/product/01.png" data-rel="lightcase">
                          <img src="assets/images/product/01.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Ghee</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$45.99</span>
                      </div>
                      <a href="google" className="offer">-50%</a>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                    <div className="post-item-inner text-center">
                      <div className="post-thumb">
                        <a href="assets/images/product/02.png" data-rel="lightcase">
                          <img src="assets/images/product/02.png" alt="product" />
                        </a> 
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Cheese</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$45.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="post-item-inner text-center">
                      <div className="post-thumb">
                        <a href="assets/images/product/03.png" data-rel="lightcase">
                          <img src="assets/images/product/03.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Butter</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$45.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="post-item-inner text-center">
                      <div className="post-thumb">
                        <a href="assets/images/product/04.png" data-rel="lightcase">
                          <img src="assets/images/product/04.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Cream</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$45.99</span>
                      </div>
                      <a href="google" className="offer">-30%</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="post-item-inner text-center product-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="post-thumb">
                        <a href="assets/images/product/05.png" data-rel="lightcase">
                          <img src="assets/images/product/05.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Ghee</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$99.99</span>
                      </div>
                      <a href="google" className="offer">-50%</a>
                    </div>
                    <div className="swiper-slide">
                      <div className="post-thumb">
                        <a href="assets/images/product/05.png" data-rel="lightcase">
                          <img src="assets/images/product/05.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Milk</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$59.99</span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="post-thumb">
                        <a href="assets/images/product/05.png" data-rel="lightcase">
                          <img src="assets/images/product/05.png" alt="product" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Gowala Ghee</a></h4>
                        <ul className="rating">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star-half" /></li>
                        </ul>
                        <p>(Review 3)</p>
                        <span className="price">$79.99</span>
                      </div>
                      <a href="google" className="offer">-20%</a>
                    </div>
                  </div>
                  <div className="product-pagination" />
                </div>
              </div>
              <a href="shope-page.html" className="btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">View all Product</a>
            </div>
          </div>
        </section>
        {/* product section ending here */}
        {/* offer section start here */}
        <section className="offer-section bg-offer">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="post-thumb">
                  <img src="assets/images/offer/01.png" alt="offer" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="offer-content">
                  <h2>Best Deals Of This Week</h2>
                  <div className="offer-thumb">
                    <img src="assets/images/offer/02.png" alt="offer" />
                    <span className="offer-option">
                      <img src="assets/images/offer/03.png" alt="offer" />
                    </span>
                  </div>
                  <a href="shope-page.html" className="btn">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* offer section ending here */}
        {/* services section start here */}
        <section className="service padding-tb">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="service-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="section-header wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">
                    <h2>Our Services</h2>
                    <h2><span>Provided Best Service</span></h2>
                    <p>Continually productize compelling quality for packed with  Elated 
                      productize compelling quality for packed with all Elated Them
                      Setting up to website and creating pages.</p>
                  </div>
                  <div className="section-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <ul>
                      <li><i className="far fa-check-square" />We are providing different services</li>
                      <li><i className="far fa-check-square" />We are one of leading company</li>
                      <li><i className="far fa-check-square" />Profitability is the primary goal of all business</li>
                      <li><i className="far fa-check-square" />Learn how to grow your Business</li>
                      <li><i className="far fa-check-square" />Professional solutions for your business</li>
                    </ul>
                    <a href="service.html" className="btn">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="service-right wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <img src="assets/images/service/01.png" alt="service" />
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Breeding And Veterinary Solution</a></h4>
                        <p>Continually productize compelling quality for   
                          packed with all Elated Themes. Setting up to 
                          website and creating pages.</p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <img src="assets/images/service/02.png" alt="service" />
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Feed And Nutrition Solution</a></h4>
                        <p>Continually productize compelling quality for   
                          packed with all Elated Themes. Setting up to 
                          website and creating pages.</p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <img src="assets/images/service/03.png" alt="service" />
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Traning and Education Solution</a></h4>
                        <p>Continually productize compelling quality for   
                          packed with all Elated Themes. Setting up to 
                          website and creating pages.</p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <img src="assets/images/service/04.png" alt="service" />
                      </div>
                      <div className="post-content">
                        <h4><a href="google">Dairy Farming and Cattle Equipments</a></h4>
                        <p>Continually productize compelling quality for   
                          packed with all Elated Themes. Setting up to 
                          website and creating pages.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services section ending here */}
        {/* pricing section start here */}
        <section className="pricing padding-tb bg-image-1">
          <div className="container">
            <div className="section-wrapper row justify-content-center">
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="post-item-inner text-center">
                  <div className="price-thumb">
                    <img src="assets/images/price/01.jpg" alt="pricing" />
                  </div>
                  <div className="price-title">
                    <h3>Individual</h3>
                    <p>Quisque viverra elit sit amet hendrerit Sed libero vitae metus</p>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>Integer comodo massa</li>
                      <li>Nam siewet amet leoing maximus</li>
                      <li>Dignism elit eu viverra elit</li>
                      <li>Nam siewet amet leoing maximus</li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <h5><del>19.00 USD</del></h5>
                    <h3>10.00 USD</h3>
                    <a href="google" className="btn">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="post-item-inner text-center">
                  <div className="price-thumb">
                    <img src="assets/images/price/01.jpg" alt="pricing" />
                  </div>
                  <div className="price-title">
                    <h3>Monthly</h3>
                    <p>Quisque viverra elit sit amet hendrerit Sed libero vitae metus</p>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>Integer comodo massa</li>
                      <li>Nam siewet amet leoing maximus</li>
                      <li>Dignism elit eu viverra elit</li>
                      <li>Nam siewet amet leoing maximus</li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <h5><del>49.00 USD</del></h5>
                    <h3>29.00 USD</h3>
                    <a href="google" className="btn">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="post-item-inner text-center">
                  <div className="price-thumb">
                    <img src="assets/images/price/01.jpg" alt="pricing" />
                  </div>
                  <div className="price-title">
                    <h3>Biweekly</h3>
                    <p>Quisque viverra elit sit amet hendrerit Sed libero vitae metus</p>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>Integer comodo massa</li>
                      <li>Nam siewet amet leoing maximus</li>
                      <li>Dignism elit eu viverra elit</li>
                      <li>Nam siewet amet leoing maximus</li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <h5><del>29.00 USD</del></h5>
                    <h3>19.00 USD</h3>
                    <a href="google" className="btn">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pricing section start here */}
        {/* blog section start here */}
        <section className="blog style-2 padding-tb">
          <div className="container">
            <div className="row">
              <div className="section-header w-100 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                <h2>Recent Blog</h2>
                <h2><span>Best Milk Recipe You have Ever seen</span></h2>
                <p>Continually productize compelling quality for packed with  Elated 
                  Themes Setting up to website and it crating pages .</p>
              </div>
              <div className="section-wrapper row no-gutters justify-content-center">
                <div className="col-lg-5">
                  <div className="blog-left wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="post-item">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <a href="blog-single.html"><img src="assets/images/blog/03.jpg" alt="blog" /></a>
                          <div className="post-content">
                            <h4><a href="blog-single.html">The Only Ice Cream Recipe You'll Ever Need</a></h4>
                            <div className="meta-post">
                              <img src="assets/images/blog/meta/01.png" alt="meta-post" />
                              <a href="google" className="name">Sahjahan Sagor</a>
                              <a href="google" className="date">October 10, 2021 </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="blog-right">
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <a href="blog-single.html"><img src="assets/images/blog/04.jpg" alt="blog" /></a>
                          <div className="post-content">
                            <h4><a href="blog-single.html">Tip for Making Dairy Free Milk at Home</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <a href="blog-single.html"><img src="assets/images/blog/05.jpg" alt="blog" /></a>
                          <div className="post-content">
                            <h4><a href="blog-single.html">Natural Cheese Recipe for Your Family</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <a href="blog-single.html"><img src="assets/images/blog/06.jpg" alt="blog" /></a>
                          <div className="post-content">
                            <h4><a href="blog-single.html">Natural Butter Recipe for Your Family</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                      <div className="post-inner">
                        <div className="post-thumb">
                          <a href="blog-single.html"><img src="assets/images/blog/07.jpg" alt="blog" /></a>
                          <div className="post-content">
                            <h4><a href="blog-single.html">Making Ghee Free Milk for Family</a></h4>
                          </div>
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
        {/* testimonial section start here */}
        <section className="testimonial padding-tb bg-image-4">
          <div className="container">
            <div className="section-wrapper">
              <div className="testimonial-slider">
                <div className="swiper-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-content">
                        <div className="testimonial-author">
                          <div className="author-thumb">
                            <img src="assets/images/testimonial/01.png" alt="testimonial" />
                          </div>
                          <div className="author-name-des">
                            <h4>Sahjahan Sagor</h4>
                            <p>Founder &amp;Ceo</p>
                          </div>
                        </div>
                        <p><span>Conveniently innovate user-centric benefits with installed base testing procedures. 
                            Authoritatively unleas before progressive architectures rapidiously build 
                            clicks-and-mortar testing procedures without installed architectures rapidiously
                            build clicks-and-mortar testing procedures without interoperable manufactured products 
                            distinctively.</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-content">
                        <div className="testimonial-author">
                          <div className="author-thumb">
                            <img src="assets/images/testimonial/01.png" alt="testimonial" />
                          </div>
                          <div className="author-name-des">
                            <h4>Sahjahan Sagor</h4>
                            <p>Founder &amp;Ceo</p>
                          </div>
                        </div>
                        <p><span>Conveniently innovate user-centric benefits with installed base testing procedures. 
                            Authoritatively unleas before progressive architectures rapidiously build 
                            clicks-and-mortar testing procedures without installed architectures rapidiously
                            build clicks-and-mortar testing procedures without interoperable manufactured products 
                            distinctively.</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-item">
                      <div className="testi-content">
                        <div className="testimonial-author">
                          <div className="author-thumb">
                            <img src="assets/images/testimonial/01.png" alt="testimonial" />
                          </div>
                          <div className="author-name-des">
                            <h4>Sahjahan Sagor</h4>
                            <p>Founder &amp;Ceo</p>
                          </div>
                        </div>
                        <p><span>Conveniently innovate user-centric benefits with installed base testing procedures. 
                            Authoritatively unleas before progressive architectures rapidiously build 
                            clicks-and-mortar testing procedures without installed architectures rapidiously
                            build clicks-and-mortar testing procedures without interoperable manufactured products 
                            distinctively.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-pagination" />
                <div className="testimonial-button-prev"><i className="fas fa-chevron-left" /></div>
                <div className="testimonial-button-next"><i className="fas fa-chevron-right" /></div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial section ending here */}
        {/* sponsor section start here */}
        <div className="sponsor padding-tb">
          <div className="container">
            <div className="section-wrapper">
              <div className="sponsor-slider">
                <div className="swiper-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="swiper-slide">
                    <div className="sponsor-thumb">
                      <a href="google"><img src="assets/images/sponsor/01.png" alt="sponsor" /></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-thumb">
                      <a href="google"><img src="assets/images/sponsor/02.png" alt="sponsor" /></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-thumb">
                      <a href="google"><img src="assets/images/sponsor/03.png" alt="sponsor" /></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-thumb">
                      <a href="google"><img src="assets/images/sponsor/04.png" alt="sponsor" /></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-thumb">
                      <a href="google"><img src="assets/images/sponsor/05.png" alt="sponsor" /></a>
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
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="post-item">
                    <a href="google" className="footer-logo">
                      <img src="assets/images/footer/footer-logo.png" alt="footer-logo" />
                    </a>
                    <p>Continually productize compelling quality dome packed with all Elated 
                      Themes ently utilize website and creating pages corporate </p>
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
                          <p>25/2 Lane2 Vokte Street Building <br />Melborn City</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                  <div className="post-item">
                    <div className="post-title">
                      <h3>Top Selling Product</h3>
                    </div>
                    <ul className="footer-post">
                      <li>
                        <div className="post-thumb">
                          <a href="google"><img src="assets/images/footer/01.jpg" alt="footer" /></a>
                        </div>
                        <div className="post-content">
                          <h5><a href="google">Gowala Cream</a></h5>
                          <div className="footer-rating">
                            <ul className="rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star-half" /></li>
                            </ul>
                            <p>(Review 3)</p>
                          </div>
                          <span className="price"><del>$45.99</del></span>
                          <span className="price">$25.99</span>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <a href="google"><img src="assets/images/footer/02.jpg" alt="footer" /></a>
                        </div>
                        <div className="post-content">
                          <h5><a href="google">Gowala Butter</a></h5>
                          <div className="footer-rating">
                            <ul className="rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star-half" /></li>
                            </ul>
                            <p>(Review 3)</p>
                          </div>
                          <span className="price"><del>$45.99</del></span>
                          <span className="price">$25.99</span>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <a href="google"><img src="assets/images/footer/03.jpg" alt="footer" /></a>
                        </div>
                        <div className="post-content">
                          <h5><a href="google">Gowala Cheese</a></h5>
                          <div className="footer-rating">
                            <ul className="rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star-half" /></li>
                            </ul>
                            <p>(Review 3)</p>
                          </div>
                          <span className="price"><del>$45.99</del></span>
                          <span className="price">$25.99</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <div className="post-item">
                    <div className="post-title">
                      <h3>Farm Gallery</h3>
                    </div>
                    <ul className="footer-gellary">
                      <li><a href="assets/images/footer/gellary/01.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/01.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/02.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/02.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/03.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/03.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/04.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/04.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/05.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/05.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/06.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/06.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/07.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/07.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/08.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/08.jpg" alt="gellary" /></a></li>
                      <li><a href="assets/images/footer/gellary/09.jpg" data-rel="lightcase"><img src="assets/images/footer/gellary/09.jpg" alt="gellary" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <div className="container">
              <div className="section-wrapper">
                <p className="text-center">© 2021 <a href="index.html">Gowala</a>.All Rights Reserved By <a href="google">LabArtisan</a></p>
              </div>
            </div>
          </div>
        </footer>
        {/* footer section start here */}
        {/* scrollToTop start here */}
        <a href="google" className="scrollToTop"><i className="flaticon-chevron-up" /></a>
        {/* scrollToTop ending here */}
    </>
  )
}

export default index2
