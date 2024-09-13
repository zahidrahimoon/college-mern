import Admin from '../models/adminModel.js';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findByUsername(username);
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    // Check password
    if (password !== admin.password) return res.status(400).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', admin: { id: admin.id, username: admin.username } });
  } catch (error) {
    res.status(500).json({ error: 'Server error during login' });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { username, passkey, newPassword } = req.body;

    // Find admin by username and passkey
    const admin = await Admin.findByUsernameAndPasskey(username, passkey);
    if (!admin) return res.status(404).json({ error: 'Admin not found or invalid passkey' });

    // Update the password
    const result = await Admin.updatePassword(username, newPassword);
    if (result === 0) return res.status(400).json({ error: 'Password update failed' });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error during password reset' });
  }
};

export { login, forgotPassword };
