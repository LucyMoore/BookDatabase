authorExists  = false;
titleExists = false;

//check if author exists in db

function authorExists(authorsArray){
  var count = authorsArray.length
  for(var i=0; i<count; i++){
    if(authorsArray[i] == book.author){
      authorExists = true;
      break;
    }
  }
}
console.log(book.author, "**", typeof titleArray[0],titleArray[1]);
//if it does, check if title exists
if(authorExists){
  for(var i=0; i<authorsArray.length; i++){
    if(titleArray[i] == book.title){
      console.log("book exists");
      titleExists = true
      break;
    }
 }
}
