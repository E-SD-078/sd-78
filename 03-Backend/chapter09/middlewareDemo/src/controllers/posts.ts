import { Post } from '#models';
import type { RequestHandler } from 'express';
export const getPosts: RequestHandler = async (request, response) => {
  console.log('REQ.user', request.user);
  const posts = await Post.find();
  response.json(posts);
};
export const getPostById: RequestHandler = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404).json({ error: 'Post Not found' });
  }
  res.json(post);
};
export const createPost: RequestHandler = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(500).json({ error: 'title and content are required' });
  }

  const newPost = await Post.create(req.body);
  res.status(201).json(newPost);
};
export const updatePost: RequestHandler = async (req, res) => {
  const newPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: 'after',
  });
  res.json(newPost);
};
export const deletePost: RequestHandler = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    res.status(404).json({ error: 'Post not found' });
  }
  res.json({ message: `post with id ${req.params.id} has been deleted` });
};
