
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route 
app.get('/url-butt', async (req, res) => {
  const url_cu = `https://cleanuri.com/api/v1/shorten?url=https://google.com`;
  const response = await fetch(url_cu,{
    method: 'POST',
  })

  const data = await response.json()
  res.send(data)

});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
