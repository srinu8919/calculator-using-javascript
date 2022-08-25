const express = require('express')
const app = express();
const ejs = require('ejs');
app.set("view engine", "ejs");
const fs = require("fs");
var a =JSON.parse(fs.readFileSync("data.json"))
app.get('/', function(req, res){
    res.render('index', { "file":a })
});
app.get('/update/:id', function(req, res){
    const idfor = req.params.id
    res.render('update',{"id": idfor , "data": a.Employees[idfor]})
});

app.listen(2000)