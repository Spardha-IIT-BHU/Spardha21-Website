import React from "react";
import "./About.css";
import trophy from "./trophy.png";
import newspaper from "./newspaper.png";
import accessory from "./accessory.png";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <section id="about" className="ftco-section">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h3
                className="subheading-mt-5 pt-5"
                style={{ color: "#6db549", fontSize: "2em" }}
              >
                WHAT ARE WE
              </h3>
              <h2 className="mb-1" style={{ color: "white", fontSize: "3em" }}>
                About Us
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="block-7">
                <div className="text-justify">
                  <p
                    styel={{
                      fontFamily: "Open Sans",
                      fontSize: "16px",
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

            <div className="col-md-4">
              <div className="block-7">
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
                    className="text-wrap"
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
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="block-7">
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
                    className="text-wrap"
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

            <div className="col-md-4">
              <div className="block-7">
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
                    className="text-wrap"
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
    </div>
  );
};

export default About;
