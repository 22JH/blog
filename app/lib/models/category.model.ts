import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
