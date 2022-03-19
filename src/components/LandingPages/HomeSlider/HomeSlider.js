import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.css';
import { HashLink } from 'react-router-hash-link';

function HomeSlider() {
  return (
    <>
      <OwlCarousel
        id="home-slider"
        className="owl-theme home-slider active"
        loop
        items={1}
        animateIn="fadeIn"
        animateOut="fadeOut"
        autoplay
      >
        <div id="home-slider-item-1" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative' }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center">
                <div className="container col-lg-4 col-md-5 col-sm-9 col-9">
                  <img src="/images/logo/spardha-white.png" alt="spardha" />
                </div>
                <h1 className="mt-4 mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2021
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#6db549' }}
                >
                  April 15-17, 2022
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        to="/register/signup#register"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      to="/register/signup#register"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-2" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative' }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center">
                <div className="container col-lg-4 col-md-5 col-sm-9 col-9">
                  <img src="/images/logo/spardha-white.png" alt="spardha" />
                </div>
                <h1 className="mt-4 mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2021
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#6db549' }}
                >
                  April 15-17, 2022
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        to="/register/signup#register"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      to="/register/signup#register"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-3" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative' }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center">
                <div className="container col-lg-4 col-md-5 col-sm-9 col-9">
                  <img src="/images/logo/spardha-white.png" alt="spardha" />
                </div>
                <h1 className="mt-4 mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2021
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#6db549' }}
                >
                  April 15-17, 2022
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        to="/register/signup#register"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      to="/register/signup#register"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-4" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative' }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center">
                <div className="container col-lg-4 col-md-5 col-sm-9 col-9">
                  <img src="/images/logo/spardha-white.png" alt="spardha" />
                </div>
                <h1 className="mt-4 mb-1 text-overflow-center spardha-21">
                  Spardha&nbsp;2021
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  IIT (BHU), Varanasi
                </h2>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#6db549' }}
                >
                  April 15-17, 2022
                </h2>
                <div className="container mt-5 pt-3 home-large-screen">
                  <div className="row">
                    <div className="col-6 ca">
                      <HashLink to="/ca#ca" className="home-button1">
                        CAMPUS AMBASSADOR
                      </HashLink>
                    </div>
                    <div className="col-6 reg">
                      <HashLink
                        to="/register/signup#register"
                        className="home-button"
                      >
                        REGISTER&nbsp;/&nbsp;LOGIN
                      </HashLink>
                    </div>
                  </div>
                </div>
                <div className="container mt-5 pt-3 home-large-screen">
                  &nbsp;
                </div>
                <div className="home-small-screen container">
                  <div className="reg">
                    <HashLink
                      to="/register/signup#register"
                      className="home-button"
                    >
                      REGISTER&nbsp;/&nbsp;LOGIN
                    </HashLink>
                  </div>
                  <div className="ca">
                    <HashLink to="/ca#ca" className="home-button1">
                      CAMPUS AMBASSADOR
                    </HashLink>
                  </div>
                  <div className="container mt-5">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default HomeSlider;
