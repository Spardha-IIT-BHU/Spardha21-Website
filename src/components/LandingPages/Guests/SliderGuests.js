import React from 'react'
import "./SliderGuests.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SliderGuests = () => {
  return (
    // <section id="testimonials">
    //   SliderGuests
    // </section>

    <section id="testimonials" className="testimony-section">
        <div className="overlay"></div>
        <div className="container_slider">
            <div className="row_guest_slider justify-content-center mb-5 pb-3">
                <div className="col-md-7 text-center heading-section_guests heading-section-white ftco-animate" style={{marginTop: "25px"}}>
                    <h3 className="subheading_guests" style={{color: '#6db549',fontWeight: '900'}}>What They're Saying</h3>
                    <h2 className="mb-1 sub_slider_guests" style={{color: 'white'}}>Testimonials</h2>
            </div>
        </div>

        <div className="row_guest_slider ftco-animate_slider">
            <div className="col-12">
            <OwlCarousel
            loop
            items={1}
            animateIn="fadeIn"
            animateOut="fadeOut"
            autoplay
            center={true}
            className="mine_slider_guests"
            // stagePadding={500}
            // margin="1px"
            >
                <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest7">
                        </div>
                        <div className="text p-3">
                            <p className="mb-4">The passion for sports is just on another level here!</p>
                            <p className="name">Deepa Malik (Athlete)</p>
                            <span className="position">Silver Awardee - 2016 Summer Paraolympics</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest8">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">Salute to all organisers for such dedication and determination.</p>
                          <p className="name">Sushil Kumar (Wrestler)</p>
                          <span className="position">2010 World Title winner</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest9">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">Feels special to be a part of Spardha.</p>
                                        <p className="name">Sardar Singh (Hockey)</p>
                                        <span className="position">Former Captain of Indian Hockey Team</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest1">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">This is really awesome.<br/>Kudos to you.</p>
                                        <p className="name">V.V.S. Laxman</p>
                                        <span className="position">Cricketer</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest2">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">Believe in Yourself.</p>
                                        <p className="name">Rajyavardhan Singh Rathore</p>
                                        <span className="position">Silver Awardee- Olympic 2004</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest3">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">The level of competition and the atmosphere here was so amazing.</p>
                                        <p className="name">Prashanti Singh</p>
                                        <span className="position">International BasketBall Player</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest4">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">These young athletes are what makes India proud.</p>
                                        <p className="name">Yogeshwar Dutt (Wrestler)</p>
                                        <span className="position">Bronze Awardee- Olympic 2012</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest5">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">This big festival at College level,<br/>I applaud for you people.</p>
                                        <p className="name">Sandeep Singh (Hockey)</p>
                                        <span className="position">Ex-Captain - Team India</span>
                        </div>
                  </div>
              </div>

              <div className="item">
                    <div className="testimony-wrap text-center py-4">
                        <div className="user-img mt-3 mb-4 bg_class_guest6">
                        </div>
                        <div className="text p-3">
                        <p className="mb-4">Hats off to you.</p>
                                        <p className="name">Akhil Kumar (Boxer)</p>
                                        <span className="position">Arjuna Awardee</span>
                        </div>
                  </div>
              </div>

              </OwlCarousel>;
            </div>
          </div>
      </div>

    </section>

  )
}

export default SliderGuests