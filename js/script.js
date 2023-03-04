/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// Creates a `quoteBox` variable to store the div element the quote will be displayed in
const quoteBox = document.getElementById('quote-box');

// Creates a `body` variable to store the `body` element for easier future reference in the code
const body = document.querySelector('body');

/***
 * `quotes` array
***/

const quotes = [

  {
    quote: `The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.`,
    source: `Plato`
  },

  {
    quote: `I am the greatest, I said that even before I knew I was.`,
    source: `Muhammad Ali`,
    citation: `Interviews`,
    year: `1976`
  },

  {
    quote: `It is better to deserve honours and not to have them, than to have them and not deserve them.`,
    source: `Humphry Davy`,
    citation: `Memoirs of the Life of Sir Humphry Davy`,
    tags: `letters`
  },

  {
    quote: `Great things are done by a series of small things brought together.`,
    source: `Vincent Van Gogh`,
    year: `1882`
  },

  {
    quote: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    source: `Ralph Waldo Emerson`
  },
  {
    quote: `I'd rather be an optimist and a fool than a pessimist and right.`,
    source: `Albert Einstein`
  },
  {
    quote: `If you can't even clean up your own room, who the hell are you to give advice to the world?`,
    source: `Jordan Peterson`,
    citation: `12 Rules for Life`,
    year: `2019`,
    tags: `Books`
  }
];

/***
 * `getRandomNumber` function returns a random number between 0 and the `upperLimit` parameter
***/

const getRandomNumber = upperLimit => Math.floor( Math.random() * upperLimit );

/***
 * `getRandomBGColor` function returns a random rgb color code for a background color. The limit being 200 to avoid 'white' or
    colors close to white being selected and therefore keeping the page readable
***/

const getRandomBGColor = () => `rgb(${getRandomNumber(200)},${getRandomNumber(200)},${getRandomNumber(200)})`;


/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => quotes[getRandomNumber(quotes.length)];

/***
 * `printQuote` function
***/

function printQuote() {

// Assigns a random quote to the variable
  const quoteObject = getRandomQuote();

// Creates a string to hold the html to be printed to the page
  let html = `
    <p class="quote">${ quoteObject.quote }</p>
    <p class="source">${ quoteObject.source }
  `;

// Checks for a `citation` property in the quote object and adds it to the page if it exists
  if ( quoteObject.citation ) {
    html += `<span class="citation">${ quoteObject.citation }</span>`
  }

// Checks for a `year` property in the quote object and adds it to the page if it exists
  if ( quoteObject.year ) {
    html += `<span class="year">${ quoteObject.year }</span>`
  }

// Checks for a `tags` property in the quote object and adds it to the page if it exists
  if ( quoteObject.tags ) {
    html += `<span class="citation">${ quoteObject.tags }</span>`
  }

    html += `</p>`; // Adds the closing tag to the html element

  quoteBox.innerHTML = html; // Prints the html string into the div to display the quote

  body.style.backgroundColor = getRandomBGColor(); // Changes the background color of the page to a random color
}

  setInterval(printQuote, 15000) // Prints a new quote every 15 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
