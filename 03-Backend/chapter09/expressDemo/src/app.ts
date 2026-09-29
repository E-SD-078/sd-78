import express from 'express';
import { randomUUID } from 'node:crypto';
const app = express();
const port = 3000;
type Post = {
  id: string;
  title: string;
  content: string;
};
const posts: Post[] = [
  { id: '06c29357-7280-45e4-a307-3ae5192b3a98', title: 'First Post', content: 'Hello express' },
  { id: randomUUID(), title: 'Second Post', content: 'Hello again' },
];
const findPost = (id: string) => posts.find((post) => post.id === id);
app.use(express.json()); //important to have in order to get the data in the req.body for POST and PUT
//create the routes and controllers for CRUD on posts
app.get('/posts', (request, response) => {
  response.json(posts);
});
app.get('/posts/:id', (req, res) => {
  const post = findPost(req.params.id);
  if (!post) {
    res.status(404).json({ error: 'Post Not found' });
  }
  res.json(post);
});
app.post('/posts', (req, res) => {
  // const newPost: Post = { id: randomUUID(), title: req.body.title, content: req.body.content };
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(500).json({ error: 'title and content are required' });
  }
  const newPost: Post = { id: randomUUID(), ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});
app.put('/posts/:id', (req, res) => {
  //in db it would be findByIdAndUpdate
  const postIndex = posts.findIndex((post) => post.id === req.params.id);
  if (postIndex === -1) {
    res.status(404).json({ error: 'Post not found' });
  }
  const newPost: Post = { id: req.params.id, ...req.body };
  posts[postIndex] = newPost;
  res.json(newPost);
});
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex((post) => post.id === req.params.id);
  if (postIndex === -1) {
    res.status(404).json({ error: 'Post not found' });
  }
  posts.splice(postIndex, 1);
  res.json({ message: `post with id ${req.params.id} has been deleted` });
});
//create the server and listen to port
app.listen(port, () => {
  console.log('server is up and running');
});
