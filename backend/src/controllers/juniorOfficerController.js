import JuniorOfficer from '../models/juniorOfficerModel.js';  // Ensure the path and filename are correct

// Get all Junior Officers
const getJuniorOfficers = async (req, res) => {
  try {
    const data = await JuniorOfficer.getJuniorOfficers();  // Use the method in the model for Junior Officers
    res.json(data);
  } catch (error) {
    console.error('Error querying the JuniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a specific Junior Officer by ID
const updateJuniorOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Update the officer's details
    await JuniorOfficer.updateJuniorOfficer(id, data);  // Use the method in the model for Junior Officers

    res.status(200).json({ message: 'Junior Officer updated successfully' });
  } catch (error) {
    console.error('Error updating the JuniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getJuniorOfficers, updateJuniorOfficer };
