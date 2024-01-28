// JoinMeeting.js
import React from 'react';

const JoinMeeting = ({ joinUrl }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
    <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Join the Meeting</h2>
    <p style={{ fontSize: '18px', marginBottom: '15px' }}>Click the button below to join the Zoom meeting:</p>
    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{joinUrl}</p>
    <a href={joinUrl} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-primary" style={{ borderRadius: '8px', fontSize: '16px' }}>Join Meeting</button>
    </a>
  </div>
  );
};

export default JoinMeeting;
