/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quoteBox = document.getElementById('quote-box');


const quotes = [

  {
    quote: `The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.`,
    source: `Plato`
  },

  {
    quote: `I am the greatest, I said that even before I knew I was.`,
    source: 'Muhammad Ali',
    year: `1976`
  },

  {
    quote: `It is better to deserve honours and not to have them, than to have them and not deserve them.`,
    source: `Humphry Davy`,
    citation: `Memoirs of the Life of Sir Humphry Davy`
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
    year: `2019`
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  let randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];

}

/***
 * `printQuote` function
***/

function printQuote() {

  const quoteObject = getRandomQuote();
  let html = `
    <p class="quote">${ quoteObject.quote }</p>
    <p class="source">${ quoteObject.source }
  `;
  if ( quoteObject.citation ) {
    html += `<span class="citation">${ quoteObject.citation }</span>`
  }

  if ( quoteObject.year ) {
    html += `<span class="year">${ quoteObject.year }</span>`
  }
  html += `</p>`;

  quoteBox.innerHTML = html;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
