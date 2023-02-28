const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSaveError } = require('../helpers');

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    required: [true, 'Set phone number for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  group: {
    type: String,
    default: '',
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
});

contactSchema.post('save', handleSaveError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  group: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const updateGroupSchema = Joi.object({
  group: Joi.string().required(),
});

const schema = {
  addSchema,
  updateFavoriteSchema,
  updateGroupSchema,
};

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  schema,
};
