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

const quotes = [

  {
    quote: '',
    source: '',
    citation: ''
  },

  {
    quote: '',
    source: '',
    year: ''
  },

  {
    quote: '',
    source: ''
  },

  {
    quote: '',
    source: ''
  },

  {
    quote: '',
    source: ''
  },
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

  let quoteNumber = Math.floor( Math.random() * 5 ) + 1;
  
}

/***
 * `printQuote` function
***/

function printQuote() {

}

getRandomQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
