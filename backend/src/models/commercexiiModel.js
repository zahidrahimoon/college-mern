// models/commercexiiModel.js

import db from '../config/db.js';

const getCommerceXiiData = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM commercexii';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateCommerceXiiData = (id, data) => {
  return new Promise((resolve, reject) => {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const sql = `UPDATE commercexii SET time_slot = ?, mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ? WHERE id = ?`;
    db.query(sql, [time_slot, mon, tue, wed, thu, fri, sat, sun, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default { getCommerceXiiData, updateCommerceXiiData };
