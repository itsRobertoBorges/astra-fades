import React from 'react';
import '../WorkingHours.css'; // Import the CSS file for styling

const WorkingHours = () => {

    const buttonStyle = {
        textAlign: 'center', // Center the text inside the button
        marginTop: '20px', // Add some spacing from the paragraph
      };

  return (
    <div className='body-bg text-white text-center pt-5 display-2'>
      Working Hours
      <div className='working-hours-menu'>
        <div className='working-day working-hours-box'>
          <div className='day'>Sunday</div>
          <div className='hours'>11:00 AM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
          <div className='day'>Monday</div>
          <div className='hours'>11:00 AM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
            <div className='day'>Tuesday</div>
            <div className='hours'>11:00 AM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
            <div className='day'>Wednesday</div>
            <div className='hours'>11:00AM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
            <div className='day'>Thursday</div>
            <div className='hours'>11:00AM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
            <div className='day'>Friday</div>
            <div className='hours'>3:30PM - 7:00 PM</div>
        </div>
        <div className='working-day working-hours-box'>
            <div className='day'>Saturday</div>
            <div className='hours'>11:00AM - 6:00 PM</div>
        </div>
      </div>
      <div className='pt-5' style={buttonStyle}>
            <button className='display-3 mb-3 shadow-lg~' style={{ color: 'black' }}>Book now</button>
        </div>
    </div>
  );
};

export default WorkingHours;
