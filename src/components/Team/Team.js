import React from 'react'
import styles from "./Team.module.css"

function Team() {
  return (
      <div className={styles["wrap-container"]}>
          <div className='container'>
            <div class="row justify-content-center mb-5">
                <div class="col-md-7 text-center">
                    <h3 class="subheading" style={{color: "#6db549"}}>Backbone Of The Event</h3>
                    <h2 class="mb-1 text-white">Our Team</h2>
                </div>
            </div>
          </div>
      </div>
  )
}

export default Team