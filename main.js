const express = require('express')
const app = express();
const port  = 3000

const fs = require('fs')


// 1 та 2 завдання
app.get('/', (req,res)=>{
    fs.readFile('./main.html', 'utf-8', (err,data)=>{
    res.send(`Привіт, швидке переміщення по ДЗ))  ${data}`)
})
})

//3 завдання 
app.get('/about', (req,res) => {
    res.send('<div>Information<div>')
})

//4 завдання 
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('Error');
});

//5* завдання
app.get('/infoHtml',(req, res)=>{
    fs.readFile('./index.html', 'utf-8', (err,data)=>{
        res.send(data)
    })
})

//6** завдання
app.use (express.static('image'));
app.get('/png',(req, res)=>{
        res.sendFile(__dirname + '/image/index.html');
    })

// запуск сервера
app.listen(port, ()=>{
    console.log('Server started')
})
