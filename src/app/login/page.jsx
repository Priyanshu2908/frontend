import React from 'react'
import classes from './login.module.css'

const LoginPage = () => {
  return (
    <div>
        <h1 className='text-center font-bold my-1 text-3xl mt-10'>Login Page</h1>
        <button className='global-btn'>Login Button</button>
        <button className={classes.localBtn}>Local button</button>
    </div>
  )
}

export default LoginPage;