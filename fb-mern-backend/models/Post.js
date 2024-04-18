// Import mongoose
import mongoose from "mongoose";

// Define the post schema
const postSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  user: {
    type: String, // Assuming user is identified by username
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Post model using the schema
const Post = mongoose.model("Post", postSchema);

// Export the model
export default Post;
