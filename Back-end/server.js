const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Alfaeventos rodando');

});

// Receber formulário
app.post('/orcamento', (req, res) => {
    const dados = req.body;

    console.log('Novo orçamento recebido:');
    console.log(dados);

    res.json({
        mensagem: "Orçamento recebido com sucesso!"
    })
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});