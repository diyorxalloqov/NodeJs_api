const express = require('express');
const app = express();

app.get('/salomBer', (req, res) => {
    res.send("Hello from FINTECH");
})

// CREATE
// READ
// UPDATE
// DELETE




var users = {
    "status": true,
    "count": 30,
    "users": [
        { "name": "Aziza", "age": 20, "email": "aziza@gmail.com" },
        { "name": "Doston", "age": 18, "email": "doston@gmail.com" },
        { "name": "Laziza", "age": 18, "email": "a@gmail.com" },
        { "name": "Alisher", "age": 18, "email": "a@gmail.com" },
        { "name": "doston", "age": 18, "email": "a@gmail.com" },
        { "name": "laziza", "age": 18, "email": "a@gmail.com" },
        { "name": "Aziz", "age": 18, "email": "a@gmail.com" },
        { "name": "Xayrullo", "age": 18, "email": "a@gmail.com" },
        { "name": "rustam", "age": 18, "email": "a@gmail.com" }, 
        { "name": "uchqun", "age": 18, "email": "a@gmail.com" },
    ]
}




HOST = '192.168.1.40';
PORT = 3000

app.listen(PORT,() => {
    console.log('YOUR SERVER RUNNING ON http://${HOST}:${PORT}');  /// for debug
});



app.get('/user', (req, res) => {
    res.send(users);
});
