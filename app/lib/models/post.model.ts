import mongoose from "mongoose";

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
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  previewContent: {
    type: String,
  },

  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

postSchema.index({ categories: 1, createdAt: -1 });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
