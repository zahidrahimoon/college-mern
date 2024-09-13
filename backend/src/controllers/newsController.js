import * as newsModel from '../models/newsModel.js';

const getAllNews = async (req, res) => {
  try {
    const news = await newsModel.getAllNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};

const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await newsModel.getNewsById(id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};

const createNews = async (req, res) => {
  const newsData = req.body;
  try {
    const id = await newsModel.createNews(newsData);
    res.status(201).json({ id, message: 'News created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating news', error });
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const newsData = req.body;
  try {
    const result = await newsModel.updateNews(id, newsData);
    if (result > 0) {
      res.json({ message: 'News updated successfully' });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating news', error });
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await newsModel.deleteNews(id);
    if (result > 0) {
      res.json({ message: 'News deleted successfully' });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting news', error });
  }
};

export {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};
