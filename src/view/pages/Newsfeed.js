import React from 'react'
import PropTypes from 'prop-types'

function Newsfeed(props) {

  return (
    <section className='newsfeed-section'>
        <section className='stories'>
            <div className='add-story story-style'>
                <div className='addStory-wrapper story-wrapper-style'>
                    <div>
                        <img src="https://themes.pixelstrap.com/friendbook/assets/images/icon/plus.png"/>
                    </div>
                    <span>Add Stories</span>
                </div>
            </div>
            <Stories/>
        </section>
        <section className='newsfeed-main'>
            <NewsfeedMainLeft/>

            <NewsfeedMainMin/>

            <NewsfeedMainRight/>
        </section>
    </section>
  )
}

Newsfeed.propTypes = {}

function Stories(params) {
  
  return(
    <div className='otherUserStorie-1 story-style'>
      <div className='followings-stories-overlay story-wrapper-style'
      style={{
        "background": "-webkit-gradient(linear, left bottom, left top, from(#e18d1e), to(rgba(0, 212, 255, 0)))", 
        "background": "linear-gradient(0deg, #e18d1e 0%, rgba(0, 212, 255, 0) 100%)"
      }}  
      >
      </div>
      <div className='otherUserStorie-1-wrapper story-wrapper-style followings-stories'
      style={{"background-image": "url(https://themes.pixelstrap.com/friendbook/assets/images/story/6.jpg)"}}>
        <span>User Name</span>
        <span>Active Now</span>
      </div>
    </div> 
  );
}
function NewsfeedMainLeft(props) {
  return (
    <div className='newsfeed-main-left'>
    </div>
  )
}

function NewsfeedMainMin(props) {
  return (
    <div className='newsfeed-main-mid'>
    </div>
  )
}

function NewsfeedMainRight(props) {
  return (
    <div className='newsfeed-main-right'>
    </div>
  )
}


export default Newsfeed 
