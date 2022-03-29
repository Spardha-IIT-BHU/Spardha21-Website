import React from 'react';
import styles from './Footer.module.css';
import {
  FaMapMarker,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="contactus">
      <footer
        className={`${styles.ftco_footer} ${styles.ftco_section} ${styles.img}`}
      >
        <div className={`${styles.container}`}>
          <li className={`${styles.row}`}>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  ADDRESS
                </h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  {/* <div> */}
                  <span>
                    <FaMapMarker className={`${styles.icons}`}></FaMapMarker>
                    <div
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      Spardha Office, IIT(BHU) Gymkhana
                    </div>
                  </span>
                  <span
                    className={`${styles.text}`}
                    style={{ wordSpacing: '0.4em' }}
                  >
                    &emsp; IIT(BHU) Varanasi - 221005
                  </span>
                  {/* </div> */}

                  <br />

                  <div>
                    <span>
                      <FaPhoneAlt className={`${styles.icons}`}></FaPhoneAlt>
                      <span
                        className={`${styles.text}`}
                        style={{ wordSpacing: '0.4em' }}
                      >
                        Registrations&nbsp;&amp;&nbsp;Enquiry:
                      </span>
                    </span>

                    <br />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+919548980225"
                      >
                        &emsp;&emsp;+91&#8209;9548980225
                      </a>
                    </span>

                    <div>{'\n'}</div>

                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+919829634035"
                      >
                        &emsp;&emsp;+91&#8209;9829634035
                      </a>
                    </span>

                    <div>{'\n'}</div>

                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917683038420"
                      >
                        &emsp;&emsp;+91&#8209;7683038420
                      </a>
                    </span>

                    <div>{'\n'}</div>

                    {/* <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917238856930"
                      >
                        &emsp;&emsp;+91&#8209;7238856930
                      </a>
                    </span> */}
                    <br />

                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      &emsp;&nbsp;Branding&nbsp;&amp;&nbsp;Communications:
                    </span>

                    <div />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+919130170259"
                      >
                        &emsp;&emsp;+91&#8209;9130170259
                      </a>
                    </span>
                    <br />
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      &emsp;&nbsp;Events:
                    </span>

                    <div />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+917995167691"
                      >
                        &emsp;&emsp;+91&#8209;7995167691
                      </a>
                    </span>
                    {/* </div> */}
                  </div>

                  <br />

                  <div>
                    <span>
                      <FaEnvelope className={`${styles.icons}`}></FaEnvelope>
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="mailto: convener.spardha@iitbhu.ac.in"
                      >
                        convener.spardha@iitbhu.ac.in
                      </a>
                    </span>
                  </div>
                </div>

                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  FOLLOW US
                </h2>
                <div
                  className={`${styles.ftco_footer_social} ${
                    styles.list_unstyled
                  } ${styles.float_md_left} ${styles.float_lft} ${
                    styles.mt - 2
                  }`}
                >
                  <span>
                    <a
                      href="https://www.facebook.com/Spardha.IIT.BHU/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className={`${styles.icons_lower}`} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/company/spardha/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className={`${styles.icons_lower}`} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/spardha_iitbhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className={`${styles.icons_lower}`} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>MAP</h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  <iframe
                    title="google_map"
                    className={`${styles.gmap}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3239763295937!2d82.98692631503495!3d25.259684835361114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33d4b53c5a85%3A0x5e36cad9ac063d23!2sIIT+Gymkhana!5e0!3m2!1sen!2s!4v1502537110030"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </li>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
