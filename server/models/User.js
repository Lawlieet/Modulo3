const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: [" USER ", " ADMIN "],
    default: "USER"
  },
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;