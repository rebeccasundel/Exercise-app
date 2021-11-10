const { Schema, model } = require("mongoose");


const profileSchema = new Schema({
  userId: { type: String, unique: true},
  firstname: { type: String },
  lastname: { type: String, },
  height: { type: String, },
  weight: { type: String, },
  profilepicture: { type: String, },
}, {
  timestamps: true,
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;

