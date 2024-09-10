import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello DUDE!");
});

app.get("/hi", (req, res) => {
  res.send("HIIIII!!!!!");
});

const port = 8080;
app.listen(port, () => {
  console.log(`now listening on port:${port}`);
});
