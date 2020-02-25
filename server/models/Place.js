 const { model, Schema } = require("mongoose");

const placeSchema = new Schema(
  {
      title: String,
      description: String,
      location: {
        type: { type: String },
        coordinates: [Number]
      },
  },
      {
        timestamps: true
      }
);

module.exports = model("Place", placeSchema);