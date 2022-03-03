import React from "react";
import styles from "./About.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div
      className={styles.bgImage}
      style={{ backgroundImage: "url(./images/Stud_BG.jpg)" }}
    >
      <div class="container">
        <div class="row justify-content-center align-items-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h3
              class="subheading mt-5 pt-5"
              style={{
                color: "#6db549",
                fontSize: "2em",
                fontFamily: "League Spartan",
                fontWeight: "bold",
              }}
            >
              WHAT ARE WE
            </h3>
            <h2
              class="mb-1"
              style={{
                color: "white",
                fontSize: "4rem",
                fontFamily: "League Spartan",
                fontWeight: "bold",
              }}
            >
              ABOUT US
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 ftco-animate">
            <div
              class="block-7"
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <div
                class="text-justify"
                style={{ color: "#808080", wordSpacing: "5px" }}
              >
                <p>
                  Spardha is the annual sports festival of IIT (BHU), Varanasi.
                  In its glorious history of over 30 years, Spardha has grown to
                  become the largest and one of the most awaited sports festival
                  of northern India where athletic competition is drawn from
                  throughout the country. Each year, over a thousand
                  participants compete in an array of sports like hockey,
                  basketball, cricket, boxing, tennis and many more, creating a
                  stunning spectacle of exceptional fervidness in athletic
                  talent. The event, embraced by one of the best gatherings of
                  celebrated sports personalities and spirited audience, has
                  always enthused a zest for continuously scaling new zeniths in
                  the pursuit of excellence and vibrancy among one and all. At
                  present, Spardha has a team of over 500 and is also associated
                  with numerous renowned firms and sports organizations. These
                  exhilarating days have many resounding experiences for
                  participants and supporters alike, creating a lifetime of
                  memories. Gear up yourself to witness the thrilling and
                  frolicsome SPARDHA.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div
              class="block-7"
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                marginBottom: "10px",
                marginTop: "10px",
                height: "auto",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="images/icons/trophy.png"
                  alt="/"
                  style={{
                    width: "20%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h3
                  class="text-wrap"
                  style={{
                    fontSize: "25px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Hype&nbsp;Around Spardha
                </h3>
                <p style={{ color: "#808080", wordSpacing: "5px" }}>
                  For starters, 2022 will witness the 36th edition of Spardha, a
                  festival which has grown from strength to strength ever since
                  its inception. After all these successful editions, Spardha,
                  today stands as the largest inter-collegiate sporting event of
                  India.<br></br>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div
              class="block-7"
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                marginBottom: "10px",
                marginTop: "10px",
                height: "auto",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="images/icons/newspaper.png"
                  alt="/"
                  style={{
                    width: "20%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h3
                  class="text-wrap"
                  style={{
                    fontSize: "25px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  The&nbsp;Talk&nbsp;Of The&nbsp;Town
                </h3>
                <p style={{ color: "#808080", wordSpacing: "5px" }}>
                  Each&nbsp;year&nbsp;thousands of participants at Spardha put
                  their hard work to test in a vast array of sports. If this
                  doesn't catch your attention, the bustle of 35,000 people on
                  the campus streets surely will. Its them who make Spardha the
                  festival it is, a celebration of four long days.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div
              class="block-7"
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                marginBottom: "10px",
                marginTop: "10px",
                height: "auto",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="images/icons/accessory.png"
                  alt="/"
                  style={{
                    width: "20%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h3
                  class="text-wrap"
                  style={{
                    fontSize: "25px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  What&nbsp;You Take Back
                </h3>
                <p style={{ color: "#808080", wordSpacing: "5px" }}>
                  It's about making memories, and living them. Every time you
                  win a race, or lose your voice cheering for your team, it adds
                  up to your moments. We at Spardha make sure that you get an
                  experience worth cherishing and some beautiful memories to
                  treasure forever!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
