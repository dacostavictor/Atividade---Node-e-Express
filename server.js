const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

let feedbacks = [];

//arquivos estáticos
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//interpretar JSON
app.use(express.json());

//rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//enviar feedback
app.post("/feedbacks/enviar", (req, res) => {
  const { nome, feedback } = req.body;

  const novoFeedback = {
    nome,
    feedback,
  };

  feedbacks.push(novoFeedback);

  console.log(feedbacks);

  res.redirect("/feedbacks/lista");
});

//rota da lista
app.get("/feedbacks/lista", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "lista.html"));
});

//API dos feedbacks
app.get("/feedbacks", (req, res) => {
  res.json(feedbacks);
});

//iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
