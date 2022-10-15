const express = require('express'); 
const fetch = require('node-fetch');

const app = express();             
const port = 5002;                  

let YOUR_NAME = "Berkeli"
let YOUR_LUCKY_NUMBER = "15"

let URL = process.env.API2_URL || "http://localhost:5001"

app.get('/', (req, res) => {       
    res.send(`Welcome to ${YOUR_NAME}'s 1st API`);                                                        
});

app.get('/luckynumber', (req, res) => {       
    res.send(YOUR_LUCKY_NUMBER);                                                       
});

app.get('/worstfoodfrom1', async (req, res) => {    
    const response = await fetch(`${URL}/worstfoodfrom2`);
    const body = await response.text();
   
    res.send(body);                                                       
});

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});