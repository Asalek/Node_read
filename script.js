const homeStatringContent = "const aboutContent = Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem iLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimuspsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimus";
const aboutContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem iLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimuspsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimus";
const contactContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimus ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimusLorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt est totam corrupti hic asperiores esse officia perspiciatis temporibus facere. Eaque neque doloribus nam illum provident tenetur blanditiis fugiat ipsam ducimus";

let posts = [];

const express = require('express');
const bodyParse = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render("home",{home:homeStatringContent, posts:posts});
});

app.get('/post/:par', function(req, res){
	var a = req.params.par;
	posts.forEach(function(param){
		if(param.input == a)
			res.render("post",{input:param.input, multiInput:param.multiInput});
	});
	res.render("post",{input:"", multiInput:""});
});

app.get('/about', function(req, res){
	res.render("about",{about:aboutContent});	
});

app.get('/contact', function(req, res){
	res.render("contact",{contact:contactContent});	
});

app.get('/compose', function(req, res){
	res.render("compose");	
});

app.post('/compose', function(req, res){
	let a = {
		input : req.body.input,
		multiInput : req.body.multiInput
	}
	posts.push(a);
	res.redirect('/');
});

app.listen(3000, function(req, res){
	console.log("server running on 3000 port");
});