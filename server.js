const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const fs = require("fs")
const filenames = fs.readdirSync(__dirname + "/static/cwiczenia");
console.log(filenames)
app.use(express.static('static'))
app.use(express.static('static/cwiczenia/lekcja1'))
app.use(express.static('static/cwiczenia'))

app.get("/", function (req, res) {
    res.sendFile("index.html")
})

app.post("/foldery", function (req, res) {
    let pliki = {}
    for (const element of filenames) {
        let folder_sciezka = path.join(__dirname, "/static/cwiczenia/", element)
        if (fs.lstatSync(folder_sciezka).isDirectory()) {
            let folder = fs.readdirSync(__dirname + "/static/cwiczenia/" + element)
            pliki[element] = []
            for (const plik of folder) {
                pliki[element].push(plik)
            }
        }
    }
    res.send(JSON.stringify(pliki))
})

app.post("/aaa", function (req, res) {
    res.send("LOL")
})

app.listen(PORT, function () {
    console.log("SERWER DZIALA NA PORCIE: " + PORT);
})