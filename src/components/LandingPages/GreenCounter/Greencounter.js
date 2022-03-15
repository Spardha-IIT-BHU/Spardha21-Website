import React from 'react';
import styles from './Greencounter.module.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Greencounter = () => {
  return (
    <div
      className={`${styles.ftco_counter} ${styles.ftco_bg_dark} ${styles.img}`}
      id={`${styles.section_counter}`}
    >
      <div style={{ background: '#7ed321', opacity: '0.8' }}>
        <div className={`${styles.overlay}`}></div>
        <div class={`${styles.container_gc}`} style={{ margin: 'auto' }}>
          <div class={`${styles.row_gc}`}>
            <div class={`${styles.col_md_12}`}>
              <div class={`${styles.row_gc}`}>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={45000}
                                duration={2.5}
                                separator={','}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        FOOTFALL
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={250}
                                duration={2.5}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        REG. COLLEGES
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={21}
                                duration={2.5}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        EVENTS
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class={`${styles.col_md_6} ${styles.col_lg_3} ${styles.counter_wrap} `}
                >
                  <div class={`${styles.block_18}`}>
                    <div class={`${styles.circle}`}>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div style={{ height: '50px' }}>
                            {isVisible ? (
                              <CountUp
                                end={475000}
                                duration={2.5}
                                separator={','}
                                className={`${styles.numbergc}`}
                              />
                            ) : null}
                          </div>
                        )}
                      </VisibilitySensor>
                      <span style={{ fontSize: '22px', textSpacing: '1px' }}>
                        REACH
                      </span>
                    </div>
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

export default Greencounter;
