var express = require('express');
//then we call express
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

//takes us to the root(/) URL
app.get('/', function (req, res) {
    res.render('abc');
});
app.post('/addtask', function (req, res) {
    console.log("addtaskgfhghfht");
    res.render('abc');
});

var bodyParser = require("body-parser");
//the task array with initial placeholders for added task
var task = ["buy socks", "practise with nodejs"];
//post route for adding new task
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    console.log("addtask",req.body);
    //add the new task from the post route into the array
    task.push(newTask);
    //after adding to the array go back to the root route
    res.redirect("/");
});


//render the ejs and display added task, task(index.ejs) = task(array)
app.get("/", function (req, res) {
    var task = ["buy socks", "practise with nodejs"];
    res.render("abc", {
        task: task
    });
});
app.get("/", function (req, res) {
    res.render("abc", {
        task: task,
        complete: complete
    });
});
app.use(bodyParser.urlencoded({
    extended: true
}));
//the server is listening on port 3000 for connections
app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
});