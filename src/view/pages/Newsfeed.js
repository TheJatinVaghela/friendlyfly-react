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
            <Stories/>
            <Stories/>
            <Stories/>
            <Stories/>
            <Stories/>
            <Stories/>
            <Stories/>
            <Stories/>
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
    <div className='otherUserStorie-1 story-style' onDragCapture={(e)=>console.log(e)}>
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
      <div className='Populer_sugggetion'>
          <div className='Populer_sugggetion_1'>
          <a href="#" class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw icon icon-theme stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </a>
          <a href="#" class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun icon icon-theme stroke-width-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
          </a>
          </div>
          <div className='Populer_sugggetion_2'>
            <div className='img_wrapper'
              // <img src="" alt="👥"/>
              style={{
                "background": "url(https://themes.pixelstrap.com/friendbook/assets/images/story/8.jpg)",
                "background-size": "cover",
                "background-position": "center",
                "background-repeat":"no-repeat"
              }}
            >
            </div>
            <h2>Kelin Jasen ❤</h2>
            <span>kelin.jasen156@gmail.com</span>
          </div>
          <div className='Populer_sugggetion_3'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='Populer_sugggetion_4'>
            <div className='following Populer_sugggetion_4_childs'>
              <h2>100</h2>
              <span>following</span>
            </div>
            <div className='likes Populer_sugggetion_4_childs'>
              <h2>100</h2>
              <span>likes</span>
            </div>
            <div className='followers Populer_sugggetion_4_childs'>
              <h2>100</h2>
              <span>followers</span>
            </div>
          </div>
          <div className='Populer_sugggetion_5'></div>
      </div>

      <div className='friend_suggetion'>

      </div>

      <div className='liked_pages'>

      </div>
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
