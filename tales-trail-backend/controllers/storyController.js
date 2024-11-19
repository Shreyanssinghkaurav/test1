const Story = require('../models/Story');

const getStories = async (req, res) => {
  const stories = await Story.find().populate('author', 'username');
  res.json(stories);
};

const createStory = async (req, res) => {
  const { title, content } = req.body;
  try {
    const story = await Story.create({ title, content, author: req.user.id });
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getStories, createStory };
