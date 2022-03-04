import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./Team.module.css";

function Team() {
  return (
    <section id="team" className={styles["ftco-section"]}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col className="text-center col-md-7">
            <h3 className={styles.heading}>Backbone of the event</h3>
            <h2 className={styles.subheading}>Our Team</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
