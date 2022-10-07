const express = require('express'); 
const fetch = require('node-fetch');
const app = express();             
const port = 5000;                  

let YOUR_NAME = "ekemini"
let YOUR_LUCKY_NUMBER = "3"

app.get('/', (req, res) => {       
    res.send(`Welcome to ${YOUR_NAME}'s 1st API`);                                                        
});

app.get('/luckynumber', (req, res) => {       
    res.send(YOUR_LUCKY_NUMBER);                                                       
});

app.get('/worstfoodbridge', async (req, res) => {    
    const response = await fetch('localhost:5001/worstfoodsource');
    const body = await response.text();
   
    res.send(body);                                                       
});

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});