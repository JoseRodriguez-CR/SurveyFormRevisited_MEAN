const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'codingdojo',
    resave: false,
    saveUninitialized: true
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index");
})

app.post("/result", function( request, response ){
    request.session.results = request.body;
    console.log(request.body);
    response.redirect("result");
})

app.get("/result", function(request, response){
    response.render("results", { results : request.session.results });
})

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})