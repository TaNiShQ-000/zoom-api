// client/src/components/CreateZoomSessionForm.js
import React, { useState } from 'react';
import axios from "axios"
import JoinMeeting from "./joinMeeting"


const CreateZoomSession = ({ accessToken }) => {
  const [joinUrl, setjoinUrl] = useState('');
  const accessT = accessToken
  const create_meet = (agenda, topic, duration, scheduleFor, password) => {
    try {
      // Make an Axios request using the form data
      axios.post('http://localhost:3001/create-session', {
        agenda,
        topic,
        duration,
        scheduleFor,
        password,
        accessT
      }).then((response) => {
        // Handle the response as needed
        setjoinUrl(response.data.join_url)
        console.log("got the join URL")
        console.log(joinUrl);
      });
    } catch (error) {
      // Handle errors
      console.error('Error creating Zoom session:', error);
    }
  };

  if (joinUrl) {
    return <JoinMeeting joinUrl={joinUrl} />;
  }else{
  return (
    <div className="container mt-5 p-4 rounded" style={{ backgroundColor: '#f8f9fa', color: '#495057', maxWidth: '400px', margin: 'auto' }}>
  <h1 className="mb-4 text-center" style={{ color: '#007bff' }}>Create a Zoom Session</h1>

  <div className="mb-3">
    <label htmlFor="agenda" className="form-label">
      Agenda:
      <input type="text" className="form-control" id="agenda" />
    </label>
  </div>

  <div className="mb-3">
    <label htmlFor="topic" className="form-label">
      Topic:
      <input type="text" className="form-control" id="topic" />
    </label>
  </div>

  <div className="mb-3">
    <label htmlFor="duration" className="form-label">
      Duration (minutes):
      <input type="number" className="form-control" id="duration" />
    </label>
  </div>

  <div className="mb-3">
    <label htmlFor="scheduleFor" className="form-label">
      Schedule For:
      <input type="email" className="form-control" id="scheduleFor" />
    </label>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password:
      <input type="password" className="form-control" id="password" />
    </label>
  </div>
npm run deploy

  <button
    onClick={() => {
      const agenda = document.getElementById('agenda').value;
      const topic = document.getElementById('topic').value;
      const duration = document.getElementById('duration').value;
      const scheduleFor = document.getElementById('scheduleFor').value;
      const password = document.getElementById('password').value;

      create_meet(agenda, topic, duration, scheduleFor, password);
    }}
    className="btn btn-primary"
    style={{ width: '100%' }}
  >
    Create Zoom Session
  </button>
</div>

  );
  }
};

export default CreateZoomSession;
