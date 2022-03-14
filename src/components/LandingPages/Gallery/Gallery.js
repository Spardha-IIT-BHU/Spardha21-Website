import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Gallery_gradient.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GalleryModal from '../GalleryModal/GalleryModal';
// import Background_gallery from '/images/bg/bg_football.png';

const Gallery = () => {
  // const gallery_bg={
  //     backgroundImage:  "url(" + { Background_gallery } + ")",
  //     backgroundAttachment: "fixed",
  //     backgroundPosition: "center",
  //     backgroundSize: "cover"
  // }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [item, setItem] = useState(0);
  // const changeIndex=(index)=>{
  //   console.log("changeIndex",index);
  //   setItem(index)
  // };
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log('useEffect', check);
    if (check) {
      if (!modal) {
        toggle();
      }
      setItem(localStorage.getItem('index'));
      setCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <>
      <section id="gallery" className="ftco-section padSect">
        <div className="container_gallery gallery-container mb-5 pt-1">
          <div className="row_gallery justify-content-center pt-5">
            <div className="col-md-7 heading-section_gallery text-center">
              <h3
                className="subheading_gallery"
                style={{ color: '#6db549', fontWeight: '900' }}
              >
                Some Past Memories
              </h3>
              <h2 className="mb-1" style={{ fontWeight: '900' }}>
                Gallery
              </h2>
            </div>
          </div>
          {/* <hr style="margin-left: 30px; margin-right: 30px;"> */}
          <div className="tz-gallery">
            <div className="row_gallery mb-3 gallery-heading boldClass">
              Opening Ceremony:
            </div>

            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 0);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/43.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 1);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/44.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 2);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/45.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 3);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/46.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 4);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/47.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Pre-Events:
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;I. Mashaal Handover Ceremony
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 5);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/51.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 6);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/52.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 7);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/53.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;II. Run for a Cause
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 8);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/54.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 9);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/55.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 10);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/56.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;III. Saturnalia
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 11);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/57.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 12);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/58.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 13);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/59.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;IV. Udbhav
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 14);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/60.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 15);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/61.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 16);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/62.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 17);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/63.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Closing Ceremony:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 18);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/22.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 19);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/23.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 20);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/24.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/25.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 22);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/26.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Aquatics:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 23);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/aquatics/1.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 24);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/aquatics/2.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Athletics:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/3.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 26);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/4.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Badminton:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 27);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/5.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 28);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/6.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 29);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/7.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Basketball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 30);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/8.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 31);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/9.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 32);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/10.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 33);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/11.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 34);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/12.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Boxing:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 35);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/13.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 36);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/14.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 37);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/15.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Carrom:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 38);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/16.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 39);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/17.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 40);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/18.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Chess:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 41);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/19.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 42);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/20.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 43);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/21.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>

            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Cricket:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 44);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/27.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 45);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/28.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 46);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/29.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Football:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 47);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/30.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 48);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/31.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 49);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/32.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Handball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 50);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/33.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 51);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/34.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 52);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/35.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Hockey:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 53);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/36.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 54);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/37.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 55);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/38.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Kabaddi:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 56);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/71.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 57);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/72.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 58);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/73.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Kho-kho:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 59);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/39.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 60);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/40.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 61);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/41.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 62);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/42.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Powerlifting & Weightlifting:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 63);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/48.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 64);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/49.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 65);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/50.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Table Tennis:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 66);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/74.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 67);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/75.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 68);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/76.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Taekwondo:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 69);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/64.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 70);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/65.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 71);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/66.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Tennis:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 72);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/77.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 73);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/78.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 74);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/79.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Volleyball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 75);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/67.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 76);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/68.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 77);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/69.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 78);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/70.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        contentClassName="height_gallery"
        size="lg"
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            selectedItem={item}
            className="carousel_gallery"
          >
            <div>
              <img
                src="/gallery/images/opening/43.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/44.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/45.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/46.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/47.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/51.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/52.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/53.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/54.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/55.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/56.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/57.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/58.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/59.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/60.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/61.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/62.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/63.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/22.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/23.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/24.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/25.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/26.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/aquatics/1.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/aquatics/2.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/3.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/4.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/5.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/6.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/7.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/8.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/9.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/10.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/11.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/12.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/13.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/14.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/15.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/16.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/17.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/18.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/19.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/20.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/21.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/27.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/28.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/29.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/30.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/31.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/32.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/33.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/34.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/35.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/36.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/37.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/38.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/71.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/72.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/73.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/39.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/40.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/41.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/42.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/48.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/49.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/50.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/74.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/75.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/76.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/64.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/65.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/66.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/77.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/78.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/79.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/67.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/68.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/69.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/70.jpg"
                alt="gallery_modal_image"
              />
            </div>
          </Carousel>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Gallery;
