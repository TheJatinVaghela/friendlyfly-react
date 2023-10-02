import React from 'react'
import PropTypes from 'prop-types'

function commingsoon(props) {

    // Set the date and time for the countdown (48 hours from now)
    const countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 48);

    // Update the countdown every second
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "The event has started!";// 24//
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 56)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Format the countdown time as "00:00:00"
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            countdownElement.innerHTML = formattedTime;
        }
    }

    // Initial call to update the countdown
    updateCountdown();
  return (
    <>

    <div className="bg"></div>
    <div className="wrapper">
        <h3>Our website is</h3>
        <h1>Coming Soon</h1> <br/>
        <div id="countdown"></div>
    </div>

    </>
  )
}

commingsoon.propTypes = {}

export default commingsoon
