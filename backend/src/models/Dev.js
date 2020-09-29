const mongoose = require("mongoose");
const PointSchema = require("../utils/PointSchema");

const DevSchema = mongoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

const DevModel = mongoose.model("Dev", DevSchema);

module.exports = DevModel;
