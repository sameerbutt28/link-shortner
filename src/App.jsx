import React, { useState } from 'react';

const LinkShortener = () => {
  const [inputLink, setInputLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleChange = (e) => {
    setInputLink(e.target.value); //takes the value from the input bar and storing or setting it to the orgignal link using setInputLink.
  };

  const shortenLink = async () => {
    try {
      const url = `https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(inputLink)}`; // we are using get method here and we are requesting the clean uri api and we are sending our long link and getiing the shortend link.
      // here we are using encodedURIComponent so thaat the the url we are sending goes in correct form must not add some spaces it corrects the foormat of the url basically. 
      
      const response = await fetch(url); //fetchges the url  and storing in thew response 

      if (response.ok) {
        const data = await response.json();
        setShortenedLink(data.result_url);  // if everything is good then get the result_url property .
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
