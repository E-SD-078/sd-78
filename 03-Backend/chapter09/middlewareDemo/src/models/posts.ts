import mongoose, { Schema } from 'mongoose';
//Schema definition
const postSchema = new Schema(
  {
    title: { type: String, required: [true, 'title is required'] },
    content: { type: String, required: [true, 'content is required'] },
  },
  { timestamps: true },
);

export default mongoose.model('Post', postSchema);
