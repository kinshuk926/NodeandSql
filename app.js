const express= require('express');
const mysql = require('mysql');

const app=express();

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
})

db.connect((err)=>{
    if(!!err){
        throw err;
    }
    console.log("Connected");
});

app.get('/db',(req,res)=>{
    let sql='Create database mydb';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send('Database created');
    });
});

app.get('/',(req,res)=>{
    let sql='Select * from mytable';
    let query=db.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
        
        
    })
})


app.listen(3000);
