import React, { useState } from 'react';
import axios from "axios"
import JoinMeeting from "./joinMeeting"

const CreateZoomSession = ({ accessToken }) => {
  const [joinUrl, setjoinUrl] = useState('');
  const accessT = accessToken
  const create_meet = () => {
    try {
      axios.post('http://localhost:3001/create-session', {
        accessT
      }).then((response) => {
        setjoinUrl(response.data.join_url)
        console.log("got the join URL")
      });
    } catch (error) {
      console.error('Error creating Zoom session:', error);
    }
  };

  if (joinUrl) {
    return <JoinMeeting joinUrl={joinUrl} />;
  }else{
  return (
    <div className="container mt-5 p-4 rounded" style={{ backgroundColor: '#f8f9fa', color: '#495057', maxWidth: '400px', margin: 'auto' }}>
  <h1 className="mb-4 text-center" style={{ color: '#007bff' }}>Create an instant Zoom Session</h1>

  <button
    onClick={() => {create_meet()}}
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