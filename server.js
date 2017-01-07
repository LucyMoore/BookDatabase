var express = require("express")
var mysql = require("mysql")

var connection = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'BookKeep'
})
connection.connect(function(err){
  if(err==null){
    console.log("connected");
  }
});


 var book = {
   title: "Jane Eyre",
   author: "Charlotte Bronte",
   genre1: "Romance",
   genre2: "Classic",
   genre3: null,
   publisher:"Smith, Elder & Co",
   publishYear: 1847,
   fiction: true,
   exerpt: "Instead of speaking, I smiled; and not a very complacent or submissive smile either."
  + "‘Speak,’ he urged. ‘What about, sir?’ ‘Whatever you like. I leave both the choice of subject "
  +" and the manner of treating it entirely to yourself.’ Accordingly I sat and said nothing: ‘If he expects me to"
  +  " talk for the mere sake of talking and showing off, he will find he has addressed himself to the wrong person,"
  +" I thought. ‘You are dumb, Miss Eyre.’ I was dumb still. He bent his head a little towards me,"
  +" and with a single hasty glance seemed to dive into my eyes. ‘Stubborn?’ he said, ‘and annoyed. Ah! it is consistent."
  + " I put my request in an absurd, almost insolent form. Miss Eyre, I beg your pardon. The fact is, once for all, I don’t"
  + "wish to treat you like an inferior: that is’ (correcting himself), ‘I claim only such superiority as must result from"
  + " twenty years’ difference in age and a century’s advance in experience. This is legitimate, et j’y tiens, as Adele would"
  + "say; and it is by virtue of this superiority, and this alone, that I desire you to have the goodness to talk to me a little"
 }

var authorsArray = [];
var titleArray = [];


//get all books by author from db
connection.query('select title, author from Books', function(err,result){
  for(var i=0; i<result.length; i++){
    authorsArray[i] = result[i].author;
    titleArray[i] = result[i].title;
    console.log(titleArray[i]);
  }
})


if(!titleExists){
  connection.query('insert into Books set ?', book, function(err, result){
    if(err){
      console.log("nope ", err);
    }
    else{
      console.log("done", result);
    }
  })
} else {

}
