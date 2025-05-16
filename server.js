const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; // Define a porta dinamicamente ou usa 8080

app.use(cors());
app.use(express.json());

// ===================== ROTA PARA AUTENTICAÇÃO =====================
app.post('/autenticar', (req, res) => {
    const { nome, nick, id, idade } = req.body;

    // Verificação de preenchimento dos campos
    if (!nome || !nick || !id || !idade) {
        return res.json({ sucesso: false, mensagem: "❌ Preencha todos os campos!" });
    }

    // Verificação de idade mínima
    if (idade < 13) {
        return res.json({ sucesso: false, mensagem: "⚠️ Idade inválida! Usuário precisa ter 13 anos ou mais." });
    }

    return res.json({ sucesso: true, mensagem: `✅ Usuário ${nome} (${nick}) autenticado com sucesso!` });
});

// ===================== ROTA PARA STATUS DO SERVIDOR =====================
app.get('/status', (req, res) => {
    res.json({ status: "online", mensagem: "🚀 Servidor rodando perfeitamente!" });
});

// ===================== INICIALIZAÇÃO DO SERVIDOR =====================
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});
