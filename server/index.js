const express = require('express');
const cors = require("cors")  
const bodyParser = require('body-parser')
const axios = require("axios")

const PORT = 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())


app.post('/login', async (req,res) =>{
  console.log('request recieved for LOGIN')
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
      console.log('Response Data:', data);
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  


  console.log(code)

  
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


app.listen(PORT, ()=>{console.log(`server started at port ${PORT}`)});



