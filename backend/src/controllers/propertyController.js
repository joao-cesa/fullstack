const Property = require('../models/Property');

async function createProperty(req, res) {
  try {
    const { title, address, purchasePrice, status } = req.body;

    const property = await Property.create({
      title,
      address,
      purchasePrice,
      status,
      owner: req.user.id 
    });

    return res.status(201).json({ message: 'Imóvel cadastrado com sucesso.', property });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao cadastrar imóvel.', error: error.message });
  }
}

async function getProperties(req, res) {
  try {
    const properties = await Property.find({ owner: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar imóveis.', error: error.message });
  }
}

async function getPropertyById(req, res) {
  try {
    const property = await Property.findOne({ _id: req.params.id, owner: req.user.id });
    
    if (!property) {
      return res.status(404).json({ message: 'Imóvel não encontrado ou acesso negado.' });
    }

    return res.status(200).json(property);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar imóvel.', error: error.message });
  }
}

async function updateProperty(req, res) {
  try {
    const { title, address, purchasePrice, status } = req.body;
    const updateData = {};

    if (title !== undefined) updateData.title = title;
    if (address !== undefined) updateData.address = address;
    if (purchasePrice !== undefined) updateData.purchasePrice = purchasePrice;
    if (status !== undefined) updateData.status = status;

    const property = await Property.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!property) {
      return res.status(404).json({ message: 'Imóvel não encontrado ou acesso negado.' });
    }

    return res.status(200).json({ message: 'Imóvel atualizado com sucesso.', property });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar imóvel.', error: error.message });
  }
}

async function deleteProperty(req, res) {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    
    if (!property) {
      return res.status(404).json({ message: 'Imóvel não encontrado.' });
    }

    return res.status(200).json({ message: 'Imóvel removido com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao remover imóvel.', error: error.message });
  }
}

module.exports = {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
};