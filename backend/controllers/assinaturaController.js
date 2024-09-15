const { 
    salvarAssinatura: salvarAssinaturaModel, 
    buscarAssinatura: buscarAssinaturaModel, 
    atualizarAssinatura: atualizarAssinaturaModel 
} = require('../models/assinaturaModel');

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
        if (!assinatura) {
            return res.status(404).json({ error: 'Assinatura não encontrada' });
        }
        res.status(200).json(assinatura);
    } catch (error) {
        console.error('Erro ao buscar assinatura:', error.message);
        res.status(500).json({ error: 'Erro ao buscar assinatura' });
    }
}

async function atualizarAssinatura(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const assinatura = await atualizarAssinaturaModel(id, dados);
        if (!assinatura) {
            return res.status(404).json({ error: 'Assinatura não encontrada' });
        }
        res.status(200).json(assinatura);
    } catch (error) {
        console.error('Erro ao atualizar assinatura:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar assinatura' });
    }
}

module.exports = { salvarAssinatura, buscarAssinatura, atualizarAssinatura };
