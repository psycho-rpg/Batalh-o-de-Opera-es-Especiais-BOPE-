const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulação de autenticação
app.post('/autenticar', (req, res) => {
    const { nome, nick, id, idade } = req.body;

    if (!nome || !nick || !id || !idade) {
        return res.json({ sucesso: false, mensagem: "Preencha todos os campos!" });
    }

    if (idade < 13) {
        return res.json({ sucesso: false, mensagem: "Idade inválida! Usuário precisa ter 13 anos ou mais." });
    }

    return res.json({ sucesso: true, mensagem: `Usuário ${nome} (${nick}) autenticado com sucesso!` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});