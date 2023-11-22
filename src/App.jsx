import React, { useState } from 'react';

const LinkShortener = () => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleChange = (e) => {
    setOriginalLink(e.target.value);
  };

  const shortenLink = async () => {
    try {
      const url = `https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(originalLink)}`;
      
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setShortenedLink(data.result_url); 
      } else {
        console.error('Error shortening link:', response.statusText);
      }
    } catch (error) {
      console.error('Error connecting to the server', error);
    }
  };

  return (
    <div>
      <label>
        Paste your link:
        <input type="text" value={originalLink} onChange={handleChange} />
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
