const express = require('express');
const app = express();
app.use(express.json());
 
const codeTeile = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
app.get('/', (req, res) => {
    res.send('Willkommen zur ID Generator API');
});
 
app.get('/api/id/1', (req,res)=> {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/2', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/3', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/4', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/5', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/6', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/7', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/8', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/9', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
app.get('/api/id/10', (req, res) => {
    res.status(200).json({
        id: codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]  + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)] + codeTeile[Math.floor(Math.random() * codeTeile.length)]
    })
});
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Läuft auf Port ${port}..`));
