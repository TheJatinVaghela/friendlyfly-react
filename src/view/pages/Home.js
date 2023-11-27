import React from 'react'
import PropTypes from 'prop-types'
import Navigations from "./Navigations";
import Newsfeed from './Newsfeed.js'
function Home() {


  return (
    <>
        <Navigations />
        <Newsfeed/>
    </>
  )
}

Home.propTypes = {

}

export default Home
