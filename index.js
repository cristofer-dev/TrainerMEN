// REQUIRE
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
	email:String,
	password:String
}

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User",user_schema);

// MONTANDO MODULOS (middlewares)
app.use(express.static('assets'));
app.use(bodyParser.json()); // Para poder leer JSON
app.use(bodyParser.urlencoded({extended: true})); // Para poder leer Parametros

app.set("view engine", "pug");

app.get("/",function(req,res) {
	res.render("index")
})

app.get("/login",function(req,res) {
	res.render("login")
})

app.post("/users",function(req,res) {
	console.log(req.body.email);
	console.log(req.body.password);
	res.send("User y Pass Recibidos");
})


app.listen(8080);