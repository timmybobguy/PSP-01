var loadedHandler = function (event) {
  // console.log("file has loaded")
  // console.log(event.target.result);
  var user = event.target.result.split('\r\n');
  
  
  makeTable(document.body.childNodes[3], 'theTable')
  addTableHeaders(theTable, 'Data')
  for (var i = 0; i < user.length; i++) {
	addTableData (theTable, user[i])
	
	  
	  
  }
  console.log(user);
  // console.log("here 3");
};

// define the reaction when change event happens
var fileChangeHandler = function (event) {
  "use strict";  
  // console.log("file has changed!")
  var reader = new FileReader();  
  reader.onload = loadedHandler;
  
  // console.log("here 1");
  var theFile = event.target.files[0];
  reader.readAsText(theFile);
  // console.log("here 2");
};
