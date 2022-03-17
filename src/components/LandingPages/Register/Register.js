import React from 'react'
import { Outlet } from 'react-router'
import styles from "./Register.module.css"

function Register() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Register