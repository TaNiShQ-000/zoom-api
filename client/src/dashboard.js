import React,{useState, useEffect} from 'react'
import useAuth  from "./auth"
import axios from "axios"



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





  // return (
  //   <Container className="d-flex flex-column py-3" 
  //     style={{ 
  //       height: "100vh" ,
  //       backgroundImage:`linear-gradient(120deg, #1DB954, #191414)`,
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //     }}
  //   >
  //     <Form.Control
  //       type="search"
  //       placeholder="Search Songs/Artists"
  //       value={search}
  //       onChange={e => setSearch(e.target.value)}
  //     />
  //     <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
  //       {searchResults.map(track => (
  //         <TrackSearchResult
  //           track={track}
  //           key={track.uri}
  //           chooseTrack={chooseTrack}
  //         />
  //       ))}
        
  //     </div>
      
  //     <div>
  //       <recommendation accessToken={accessToken} trackUri= 
  //       {recommendingTrack?.uri}/>
  //     </div>
  //   </Container>
    
  // )
  
  
  return <div>{accessToken}</div>
}
