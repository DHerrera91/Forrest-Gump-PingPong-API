import Express from "express";

const app = Express();
const port = 3000;

app.get("/api/buba-gump", (req, res) => {
  res.json({ message: "Welcome, this is the Forres Gump ping-pong API" });
});

app.get("/api/buba-gump/:move", (req, res) => {
  const move = req.params.move;
  if (move == "ping") {
    res.json({ message: "PONG!" });
  } else if (move === "pong") {
    res.json({ message: "PING!" });
  } else {
    res.status(400).json({ error: "Invalid move" });
  }
});

app.listen(port, () => {
  console.log(`Server listenin in port ${port}`);
});
