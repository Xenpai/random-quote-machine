// jshint esversion: 6


// Getting the JSON file
let myReq = new XMLHttpRequest();
myReq.open( "GET", "https://raw.githubusercontent.com/Xenpai/random-quote-machine/master/quotes.json" );
myReq.onload = function() {
    let myData = JSON.parse( myReq.responseText ),
        quoteBox = document.querySelector( ".quote" ),
        quoteButton = document.querySelector( ".new-quote" ),
        qPerson = document.querySelector( ".quoter" ),
        colors = [
            "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
        ],
        rColor = colors[ Math.floor( ( Math.random() * colors.length ) + 1 ) ],
        textColor = document.querySelectorAll( ".textcolor" ),
        bgColor = document.querySelectorAll( ".bgcolor" );


    let quote = myData[ Math.floor( ( Math.random() * myData.length ) + 1 ) ].quote;
    let person = 'From "' + myData[ Math.floor( ( Math.random() * myData.length ) + 1 ) ].from + '"';


    quoteButton.addEventListener( "click", () => {
        quoteBox.innerHTML = quote;
        qPerson.innerHTML = person;
        for ( let i = 0; i < 2; i++ ) {
            textColor[ i ].style.color = rColor;
            bgColor[ i ].style.backgroundColor = rColor;
        }
    } );
};
myReq.send();

// End of getting the JSON file

// Actually working on the quote machine this time.
