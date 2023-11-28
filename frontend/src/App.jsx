import React, { useState } from 'react';
import axios from 'axios';

const LinkShortener = () => {
  const [inputLink, setInputLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleChange = (e) => {
    setInputLink(e.target.value);
  };

  const shortenLink = async () => {
    try {
      const url_s = 'http://localhost:3000';

      const response = await fetch(url_s, { 
        method: 'POST', // Specify the HTTP method as POST
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({
          url: inputLink, // Use the inputLink state here
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedLink(data.result_url);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <label>
        Paste your link:
        <input type="text" value={inputLink} onChange={handleChange} />
      </label>
      <button onClick={shortenLink}>Shorten Link</button>
      {shortenedLink && (
        <div>
          <p>Shortened Link:</p>
          {shortenedLink}
        </div>
      )}
    </div>
  );
};

export default LinkShortener;
