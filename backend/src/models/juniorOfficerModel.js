import db from '../config/db.js';

// Get all Junior Officers
const getJuniorOfficers = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM JuniorOfficers '; // Changed table name to JuniorOfficers
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Update a specific Junior Officer by ID
const updateJuniorOfficer = (id, data) => {
  return new Promise((resolve, reject) => {
    const { designation, bps, sanctioned, working, vacancy, remarks } = data;
    const sql = `UPDATE JuniorOfficers  SET designation = ?, bps = ?, sanctioned = ?, working = ?, vacancy = ?, remarks = ? WHERE id = ?`; // Changed table name to JuniorOfficers
    db.query(sql, [designation, bps, sanctioned, working, vacancy, remarks, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default { getJuniorOfficers, updateJuniorOfficer };
