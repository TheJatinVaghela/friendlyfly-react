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
            <div className='otherUserStorie-1 story-style'>
                <div className='otherUserStorie-1-wrapper story-wrapper-style'>
                    <img src=""/>
                </div>
            </div> 
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
