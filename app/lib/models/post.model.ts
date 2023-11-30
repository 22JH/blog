import mongoose from "mongoose";
import { CommentSchema } from "./comment.model";
import { categorySchema } from "./category.model";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: String,
  },
  categories: [String],
  // categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  previewContent: {
    type: String,
  },
  comments: [CommentSchema],
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

postSchema.index({ categories: 1, createdAt: -1 });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
