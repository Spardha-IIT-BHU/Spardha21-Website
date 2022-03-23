import React, { useState } from 'react';
import athletics from './athletics.png';
import basketball from './basketball.png';
import badminton from './badminton.png';
import boxing from './boxing.png';
import chess from './chess.png';
import cricket from './cricket.png';
import football from './football.png';
import handball from './handball.png';
import hockey from './hockey.png';
import kabaddi from './kabaddi.png';
import khokho from './kho-kho.png';
import squash from './squash.png';
import tabletennis from './table-tennis.png';
import taekwondo from './taekwondo.png';
import tennis from './tennis.png';
import volleyball from './volleyball.png';
import weightlifting from './weightlifting.png';
import styles from './Events.module.css';
import {
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
} from './Events_Components.js';

const Events = () => {
  const [showResults0, setShowResults0] = useState(false);
  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [showResults3, setShowResults3] = useState(false);
  const [showResults4, setShowResults4] = useState(false);
  const [showResults5, setShowResults5] = useState(false);
  const [showResults6, setShowResults6] = useState(false);
  const [showResults7, setShowResults7] = useState(false);
  const [showResults8, setShowResults8] = useState(false);
  const [showResults9, setShowResults9] = useState(false);
  const [showResults10, setShowResults10] = useState(false);
  const [showResults11, setShowResults11] = useState(false);
  const [showResults12, setShowResults12] = useState(false);
  const [showResults13, setShowResults13] = useState(false);
  const [showResults14, setShowResults14] = useState(false);
  const [showResults15, setShowResults15] = useState(false);
  const [showResults16, setShowResults16] = useState(false);
  const [showResults17, setShowResults17] = useState(false);

  const onClick0 = () => {
    setShowResults0(true);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick1 = () => {
    setShowResults0(false);
    setShowResults1(true);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick2 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(true);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick3 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(true);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick4 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(true);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick5 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(true);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick6 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(true);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick7 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(true);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick8 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(true);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick9 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(true);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick10 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(true);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick11 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(true);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick12 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(true);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick13 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(true);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick14 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(true);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick15 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(true);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick16 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(true);
    setShowResults17(false);
  };
  const onClick17 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(true);
  };

  return (
    <section id="events" className={`${styles.ftco_section} ${styles.events}`}>
      <div className={`${styles.container} ${styles.pb_1}`}>
        <div
          className={`${styles.row} ${styles.justify_content_center} ${styles.mb_5}`}
        >
          <div
            className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
          >
            <h3
              className={`${styles.subheading}`}
              style={{ color: '#6db549', fontWeight: 'bold' }}
            >
              Find Your Interest
            </h3>
            <h2 className={`${styles.mb_1} ${styles.H2}`}>
              Sports &amp; Games
            </h2>
          </div>
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={athletics}
              alt=""
              onClick={onClick0}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={badminton}
              alt=""
              onClick={onClick1}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={basketball}
              alt=""
              onClick={onClick2}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="3"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={boxing}
              alt=""
              onClick={onClick3}
            />
          </div>
          {showResults0 ? (
            <Athletics changeState={(showResult0) => setShowResults0(false)} />
          ) : null}
          {showResults1 ? (
            <Badminton changeState={(showResult1) => setShowResults1(false)} />
          ) : null}
          {showResults2 ? (
            <Basketball changeState={(showResult2) => setShowResults2(false)} />
          ) : null}
          {showResults3 ? (
            <Boxing changeState={(showResult3) => setShowResults3(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={chess}
              alt=""
              onClick={onClick4}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={cricket}
              alt=""
              onClick={onClick5}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={cricket}
              alt=""
              onClick={onClick6}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="3"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={football}
              alt=""
              onClick={onClick7}
            />
          </div>
          {showResults4 ? (
            <Chess changeState={(showResult4) => setShowResults4(false)} />
          ) : null}
          {showResults5 ? (
            <Cricket changeState={(showResult5) => setShowResults5(false)} />
          ) : null}
          {showResults6 ? (
            <Cycling changeState={(showResult6) => setShowResults6(false)} />
          ) : null}
          {showResults7 ? (
            <Football changeState={(showResult7) => setShowResults7(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={handball}
              alt=""
              onClick={onClick8}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={hockey}
              alt=""
              onClick={onClick9}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={kabaddi}
              alt=""
              onClick={onClick10}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="3"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={khokho}
              alt=""
              onClick={onClick11}
            />
          </div>
          {showResults8 ? (
            <Handball changeState={(showResult8) => setShowResults8(false)} />
          ) : null}
          {showResults9 ? (
            <Hockey changeState={(showResult9) => setShowResults9(false)} />
          ) : null}
          {showResults10 ? (
            <Kabbadi changeState={(showResult10) => setShowResults10(false)} />
          ) : null}
          {showResults11 ? (
            <Khokho changeState={(showResult11) => setShowResults11(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={squash}
              alt=""
              onClick={onClick12}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tabletennis}
              alt=""
              onClick={onClick13}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={taekwondo}
              alt=""
              onClick={onClick14}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="3"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tennis}
              alt=""
              onClick={onClick15}
            />
          </div>
          {showResults12 ? (
            <Squash changeState={(showResult12) => setShowResults12(false)} />
          ) : null}
          {showResults13 ? (
            <TableTennis
              changeState={(showResult13) => setShowResults13(false)}
            />
          ) : null}
          {showResults14 ? (
            <Taekwondo
              changeState={(showResult14) => setShowResults14(false)}
            />
          ) : null}
          {showResults15 ? (
            <Tennis changeState={(showResult15) => setShowResults15(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding1} ${styles.shake}`}
            id="0"
          ></div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={volleyball}
              alt=""
              onClick={onClick16}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={weightlifting}
              alt=""
              onClick={onClick17}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding1} ${styles.shake}`}
            id="3"
          ></div>

          {showResults16 ? (
            <Volleyball
              changeState={(showResult0) => setShowResults16(false)}
            />
          ) : null}
          {showResults17 ? (
            <WeightLifting
              changeState={(showResult1) => setShowResults17(false)}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Events;
