import React,{useState,useEffect} from "react";
import styles from "./About.module.css";
import Greencounter from "../GreenCounter/Greencounter"
import trophy from "./trophy.png";
import newspaper from "./newspaper.png";
import accessory from "./accessory.png";
import Preloader from "../Preloader/Preloader";

const About = () => {
  const [checkabout,setCheckabout] = useState(true);

    useEffect(()=>{
        // console.log("Sponsors");
        setTimeout(()=>{
            setCheckabout(false)
        },2000)
    },[])

  return (
    <>
    {checkabout ? <Preloader/> :
    <div>
      <section id={styles["about"]} className={styles["ftco-section"]}>
        <div className={styles["container"]}>
          <div
            className={ `${styles.row} ${styles.justify_content_center} ${styles.align_items_center} ${styles.mb-5} ${styles.pb-3}`}
          >
            <div
              className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
            >
              <h3
                className={`${styles.subheading_mt-5} ${styles.pt-5}`}
                style={{
                  color: "#6db549",
                  fontSize: "2em",
                  fontFamily: "League Spartan",
                  marginTop: "2rem",
                }}
              >
                WHAT ARE WE
              </h3>
              <h2
                className={styles["mb-1"]}
                style={{
                  color: "white",
                  fontSize: "3.5em",
                  fontfamily: "League partan",
                  fontWeight: "bold",
                }}
              >
                ABOUT US
              </h2>
            </div>
          </div>

          <div className={styles["row"]}>
            <div className={styles["col-md-12"]}>
              <div className={styles["block-7"]}>
                <div className={styles["text-justify"]}>
                  <p
                    style={{
                      fontFamily: "Open Sans",
                      fontSize: "16.5px",
                      lineHeight: "1.8",
                      fontWeight: "400",
                      color: "#808080",
                    }}
                  >
                    Spardha is the annual sports festival of IIT (BHU),
                    Varanasi. In its glorious history of over 32 years, Spardha
                    has grown to become the largest and one of the most awaited
                    sports festival of northern India where athletic competition
                    is drawn from throughout the country. Each year, over a
                    thousand participants compete in an array of sports like
                    hockey, basketball, cricket, boxing, tennis and many more,
                    creating a stunning spectacle of exceptional fervidness in
                    athletic talent. The event, embraced by one of the best
                    gatherings of celebrated sports personalities and spirited
                    audience, has always enthused a zest for continuously
                    scaling new zeniths in the pursuit of excellence and
                    vibrancy among one and all. At present, Spardha has a team
                    of over 500 and is also associated with numerous renowned
                    firms and sports organizations. These exhilarating days have
                    many resounding experiences for participants and supporters
                    alike, creating a lifetime of memories. Gear up yourself to
                    witness the thrilling and frolicsome SPARDHA.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["col-md-4"]}>
              <div className={styles["block-7"]}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={trophy}
                    alt="/"
                    style={{
                      width: "20%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h3
                    className={styles["text-wrap"]}
                    style={{
                      fontSize: "22px",
                      color: "#000",
                      lineHeight: "1.4",
                      fontWeight: "bold",
                    }}
                  >
                    Hype&nbsp;Around Spardha
                  </h3>
                  <p>
                    For starters, 2021 will witness the 36th edition of Spardha,
                    a festival which has grown from strength to strength ever
                    since its inception. After all these successful editions,
                    Spardha, today stands as the largest inter-collegiate
                    sporting event of India.
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["col-md-4"]}>
              <div className={styles["block-7"]}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={newspaper}
                    alt="/"
                    style={{
                      width: "20%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h3
                    className={styles["text-wrap"]}
                    style={{
                      fontSize: "22px",
                      color: "#000",
                      lineHeight: "1.4",
                      fontWeight: "bold",
                    }}
                  >
                    The&nbsp;Talk&nbsp;Of The&nbsp;Town
                  </h3>
                  <p>
                    Each&nbsp;year&nbsp;thousands of participants at Spardha put
                    their hard work to test in a vast array of sports. If this
                    doesn't catch your attention, the bustle of 35,000 people on
                    the campus streets surely will. Its them who make Spardha
                    the festival it is, a celebration of four long days.
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["col-md-4"]}>
              <div className={styles["block-7"]}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={accessory}
                    alt="/"
                    style={{
                      width: "20%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h3
                    className={styles["text-wrap"]}
                    style={{
                      fontSize: "22px",
                      color: "#000",
                      lineHeight: "1.4",
                      fontWeight: "bold",
                    }}
                  >
                    What&nbsp;You Take Back
                  </h3>
                  <p>
                    It's about making memories, and living them. Every time you
                    win a race, or lose your voice cheering for your team, it
                    adds up to your moments. We at Spardha make sure that you
                    get an experience worth cherishing and some beautiful
                    memories to treasure forever!
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Greencounter />
    </div>
  }
    </>
  );
};

export default About;
