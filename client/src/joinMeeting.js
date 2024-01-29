import React, { useState } from 'react';


const JoinMeeting = ({ joinUrl }) => {
  const [Url, setUrl] = useState('');
  if (joinUrl) {
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
  } else {
    

  const handleJoinUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Join the Meeting</h2>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>Paste the URL and click the button below to join the Zoom meeting:</p>
      <input
        type="text"
        value={Url}
        onChange={handleJoinUrlChange}
        placeholder="Paste Zoom meeting URL"
        style={{ marginBottom: '15px', padding: '8px', fontSize: '16px' }}
      />
      <a href={Url} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary" style={{ borderRadius: '8px', fontSize: '16px' }}>Join Meeting</button>
      </a>
    </div>
  );
  }
};
// const ShareDetails = ({ url, pass, start,topic }) => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
//       <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Meeting Details</h2>
//       <p style={{ fontSize: '18px', marginBottom: '15px' }}>URL: {url}</p>
//       <p style={{ fontSize: '18px', marginBottom: '15px' }}>Password: {pass}</p>
//       <p style={{ fontSize: '18px', marginBottom: '15px' }}>Start Time: {start}</p>
//       <p style={{ fontSize: '18px', marginBottom: '20px' }}>Topic: {topic}</p>
//     </div>
//   );

// };
export default JoinMeeting;


