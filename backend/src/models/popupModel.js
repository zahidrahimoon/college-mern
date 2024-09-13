import db from '../config/db.js';

export const getAllPopups = async () =>{
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM popups', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };


// Update popup details (for admin)
export const updatePopup = async (id, popupData) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE popups SET title = ?, description = ?, start_date = ?, end_date = ?, button_text = ?, link = ?, background_color = ?, text_color = ? WHERE id = ?';
      const values = [
        popupData.title,
        popupData.description,
        popupData.start_date,
        popupData.end_date,
        popupData.button_text,
        popupData.link,
        popupData.background_color,
        popupData.text_color,
        id
      ];
      db.query(query, values, (err, results) => {
        if (err) return reject(err);
        resolve(results.affectedRows);
      });
    });
  };
  