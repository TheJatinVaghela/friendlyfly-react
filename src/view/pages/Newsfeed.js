import React from 'react'
import PropTypes from 'prop-types'

let isDown = false;
let startX;
let scrollLeft;

function slider_mousedown(e){
  let slider = e.target;
   isDown = true;
  //  slider.classList.add('active');
  //  console.log(slider);
   startX = e.pageX - slider.offsetLeft;
   scrollLeft = slider.scrollLeft;
    // console.log("erreerre", scrollLeft)
}
function slider_mousemove(e){
  let slider = e.target;
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
  
  //  console.log('sdsd', walk)
  //  console.log(slider.scrollLeft)
}
function slider_mouseup(e){
  let slider = e.target;
  isDown = false;
  slider.classList.remove('active');
}
function slider_mouseleave(e){
  let slider = e.target;
  isDown = false;
  slider.classList.remove('active');
}
function Newsfeed(props) {

  return (
    <section className='newsfeed-section' 
      onMouseDown={(e)=>slider_mousedown(e)}
      onMouseMove={(e)=>slider_mousemove(e)}
      onMouseUp={(e)=>slider_mouseup(e)}
      onMouseLeave={(e)=>slider_mouseleave(e)}
    >
        <section className='stories' >
            <div className='add-story story-style'>
                <div className='addStory-wrapper story-wrapper-style'>
                    <div>
                        <img src="https://themes.pixelstrap.com/friendbook/assets/images/icon/plus.png"/>
                    </div>
                    <span className='text-black'>Add Stories</span>
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
        <span className='text-prime-white' onMouseDown={(e)=>{ return false}} onSelect={(e)=>{ return false}}>User Name</span>
        <span className='text-prime-white' onMouseDown={(e)=>{ return false}} onSelect={(e)=>{ return false}}>Active Now</span>
      </div>
    </div> 
  );
}
function NewsfeedMainLeft(props) {
  return (
    <div className='newsfeed-main-left'>
      <div className='Populer_sugggetion light'>
          <div className='Populer_sugggetion_1'>
          <a href="#" className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-rotate-cw icon icon-theme stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </a>
          <a href="#" className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun icon icon-theme stroke-width-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
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
            <h2 className='text-black'>Kelin Jasen ❤</h2>
            <span className='text-black'>kelin.jasen156@gmail.com</span>
          </div>
          <div className='Populer_sugggetion_3'>
            <p className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='Populer_sugggetion_4'>
            <div className='following Populer_sugggetion_4_childs'>
              <h2 className='text-black'>100</h2>
              <span className='text-black'>following</span>
            </div>
            <div className='likes Populer_sugggetion_4_childs'>
              <h2 className="text-black">100</h2>
              <span className="text-black">likes</span>
            </div>
            <div className='followers Populer_sugggetion_4_childs'>
              <h2 className="text-black">100</h2>
              <span className="text-black">followers</span>
            </div>
          </div>
          <div className='Populer_sugggetion_5'>
            <button className='bg-prime-blue text-prime-white'>View Profile</button>
          </div>
      </div>

      <div className='friend_suggetion light'>
        <div className='friend_suggetion_1'>
          <h2 className="text-black">Friend Suggestion</h2>
          <a href="#" className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-rotate-cw icon icon-theme stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </a>
          <a href="#" className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun icon icon-theme stroke-width-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
          </a>
        </div>
        <div className='friend_suggetion_2'>
          <Stories/>
          <Stories/>
          <Stories/>
          <Stories/>
        </div>
      </div>

      <div className='liked_pages light'>
        <div className='liked_pages_1'>
            <h2 className="text-black">liked Suggestion</h2>
            <a href="#" className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-rotate-cw icon icon-theme stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            </a>
            <a href="#" className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun icon icon-theme stroke-width-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
            </a>
        </div>
        <div className='liked_pages_2 likedPage_1'>
          <div className='likedPage_2_1'
            style={{
              "background-image": "url(https://themes.pixelstrap.com/friendbook/assets/images/pages-logo/1.jpg)",
              "background-size": "cover",
              "background-position": "center center",
              "background-repeat":" no-repeat",
              "display": "flex",
              "width": "50px",
              "height": "50px",
              "border-radius":"100%",
              "border": "2px solid black"
            }}
          ></div>
          <div className='likedPage_2_2'>
            <h2 className="text-black">Chrimson Agency</h2>
            <span className="text-black">Clothing Store</span>
          </div>
          <div className='likedPage_2_3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star icon-dark iw-14 ih-14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function NewsfeedMainMin(props) {
  function clickGradient(colorName){

  }

  return (
    <div className='newsfeed-main-mid'>
      <div className='create-post light'>
          <div className='createPost-1'>
            <h2 className='text-black'>Create Post</h2>
            <span class="visibility-dropdown">
              <select class="light text-black">
                  <option className='text-black'>Public</option>
                  <option className='text-black'>Friedns</option>  
                  <option className='text-black'>Friedns Except</option>
                  <option className='text-black'>Spacefic Friends</option>
                  <option className='text-black'>Only me</option>
              </select>
            </span>
            <span className='text-black'>Go Live</span>
          </div>
        <div className='createPost-2'>
          <input type='text' className='user-input' placeholder='Write Something Here'/>
          <input type='submit' className='submit-btn' value="Post"/>
        </div>
        <div className='createPost-3'>
          <ul class="gradient-bg">
            <li onClick={()=>clickGradient('gr-1')} class="gr-1"></li>
            <li onClick={()=>clickGradient('gr-2')} class="gr-2"></li>
            <li onClick={()=>clickGradient('gr-3')} class="gr-3"></li>
            <li onClick={()=>clickGradient('gr-4')} class="gr-4"></li>
            <li onClick={()=>clickGradient('gr-5')} class="gr-5"></li>
            <li onClick={()=>clickGradient('gr-6')} class="gr-6"></li>
            <li onClick={()=>clickGradient('gr-7')} class="gr-7"></li>
            <li onClick={()=>clickGradient('gr-8')} class="gr-8"></li>
            <li onClick={()=>clickGradient('gr-9')} class="gr-9"></li>
            <li onClick={()=>clickGradient('gr-10')} class="gr-10"></li>
            <li onClick={()=>clickGradient('gr-11')} class="gr-11"></li>
            <li onClick={()=>clickGradient('gr-12')} class="gr-12"></li>
            <li onClick={()=>clickGradient('gr-13')} class="gr-13"></li>
            <li onClick={()=>clickGradient('gr-14')} class="gr-14"></li>
            <li onClick={()=>clickGradient('gr-15')} class="gr-15"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function NewsfeedMainRight(props) {
  return(
    <div className='newsfeed-main-right'>
        <div className="events light"
          style={{
            "background-image":"url(https://themes.pixelstrap.com/friendbook/assets/images/birthday-bg.jpg)"
          }}
        >
          <div className='events_1'>
            <div className="Text-wrapper">
              <h2 className='text-prime-white'>birthday !!!!</h2>
              <p className='text-prime-white'>today your collge friend's birthday</p>
            </div>
            <a href="#" className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-rotate-cw icon icon-theme stroke-width-3 iw-11 ih-11"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            </a>
            <a href="#" className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun icon icon-theme stroke-width-3 iw-11 ih-11"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> 
            </a>
          </div>
          <div className="events_2 image-section">
            <div className="icon">
                <img src="https://themes.pixelstrap.com/friendbook/assets/images/icon/cake.png" className="img-fluid blur-up lazyloaded" alt="cake"/>
            </div>
            <div className="center-profile bg-size blur-up lazyloaded">
                <img src="https://themes.pixelstrap.com/friendbook/assets/images/user-sm/4.jpg" className="img-fluid blur-up lazyload bg-img" alt="user" />
            </div>
            <div className="icon">
                <h5 className='text-prime-white'>20+</h5>
            </div>
          </div>
          <div className="events_3 details">
            <div className='Text-wrapper'>
              <h3 className='text-prime-white'>sufiya elija</h3>
              <h6 className='text-prime-white'>glasgow, scotland</h6>
            </div>
            <p className='text-prime-white'>Lorem 5th Sept 2019 dummy text of the printing and typesetting industry.</p>
            <form>
                <input type="text" placeholder="wish birthday to your friend" className="form-control" disabled/>
                <button className="bg-prime-blue text-prime-white" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right icon-light icon stroke-width-3 iw-13 ih-13"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </form>
          </div>                      
        </div>
    </div>
  )
}


export default Newsfeed 
