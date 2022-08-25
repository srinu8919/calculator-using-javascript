const express = require('express');
var bodyParser = require('body-parser')
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
app.set("view engine","ejs")
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
var contacts=[{
    "TaskName" : "todolist",
    "Status" : "pending"

}];
app.use(session({
    secret: 'codeforgeek',
    saveUninitialized: true,
    resave: true
}));

app.get('/',function(req,res){
    res.render('index',{"Numbers": contacts, "msg":req.flash('message')})
})
app.post('/add',function(req,res){
    var a={
        "TaskName":req.body.TaskName,
        "Status": "pending",
        
    }
    contacts.push(a)
    req.flash('message',"Add Successfully")
    res.redirect('back');
})
app.get('/delete/:id',function(req,res){
    const id=req.params.id
    contacts.splice(id,1);
    req.flash('message',"Delete Successfully")
    res.redirect('back')
})
app.get('/update/:id',function(req,res){
    const idforu=req.params.id
    res.render('update',{ "id":idforu, "contacts":contacts[idforu] })
})
app.post('/update/:id',function(req,res){
    const idforu=req.params.id
    contacts[idforu].TaskName = req.body.TaskName
    contacts[idforu].Status = req.body.Status
   
    req.flash('message',"Update Successfully")
    res.redirect('/')
})


app.listen(8080);