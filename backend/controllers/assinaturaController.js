// controllers/assinaturaController.js
const { salvarAssinatura: salvarAssinaturaModel, buscarAssinatura: buscarAssinaturaModel, atualizarAssinatura: atualizarAssinaturaModel } = require('../models/assinaturaModel');

async function salvarAssinatura(req, res) {
    try {
        const dados = req.body;
        const assinatura = await salvarAssinaturaModel(dados);
        res.status(201).json(assinatura);
    } catch (error) {
        console.error('Erro ao salvar assinatura:', error.message);
        res.status(500).json({ error: 'Erro ao salvar assinatura' });
    }
}

async function buscarAssinatura(req, res) {
    try {
        const id = req.params.id;
        const assinatura = await buscarAssinaturaModel(id);
        res.status(200).json(assinatura);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinatura' });
    }
}

async function atualizarAssinatura(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const assinatura = await atualizarAssinaturaModel(id, dados);
        res.status(200).json(assinatura);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar assinatura' });
    }
}

module.exports = { salvarAssinatura, buscarAssinatura, atualizarAssinatura };
