var quotes = [
  ["May the Force be with you.", "Star Wars, 1977"],
  ["There's no place like home.", "The Wizard of Oz, 1939"],
  ["Love means never having to say you're sorry.", "Love Story, 1970"],
  ["They may take our lives, but they'll never take our freedom!", "Braveheart, 1995"],
  ["When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.", "When Harry Met Sally, 1989"],
  ["Carpe diem. Seize the day, boys. Make your lives extraordinary.", "Dead Poets Society, 1989"],
  ["Every man dies, not every man lives", "William Wallace"],
  ["My mama always said life was like a box of chocolates. You never know what you're gonna get.", "Forrest Gump, 1994"],
  ["Try and fail, but never fail to try.", "Jared Leto"],
  ["There's no crying in baseball!", "A League of Their Own, 1992"],
  ["Life is a banquet, and most poor suckers are starving to death!", "Auntie Mame, 1958"],
  ["Keep your friends close, but your enemies closer.", "The Godfather Part II, 1974"],
  ["You is kind. You is smart. You is important.", "The Help, 2011"],
  ["You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.", "On the Waterfront, 1954"],
  ["Bond. James Bond.", "Dr. No, 1962"],
  ["Roads? Where we're going we don't need roads.", "Back to the Future, 1985"],
  ["It was beauty killed the beast.", "King Kong, 1933"],
  ["Fasten your seatbelts. It's going to be a bumpy night.", "All About Eve, 1950"],
  ["Well, nobody's perfect.", "Some Like it Hot, 1959"],
  ["Why so serious?", "The Dark Knight, 2008"],
  ["Some men just wanna watch the world burn", "The Dark Knight, 2008"],
  ["I'll make him an offer he can't refuse", "The Godfather, 1972"],
  ["You'll always remember this as the day that you almost caught Captain Jack Sparrow", "Pirates of the Caribbean, 2003"],
  ["You've got to ask yourself one question. Do I feel lucky? Well, do ya punk?", "Dirty Harry, 1971"]
];


let index;
let thisQuote = "";
let thisAuthor = "";

function randomNum() {
 return Math.floor((Math.random()*quotes.length));
};

$(document).ready(function() {
  
  index=randomNum();
  thisQuote=quotes[index][0];
  thisAuthor=quotes[index][1];
  $("#text").text(`"`+thisQuote+`"`);
  $("#author").text(`- `+thisAuthor);
  
  $("#quoteSymbol").mouseover(function(){
     $("#quoteSymbol").effect("bounce",{times:1}, 500 )
  } );
  
  $("#new-quote").click(function(){
    
   index=randomNum();
  console.log(index);
  thisQuote=quotes[index][0];
  thisAuthor=quotes[index][1];
  $("#quoteSymbol").effect("bounce", {times:2}, 600 );
   
    
  $("#text").text(`"`+thisQuote+`"`).effect("slide",{ direction: "down"  },600).fadeIn("slow");
  $("#author").text(`- `+thisAuthor).effect("slide",{ direction: "down"  },600).fadeIn("slow");
  });
                        
  
 
  
  $(".btn").hover(function() {
    $(this).toggleClass('buttonhover');
  });
  
  $("#tweet-quote").click(function() {
    var tweethref = 'https://twitter.com/intent/tweet?text=' + thisQuote + " -" + thisAuthor + " (via @soumyadeepta_das)";
    
    $('.twitter-share-button').attr('href', tweethref);
  });
});