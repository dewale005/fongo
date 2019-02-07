const express=require('express');
const app=expres();
const path=require('path');

app.us(express.static(__dirname+'/dist/fongo'));

app.listen(process.env.PORT||8080);


//PathLocationStradegy
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/fongo/index.html'));
  });

console.log('Console Listening'); 