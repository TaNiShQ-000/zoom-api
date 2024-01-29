const express = require('express');
const cors = require("cors")  
const bodyParser = require('body-parser')
const axios = require("axios")

const PORT = 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())

let routeAccessed = false;

app.post('/login', async (req,res) =>{
  console.log('request recieved for LOGIN')
  if (routeAccessed) {
    const code = req.body.code
    
    const zoomTokenUrl = 'https://zoom.us/oauth/token';
    const clientId = 'P6LQEOJSQK2sjDpxHIncuw';
    const clientSecret = 'fQn2XOSFH17PrRxx3HIdd5o02SXtcaN0';
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const requestBody = new URLSearchParams({
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000',
    });
    
    const requestHeaders = new Headers({
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    
    fetch(zoomTokenUrl, {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody,
    })
      .then(response => response.json())
      .then(data => {
        // console.log('Response Data:', data);
        res.json(data);
      })
      .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }
  routeAccessed = true;

  console.log('Route logic executed successfully!');



  // const requestBody = { // axios  always getting internal error
  //     code: code,
  //     grant_type: "authorization_code",
  //     redirect_uri: 'http://localhost:3000', 
  //   };
  // axios
  //   .post(zoomTokenUrl,  requestBody, {
  //       headers:  {
  //         // Host: 'zoom.us',
  //         "Authorization": `Basic ${authHeader}`,
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       }
  //     })
  //   .then((data)=>{
  //       console.log(data.body)
  //       res.json(data.body)
  //     })
  //     .catch((err)=>{
  //       console.log( "error" ,err)
  //     })


  // res.json("hello")
  // const tokenResponse = await axios.post('https://zoom.us/oauth/token', null, {
  //     params: {
  //       grant_type: 'authorization_code',
  //       code,
  //       redirect_uri: 'http://localhost:3000',
  //     },
  //     auth: {
  //       username: clientId,
  //       password: clientSecret,
  //     },
  //   });

  //   const accessToken = tokenResponse.data.access_token;
})

app.post('/create-session', async (req, res) => {
  try {
    // Use the access_token obtained during authentication
    const accessToken = req.body.accessT;
    const agenda = req.body.agenda;
    const topic =req.body.topic;
    const duration =req.body.duration;
    const scheduleFor= req.body.scheduleFor;
    const password =req.body.password;
    const meeting_time = req.body.password;
    // Make a POST request to Zoom API to create a session
    const response = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        agenda: agenda,
        topic:topic,
        duration: duration, // Scheduled meeting
        // schedule_for :scheduleFor,
        default_password: false,
        password : password,
        type: 2,
        start_time: meeting_time,
        // start_time: "2022-03-25T07:32:55Z",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Send the Zoom meeting details to the client
    console.log(response.data)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating Zoom session' });
  }
});


app.listen(PORT, ()=>{console.log(`server started at port ${PORT}`)});



