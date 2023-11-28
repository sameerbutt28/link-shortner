import React, { useState } from 'react';
import axios from "axios";


const LinkShortener = () => {
  const [inputLink, setInputLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleChange = (e) => {
    setInputLink(e.target.value); //takes the value from the input bar and storing or setting it to the orgignal link using setInputLink.
  };

  const shortenLink = async () => {
    try {

      // const url_s = "https://cleanuri.com/api/v1/shorten"; // we are using get method here and we are requesting the clean uri api and we are sending our long link and getiing the shortend link.
      // here we are using encodedURIComponent so thaat the the url we are sending goes in correct form must not add some spaces it corrects the foormat of the url basically. 


      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
        "url": "https%3A%2F%2Fgoogle.com%2F"
      });

      let response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        mode: "no-cors",
        body: bodyContent,
        headers: headersList
      });

      let data = await response.text();
      console.log(data);





      // const response = await fetch(url_s,
      //   {
      //     mode: 'no-cors',
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': '*',
      //     },
      //     body: JSON.stringify(
      //       {
      //         "url": "http://google.com/"
      //       }
      // )})
      // ;
      //fetchges the url  and storing in thew response 






      // if (response.ok) {
      //   const data = await response.json();
      //   setShortenedLink(data.result_url);  // if everything is good then get the result_url property .
      // } else {  
      //   console.error('Error:', response.statusText);
      // }
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <div>
      <label>
        Paste your link: 
        <input type="text" value={inputLink} onChange={handleChange} />
      </label>
      <button onClick={shortenLink}>Shorten Link</button>
      {shortenedLink && ( // if there is some  shortend link there and the string is not empty or null only then will be the lower div will run .
        <div>
          <p>Shortened Link:</p>
          {shortenedLink}
        </div>
      )}
    </div>
  );
};

export default LinkShortener;
