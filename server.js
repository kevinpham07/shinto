const path = require('path')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/dist/public')));

app.all("*", (req, res) => {
	res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(1337);