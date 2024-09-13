import db from '../config/db.js';

const getMedXiData = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM medxi';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
const updateMedXiData = (id, data) => {
  return new Promise((resolve, reject) => {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const sql = `UPDATE medxi SET time_slot = ?, mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun = ? WHERE id = ?`;
    db.query(sql, [time_slot, mon, tue, wed, thu, fri, sat, sun, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
export default { getMedXiData , updateMedXiData};
