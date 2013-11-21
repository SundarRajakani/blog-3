var path = require("path"),
	express = require("express");

var app = express()
            .use(express.static(__dirname, 
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")));



var db = [
	
	{id: 1, author: "Lee", title: "Blog Post", description: "Hey this is the first post"},
	{id: 2, author: "John", title: "Second Post", description: "Yay more posts"},
	{id: 3, author: "Jane", title: "Third Post", description: "Final post right here"},

];

app.get("/", function(req, res) {
	res.send("Hello");
	console.log(res);
});

app.get("/data", function(req, res) {
	res.json(db);
	console.log("db");
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);