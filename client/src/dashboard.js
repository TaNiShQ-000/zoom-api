import React,{useState, useEffect} from 'react'
import useAuth  from "./auth"
import axios from "axios"
import CreateZoomSession from './CreateZoomSession';


export default function Dashboard({code}) {
  const accessToken = useAuth(code);

  // const [accessToken, setAccessToken] = useState()
  // const [refreshToken, setRefreshToken] = useState()
  // const [expiresIn, setExpiresIn] = useState()
  // code = code
  // useEffect(() => { 
  //   console.log("hello")
  //   console.log("Effect triggered with code:", code);
  //   axios
  //       .post("http://localhost:3001/login", {
  //         code,
  //       })
  //       .then(res => {
  //         setAccessToken(res.data.access_token)
  //         setRefreshToken(res.data.refresh_token)
  //         setExpiresIn(res.data.expires_in)
  //       })
  // }, [code]);
    // Make an Axios request using the form data
   
    


  return (
   <div>
      <CreateZoomSession accessToken={accessToken} />
    </div>
  )

  
  return <div>{accessToken}</div>
}
