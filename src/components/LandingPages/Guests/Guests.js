import React,{useState} from 'react';
import './Guests.css';
import SliderGuests from './SliderGuests';

const Guests = () => {
  
  const [index, setIndex] = useState(0);

  const prevButton = () => {
    if(index<=0){
      setIndex(5);
    }
    else{
      setIndex(index-1);
    }
    console.log('prev',videoArray[index]);
    console.log('prev',msgArray[index]);
    console.log("prev",index);
  }

  const nextButton = () => {
    if(index>=5){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
    console.log("next",index);
    console.log('next',videoArray[index]);
    console.log('next',msgArray[index]);
  }

  const videoArray = ['/videos/1.mp4','/videos/2.mp4','/videos/3.mp4','/videos/4.mp4','/videos/5.mp4','/videos/6.mp4']
  const msgArray = ['Mr. Muttiah Muralitharan', 'Miss Alex Blackwell', 'Mr. Baichung Bhutia', 'Mr. Gary Kirsten', 'Miss P. V. Sindhu', 'Mr. Pullela Gopichand'];


  return (
    <>
      <div id="guests-video">
        <section
          id="guests"
          className="ftco-section_guests"
          style={{ paddingBottom: '0' }}
        >
          <div className="container-fluid_guests">
            <div className="row_guests justify-content-center_guests mb-5">
              <div className="col-md-7 heading-section_guests text-center ftco-animate">
                <h3
                  className="subheading_guests"
                  style={{ color: '#6db549', fontWeight: '900' }}
                >
                  Patrons of Spardha
                </h3>
                <h2
                  className="mb-1"
                  style={{ color: 'white', fontWeight: '900' }}
                >
                  Guests
                </h2>
              </div>
            </div>
            <div className="row_guests">
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/18.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Sushil&nbsp;Kumar</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/6.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Dhanraj&nbsp;Pillay</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/16.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Sardar&nbsp;Singh</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/14.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Sakshi&nbsp;Malik</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/23.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">VVS&nbsp;Laxman</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/12.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">R.S.&nbsp;Rathore</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/5.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Deepa&nbsp;Malik</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/24.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Yogeshwar&nbsp;Dutt</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/4.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Balbir&nbsp;Singh</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/21.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Tanvie&nbsp;Hans</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/1.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Akhil&nbsp;Kumar</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/15.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Sandeep&nbsp;Singh</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/10.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Prashanti&nbsp;Singh</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/13.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">
                    Sajjan&nbsp;Singh&nbsp;Cheema
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/9.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Prachi&nbsp;Tehlan</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/17.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Shikha&nbsp;Pandey</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/11.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Praveen&nbsp;Thipsay</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/8.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Kunjarani&nbsp;Devi</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/19.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Sushma&nbsp;Verma</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/2.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Amit&nbsp;Panghal</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/3.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Anjum&nbsp;Chopra</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/20.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Tania&nbsp;Sachdev</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/7.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Dilip&nbsp;Tirkey</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <img
                  src="/images/guests/22.png"
                  className="img-fluid_guests img-guests"
                  alt="guest_image_alt"
                />
                <div className="middle_guests">
                  <div className="guest-text">Varun&nbsp;Singh&nbsp;Bhati</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="ftco-section_guests">
          <div className="container_guests col-sm-7">
              <div className="embed-responsive embed-responsive-4by3">
                  <video id="video1" width="320" height="240" key={videoArray[index]} controls>
                      <source src={videoArray[index]} type="video/mp4"/>
                  </video>
                  <div id="overlay-text">
                      <p className="para_guests">Best wishes from {msgArray[index]}</p>
                  </div>
              </div>
              <div id="controls" style={{paddingBottom: '20px',textAlign: 'center'}}>
                  <button className="btn_guests btn-success control" onClick={prevButton} style={{fontSize:'18px', color: 'white',marginRight: '5px',marginTop: '10px'}}>Previous</button>
                  <button className="btn_guests btn-success control" onClick={nextButton} style={{fontSize:'18px', color: 'white',marginRight: '5px',marginTop: '10px'}}>&nbsp; Next &nbsp;</button>
              </div>
          </div>
      </section>
      </div>
      
      <SliderGuests/>
    </>
  );
};

export default Guests;
