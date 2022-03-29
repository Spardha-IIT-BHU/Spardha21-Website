import React from 'react';
import styles from './CamAmb.module.css';
import gain from './gain.png';
import boy from './boy.png';
import incentive from './incentive.png';
import eligible from './eligible.png';
import question from './question.png';

const CamAmb = () => {
  return (
    <div id="ca">
      <section
        className={`${styles.ftco_section_services}`}
        id={`${styles.ca}`}
      >
        <div className={`${styles.container_ca}`}>
          <div className={`${styles.row_caup}`}>
            <div className={`${styles.col_md_7} ${styles.heading_section}`}>
              <h3 className={`${styles.subheading}`}>&nbsp;</h3>
              <h2
                className={`${styles.mb_1} ${styles.ca_desktop}`}
                style={{ color: 'white' }}
              >
                Campus Ambassador
              </h2>
              <h2
                className={`${styles.mb_1} ${styles.ca_desktop}`}
                style={{ color: 'white' }}
              >
                Program
              </h2>
              <h2
                className={`${styles.mb_1} ${styles.ca_mobile}`}
                style={{ color: 'white' }}
              >
                Campus
              </h2>
              <h2
                className={`${styles.mb_1} ${styles.ca_mobile}`}
                style={{ color: 'white' }}
              >
                Ambassador
              </h2>
              <h2
                className={`${styles.mb_1} ${styles.ca_mobile}`}
                style={{ color: 'white' }}
              >
                Program
              </h2>
            </div>
          </div>
          <div className={`${styles.row_ca}`}>
            <div className={`${styles.col_md_4}`}>
              <div class={`${styles.block_7} ${styles.block1}`}>
                <div>
                  <h3 className={`${styles.ca_heading}`}>
                    About Campus Ambassador Program:{' '}
                  </h3>
                </div>
              </div>
            </div>
            <div className={`${styles.col_md_8}`}>
              <div
                className={`${styles.block_71} ${styles.block2}`}
                style={{ padding: '30px' }}
              >
                <div className={`${styles.text_justify}`}>
                  <p
                    style={{
                      color: '#808080',
                      fontSize: '18px',
                    }}
                  >
                    We at Spardha are looking for enthusiastic people to be an
                    integral part of the organizing team of Spardha'21. We
                    extend our welcome to all passionate individuals who would
                    be working together with us and leading the contingents
                    taking part in the festival from their respective colleges.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.col_md_6}`}>
              <div className={`${styles.block_71} ${styles.block3}`}>
                <div className={`${styles.text_justify}`}>
                  <h3 className={`${styles.ca_heading}`}>
                    <img src={gain} alt="" style={{ width: '3rem' }} />
                    <p
                      className={`${styles.ca_heading2}`}
                      style={{ marginLeft: '10px' }}
                    >
                      {' '}
                      What to gain?
                    </p>
                  </h3>
                  <p
                    style={{
                      color: '#808080',
                      fontSize: '18.5px',
                    }}
                  >
                    Success is achieved by building up upon small blocks of
                    trials. We provide you with an opportunity to expand your
                    connection circles by interacting with people from diverse
                    fields of various colleges across the country. It would be a
                    test of your managerial and leadership skills by being a
                    face of Spardha '21 in your college.&nbsp;
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.col_md_6}`}>
              <div
                className={`${styles.block_7} ${styles.block4}`}
                style={{ padding: '22px' }}
              >
                <div className={`${styles.text_justify}`}>
                  <h3 className={`${styles.ca_heading}`}>
                    <img
                      src={boy}
                      alt=""
                      style={{
                        width: '3rem',
                        paddingBottom: '8px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <p className={`${styles.ca_heading2}`}>
                      &ensp; Responsibilities
                    </p>
                  </h3>
                  <p
                    style={{
                      color: '#808080',
                      fontSize: '18px',
                    }}
                  >
                    <ol>
                      <li>
                        PUBLICIZE - The CA would be expected to publicize
                        Spardha'21 on all platforms, and means available.
                      </li>
                      <li>
                        COORDINATE - The applicant would be working in hand with
                        us to coordinate and lead their contingents.
                      </li>
                      <li>
                        BRAINSTORM - The applicant would be working with the
                        team to come up with fresh ideas together to make this
                        edition of Spardha splendorous.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.col_md_6}`}>
              <div className={`${styles.block_71} ${styles.block5}`}>
                <div className={`${styles.text_justify}`}>
                  <h3 className={`${styles.ca_heading}`}>
                    <img src={incentive} alt="" style={{ width: '3rem' }} />
                    <p
                      className={`${styles.ca_heading2}`}
                      style={{ marginTop: '5px' }}
                    >
                      &ensp; Incentives
                    </p>
                  </h3>
                  <p
                    style={{
                      color: '#808080',
                      fontSize: '18px',
                    }}
                  >
                    <ol>
                      <li>Exciting Goodies and &#8377;&nbsp;Prizes.</li>
                      <li>Certificate of Recognition.</li>
                      <li>
                        Indelible opportunity to meet the esteemed guests.
                      </li>
                      <li>Exclusive Spardha merchandise and goodies.</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.col_md_6}`}>
              <div className={`${styles.block_71} ${styles.block6}`}>
                <div className={`${styles.text_justify}`}>
                  <h3 className={`${styles.ca_heading}`}>
                    <img
                      src={eligible}
                      alt=""
                      style={{ width: '3rem', paddingBottom: '8px' }}
                    />
                    <p className={`${styles.ca_heading2}`}>
                      &ensp; Eligibility
                    </p>
                  </h3>
                  <p
                    style={{
                      color: '#808080',
                      fontSize: '18.5px',
                    }}
                  >
                    Applicants from all streams are welcome. Academic year is
                    not a restriction, anyone who possess the zeal and
                    dedication for Spardha'21 are eligible to apply.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
            <div className={`${styles.col_md_6}`}>
              <div className={`${styles.block_71}`} style={{ padding: '22px' }}>
                <div className={`${styles.text_justify}`}>
                  <h3 className={`${styles.ca_heading}`}>
                    <img
                      src={question}
                      alt=""
                      style={{ width: '3rem', paddingBottom: '15px' }}
                    />
                    <p className={`${styles.ca_heading2}`}>
                      &ensp; What Next ?{' '}
                    </p>
                  </h3>
                  <h4 style={{ textAlign: 'center' }}>
                    Fill out this form to grab this wonderful opportunity
                  </h4>
                  <div
                    className={`${styles.text_center}`}
                    style={{ marginTop: '2em' }}
                  >
                    <a
                      className="btn btn-success btn-xlg"
                      href="https://forms.gle/eUzW9kgVZ3JHAHpN6"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'white' }}
                    >
                      Register as a CA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CamAmb;
