const express = require("express");
const app = express();

//Greetings App
app.get('/greeting/:name', (req, res) => {
  //res.send({params: req.params, queries: req.query})
  res.send("What's up, " + req.params.name + "?")
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
