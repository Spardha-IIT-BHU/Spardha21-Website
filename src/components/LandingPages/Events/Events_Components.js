import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';

const Athletics = (props) => {
  return (
    <div>
      <div className="row">
        <div
          className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
        >
          <button
            className={`${styles.fa} ${styles.fa_times}`}
            id="0x"
            onClick={() => props.changeState(false)}
          >
            <FaTimes />
          </button>
          <div
            className="row"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.rule_box}`}>
                  <div className={`${styles.a_rule}`}>
                    <div className={`${styles.image}`}>
                      <img
                        className={`${styles.img_responsive}`}
                        src={rules}
                        alt="img"
                      />
                    </div>
                    <div className={`${styles.info} ${styles.rule}`}>
                      <h4> Rules </h4>
                      <p>Coming Soon</p>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.winner_box} ${styles.info}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={trophy}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Athletics</h4>
                    <p>
                      Coming Soon
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.contact_box}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={contacts}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Contacts</h4>
                    <p>
                      Coming Soon
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badminton = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Badminton</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basketball = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Basketball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boxing = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Boxing</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chess = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Chess</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cricket = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cricket</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cycling = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cycling</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Football = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Football</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Handball = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Handball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hockey = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Hockey</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kabbadi = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kabaddi</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Khokho = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kho Kho</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Squash = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Squash</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableTennis = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Table Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Taekwondo = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Taekwondo</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tennis = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Volleyball = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Volleyball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeightLifting = (props) => {
  return (
    <div className="row">
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <p>Coming Soon</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Weight Lifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
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
};
