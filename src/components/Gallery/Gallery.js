import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Gallery_gradient.css';
import Preloader from '../Preloader/Preloader';
// import Background_gallery from '/images/bg/bg_football.png';

const Gallery = () => {
  // const gallery_bg={
  //     backgroundImage:  "url(" + { Background_gallery } + ")",
  //     backgroundAttachment: "fixed",
  //     backgroundPosition: "center",
  //     backgroundSize: "cover"
  // }
  const [checkgallery, setCheckgallery] = useState(true);

  useEffect(() => {
    // console.log("Sponsors");
    setTimeout(() => {
      setCheckgallery(false);
    }, 2000);
  }, []);

  return (
    <>
      {checkgallery ? (
        <Preloader />
      ) : (
        <section id="gallery" className="ftco-section padSect">
          <div className="container_gallery gallery-container mb-5 pt-1">
            <div className="row_gallery justify-content-center pt-5">
              <div className="col-md-7 heading-section_gallery text-center">
                <h3 className="subheading_gallery" style={{ color: '#6db549' }}>
                  Some Past Memories
                </h3>
                <h2 className="mb-1">Gallery</h2>
              </div>
            </div>
            {/* <hr style="margin-left: 30px; margin-right: 30px;"> */}
            <div className="tz-gallery">
              <div
                className="row_gallery mb-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Opening Ceremony:
              </div>

              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/opening/43.jpg"
                  >
                    <img
                      src="/gallery/images/opening/43.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/opening/44.jpg"
                  >
                    <img
                      src="/gallery/images/opening/44.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/opening/45.jpg"
                  >
                    <img
                      src="/gallery/images/opening/45.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/opening/46.jpg"
                  >
                    <img
                      src="/gallery/images/opening/46.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/opening/47.jpg"
                  >
                    <img
                      src="/gallery/images/opening/47.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Pre-Events:
              </div>
              <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
                &emsp;I. Mashaal Handover Ceremony
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/marshall/51.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/marshall/51.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/marshall/52.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/marshall/52.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/marshall/53.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/marshall/53.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
                &emsp;II. Run for a Cause
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/run/54.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/run/54.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/run/55.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/run/55.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/run/56.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/run/56.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
                &emsp;III. Saturnalia
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/saturnalia/57.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/saturnalia/57.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/saturnalia/58.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/saturnalia/58.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/saturnalia/59.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/saturnalia/59.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
                &emsp;IV. Udbhav
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/udbhav/60.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/udbhav/60.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/udbhav/61.jpg"
                  >
                    <img
                      src="/gallery/images/preevents/udbhav/61.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/udbhav/62.jpeg"
                  >
                    <img
                      src="/gallery/images/preevents/udbhav/62.jpeg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/preevents/udbhav/63.jpeg"
                  >
                    <img
                      src="/gallery/images/preevents/udbhav/63.jpeg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Closing Ceremony:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/closing/22.jpg"
                  >
                    <img
                      src="/gallery/images/closing/22.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/closing/23.jpg"
                  >
                    <img
                      src="/gallery/images/closing/23.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/closing/24.jpg"
                  >
                    <img
                      src="/gallery/images/closing/24.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/closing/25.jpg"
                  >
                    <img
                      src="/gallery/images/closing/25.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/closing/26.jpg"
                  >
                    <img
                      src="/gallery/images/closing/26.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Aquatics:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/aquatics/1.jpg"
                  >
                    <img
                      src="/gallery/images/aquatics/1.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/aquatics/2.jpg"
                  >
                    <img
                      src="/gallery/images/aquatics/2.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Athletics:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/athletics/3.jpg"
                  >
                    <img
                      src="/gallery/images/athletics/3.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/athletics/4.jpg"
                  >
                    <img
                      src="/gallery/images/athletics/4.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Badminton:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/badminton/5.jpg"
                  >
                    <img
                      src="/gallery/images/badminton/5.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/badminton/6.jpg"
                  >
                    <img
                      src="/gallery/images/badminton/6.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/badminton/7.jpg"
                  >
                    <img
                      src="/gallery/images/badminton/7.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Basketball:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/basketball/8.jpg"
                  >
                    <img
                      src="/gallery/images/basketball/8.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/basketball/9.jpg"
                  >
                    <img
                      src="/gallery/images/basketball/9.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/basketball/10.jpg"
                  >
                    <img
                      src="/gallery/images/basketball/10.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/basketball/11.jpg"
                  >
                    <img
                      src="/gallery/images/basketball/11.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/basketball/12.jpg"
                  >
                    <img
                      src="/gallery/images/basketball/12.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Boxing:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/boxing/13.jpg"
                  >
                    <img
                      src="/gallery/images/boxing/13.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/boxing/14.jpg"
                  >
                    <img
                      src="/gallery/images/boxing/14.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/boxing/15.jpg"
                  >
                    <img
                      src="/gallery/images/boxing/15.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Carrom:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/carrom/16.jpg"
                  >
                    <img
                      src="/gallery/images/carrom/16.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/carrom/17.jpg"
                  >
                    <img
                      src="/gallery/images/carrom/17.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/carrom/18.jpg"
                  >
                    <img
                      src="/gallery/images/carrom/18.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Chess:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/chess/19.jpg"
                  >
                    <img
                      src="/gallery/images/chess/19.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/chess/20.jpg"
                  >
                    <img
                      src="/gallery/images/chess/20.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/chess/21.jpg"
                  >
                    <img
                      src="/gallery/images/chess/21.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>

              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Cricket:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/cricket/27.jpg"
                  >
                    <img
                      src="/gallery/images/cricket/27.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/cricket/28.jpg"
                  >
                    <img
                      src="/gallery/images/cricket/28.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/cricket/29.jpg"
                  >
                    <img
                      src="/gallery/images/cricket/29.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Football:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/football/30.jpg"
                  >
                    <img
                      src="/gallery/images/football/30.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/football/31.jpg"
                  >
                    <img
                      src="/gallery/images/football/31.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/football/32.jpg"
                  >
                    <img
                      src="/gallery/images/football/32.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Handball:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/handball/33.jpg"
                  >
                    <img
                      src="/gallery/images/handball/33.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/handball/34.jpg"
                  >
                    <img
                      src="/gallery/images/handball/34.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/handball/35.jpg"
                  >
                    <img
                      src="/gallery/images/handball/35.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Hockey:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/hockey/36.jpg"
                  >
                    <img
                      src="/gallery/images/hockey/36.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/hockey/37.jpg"
                  >
                    <img
                      src="/gallery/images/hockey/37.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/hockey/38.jpg"
                  >
                    <img
                      src="/gallery/images/hockey/38.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Kabaddi:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-kabaddi/71.jpg"
                  >
                    <img
                      src="/gallery/images/z-kabaddi/71.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-kabaddi/72.jpg"
                  >
                    <img
                      src="/gallery/images/z-kabaddi/72.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-kabaddi/73.jpg"
                  >
                    <img
                      src="/gallery/images/z-kabaddi/73.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Kho-kho:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/khokho/39.jpg"
                  >
                    <img
                      src="/gallery/images/khokho/39.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/khokho/40.jpg"
                  >
                    <img
                      src="/gallery/images/khokho/40.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/khokho/41.jpg"
                  >
                    <img
                      src="/gallery/images/khokho/41.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/khokho/42.jpg"
                  >
                    <img
                      src="/gallery/images/khokho/42.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Powerlifting & Weightlifting:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/powerlifting/48.jpg"
                  >
                    <img
                      src="/gallery/images/powerlifting/48.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/powerlifting/49.jpg"
                  >
                    <img
                      src="/gallery/images/powerlifting/49.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/powerlifting/50.jpg"
                  >
                    <img
                      src="/gallery/images/powerlifting/50.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Table Tennis:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tabletennis/74.jpg"
                  >
                    <img
                      src="/gallery/images/z-tabletennis/74.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tabletennis/75.jpg"
                  >
                    <img
                      src="/gallery/images/z-tabletennis/75.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tabletennis/76.jpg"
                  >
                    <img
                      src="/gallery/images/z-tabletennis/76.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Taekwondo:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/taekwondo/64.jpg"
                  >
                    <img
                      src="/gallery/images/taekwondo/64.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/taekwondo/65.jpg"
                  >
                    <img
                      src="/gallery/images/taekwondo/65.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/taekwondo/66.jpg"
                  >
                    <img
                      src="/gallery/images/taekwondo/66.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Tennis:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tennis/77.jpg"
                  >
                    <img
                      src="/gallery/images/z-tennis/77.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tennis/78.jpg"
                  >
                    <img
                      src="/gallery/images/z-tennis/78.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/z-tennis/79.jpg"
                  >
                    <img
                      src="/gallery/images/z-tennis/79.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
              <div
                className="row_gallery mb-3 mt-3 gallery-heading boldClass"
                style={{ fontSize: '22px' }}
              >
                Volleyball:
              </div>
              <div className="row_gallery">
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/volleyball/67.jpg"
                  >
                    <img
                      src="/gallery/images/volleyball/67.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/volleyball/68.jpg"
                  >
                    <img
                      src="/gallery/images/volleyball/68.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/volleyball/69.jpg"
                  >
                    <img
                      src="/gallery/images/volleyball/69.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 imageMarginGallery">
                  <a
                    className="lightbox_gallery image-popup_gallery"
                    href="/gallery/images/volleyball/70.jpg"
                  >
                    <img
                      src="/gallery/images/volleyball/70.jpg"
                      alt="gallery_image_alt"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Gallery;
