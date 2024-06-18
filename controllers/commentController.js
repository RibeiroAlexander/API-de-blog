const { Comment } = require('../models');

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Comment.update(req.body, { where: { id: id } });
    if (updated) {
      const updatedComment = await Comment.findOne({ where: { id: id } });
      res.status(200).json(updatedComment);
    }
    throw new Error('Comment not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.destroy({ where: { id: id } });
    if (deleted) {
      res.status(204).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};
