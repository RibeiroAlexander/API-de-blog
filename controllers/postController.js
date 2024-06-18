const { Post, Comment } = require('../models');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: ['comments'] });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Post.update(req.body, { where: { id: id } });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: id } });
      res.status(200).json(updatedPost);
    }
    throw new Error('Post not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({ where: { id: id } });
    if (deleted) {
      res.status(204).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
