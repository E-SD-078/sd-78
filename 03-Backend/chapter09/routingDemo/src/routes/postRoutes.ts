import { Router } from 'express';
import { getPosts, getPostById, createPost, deletePost, updatePost } from '#controllers';
const postRouter = Router();
postRouter.get('/', getPosts);
postRouter.get('/:id', getPostById);
postRouter.post('/', createPost);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);
export default postRouter;
