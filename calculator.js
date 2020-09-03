const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
  const num1 = Number(req.body.n1);
  const num2 = Number(req.body.n2);

  const result = num1 + num2;

  res.send(`Result is ${result}`);
});

app.listen(4000, () => {
  console.log("Working!");
})
