import connection from '../config/db.js';

class Admin {
  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM admins WHERE username = ?';
      const [rows] = await connection.promise().query(query, [username]);
      return rows[0];
    } catch (error) {
      throw new Error('Database error while fetching admin by username');
    }
  }

  static async findByUsernameAndPasskey(username, passkey) {
    try {
      const query = 'SELECT * FROM admins WHERE username = ? AND passkey = ?';
      const [rows] = await connection.promise().query(query, [username, passkey]);
      return rows[0];
    } catch (error) {
      throw new Error('Database error while fetching admin by username and passkey');
    }
  }

  static async updatePassword(username, newPassword) {
    try {
      const query = 'UPDATE admins SET password = ? WHERE username = ?';
      const [result] = await connection.promise().query(query, [newPassword, username]);
      return result.affectedRows;
    } catch (error) {
      throw new Error('Database error while updating password');
    }
  }
}

export default Admin;
