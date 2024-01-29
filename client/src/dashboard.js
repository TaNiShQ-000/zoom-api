import React from 'react'
import useAuth  from "./auth"
import ScheduleZoomSession from './scheduleZoomSession';
import JoinMeeting from "./joinMeeting"
import CreateZoomSession from './createSession';


export default function Dashboard({code}) {
  const accessToken = useAuth(code);  
  return (
   <div>
      <ScheduleZoomSession accessToken={accessToken} />
      <JoinMeeting  />
      <CreateZoomSession accessToken={accessToken} />
    </div>
  )
}
