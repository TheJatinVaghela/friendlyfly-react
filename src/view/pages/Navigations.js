import React from 'react'
import PropTypes from 'prop-types'

function Navigations(props) {
  return (
    <>
      {topNav()}

    </>
  )
}

Navigations.propTypes = {}

export default Navigations

function topNav(params) {
  return (
    <nav className='topNav'>
      <div className='top-first'>
        <a className='a-img'>
          <img src="https://themes.pixelstrap.com/friendbook/assets/images/icon/logo.png" alt="logo" class="img-fluid blur-up lazyloaded" />
        </a>
        <div className='top-first-input-wrapper'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type='text' placeholder='search' />
        </div>
        <a className="a-svg" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home icon-light stroke-width-3 iw-16 ih-16"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </a>
        <a class="a-svg" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus icon-light stroke-width-3 iw-16 ih-16"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </a>
      </div>
      <div className='top-second'>
        <div className='totalPost'>
          <span>4556</span><span>Total Posts</span>
        </div>
        <div className='totalFriends'>
          <span>2456</span><span>Total Friends</span>
        </div>
        <a class="a-svg userchat" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle icon-light stroke-width-3 iw-16 ih-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span class="count success">2</span>
        </a>
        <a class="a-svg daynight" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon icon-light stroke-width-3 iw-16 ih-16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </a>
        <a class="a-svg hamburgerMenu" href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid icon-light stroke-width-3 iw-16 ih-16"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </a>
        <a class="a-svg usernotification" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle icon-light stroke-width-3 iw-16 ih-16"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path></svg><span class="count success">2</span>
        </a>
        <div className='userprofile'>
          <a className='a-img userProfilePic-wrapper'>
            <img className='userProfilePic' src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/1.jpg"/>
          </a>
          <h3 className='userProfileName-wrapper'>
            <span className='userProfileName'>Name</span>
            <span className='userProfileStatus'>active now</span>
          </h3>
        </div>
      </div>
    </nav>
  )
}
