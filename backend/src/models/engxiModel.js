import db from '../config/db.js';

const getEngXiData = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM engxi';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
const updateEngXiData = (id, data) => {
  return new Promise((resolve, reject) => {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const sql = `UPDATE engxi SET time_slot = ?, mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ? WHERE id = ?`;
    db.query(sql, [time_slot, mon, tue, wed, thu, fri, sat, sun, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
export default { getEngXiData , updateEngXiData };
