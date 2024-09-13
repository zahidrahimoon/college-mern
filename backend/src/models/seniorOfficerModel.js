import db from '../config/db.js';

// Get all Senior Officers
const getSeniorOfficers = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM SeniorOfficers';
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Update a specific Senior Officer by ID
const updateSeniorOfficer = (id, data) => {
  return new Promise((resolve, reject) => {
    const { designation, bps, sanctioned, working, vacancy, remarks } = data;
    const sql = `UPDATE SeniorOfficers SET designation = ?, bps = ?, sanctioned = ?, working = ?, vacancy = ?, remarks = ? WHERE id = ?`;
    db.query(sql, [designation, bps, sanctioned, working, vacancy, remarks, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default { getSeniorOfficers, updateSeniorOfficer };
