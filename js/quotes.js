const quotes = [
    {
        quote: "\"The biggest adventure you can ever take is to live the life of your dreams.\"",
        author: "Oprah Winfrey"
    },
    {
        quote: "\"Beauty is everywhere. You only have to look to see it.\"",
        author: "Bob Ross"
    },
    {
        quote: "\"You can't stop the waves, but you can learn to swim.\"",
        author: "Jon Kabat Zinn"
    },
    {
        quote: "\"Happiness is the best makeup.\"",
        author: "Drew Barrymore"
    },
    {
        quote: "\"Every day is a new day.\"",
        author: "Carrie Underwood"
    },
    {
        quote: "\"Anyone who has never made a mistake has never tried anything new.\"",
        author: "Albert Einstein"
    },
    {
        quote: "\"Stay hungry. Stay foolish\"",
        author: "Steve Jobs"

    },
    {
        quote: "\"The way to get started is to quit talking and begin doing.\"",
        author: "Walt Diesney"
    },
    {
        quote: "\"If you want to be original, be ready to be copied.\"",
        author: "Coco Chanel"
    },
    {
        quote: "\"Have the courage to follow your heart and intuition.\"",
        author: "Steve Jobs"
    }

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteSpan = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



