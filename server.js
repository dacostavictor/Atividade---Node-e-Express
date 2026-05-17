const express = require("express");
const app = express();
const port = 3000;

//informar quais arquivos devem ser exibidos
app.use(express.static("public"));

//ajustar a requisição oriunda do cliente
app.use(express.urlencoded({ extended: true }));

//rota principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//rota para enviar feedback
app.post("/feedbacks/enviar", (req, res) => {
  const { nome, feedback } = req.body;
});

//iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
