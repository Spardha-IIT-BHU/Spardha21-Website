import React from "react";
import styles from "./Member.module.css";

function Member({ post, name, phone, id, mail }) {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-4 col-6 px-1 py-1">
        <div className={`${styles.staff} justify-content-center`}>
          <img src="/images/logo/spardha-logo-black.png" alt={`${name}`} className={`${styles.img} mb-2 ms-auto`} width="200px" height="200px"/>
          <div className="info text-center">
            <h3 className={`p-0 m-0 text-uppercase ${styles.head}`}>
              {post && <><b>{post}</b> <br /></> }
              {name}
            </h3>
            <span className="position p-0 m-0">
              <a href={`tel:${phone}`} className={styles.links}>
                +91&#8209;{phone}
              </a>
            </span>
            <div>
              <a
                href={id}
                className={styles.links}
                target="_blank"
                rel="noreferrer"
              >{`\uf09a`}</a>
              <a
                href={`mailto:${mail}`}
                className={styles.links}
                target="_blank"
                rel="noreferrer"
              >{`\uf0e0`}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
