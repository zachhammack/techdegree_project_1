//array of objects that stores the quote, source, citation and year

var quotes = [
  {
  quote: "Would I rather be feared or loved? Both. I want people to be afraid of how much they love me.",
  source: "Michael Scott",
  citation: "",
  year: ""
  },
      {
      quote: "You know nothing Jon Snow.",
      source: "Ygritte",
      citation: "Game of Thrones",
      year: "2012"
      },
          {
          quote: "Hodor!",
          source: "Hodor",
          citation: "Game of Thrones",
          year: ""
          },
              {
                  quote: "I know.",
                  source: "Han Solo",
                  citation: "The Empire Strikes Back",
                  year: "1980"
              },
                      {
                      quote: "That's a lovely accent you have there. New Jersey? - 'Austria.'",
                      source: "Lloyd Christmas",
                      citation: "Dumb and Dumber",
                      year: "1994"
                       },
                          {
                              quote: "Roads? Where we're going we don't need roads.",
                              source:"Doc Brown" ,
                              citation:"Back to the Future" ,
                              year: "1985"
                          },
                              {
                                  quote:"Good morning, Vietnam!" ,
                                  source: "Adrian Cronauer"   ,
                                  citation: "",
                                  year: ""
                              }
  
  ];
  
//here i created a function that creates a random number and applies that number to the array index to grab a quote

  function getRandomQuote(array) {
  
      var randomNumber = (Math.floor(Math.random() * quotes.length));
      var randomQuote = quotes[randomNumber];
  
      return randomQuote;
     
   
   }
  
/*here i created a function that creates the quote string.
the two if statements check to see if the citation and year objects are empty.
if there is a string, then the objects are displayed.
i then set the quote-box div equal to the HTML string so that the quote is displayed
*/
   function printQuote() {
      var HTML = '';
      var display = getRandomQuote();
      
      HTML = "<p class = 'quote'>" + display.quote + "</p>";
      HTML += "<p class = 'source'>" + display.source;
      
      if (display.citation != "") {
  
          HTML += "<span class = 'citation'>" + display.citation + "</span>";
      }
      if (display.year != "") {
  
          HTML += "<span class = 'year'>" + display.year + "</span>";
      }
  
      HTML += "</p>";
      
      document.getElementById('quote-box').innerHTML = HTML;
  }
 
  /*here is where i called the function so that the random quotes are loaded to the webpage
  i also used the setInterval() method so that the function is called continuously every 5 seconds, or 5000 milliseconds
  */


printQuote(setInterval(printQuote, 5000));   
  
   

document.getElementById('load-quote').addEventListener("click", printQuote, false);