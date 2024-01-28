import React from 'react'
import 'bootstrap'
import{Container} from 'react-bootstrap'
// const clientId = 'P6LQEOJSQK2sjDpxHIncuw'; //for aouth
// redirect_uri: 'http://localhost:3000'
const AUTH_URL = "https://zoom.us/oauth/authorize?response_type=code&client_id=P6LQEOJSQK2sjDpxHIncuw&redirect_uri=http://localhost:3000";


export default function Login() {
const img3 = "https://images.thequint.com/thequint%2F2020-04%2Fb2a76fd7-0a75-4a14-a92b-8851633a8dbc%2Fzoom.jpg?rect=0%2C0%2C2000%2C1125&auto=format%2Ccompress&fmt=webp&width=120&w=1200"
  return (
<div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #6A11CB, #2575FC)',
        padding: '15vh 5.5vh',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <a
        className='btn btn-success btn-lg'
        style={{
          background: 'white',
          color: '#2575FC',
          border: '2px solid white',
          padding: '15px 30px',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
        href={AUTH_URL}
      >
        Login with Zoom
      </a>
    </div>

  )
}
