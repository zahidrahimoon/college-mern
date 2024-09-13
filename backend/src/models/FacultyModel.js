import connection from '../config/db.js';

export const addFaculty = ({ name, title, qualification, image, department_id }) => {
  const query = 'INSERT INTO faculty (name, title, qualification, image, department_id) VALUES (?, ?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    connection.query(query, [name, title, qualification, image, department_id], (err, result) => {
      if (err) reject(err);
      else resolve(result.insertId);
    });
  });
};

export const fetchFaculty = () => {
  const query = `
    SELECT 
      d.name AS department, 
      f.id,
      f.name, 
      f.title, 
      f.qualification, 
      f.image 
    FROM 
      faculty f
    JOIN 
      departments d ON f.department_id = d.id;
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const updateFacultyById = (id, { name, title, qualification, image, department_id }) => {
  const query = image 
    ? 'UPDATE faculty SET name = ?, title = ?, qualification = ?, image = ?, department_id = ? WHERE id = ?'
    : 'UPDATE faculty SET name = ?, title = ?, qualification = ?, department_id = ? WHERE id = ?';
  const values = image 
    ? [name, title, qualification, image, department_id, id]
    : [name, title, qualification, department_id, id];
  
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const deleteFacultyById = (id) => {
  const query = 'DELETE FROM faculty WHERE id = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
