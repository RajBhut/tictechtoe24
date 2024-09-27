const mongoose = require("mongoose");

// Define the RatingAndReview schema
const notesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  ],
  uploadsRatingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UploadsRatingAndReview",
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tags",
    },
  ],
  createdAt: {
    type: Data,
    default: Date.now(),
  },
});

// Export the RatingAndReview model
module.exports = mongoose.model("Notes", notesSchema);
