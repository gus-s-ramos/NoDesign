// models/assinaturaModel.js
const pool = require('../config/config');

const GamificationRuleSchema = new pool.Schema({
    logo_image_url: String,
    primary_color: String,
    secondary_color: String,
    background_color: String,
    title: String,
    description: String,
    score_title: String,
    observation_title: String,
    observation_text: String,
    points: [
      {
        rule_name: String,
        points: Number,
      }
    ],
  });
  
  module.exports = pool.model('GamificationRule', GamificationRuleSchema);