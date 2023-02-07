// uotes me API

// let apiQuotes = [];

// //New Quote
// function newQuote() {
//     const quote = apiQuotes[Math.floor(Math.random()  * apiQuotes.length)];
//     console.log(quote);
// }

// //From API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error){
//         // Catch Error Here
//     }
// }

// getQuotes();


//Local quotes

// let localQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


    function newQuote() {
    const quote = localQuotes[Math.floor(Math.random()  * localQuotes.length)];
    
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    //Check quote length
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
    console.log(quote);
    

    newQuote();
}

//Tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();