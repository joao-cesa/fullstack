const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    purchasePrice: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['em_analise', 'comprado_leilao', 'em_reforma', 'vendido'],
      default: 'em_analise'
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Property', propertySchema);