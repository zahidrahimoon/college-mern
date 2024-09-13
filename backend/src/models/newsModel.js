import db from '../config/db.js';

const getAllNews = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getNewsById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const createNews = (news) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO news SET ?', news, (err, results) => {
      if (err) reject(err);
      resolve(results.insertId);
    });
  });
};

const updateNews = (id, news) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE news SET ? WHERE id = ?', [news, id], (err, results) => {
      if (err) reject(err);
      resolve(results.affectedRows);
    });
  });
};

const deleteNews = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM news WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results.affectedRows);
    });
  });
};

export {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};
