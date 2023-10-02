import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Signup from '../signin_signup/Signup'
import PropTypes from 'prop-types'

function main(props) {
  return (
    <>
        <Signup/>
        <Outlet />
    </>
  )
}

main.propTypes = {}

export default main
