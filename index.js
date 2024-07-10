const mysql = require('mysql2');
const express = require('express')
const app = express ();
const fs = require('fs');
const path = require('path')
const PORT = 5000;


//Raja software
// https://acciojob.zoom.us/j/84638755407?

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password12',
//   database: 'myresume'
// });

// connection.connect(err => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

app.get("/" , (req ,resp)=>{
  resp.send ("ok")
})
app.get('/piyush/resume/overleaf', (req, res) => {
  const filePath = path.join(__dirname, 'Resume', 'file.pdf');
  res.sendFile(filePath, err => {
    if (err) {
      console.error('Error sending the file:', err);
      res.status(500).send('Error sending the file');
    }
  });
});

app.listen(PORT , () => {
  console.log(`App is running on port ${PORT}`)
})