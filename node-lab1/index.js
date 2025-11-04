// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';
import greeting from './greeting.js';

dotenv.config();
const port = process.env.PORT;

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  let lang = req.headers['accept-language'];
  const defaultLang='en';
  
  // Extract the primary language code (e.g., "en" from "en-US" or "en-US,en;q=0.9")
  if (lang) {
    lang = lang.split(',')[0].split('-')[0].toLowerCase();
  }
  
  if (!lang || !greeting[lang]) lang=defaultLang;
  const response={
    lang: lang,
    message: greeting[lang],
  };

  res.writeHead(200, {
    'Content-Type': 'text/plain', 
    'Content-Language': response.lang});
  res.end(response.message);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
