const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.Send('hellpo');
})
app.get('/pra', function(req,res) {
    res.Send('you r in login page')
});
app.listen("3000");
