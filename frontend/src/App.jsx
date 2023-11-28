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

      const url_s = " http://localhost:3000"; 

      const response = await fetch(url_s,
        {
          body:
          {

            "url": "http://google.com/"
          }
        })
        ;    

      if (response.ok) {
        const data = await response.json();
        setShortenedLink(data.result_url);  // if everything is good then get the result_url property .
      } else {
        console.error('Error:', response.statusText);
      }
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
