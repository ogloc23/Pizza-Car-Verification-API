const express = require("express");
const app = express();

/**********
 * ROUTES
 **********/
app.get("/", (req, res) => {
  res.send("HELLO PIZZA API");
});

app.listen(4000, () => {
  console.log(`Server is listening at port 4000`);
});
