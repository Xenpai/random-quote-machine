// jshint esversion: 6


// Getting the JSON file
let myReq = new XMLHttpRequest();
myReq.open( "GET", "https://raw.githubusercontent.com/Xenpai/random-quote-machine/master/quotes.json" );

// Actually working on the quote machine this time.
myReq.onload = function() {
        let myData = JSON.parse( myReq.responseText ),
            quoteBox = document.querySelector( ".quote" ),
            quoteButton = document.querySelector( ".new-quote" ),
            qPerson = document.querySelector( ".quoter" ),
            colors = [
                "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
            ],

            textColor = document.querySelectorAll( ".textcolor" ),
            bgColor = document.querySelectorAll( ".bgcolor" );


        let quote = myData[ Math.floor( ( Math.random() * myData.length ) + 1 ) ].quote;
        let person = 'From "' + myData[ Math.floor( ( Math.random() * myData.length ) + 1 ) ].from + '"';
        document.querySelector( ".twitter-share-button".setAttribute( "href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quoteBox.innerHTML + '"' );

            // Clicking the button grabs a new quote.
            quoteButton.addEventListener( "click", () => {
                let rColor = colors[ Math.floor( ( Math.random() * colors.length ) + 1 ) ],
                    rng = Math.floor( ( Math.random() * myData.length ) + 1 );
                quoteBox.innerHTML = myData[ rng ].quote;
                qPerson.innerHTML = 'From "' + myData[ rng ].from + '"';
                //Tweeting the quote.
                let tweetButton = document.querySelector( ".twitter-share-button" );
                tweetButton.setAttribute( "href", 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + quoteBox.innerHTML + '"' );
                //change text & background color when grabbing a new quote.
                textColor.forEach( ( item ) => {
                    item.style.color = rColor;
                } );
                bgColor.forEach( ( item ) => {
                    item.style.backgroundColor = rColor;
                } );
            } );
        };

        myReq.send();
