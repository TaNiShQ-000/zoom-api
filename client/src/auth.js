import { useState, useEffect } from "react"
import axios from "axios"


export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()
  console.log("entered auth")
  useEffect(() => { 
    console.log("hello")
    console.log("Effect triggered with code:", code);
    axios
        .post("http://localhost:3001/login", {
          code,
        })
        .then(res => {
          setAccessToken(res.data.access_token)
          setRefreshToken(res.data.refresh_token)
          setExpiresIn(res.data.expires_in)
        })
  }, [code]);

  // return accessToken
  return accessToken
}

