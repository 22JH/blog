import mongoose from "mongoose";

const GuestBookSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GuestBook =
  mongoose.models.GuestBook || mongoose.model("GuestBook", GuestBookSchema);
export default GuestBook;
