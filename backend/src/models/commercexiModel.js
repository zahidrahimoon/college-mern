import db from '../config/db.js';

// Use named exports
export const getCommerceFirstYearTimetable = (callback) => {
  const sql = 'SELECT * FROM commercexi';
  db.query(sql, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

export const updateCommerceXiData = (id, data) => {
  return new Promise((resolve, reject) => {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const sql = `UPDATE commercexi SET time_slot = ?, mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ? WHERE id = ?`;
    db.query(sql, [time_slot, mon, tue, wed, thu, fri, sat, sun, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
