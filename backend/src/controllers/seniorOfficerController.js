import SeniorOfficer from '../models/seniorOfficerModel.js';  // Ensure the path and filename are correct

// Get all Senior Officers
const getSeniorOfficers = async (req, res) => {
  try {
    const data = await SeniorOfficer.getSeniorOfficers();  // Update to use the method in the model
    res.json(data);
  } catch (error) {
    console.error('Error querying the SeniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a specific Senior Officer by ID
const updateSeniorOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Update the officer's details
    await SeniorOfficer.updateSeniorOfficer(id, data);  // Update to use the method in the model

    res.status(200).json({ message: 'Senior Officer updated successfully' });
  } catch (error) {
    console.error('Error updating the SeniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getSeniorOfficers, updateSeniorOfficer };
